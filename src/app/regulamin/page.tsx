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
					<ArrowLeft className='h-5 w-5' /> <span>Return to the main page</span>
				</Link>
			</Button>
			<h1 className='text-4xl font-semibold'>Regulations</h1>
			<p>
				This regulation defines the rules for processing personal data of users
				of the contact form on the website [website name].
			</p>
			<h2 className='text-2xl font-semibold'>1. Data administrator</h2>
			<Separator />
			<p>
				The administrator of personal data collected through the contact form
				is:
			</p>
			<ul className='list-disc pl-4'>
				<li>Name and surname: Mateusz Mańczak</li>
				<li>Phone number: 725 726 901</li>
				<li>Email address: mateuszmanczak@icloud.com</li>
			</ul>
			<h2 className='text-2xl font-semibold'>2. Purpose of data processing</h2>
			<Separator />
			<p>
				Personal data collected through the contact form are processed for the
				purpose of:
			</p>
			<ul className='list-disc pl-4'>
				<li>Possibility to contact the client</li>
			</ul>
			<h2 className='text-2xl font-semibold'>
				3. Legal basis for data processing
			</h2>
			<Separator />
			<p>
				The legal basis for the processing of personal data is the user&apos;s
				consent expressed by clicking the &ldquo;Send message&rdquo; button and
				accepting the regulations.
			</p>
			<h2 className='text-2xl font-semibold'>4. Data recipients</h2>
			<Separator />
			<p>Personal data are not transferred to any other recipients.</p>
			<h2 className='text-2xl font-semibold'>5. Data storage period</h2>
			<Separator />
			<p>Personal data are stored for an indefinite period.</p>
			<h2 className='text-2xl font-semibold'>6. User rights</h2>
			<Separator />
			<p>The user has the right to:</p>
			<ul className='list-disc pl-4'>
				<li>Access to their personal data</li>
				<li>Correction of their personal data</li>
				<li>Deletion of their personal data</li>
				<li>Restriction of processing of their personal data</li>
				<li>Object to the processing of their personal data</li>
				<li>Transfer of their personal data</li>
			</ul>
			<h2 className='text-2xl font-semibold'>7. Withdrawal of consent</h2>
			<Separator />
			<p>
				The user has the right to withdraw consent to the processing of their
				personal data at any time. Withdrawal of consent does not affect the
				legality of the processing which was carried out on the basis of consent
				before its withdrawal.
			</p>
			<h2 className='text-2xl font-semibold'>
				8. Complaint to the President of the Office for Personal Data Protection
			</h2>
			<Separator />
			<p>
				The user has the right to lodge a complaint with the President of the
				Office for Personal Data Protection if they believe that their personal
				data is being processed unlawfully.
			</p>
			<h2 className='text-2xl font-semibold'>
				9. Information about the voluntary provision of data
			</h2>
			<Separator />
			<p>Providing personal data is voluntary.</p>
			<h2 className='text-2xl font-semibold'>10. Consent to data processing</h2>
			<Separator />
			<p>
				By sending the form, the user consents to the processing of their
				personal data in accordance with this regulation.
			</p>
			<div className='h-8'></div>
			<Footer />
		</div>
	);
};

export default RegulationsPage;
