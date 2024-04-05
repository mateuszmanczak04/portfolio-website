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
			<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
				<EffectCard
					title='Responsywność ↔️'
					subtitle='Responsywne strony internetowe dla każdego klienta'
					description={
						<div className='space-y-4 leading-7'>
							<p>
								Wszystkie strony internetowe, które tworzę, są responsywne, co
								oznacza, że idealnie dopasowują się do każdego urządzenia,
								niezależnie od rozmiaru ekranu.
							</p>
							<p>
								<strong>Dlaczego responsywność jest ważna?</strong>
							</p>
							<ul className='list-disc pl-4'>
								<li>
									Ponad połowa użytkowników internetu korzysta z urządzeń
									mobilnych.
								</li>
								<li>
									Responsywne strony internetowe są łatwiejsze w nawigacji i
									użytkowaniu na urządzeniach mobilnych.{' '}
								</li>
								<li>
									Responsywne strony internetowe są lepiej widoczne w
									wyszukiwarkach Google.
								</li>
							</ul>
						</div>
					}
				/>
				<EffectCard
					title='Szybkość ⚡️'
					subtitle='Szybkie strony internetowe bez spinnerów'
					description={
						<div className='space-y-4 leading-7'>
							<p>
								Zapomnij o irytujących spinnerach i wieloetapowym ładowaniu
								strony! Tworzę strony internetowe od podstaw, co pozwala na ich
								optymalizację pod kątem szybkości.
							</p>
							<p>
								<strong>Dlaczego szybkość strony jest ważna?</strong>
							</p>
							<ul className='list-disc pl-4'>
								<li>Użytkownicy oczekują błyskawicznego ładowania stron.</li>
								<li>
									Szybkie strony internetowe są lepiej widoczne w wyszukiwarkach
									Google.
								</li>
								<li>Szybkie strony internetowe zwiększają konwersję.</li>
							</ul>
						</div>
					}
				/>
				<EffectCard
					title='Nowoczesny Wygląd 🔮'
					subtitle='Nowoczesny wygląd strony internetowej'
					description={
						<div className='space-y-4 leading-7'>
							<p>
								Zaskocz konkurencję świeżym i nowoczesnym designem strony
								internetowej! Twój produkt będzie nie tylko przyjemny dla oka,
								ale również intuicyjny w użytkowaniu.
							</p>
							<p>
								<strong>Dlaczego nowoczesny wygląd jest ważny?</strong>
							</p>
							<ul className='list-disc pl-4'>
								<li>
									Użytkownicy preferują strony internetowe o nowoczesnym
									wyglądzie.
								</li>
								<li>Nowoczesne strony internetowe są bardziej wiarygodne.</li>
								<li>
									Nowoczesne strony internetowe łatwiej zapadają w pamięć.
								</li>
							</ul>
						</div>
					}
				/>
				<EffectCard
					title='Bezpieczeństwo 🔒'
					subtitle='Bezpieczna strona internetowa to podstawa zaufania Twoich klientów.'
					description={
						<div className='space-y-4 leading-7'>
							<p>
								Wszystkie strony internetowe, które tworzę, są bezpieczne i
								chronione przed atakami hakerskimi. Stosuję najnowsze
								technologie bezpieczeństwa, aby chronić dane Twoje i Twoich
								klientów.
							</p>
							<p>
								<strong>Dlaczego bezpieczeństwo jest ważne?</strong>
							</p>
							<ul className='list-disc pl-4'>
								<li>
									Chroni Twoje dane i dane Twoich klientów przed kradzieżą i
									nadużyciami.
								</li>
								<li>
									Chroni Twoją stronę internetową przed atakami hakerskimi i
									złośliwym oprogramowaniem.
								</li>
								<li>
									Buduje zaufanie wśród użytkowników i zwiększa ich lojalność.
								</li>
								<li>
									Może pomóc Ci uniknąć negatywnych konsekwencji prawnych i
									finansowych.
								</li>
							</ul>
						</div>
					}
				/>
			</div>
			<p className='text-2xl font-bold'>I wiele więcej!</p>
		</motion.div>
	);
};

export default Effect;
