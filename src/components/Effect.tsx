import { BarChart4, GaugeCircle, Layers3, Maximize2 } from 'lucide-react';
import EffectCard from './EffectCard';

const Effect = () => {
  return (
    <div className='w-full flex flex-col py-16' id='efekt'>
      <h2 className='h4 font-bold text-center w-full'>
        Jaki efekt na Ciebie czeka?
      </h2>
      <div className='grid grid-cols-1 gap-4'>
        <EffectCard
          title='Responsywność'
          description='Każda strona, która wychodzi z mojego warsztatu jest responsywna, co oznacza, że wyświetla się dobrze niezależnie od wielkości urządzenia.'
          icon={<Maximize2 className='w-12 h-12' />}
        />
        <EffectCard
          title='Szybkość'
          description='Strona, którą otrzymasz nie jest tworzona z gotowych szablonów, a pisana od zera, za czym idzie możliwość lepszej optymalizacji.'
          icon={<GaugeCircle className='w-12 h-12' />}
        />
        <EffectCard
          title='Nowoczesny Wygląd'
          description='Twój produkt będzie wyglądał przyjemnie dla oka oraz będzie intuicyjny w użytkowaniu.'
          icon={<Layers3 className='w-12 h-12' />}
        />
        <EffectCard
          title='Wysoka pozycja w wyszukiwarce'
          description='Dzięki odpowiedniemu wykorzystaniu metatagów oraz server side renderingu Twoja strona pojawi się w wyszukiwaniach Google wyżej niż konkurencja.'
          icon={<BarChart4 className='w-12 h-12' />}
        />
      </div>
    </div>
  );
};

export default Effect;
