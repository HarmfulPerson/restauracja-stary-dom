import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zamówienia online — Restauracja Stary Dom',
  description: 'Zamów online z Restauracji Stary Dom. Tradycyjna kuchnia polska z dostawą.',
};

export default function ZamowieniaPage() {
  return (
    <div className="order-page">
      <header className="order-header">
        <div className="container order-header__inner">
          <Link href="/" className="order-header__back" aria-label="Wróć na stronę główną">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
            </svg>
            <span>Wróć do strony</span>
          </Link>
          <div className="order-header__brand">
            <span className="order-header__icon">&#9753;</span>
            <span className="order-header__name">Stary Dom</span>
          </div>
          <div className="order-header__info">Zamówienia online</div>
        </div>
      </header>

      <main className="order-main">
        <iframe
          src="https://restauracja-stary-dom.orderwebsite.com/"
          title="Zamówienia online — Restauracja Stary Dom"
          className="order-iframe"
          allowFullScreen
        />
      </main>
    </div>
  );
}
