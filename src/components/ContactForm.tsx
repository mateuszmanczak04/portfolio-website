'use client';

import { File, Mail, Send, User } from 'lucide-react';
import { Input } from './Input';
import { MultiLineInput } from './MultiLineInput';
import { Button } from './Button';
import { FormEvent } from 'react';

const ContactForm = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'jankowalski1@gmail.com',
        message: 'Witam, chciałbym zlecić stworzenie strony',
        name: 'Jan Kowalski',
      }),
    });
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
      />
      <Input
        label='E-mail'
        placeholder='example@abc.com'
        icon={(props) => <Mail {...props} />}
      />
      <MultiLineInput
        label='Wiadomość'
        placeholder='Witam, chciałbym zlecić stworzenie bloga internetowego. Mój budżet to 2000 zł a termin wykonania to 2 tygodnie. Strona nie będzie skomplikowana. Proszę o pilny kontakt.'
        rows={8}
      />
      <Button
        type='button'
        variant='secondary'
        icon={(props) => <File className={props.className} />}>
        Dodaj załączniki
      </Button>
      <Button
        type='submit'
        variant='default'
        icon={(props) => <Send className={props.className} />}>
        Wyślij wiadomość
      </Button>
    </form>
  );
};

export default ContactForm;
