'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
	return (
		<div
			id='hero'
			className='flex w-full flex-col items-center gap-8 py-16 md:py-20 lg:flex-row-reverse lg:py-24'>
			<Image
				src='/images/hero.jpg'
				alt='hero image'
				width={800}
				height={400}
				className='h-[240px] w-full rounded-lg object-cover sm:h-[320px] lg:w-6/12'
			/>
			<div className='flex w-full flex-col items-center gap-4 lg:items-end lg:gap-8'>
				<div className='flex w-full flex-col items-center lg:items-end lg:gap-1'>
					<h1 className='text-6xl font-bold'>Portfolio</h1>
					<h2 className='text-2xl font-normal text-neutral-600'>
						Mateusz Mańczak
					</h2>
				</div>
				<Button
					variant='default'
					className='shadow'
					onClick={() => {
						const effectSection = document.getElementById('efekt');
						if (effectSection)
							effectSection?.scrollIntoView({ behavior: 'smooth' });
					}}>
					Poznaj Ofertę
				</Button>
			</div>
		</div>
	);
};

export default Hero;
