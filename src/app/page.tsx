import About from '@/components/page-sections/about';
import Contact from '@/components/page-sections/contact';
import Footer from '@/components/page-sections/footer';
import Hero from '@/components/page-sections/hero';
import Portfolio from '@/components/page-sections/portfolio';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<div>
			<Hero />
			<Separator />
			<About />
			<Separator className='mx-auto max-w-screen-lg' />
			<Portfolio />
			<Separator className='mx-auto max-w-screen-lg' />
			<Contact />
			<Footer />
		</div>
	);
}
