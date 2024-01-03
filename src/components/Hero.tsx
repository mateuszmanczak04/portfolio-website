'use client';

import Image from 'next/image';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className='w-full flex flex-col gap-8 py-16 items-center'>
      <Image
        src='/images/hero.jpg'
        alt='hero image'
        width={600}
        height={400}
        className='w-full rounded-lg'
      />
      <div className='w-full flex flex-col gap-4 items-center'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='h3 font-bold'>Portfolio</h1>
          <h2 className='h6 font-normal text-neutral-600'>Mateusz Mańczak</h2>
        </div>
        <Button
          variant='default'
          className='w-full shadow'
          onClick={() => {
            const effectSection = document.getElementById('efekt');
            if (effectSection)
              effectSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          icon={(props) => <ChevronDown className={props.className} />}>
          Sprawdź Ofertę
        </Button>
      </div>
    </div>
  );
};

export default Hero;
