import Link from 'next/link';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      <h2 className='text-4xl font-bold text-center w-full'>Kontakt</h2>
      <ContactForm />
      <div className='flex flex-col gap-4 px-4'>
        <h3 className='font-bold text-xl'>Inne formy kontaktu:</h3>
        <div>
          <p className='font-bold'>E-mail</p>
          <p>mateuszmanczak2004@gmail.com</p>
        </div>
        <div>
          <p className='font-bold'>Telefon</p>
          <p>+48 725 726 901</p>
        </div>
        <div>
          <p className='font-bold'>Messenger</p>
          <p>m.me/mateuszmanczak04</p>
        </div>
        <div>
          <p className='font-bold'>Useme</p>
          <Link
            href='https://useme.com/pl/roles/contractor/mateusz-manczak,277291/'
            className='text-blue-500 w-full'>
            Przejdź na stronę
          </Link>
        </div>
        <div>
          <p className='font-bold'>Fiverr</p>
          <Link
            href='https://www.fiverr.com/mateuszmanczak'
            className='text-blue-500 text-wrap'>
            Przejdź na stronę
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
