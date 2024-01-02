'use client';

import { Mail, User } from 'lucide-react';
import { Input } from './Input';
import { MultiLineInput } from './MultiLineInput';
import { Button } from './ui/button';

const ContactForm = () => {
  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-md shadow-xl'>
      <h3 className='font-bold text-xl'>Skontaktuj się ze mną</h3>
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
      <Button variant='secondary'>Dodaj załączniki</Button>
      <Button>Wyślij wiadomość</Button>
    </div>
  );
};

export default ContactForm;
