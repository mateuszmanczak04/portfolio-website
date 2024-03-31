import { FC } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface EffectCardProps {
	title: string;
	subtitle: string;
	description: string;
	className?: string;
}

const EffectCard: FC<EffectCardProps> = ({
	title,
	subtitle,
	description,
	className,
}) => {
	return (
		<Card className={cn('overflow-hidden', className)}>
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
