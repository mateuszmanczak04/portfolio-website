'use client';

import Link from 'next/link';
import ContactForm from '@/components/form/contact-form';
import { SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.25, duration: 0.5 }}
			viewport={{ once: true }}
			className='mx-auto flex w-full max-w-screen-lg flex-col gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='kontakt'>
			<h2 className='w-full text-center text-4xl font-bold'>Kontakt</h2>
			<div className='flex flex-col gap-8 leading-7 lg:flex-row lg:gap-6'>
				<ContactForm />
				<div className='lg:flex-5 flex flex-col gap-4 px-2 lg:gap-6'>
					<h3 className='text-2xl font-bold'>Inne formy kontaktu:</h3>
					<div className='flex flex-col'>
						<p className='font-bold'>E-mail</p>
						<p className='break-all'>mateuszmanczak@icloud.com</p>
						<Link
							href='mailto:mateuszmanczak@icloud.com'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Napisz</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
					</div>
					<div className='flex flex-col'>
						<p className='font-bold'>Telefon</p>
						<p>+48 725 726 901</p>
						<Link
							href='tel:+48725726901'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Zadzwoń</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
						<Link
							href='sms:+48725726901'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Napisz SMS</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
					</div>
					<div className='flex flex-col'>
						<p className='font-bold'>LinkedIn</p>
						<Link
							href='https://www.linkedin.com/in/mateusz-manczak/'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Przejdź do profilu</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
					</div>
					<div className='flex flex-col'>
						<p className='font-bold'>Useme</p>
						<Link
							href='https://useme.com/pl/roles/contractor/mateusz-manczak,277291/'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Przejdź do profilu</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
					</div>
					<div className='flex flex-col'>
						<p className='font-bold'>Fiverr</p>
						<Link
							href='https://www.fiverr.com/mateuszmanczak'
							className='flex items-center gap-1 underline'
							target='_blank'>
							<span>Przejdź do profilu</span>
							<SquareArrowOutUpRight className='h-4 w-4' />
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
