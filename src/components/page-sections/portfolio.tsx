import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { describe } from 'node:test';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

const PROJECTS = [
	{
		title: 'Strona Związku Zawodowego Pracowników Urzędu Miejskiego w Koninie',
		image: '/images/portfolio/zzpumk.png',
		description:
			'Strona stworzona na zamówienie dla ZZPUMK. Jest to prosta strona informacyjna.',
		url: 'https://www.zzpumk.lm.pl/',
	},
	{
		title: 'Banadoro',
		description:
			'Nasza aplikacja Pomodoro to narzędzie do zarządzania czasem, które pomaga w zwiększeniu produktywności i skupienia. Opiera się na popularnej technice Pomodoro, która wykorzystuje 25-minutowe cykle pracy przeplatane krótkimi przerwami. Aplikacja posiada szereg funkcji, które ułatwiają korzystanie z tej metody, m.in. możliwość tworzenia zadań, synchronizacja w chmurze, intuicyjny interfejs, pomodoro timer.',
		image: '/images/portfolio/banadoro.png',
		url: 'https://www.banadoro.mateuszmanczak.pl/',
	},
	{
		title: 'Moja osobista strona z korepetycjami z matematyki',
		description:
			'Celem projektu było stworzenie prostej strony internetowej, która przedstawia moją ofertę korepetycji. Strona zawiera informacje o tym, kim jestem, o cenach, przedmiotach oraz udostępniam na niej kilka opinii moich uczniów.',
		image: '/images/portfolio/korepetycje.png',
		url: 'https://korepetycje.mateuszmanczak.pl/',
	},
];

const Portfolio = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='efekt'>
			<h2 className='w-full text-center text-4xl font-bold'>Portfolio</h2>
			<Carousel className='w-full' opts={{ loop: true }}>
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
