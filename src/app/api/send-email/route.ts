import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const data = await request.json();
  const { email, name, content, attachmentsUrls } = data;

  if (!email || !name || !content) {
    return Response.json(
      {
        message: 'Uzupełnij brakujące pola.',
      },
      { status: 400 }
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
  // const email = formData.get('email');
  // const name = formData.get('name');
  // const content = formData.get('content');

  const text = `E-mail: ${email}\n Imię i nazwisko: ${name}\n\n Wiadomość: ${content}`;

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mateuszmanczak2004@gmail.com',
    subject: 'Wiadomość ze strony Portfolio',
    text,
    attachments: attachmentsUrls.map((url: string) => ({ path: url })),
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
