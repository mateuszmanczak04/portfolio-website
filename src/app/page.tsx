import About from '@/components/About';
import Effect from '@/components/Effect';
import Hero from '@/components/Hero';
import Separator from '@/components/Separator';

export default function Home() {
  return (
    <div className='container py-24 flex flex-col gap-16'>
      <Hero />
      <Separator />
      <About />
      <Separator />
      <Effect />
    </div>
  );
}
