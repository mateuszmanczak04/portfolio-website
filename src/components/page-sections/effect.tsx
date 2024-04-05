'use client';

import EffectCard from '@/components/effect-card';
import { motion } from 'framer-motion';

const Effect = () => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: 256 }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ delay: 0.25, duration: 2 }}
			viewport={{ once: true }}
			className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='efekt'>
			<h2 className='w-full text-center text-4xl font-bold'>
				Jaki efekt na Ciebie czeka?
			</h2>
			<div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<EffectCard
					className='lg:col-start-1 lg:col-end-3'
					title='Responsywność ↔️'
					subtitle='Działa u każdego klienta'
					description='Każda strona, która wychodzi z mojego warsztatu jest responsywna, co oznacza, że wyświetla się dobrze niezależnie od wielkości urządzenia.'
				/>
				<EffectCard
					title='Szybkość ⚡️'
					subtitle='Bez wielominutowych spinnerów'
					description='Strona, którą otrzymasz nie jest tworzona z gotowych szablonów, a pisana od zera, za czym idzie możliwość lepszej optymalizacji.'
				/>
				<EffectCard
					title='Nowoczesny Wygląd 🔮'
					subtitle='Zaskocz konkurencję świeżością'
					description='Twój produkt będzie wyglądał przyjemnie dla oka oraz będzie intuicyjny w użytkowaniu.'
				/>
				<EffectCard
					className='lg:col-start-2 lg:col-end-4'
					title='Wysoka pozycja w wyszukiwarce 📈'
					subtitle='Daj się znaleźć w internecie'
					description='Dzięki odpowiedniemu wykorzystaniu metatagów oraz server side renderingu Twoja strona pojawi się w wyszukiwaniach Google wyżej niż konkurencja.'
				/>
			</div>
			<p className='text-2xl font-bold'>I wiele więcej!</p>
		</motion.div>
	);
};

export default Effect;
