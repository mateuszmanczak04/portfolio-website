import Footer from '@/components/page-sections/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const RegulationsPage = () => {
	return (
		<div className='mx-auto w-full max-w-screen-md space-y-4 p-4'>
			<Button asChild variant='secondary' className='items-center gap-1'>
				<Link href='/'>
					<ArrowLeft className='h-5 w-5' />{' '}
					<span>Powrót do strony głównej</span>
				</Link>
			</Button>
			<h1 className='text-4xl font-semibold'>Regulamin</h1>
			<p>
				Niniejszy regulamin określa zasady przetwarzania danych osobowych
				użytkowników formularza kontaktowego na stronie internetowej [nazwa
				strony internetowej].
			</p>
			<h2 className='text-2xl font-semibold'>1. Administrator danych</h2>
			<Separator />
			<p>
				Administratorem danych osobowych zbieranych za pomocą formularza
				kontaktowego jest:
			</p>
			<ul className='list-disc pl-4'>
				<li>Imię i nazwisko: Mateusz Mańczak</li>
				<li>Numer telefonu: 725 726 901</li>
				<li>Adres e-mail: mateuszmanczak@icloud.com</li>
			</ul>
			<h2 className='text-2xl font-semibold'>2. Cel przetwarzania danych</h2>
			<Separator />
			<p>
				Dane osobowe zbierane za pomocą formularza kontaktowego są przetwarzane
				w celu:
			</p>
			<ul className='list-disc pl-4'>
				<li>Możliwości skontaktowania się z klientem</li>
			</ul>
			<h2 className='text-2xl font-semibold'>
				3. Podstawa prawna przetwarzania danych
			</h2>
			<Separator />
			<p>
				Podstawą prawną przetwarzania danych osobowych jest zgoda użytkownika
				wyrażona poprzez kliknięcie w przycisk &quot;Wyślij wiadomość&quot; i
				akceptację regulaminu.
			</p>
			<h2 className='text-2xl font-semibold'>4. Odbiorcy danych</h2>
			<Separator />
			<p>Dane osobowe nie są przekazywane żadnym innym odbiorcom.</p>
			<h2 className='text-2xl font-semibold'>5. Okres przechowywania danych</h2>
			<Separator />
			<p>Dane osobowe są przechowywane przez okres nieokreślony.</p>
			<h2 className='text-2xl font-semibold'>6. Prawa użytkownika</h2>
			<Separator />
			<p>Użytkownikowi przysługuje prawo do:</p>
			<ul className='list-disc pl-4'>
				<li>Dostępu do swoich danych osobowych</li>
				<li>Sprostowania swoich danych osobowych</li>
				<li>Usunięcia swoich danych osobowych</li>
				<li>Ograniczenia przetwarzania swoich danych osobowych</li>
				<li>
					Wniesienia sprzeciwu wobec przetwarzania swoich danych osobowych
				</li>
				<li>Przenoszenia swoich danych osobowych</li>
			</ul>
			<h2 className='text-2xl font-semibold'>7. Cofnięcie zgody</h2>
			<Separator />
			<p>
				Użytkownik ma prawo do cofnięcia zgody na przetwarzanie swoich danych
				osobowych w dowolnym momencie. Cofnięcie zgody nie wpływa na zgodność z
				prawem przetwarzania, którego dokonano na podstawie zgody przed jej
				cofnięciem.
			</p>
			<h2 className='text-2xl font-semibold'>8. Skarga do Prezesa UODO</h2>
			<Separator />
			<p>
				Użytkownik ma prawo wnieść skargę do Prezesa Urzędu Ochrony Danych
				Osobowych, jeśli uważa, że jego dane osobowe są przetwarzane niezgodnie
				z prawem.
			</p>
			<h2 className='text-2xl font-semibold'>
				9. Informacja o dobrowolności podania danych
			</h2>
			<Separator />
			<p>Podanie danych osobowych jest dobrowolne.</p>
			<h2 className='text-2xl font-semibold'>
				10. Zgoda na przetwarzanie danych
			</h2>
			<Separator />
			<p>
				Wysyłając formularz, użytkownik wyraża zgodę na przetwarzanie swoich
				danych osobowych zgodnie z niniejszym regulaminem.
			</p>
			<div className='h-8'></div>
			<Footer />
		</div>
	);
};

export default RegulationsPage;
