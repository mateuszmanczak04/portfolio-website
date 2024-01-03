import { FC } from 'react';

interface EffectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EffectCard: FC<EffectCardProps> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center justify-center h-[320px] p-4 gap-4 bg-white shadow rounded-md border-b-primary border-b-4'>
      {icon}
      <div className='w-full flex flex-col gap-2'>
        <h3 className='font-bold h6 w-full text-center'>{title}</h3>
        <p className='text-center w-full text-neutral-600'>{description}</p>
      </div>
    </div>
  );
};

export default EffectCard;
