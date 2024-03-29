import { BarChart4, GaugeCircle, Layers3, Maximize2 } from 'lucide-react';
import EffectCard from './effect-card';

const Effect = () => {
	return (
		<div
			className='flex w-full flex-col gap-4 py-16 md:py-20 lg:gap-8 lg:py-24'
			id='efekt'>
			<h2 className='h4 w-full text-center font-bold'>
				Jaki efekt na Ciebie czeka?
			</h2>
			<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8'>
				<EffectCard
					title='Responsywność'
					description='Każda strona, która wychodzi z mojego warsztatu jest responsywna, co oznacza, że wyświetla się dobrze niezależnie od wielkości urządzenia.'
					icon={<Maximize2 className='h-12 w-12 md:h-[72px] md:w-[72px]' />}
				/>
				<EffectCard
					title='Szybkość'
					description='Strona, którą otrzymasz nie jest tworzona z gotowych szablonów, a pisana od zera, za czym idzie możliwość lepszej optymalizacji.'
					icon={<GaugeCircle className='h-12 w-12 md:h-[72px] md:w-[72px]' />}
				/>
				<EffectCard
					title='Nowoczesny Wygląd'
					description='Twój produkt będzie wyglądał przyjemnie dla oka oraz będzie intuicyjny w użytkowaniu.'
					icon={<Layers3 className='h-12 w-12 md:h-[72px] md:w-[72px]' />}
				/>
				<EffectCard
					title='Wysoka pozycja w wyszukiwarce'
					description='Dzięki odpowiedniemu wykorzystaniu metatagów oraz server side renderingu Twoja strona pojawi się w wyszukiwaniach Google wyżej niż konkurencja.'
					icon={<BarChart4 className='h-12 w-12 md:h-[72px] md:w-[72px]' />}
				/>
			</div>
		</div>
	);
};

export default Effect;
