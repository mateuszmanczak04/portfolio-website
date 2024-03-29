'use server';

import { formSchema } from '@/schema';
import { type Attachment } from '@/types';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const submitForm = async (
	prevState: any,
	values: z.infer<typeof formSchema>,
) => {
	const validatedFields = formSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Niepoprawne dane w formularzu.' };
	}

	const { email, name, message, attachments } = validatedFields.data;

	const transporter = nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const text = `E-mail: ${email}\n Imię i nazwisko: ${name}\n\n Wiadomość: ${message}`;

	const mailOptions = {
		from: process.env.EMAIL,
		to: 'mateuszmanczak@icloud.com',
		subject: 'Wiadomość ze strony Portfolio',
		text,
		attachments: attachments.map((attachment: Attachment) => ({
			path: attachment.url,
		})),
	};

	try {
		await transporter.sendMail(mailOptions);
		return {
			success:
				'Pomyślnie wysłano wiadomość. Oczekuj odpowiedzi przez najbliższy czas.',
		};
	} catch (err) {
		return {
			error:
				'Nie udało się wysłać wiadomości. Spróbuj ponownie później lub skorzystaj z innej formy kontaktu.',
		};
	}
};
