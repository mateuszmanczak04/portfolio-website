import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const NotFoundPage = async () => {
	return (
		<div className='w-full'>
			<Card className='mx-auto mt-16 w-full max-w-sm'>
				<CardHeader>
					<CardTitle>Nie znaleziono strony</CardTitle>
					<CardDescription>
						Tutaj jeszcze nic nie ma, ale możliwe że kiedyś powstanie.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button asChild className='w-full'>
						<Link href='/'>Wróć do strony głównej</Link>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default NotFoundPage;
