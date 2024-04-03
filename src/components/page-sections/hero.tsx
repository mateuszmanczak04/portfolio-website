import MessageButton from '@/components/form/message-button';
import { ThemeButton } from '@/components/theme-button';

const Hero = () => {
	return (
		<div
			id='hero'
			className='hideout dark:hideout-dark relative flex min-h-screen w-full flex-col items-center justify-center py-16 md:py-20 lg:py-24'>
			<h1 className='max-w-[400px] text-center text-5xl font-bold text-primary xs:text-6xl sm:text-7xl md:max-w-[800px] md:text-8xl dark:text-white'>
				Strony internetowe
			</h1>
			<h2 className='mt-2 rounded-md px-2 font-normal opacity-75 md:text-2xl'>
				Mateusz Mańczak
			</h2>
			<MessageButton />
			<ThemeButton />
		</div>
	);
};

export default Hero;
