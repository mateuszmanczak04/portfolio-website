import MessageButton from '@/components/form/message-button';
import { ThemeButton } from '@/components/theme-button';

const Hero = () => {
	return (
		<div
			id='hero'
			className='hideout dark:hideout-dark relative flex min-h-screen w-full flex-col items-center justify-center py-16 md:py-20 lg:py-24'>
			<h1 className='max-w-[500px] text-center text-6xl font-bold xs:text-7xl sm:max-w-[800px] sm:text-8xl md:text-9xl'>
				Web{' '}
				<span className='bg-gradient-to-r from-blue-500 to-primary bg-clip-text text-transparent'>
					Majster
				</span>{' '}
				Maniek
			</h1>
			<h2 className='mt-2 max-w-[300px] rounded-md px-2 text-center font-normal opacity-75 sm:max-w-[400px] sm:text-2xl md:max-w-[500px]'>
				Funkcjonalne i intuicyjne strony internetowe i aplikacje webowe, które
				pomogą Ci osiągnąć Twoje cele
			</h2>
			<MessageButton />
			<ThemeButton />
		</div>
	);
};

export default Hero;
