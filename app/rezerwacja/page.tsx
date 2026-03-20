import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ReservationForm } from './ReservationForm';

export const metadata: Metadata = {
  title: 'Rezerwacja — Restauracja Stary Dom',
  description: 'Zarezerwuj stolik w Restauracji Stary Dom. Tradycyjna kuchnia polska w sercu Mokotowa.',
};

export default function RezerwacjaPage() {
  return (
    <div className="rez">
      {/* Dekoracyjne tło */}
      <div className="rez__bg" aria-hidden="true" />

      <header className="rez__header">
        <div className="container rez__header-inner">
          <Link href="/" className="rez__back" aria-label="Wróć na stronę główną">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
            <span>Powrót</span>
          </Link>
          <div className="rez__brand">
            <Image src="/logo.jpg" alt="Stary Dom" width={36} height={36} className="rez__brand-img" />
            <span className="rez__brand-name">Stary Dom</span>
          </div>
          <div />
        </div>
      </header>

      <main className="rez__main">
        <div className="container">
          <div className="rez__layout">
            {/* Lewa strona — info */}
            <div className="rez__info">
              <span className="label label--light">Rezerwacja stolika</span>
              <h1 className="rez__title">Zapraszamy<br /><em>do Starego Domu</em></h1>
              <p className="rez__desc">Wypełnij formularz, a my potwierdzimy Twoją rezerwację telefonicznie lub mailowo w ciągu kilku godzin.</p>

              <div className="rez__details">
                <div className="rez__detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <p>ul. Puławska 104/106</p>
                    <p>02-620 Warszawa</p>
                  </div>
                </div>
                <div className="rez__detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                  <div>
                    <p>Poniedziałek — Niedziela</p>
                    <p>12:00 — 23:30</p>
                  </div>
                </div>
                <div className="rez__detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <p><a href="tel:+48226464208">(+48) 22 646 42 08</a></p>
                  </div>
                </div>
              </div>

              <p className="rez__alt">Możesz też zarezerwować telefonicznie — dzwonimy codziennie od 10:00.</p>
            </div>

            {/* Prawa strona — formularz */}
            <div className="rez__form-wrap">
              <ReservationForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
