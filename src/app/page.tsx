import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant='destructive'>Click me!</Button>
      <Button variant='default'>Click me!</Button>
      <Button variant='ghost'>Click me!</Button>
      <Button variant='outline'>Click me!</Button>
      <Button variant='link'>Click me!</Button>
      <Button variant='secondary'>Click me!</Button>
    </div>
  );
}
