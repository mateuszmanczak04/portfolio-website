import Hero from '@/components/Hero';
import Separator from '@/components/Separator';

export default function Home() {
  return (
    <div className='container pt-24 flex flex-col gap-16'>
      <Hero />
      <Separator />
    </div>
  );
}
