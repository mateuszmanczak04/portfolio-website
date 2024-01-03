import Image from 'next/image';
import { Button } from './Button';

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
          <h1 className='text-6xl font-bold'>Portfolio</h1>
          <h2 className='text-xl text-gray-600'>Mateusz Mańczak</h2>
        </div>
        <Button size='lg' className='w-full'>
          Sprawdź Ofertę
        </Button>
      </div>
    </div>
  );
};

export default Hero;
