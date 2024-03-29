'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Send } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface GoFurtherButtonProps {}

const GoFurtherButton: FC<GoFurtherButtonProps> = ({}) => {
	const router = useRouter();
	const [isLastItem, setIsLastItem] = useState<boolean>(false);
	const [hidden, setHidden] = useState<boolean>(false);

	const handleClick = () => {
		const url = window.location.href;
		const currentSection = url.split('#')[1];

		console.log(currentSection);

		if (!isLastItem) {
			switch (currentSection) {
				case undefined:
				case '':
				case 'hero':
					router.push('#o-mnie');
					break;
				case 'o-mnie':
					router.push('#efekt');
					break;
				case 'efekt':
					router.push('#wspolpraca');
					break;
				case 'wspolpraca':
					router.push('#kontakt');
				case 'kontakt':
					setIsLastItem(true);
				default:
					return;
			}
		} else {
			const formNameInput = document.getElementById('form-name-input')!;
			formNameInput.focus();
			setHidden(true);
		}
	};

	if (hidden) return null;

	return (
		<Button
			asChild
			className='fixed bottom-4 right-4 z-50 flex items-center gap-1 shadow-2xl'>
			<Button onClick={handleClick}>
				{isLastItem ? (
					<>
						<Send className='h-5 w-5' /> <span>Napisz wiadomość</span>
					</>
				) : (
					<>
						<ChevronDown className='h-5 w-5' /> <span>Dalej</span>
					</>
				)}
			</Button>
		</Button>
	);
};

export default GoFurtherButton;
