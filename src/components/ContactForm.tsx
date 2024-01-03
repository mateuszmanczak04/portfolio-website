'use client';

import { File, Mail, Send, User } from 'lucide-react';
import { Input } from './Input';
import { MultiLineInput } from './MultiLineInput';
import { Button } from './Button';

const ContactForm = () => {
  return (
    <div className='flex flex-col gap-4 bg-white p-4 rounded-md shadow'>
      <h3 className='font-bold h6'>Skontaktuj się ze mną</h3>
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
        variant='secondary'
        icon={(props) => <File className={props.className} />}>
        Dodaj załączniki
      </Button>
      <Button
        variant='default'
        icon={(props) => <Send className={props.className} />}>
        Wyślij wiadomość
      </Button>
    </div>
  );
};

export default ContactForm;
