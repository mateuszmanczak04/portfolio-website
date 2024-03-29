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
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{description}</p>
			</CardContent>
		</Card>
	);
};

export default EffectCard;
