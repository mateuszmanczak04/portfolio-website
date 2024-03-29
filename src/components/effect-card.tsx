import { FC } from 'react';

interface EffectCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
}

const EffectCard: FC<EffectCardProps> = ({ title, description, icon }) => {
	return (
		<div className='flex h-[320px] flex-col items-center justify-center gap-4 rounded-md border-b-4 border-b-primary bg-white p-4 shadow lg:h-[400px] lg:gap-8 lg:rounded-xl lg:border-b-8 lg:p-8'>
			{icon}
			<div className='flex w-full flex-col gap-2 lg:gap-4'>
				<h3 className='h6 lg:h5 w-full text-center font-bold'>{title}</h3>
				<p className='w-full text-center text-neutral-600'>{description}</p>
			</div>
		</div>
	);
};

export default EffectCard;
