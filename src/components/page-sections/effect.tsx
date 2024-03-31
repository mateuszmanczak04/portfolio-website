import EffectCard from '@/components/effect-card';

const Effect = () => {
	return (
		<div
			className='mx-auto flex w-full max-w-screen-md flex-col items-center gap-8 px-4 py-16 md:py-20 lg:py-24'
			id='efekt'>
			<h2 className='w-full text-center text-4xl font-bold'>
				Jaki efekt na Ciebie czeka?
			</h2>
			<div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8'>
				<EffectCard
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
					title='Wysoka pozycja w wyszukiwarce 📈'
					subtitle='Daj się znaleźć w internecie'
					description='Dzięki odpowiedniemu wykorzystaniu metatagów oraz server side renderingu Twoja strona pojawi się w wyszukiwaniach Google wyżej niż konkurencja.'
				/>
			</div>
		</div>
	);
};

export default Effect;
