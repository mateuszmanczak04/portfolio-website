import { z } from 'zod';

export const s3Schema = z.object({
	contentType: z.string(),
	fileName: z.string(),
});

export const formSchema = z.object({
	name: z.string().trim().optional(),
	email: z
		.string()
		.trim()
		.email({ message: 'Niepoprawny e-mail' })
		.min(1, { message: 'Adres e-mail jest wymagany' }),
	message: z
		.string()
		.min(1, { message: 'Wiadomość jest wymagana' })
		.max(1000, { message: 'Maksymalna długość wiadomości to 1000 znaków' }),
	attachments: z
		.object({
			url: z.string(),
			filename: z.string(),
		})
		.array(),
});
