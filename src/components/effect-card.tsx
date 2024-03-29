import { FC } from 'react';

interface EffectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EffectCard: FC<EffectCardProps> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center justify-center h-[320px] lg:h-[400px] p-4 lg:p-8 gap-4 lg:gap-8 bg-white shadow rounded-md lg:rounded-xl border-b-primary border-b-4 lg:border-b-8'>
      {icon}
      <div className='w-full flex flex-col gap-2 lg:gap-4'>
        <h3 className='font-bold h6 lg:h5 w-full text-center'>{title}</h3>
        <p className='text-center w-full text-neutral-600'>{description}</p>
      </div>
    </div>
  );
};

export default EffectCard;
