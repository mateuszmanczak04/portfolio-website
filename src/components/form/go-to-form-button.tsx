'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface GoToFormButtonProps {}

const GoToFormButton: FC<GoToFormButtonProps> = ({}) => {
	return (
		<Button
			asChild
			className='fixed bottom-4 right-4 z-50 flex items-center gap-1 shadow-2xl'>
			<Link href='#formularz'>
				<ChevronDown className='h-5 w-5' /> <span>Kontakt</span>
			</Link>
		</Button>
	);
};

export default GoToFormButton;
