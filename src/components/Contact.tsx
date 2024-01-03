import Link from 'next/link';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 py-16 w-full' id='kontakt'>
      <h2 className='text-4xl font-bold text-center w-full'>Kontakt</h2>
      <ContactForm />
      <div className='flex flex-col gap-4 px-4'>
        <h3 className='font-bold text-xl'>Inne formy kontaktu:</h3>
        <div className='flex flex-col'>
          <p className='font-bold'>E-mail</p>
          <p>mateuszmanczak2004@gmail.com</p>
          <Link
            href='mailto:mateuszmanczak2004@gmail.com block'
            className='text-link hover:underline'
            target='_blank'>
            Napisz
          </Link>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Telefon</p>
          <p>+48 725 726 901</p>
          <Link
            href='tel:+48725726901'
            className='text-link hover:underline'
            target='_blank'>
            Zadzwoń
          </Link>
          <Link
            href='sms:+48725726901'
            className='text-link hover:underline'
            target='_blank'>
            Napisz SMS
          </Link>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>LinkedIn</p>
          <Link
            href='https://www.linkedin.com/in/mateusz-manczak/'
            className='text-link hover:underline'
            target='_blank'>
            Przejdź do profilu
          </Link>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Useme</p>
          <Link
            href='https://useme.com/pl/roles/contractor/mateusz-manczak,277291/'
            className='text-link hover:underline'
            target='_blank'>
            Przejdź do profilu
          </Link>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Fiverr</p>
          <Link
            href='https://www.fiverr.com/mateuszmanczak'
            className='text-link hover:underline'
            target='_blank'>
            Przejdź do profilu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
