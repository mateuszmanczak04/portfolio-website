import type { Metadata } from 'next';
import './globals.css';

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
		<html lang='pl' className='overflow-x-hidden'>
			<head>
				<link rel='icon' href='/icons/favicon.ico' sizes='any' />
			</head>
			<body className='relative overflow-x-hidden'>{children}</body>
		</html>
	);
}
