import { FC } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

interface EffectCardProps {
	title: string;
	subtitle: string;
	description: string;
}

const EffectCard: FC<EffectCardProps> = ({ title, subtitle, description }) => {
	return (
		<Card className='overflow-hidden'>
			<CardHeader>
				<CardTitle className='leading-[120%]'>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>
				<p className='leading-7'>{description}</p>
			</CardContent>
		</Card>
	);
};

export default EffectCard;
