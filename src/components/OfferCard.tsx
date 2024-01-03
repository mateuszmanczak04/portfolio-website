import Image from 'next/image';
import { FC } from 'react';

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
}

const OfferCard: FC<OfferCardProps> = ({ title, description, image }) => {
  return (
    <div className='bg-white shadow rounded-md overflow-hidden'>
      <Image src={image} width={600} height={400} alt={title} />
      <div className='w-full flex flex-col gap-2 p-4'>
        <h3 className='font-bold h6 w-full'>{title}</h3>
        <p className='w-full text-neutral-600'>{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;
