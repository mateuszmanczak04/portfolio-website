import Link from 'next/link';
import ContactForm from '@/components/form/contact-form';

const Contact = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-lg flex-col gap-4 px-4 py-16 md:py-20 lg:gap-8 lg:py-24'
			id='kontakt'>
			<h2 className='w-full text-center text-4xl font-bold'>Kontakt</h2>
			<div className='flex flex-col gap-8 lg:flex-row lg:gap-6'>
				<ContactForm />
				<div className='lg:flex-5 flex flex-col gap-4 px-2 lg:gap-6'>
					<h3 className='text-2xl font-bold'>Inne formy kontaktu:</h3>
					<div className='flex flex-col'>
						<p className='font-bold'>E-mail</p>
						<p className='break-all'>mateuszmanczak@icloud.com</p>
						<Link
							href='mailto:mateuszmanczak@icloud.com'
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
		</div>
	);
};

export default Contact;
