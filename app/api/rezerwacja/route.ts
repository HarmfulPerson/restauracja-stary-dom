import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, date, time, guests, message } = data;

    if (!name || !email || !phone || !date || !time || !guests) {
      return NextResponse.json({ error: 'Wypełnij wszystkie wymagane pola.' }, { status: 400 });
    }

    // Format the email body
    const body = [
      `Nowa rezerwacja ze strony internetowej`,
      ``,
      `Imię i nazwisko: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      `Data: ${date}`,
      `Godzina: ${time}`,
      `Liczba gości: ${guests}`,
      message ? `Uwagi: ${message}` : '',
      ``,
      `---`,
      `Wiadomość wysłana automatycznie z restauracjastarydom.pl`,
    ].filter(Boolean).join('\n');

    // In production, integrate with an email service (Resend, SendGrid, Nodemailer, etc.)
    // For now, log to console and return success
    console.log('=== NOWA REZERWACJA ===');
    console.log(body);
    console.log('=======================');

    // TODO: Replace with actual email sending, e.g.:
    // await resend.emails.send({
    //   from: 'rezerwacje@restauracjastarydom.pl',
    //   to: 'info@restauracjastarydom.pl',
    //   subject: `Rezerwacja: ${name} — ${date} ${time}, ${guests} os.`,
    //   text: body,
    // });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Błąd serwera. Spróbuj ponownie.' }, { status: 500 });
  }
}
