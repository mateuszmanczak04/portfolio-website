'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu } from 'lucide-react';
import { FC, useState } from 'react';

const Navigation = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<SideNavigation />
			<div className='z-50 2xl:hidden'>
				{/* mobile nav bar: */}
				<div className='fixed inset-x-0 bottom-0 z-50 flex h-16 justify-end bg-primary p-2 text-white shadow md:top-0'>
					<Button
						className='h-full w-full hover:bg-white/10 md:w-fit'
						onClick={() => setOpen((prev) => !prev)}>
						<Menu />
					</Button>
				</div>
				{/* list of mobile nav items: */}
				<div
					className={cn(
						'fixed inset-x-0 bottom-16 z-40 flex h-[320px] max-h-[calc(100vh-64px)] flex-col justify-between gap-2 overflow-y-scroll border-t border-t-neutral-200 bg-white p-4 transition md:top-[-400px] md:h-[400px]',
						open
							? 'translate-y-0 md:translate-y-[464px]'
							: 'translate-y-[384px] md:translate-y-0',
					)}>
					<MobileNavigationItem href='hero' onClick={() => setOpen(false)}>
						Hero
					</MobileNavigationItem>
					<MobileNavigationItem href='o-mnie' onClick={() => setOpen(false)}>
						O mnie
					</MobileNavigationItem>
					<MobileNavigationItem href='efekt' onClick={() => setOpen(false)}>
						Jaki efekt na ciebie czeka?
					</MobileNavigationItem>
					{/* <MobileNavigationItem href='oferta' onClick={() => setOpen(false)}>
            Aktualna oferta
          </MobileNavigationItem> */}
					<MobileNavigationItem
						href='wspolpraca'
						onClick={() => setOpen(false)}>
						Przebieg współpracy
					</MobileNavigationItem>
					<MobileNavigationItem href='kontakt' onClick={() => setOpen(false)}>
						Kontakt
					</MobileNavigationItem>
				</div>
				<div
					className={cn(
						'fixed inset-0 z-30 bg-neutral-950/50 transition',
						open ? 'opacity-100' : 'pointer-events-none opacity-0',
					)}
					onClick={() => setOpen(false)}></div>
			</div>
		</>
	);
};

export default Navigation;

const MobileNavigationItem: FC<{
	children: React.ReactNode;
	onClick?: () => void;
	href: string;
}> = ({ children, onClick, href }) => {
	return (
		<Button
			className='flex max-h-[64px] w-full flex-1 cursor-pointer items-center justify-between rounded-md bg-neutral-50 px-4 py-2 text-neutral-800 transition hover:bg-neutral-100 lg:rounded-xl'
			onClick={() => {
				const goToSection = document.getElementById(href);
				if (goToSection) goToSection?.scrollIntoView({ behavior: 'smooth' });
				onClick && onClick();
			}}>
			{children}
			<ChevronRight />
		</Button>
	);
};

const SideNavigation = ({}) => {
	return (
		<div className='sticky left-12 top-12 hidden h-fit w-[320px] flex-col gap-4 2xl:flex'>
			<MobileNavigationItem href='hero'>Hero</MobileNavigationItem>
			<MobileNavigationItem href='o-mnie'>O mnie</MobileNavigationItem>
			<MobileNavigationItem href='efekt'>
				Jaki efekt na ciebie czeka?
			</MobileNavigationItem>
			{/* <MobileNavigationItem href='oferta'>Aktualna oferta</MobileNavigationItem> */}
			<MobileNavigationItem href='wspolpraca'>
				Przebieg współpracy
			</MobileNavigationItem>
			<MobileNavigationItem href='kontakt'>Kontakt</MobileNavigationItem>
		</div>
	);
};
