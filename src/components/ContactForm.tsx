'use client';

import { Mail, Send, User } from 'lucide-react';
import { Input } from './Input';
import { MultiLineInput } from './MultiLineInput';
import { Button, buttonVariants } from './Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FileInput } from './FileInput';
import { v4 as uuidv4 } from 'uuid';
import AttachmentPreview from './AttachmentPreview';
import mime from 'mime-types';
import { cn } from '@/lib/utils';

interface Attachment {
  url: string;
  error: string;
  loading: boolean;
  filename: string;
  id: string;
}

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
    setError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          content,
          name,
          attachmentsUrls: attachments.map(
            (attachment: Attachment) => attachment.url
          ),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponseMessage(data.message);
        setEmail('');
        setContent('');
        setAttachments([]);
        setName('');
      } else {
        const data = await res.json();
        throw new Error(data.message);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length < 1) return;
    Promise.all(Array.from(files).map((file: File) => uploadFile(file)));
  };

  const uploadFile = async (file: File) => {
    const id = uuidv4();

    setAttachments((prev) => [
      ...prev,
      { url: '', error: '', loading: true, filename: file.name, id },
    ]);

    // check if file is not too big
    if (file.size > 2097152) {
      setAttachmentError(id, 'Maksymalny rozmiar pliku to 2 MB.');
      return;
    }

    const fileType = mime.lookup(file.name);

    try {
      // get url from server to upload file to s3
      const { url } = await fetch(
        `/api/s3-url?contentType=${fileType}&fileName=${file.name}`
      ).then((res) => res.json());

      // upload file to s3
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      });

      console.log('url: ', url);
      const fileUrl = url.split('?')[0];
      setAttachmentReady(id, fileUrl);
    } catch (err) {
      console.log(err);
      setAttachmentError(id, 'Wystąpił błąd podczas wczytywania pliku.');
    }
  };

  const setAttachmentReady = (id: string, url: string) => {
    setAttachments((prev) =>
      prev.map((attachment) => {
        if (attachment.id === id) {
          return {
            ...attachment,
            url,
            loading: false,
          };
        }
        return attachment;
      })
    );
  };

  const setAttachmentError = (id: string, error: string) => {
    setAttachments((prev) =>
      prev.map((attachment) => {
        if (attachment.id === id) {
          return {
            ...attachment,
            loading: false,
            error,
          };
        }
        return attachment;
      })
    );
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((attachment) => attachment.id !== id));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='lg:flex-[7] flex flex-col gap-4 lg:gap-8 bg-white p-4 md:p-8 rounded-md lg:rounded-xl shadow'>
      <h3 className='font-bold h6 lg:h5'>Skontaktuj się ze mną</h3>
      <Input
        label='Imię i nazwisko'
        placeholder='Jan Kowalski'
        icon={(props) => <User {...props} />}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label='E-mail'
        type='email'
        placeholder='example@abc.com'
        icon={(props) => <Mail {...props} />}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <MultiLineInput
        label='Wiadomość'
        placeholder='Witam, chciałbym zlecić stworzenie bloga internetowego. Mój budżet to 2000 zł, a termin wykonania to 2 tygodnie. Strona nie będzie skomplikowana. Proszę o pilny kontakt.'
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div
        className={cn(
          'w-full flex flex-col gap-2',
          loading && 'pointer-events-none'
        )}>
        <label
          className={buttonVariants({
            variant: 'secondary',
            className: 'cursor-pointer',
          })}>
          <FileInput
            label='Załączniki'
            onChange={handleUploadFiles}
            value=''
            multiple
            className='hidden'
            disabled={loading}
          />
          Dodaj załączniki
        </label>
        {/* preview of images */}
        <div className='grid grid-cols-1 gap-2'>
          {attachments.map((attachment: Attachment, index) => (
            <AttachmentPreview
              loading={attachment.loading}
              error={attachment.error}
              filename={attachment.filename}
              key={index}
              handleRemove={removeAttachment}
              id={attachment.id}
            />
          ))}
        </div>
      </div>
      <Button
        type='submit'
        variant='default'
        icon={(props) => <Send className={props.className} />}
        disabled={!name || !email || !content || loading}>
        Wyślij wiadomość
      </Button>
      <div className='w-full text-center'>
        {loading && (
          <p className='text-neutral-600'>Trwa wysyłanie wiadomości...</p>
        )}
        {responseMessage && <p className='text-success'>{responseMessage}</p>}
        {error && <p className='text-error'>{error}</p>}
      </div>
    </form>
  );
};

// TODO:
// Wybierasz pliki lub przeciągasz
// Limit 10 Mb
// Jeśli to zdjęcia, to widzisz podgląd
// Jeśli nie, to tylko nazwę pliku
// Wysyłasz je na serwer
// Zostają dołączone do emaila

// po powrocie: styl podglądu zdjęć
// limit wielkosci plikow

// TODO:
// loading and error state

export default ContactForm;
