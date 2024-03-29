import About from '@/components/page-sections/about';
import Contact from '@/components/page-sections/contact';
import Effect from '@/components/page-sections/effect';
import Footer from '@/components/page-sections/footer';
import Hero from '@/components/page-sections/hero';
import Process from '@/components/page-sections/process';
import Separator from '@/components/separator';

export default function Home() {
	return (
		<div className='mx-auto flex max-w-screen-lg flex-1 flex-col px-4 pt-8 text-neutral-800 md:px-8'>
			<Hero />
			<Separator />
			<About />
			<Separator />
			<Effect />
			<Separator />
			<Separator />
			<Process />
			<Separator />
			<Contact />
			<Footer />
		</div>
	);
}
