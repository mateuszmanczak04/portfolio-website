'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div
      id='hero'
      className='w-full flex flex-col lg:flex-row-reverse gap-8 py-16 md:py-20 lg:py-24 items-center'>
      <Image
        src='/images/hero.jpg'
        alt='hero image'
        width={800}
        height={400}
        className='w-full lg:w-6/12 rounded-lg h-[240px] sm:h-[320px] object-cover'
      />
      <div className='w-full flex flex-col gap-4 lg:gap-8 items-center lg:items-end'>
        <div className='w-full flex flex-col items-center lg:items-end lg:gap-1'>
          <h1 className='h3 md:h1 font-bold'>Portfolio</h1>
          <h2 className='h6 font-normal text-neutral-600'>Mateusz Mańczak</h2>
        </div>
        <Button
          variant='default'
          className='shadow'
          onClick={() => {
            const effectSection = document.getElementById('efekt');
            if (effectSection)
              effectSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          // icon={(props) => <ChevronDown className={props.className} />}
        >
          Poznaj Ofertę
        </Button>
      </div>
    </div>
  );
};

export default Hero;
