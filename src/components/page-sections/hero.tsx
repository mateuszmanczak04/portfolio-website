'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
	return (
		<div
			id='hero'
			className='relative flex min-h-screen w-full flex-col items-center justify-center py-16 md:py-20 lg:py-24'>
			<h1 className='text-center text-5xl font-bold text-primary md:text-8xl'>
				Strony internetowe
			</h1>
			<h2 className='mt-2 rounded-md px-2 font-normal md:text-2xl'>
				Mateusz Mańczak
			</h2>
			<Button asChild size='lg' variant='default' className='mt-4 md:mt-8'>
				<Link href='#o-mnie'>Poznaj Ofertę</Link>
			</Button>
		</div>
	);
};

export default Hero;
