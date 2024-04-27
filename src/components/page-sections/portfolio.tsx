import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const PROJECTS = [
	{
		title:
			'Website of the Trade Union of Employees of the Municipal Office in Konin',
		image: '/images/portfolio/zzpumk.png',
		description:
			'A website created on order for ZZPUMK. It is a simple informational website.',
		url: 'https://www.zzpumk.lm.pl/',
	},
	{
		title: 'Banadoro',
		description:
			'A time management tool that helps increase productivity and focus. It is based on the popular Pomodoro technique, which uses 25-minute work cycles interspersed with short breaks. The application has a number of features that facilitate the use of this method, including the ability to create tasks, cloud synchronization, intuitive interface, pomodoro timer.',
		image: '/images/portfolio/banadoro.png',
		url: 'https://banadoro-77547mxec-mateuszmanczak04.vercel.app/',
	},
	{
		title: 'My personal website for math tutoring',
		description:
			'The aim of the project was to create a simple website that presents my tutoring offer. The website contains information about who I am, about prices, subjects and I also share a few opinions of my students there.',
		image: '/images/portfolio/korepetycje.png',
		url: 'https://korepetycje-cqx43gg79-mateuszmanczak04.vercel.app/',
	},
];

const Portfolio = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-lg flex-col items-center px-4 py-16 md:py-20 lg:py-24'
			id='efekt'>
			<h2 className='w-full text-center text-4xl font-bold'>My projects</h2>
			<p className='mt-2 text-accent-foreground'>(Swipe)</p>
			<Carousel className='mt-8 w-full' opts={{ loop: true }}>
				<CarouselContent>
					{PROJECTS.map((project) => (
						<CarouselItem
							key={project.title}
							className='md:basis-1/2 lg:basis-1/3'>
							<Card className='h-full'>
								<CardHeader>
									<CardTitle className='leading-7'>{project.title}</CardTitle>
									{project.description && (
										<CardDescription className='leading-6'>
											{project.description}
										</CardDescription>
									)}
								</CardHeader>
								<CardContent>
									<Button asChild size='lg' className='flex items-center gap-1'>
										<Link href={project.url} target='_blank'>
											<span>Demo</span>
											<SquareArrowOutUpRight className='h-4 w-4' />
										</Link>
									</Button>
								</CardContent>
							</Card>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default Portfolio;
