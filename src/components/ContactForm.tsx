'use client';

import { Mail, Send, User } from 'lucide-react';
import { Input } from './Input';
import { MultiLineInput } from './MultiLineInput';
import { Button, buttonVariants } from './Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FileInput } from './FileInput';
import AttachmentPreview from './AttachmentPreview';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
    setError('');

    const formData = new FormData();
    if (files && files.length > 0) {
      files.forEach((file) => {
        formData.append('file', file);
      });
    }
    formData.append('email', email);
    formData.append('content', content);
    formData.append('name', name);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setResponseMessage(data.message);
        setEmail('');
        setContent('');
        setFiles([]);
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

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [
        ...prev,
        ...Array.prototype.slice.call(e.target.files), // convert FileList to array
      ]);
    }
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
        placeholder='Witam, chciałbym zlecić stworzenie bloga internetowego. Mój budżet to 2000 zł a termin wykonania to 2 tygodnie. Strona nie będzie skomplikowana. Proszę o pilny kontakt.'
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className='w-full flex flex-col gap-2'>
        <label
          className={buttonVariants({
            variant: 'secondary',
            className: 'cursor-pointer',
          })}>
          <FileInput
            label='Załączniki'
            onChange={handleSelectFile}
            value=''
            multiple
            className='hidden'
          />
          Dodaj załączniki
        </label>
        {/* preview of images */}
        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2',
            files.length < 1 && 'md:grid-cols-1'
          )}>
          {files.length < 1 && (
            <p className='text-neutral-600 text-center w-full b1'>
              Nie wybrano żadnych plików
            </p>
          )}
          {files.map((file, index) => (
            <AttachmentPreview
              file={file}
              key={index}
              handleRemove={(fName: string) => {
                setFiles((prev) => prev.filter((file) => file.name !== fName));
              }}
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
