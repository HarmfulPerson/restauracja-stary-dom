import type { Metadata } from 'next';
import { Playfair_Display, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-heading',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Restauracja Stary Dom — Kuchnia polska w najlepszym wydaniu',
  description:
    'Restauracja Stary Dom w Warszawie. Tradycyjna kuchnia polska oparta na najlepszych regionalnych produktach. Rezerwacje: +48 22 646 42 08.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${playfair.variable} ${bricolage.variable}`}>
        {children}
      </body>
    </html>
  );
}
