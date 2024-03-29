import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
	title: 'Strony Internetowe - Mateusz Mańczak',
	description:
		'Pozwól swoim klientom lepiej poznać Twoją firmę dzięki profesjonalnej stronie internetowej!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<head>
				<link rel='icon' href='/icons/favicon.ico' sizes='any' />
			</head>
			<body className='mx-auto flex max-w-screen-2xl justify-between'>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
