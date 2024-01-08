import nodemailer from 'nodemailer';
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  const formData = await request.formData();
  let attachments: { path: string; filename: string }[] = [];

  const files = formData.getAll('file');

  // for (const file of files) instead of files.forEach()
  // guarantees us awaiting every iteration
  try {
    for (const file of files) {
      if (!(file instanceof File)) return;

      // upload image to vercel blob storage
      const { url } = await put(`articles/${file.name}`, file, {
        access: 'public',
      });
      attachments.push({ path: url, filename: file.name });
    }
  } catch (err) {
    console.log(err);
    return Response.json(
      {
        message:
          'Nie udało się wysłać wiadomości. Spróbuj ponownie później lub skorzystaj z innej formy kontaktu.',
      },
      { status: 500 }
    );
  }

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

  // get values of form fields specified by the client
  const email = formData.get('email');
  const name = formData.get('name');
  const content = formData.get('content');

  const text = `${email}\n${name}\n\n${content}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mateuszmanczak2004@gmail.com',
    subject: 'Wiadomość ze strony Portfolio',
    text,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json(
      { message: 'Pomyślnie wysłano wiadomość.' },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        message:
          'Nie udało się wysłać wiadomości. Spróbuj ponownie później lub skorzystaj z innej formy kontaktu.',
      },
      { status: 500 }
    );
  }
}
