import Image from 'next/image';
import { Navigation } from './components/Navigation';
import { MenuTabs } from './components/MenuTabs';
import { GalleryFilter } from './components/GalleryFilter';
import { RevealOnScroll } from './components/RevealOnScroll';
import { WaveDivider, Separator } from './components/Divider';
import { IconStar, IconLeaf, IconWine, IconHeart, IconMapPin, IconClock, IconPhone, IconGift } from './components/Icons';

export default function Home() {
  return (
    <>
      <Navigation />

      <main id="content">
        {/* ═══ HERO ═══ */}
        <section className="hero" id="hero">
          <div className="hero__bg">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop&q=80"
              alt="Wnętrze restauracji Stary Dom"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
          <div className="hero__overlay" />
          <div className="hero__content">
            <span className="hero__badge">Od lat 50. ubiegłego stulecia</span>
            <h1 className="hero__title">Restauracja<br /><em>Stary Dom</em></h1>
            <p className="hero__sub">Kuchnia polska w najlepszym wydaniu. Tradycyjne smaki, sezonowe produkty i wyjątkowy klimat starej Warszawy.</p>
            <div className="hero__actions">
              <a href="/rezerwacja" className="btn btn--primary btn--lg">Rezerwacja</a>
              <a href="#jadlospis" className="btn btn--ghost btn--lg">Jadłospis</a>
            </div>
          </div>
          <div className="hero__scroll" aria-hidden="true"><span>&#8595;</span></div>
          <div className="hero__line" />
        </section>

        {/* ═══ O NAS ═══ */}
        <section className="about" id="o-nas">
          <div className="container">
            <div className="about__grid">
              <RevealOnScroll>
                <span className="label">Kilka słów o restauracji</span>
                <h2 className="heading">Tradycja dobrej kuchni</h2>
                <Separator />
                <p>Stary Dom to restauracja z tradycją dobrej kuchni. Historia tego miejsca sięga lat 50. ubiegłego stulecia, kiedy lokal był ulubionym miejscem spotkań dżokejów i miłośników wyścigów konnych na pobliskim Służewcu.</p>
                <p>Wystrój lokalu nawiązuje klimatem do starej Warszawy oraz klasycznej miejskiej restauracji. Szef kuchni Łukasz Federowicz tworzy potrawy oparte na dawnych przepisach, serwując wybrane specjały bezpośrednio przy gościach.</p>
                <p>W roku 2016 lokal otrzymał rekomendację <strong>Slow Food Polska</strong>, doceniając staranność w doborze regionalnych produktów i troskę o lokalnych dostawców.</p>
              </RevealOnScroll>
              <RevealOnScroll className="about__imgs">
                <div className="about__img-main">
                  <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop" alt="Wnętrze restauracji" width={600} height={400} style={{ width: '100%', height: 400, objectFit: 'cover' }} />
                </div>
                <div className="about__img-sm">
                  <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop" alt="Tradycyjna polska potrawa" width={400} height={300} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ CECHY ═══ */}
        <section className="features">
          <div className="container">
            <div className="features__grid">
              {[
                { icon: <IconStar />, title: 'Rekomendacja Slow Food', desc: 'Od 2016 roku posiadamy rekomendację Slow Food Polska za staranność w doborze regionalnych składników.' },
                { icon: <IconLeaf />, title: 'Kuchnia sezonowa', desc: 'Nasze menu zmienia się wraz z porami roku, zapewniając najświeższe produkty od lokalnych dostawców.' },
                { icon: <IconWine />, title: 'Karta win i nalewek', desc: 'Szeroka karta win oraz pokaźna kolekcja polskich wódek i nalewek dopełni każdy posiłek.' },
                { icon: <IconHeart />, title: 'Przyjazni rodzinom', desc: 'Krzesełka, przewijak, specjalne menu i słodki prezent dla każdego małego gościa.' },
              ].map((f, i) => (
                <RevealOnScroll key={i} className="features__card" data-delay={String(i + 1)}>
                  <div className="features__icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ JADŁOSPIS ═══ */}
        <WaveDivider fill="var(--bg-dark)" />
        <section className="menu" id="jadlospis">
          <div className="container">
            <span className="label label--center label--light">Nasze menu</span>
            <h2 className="heading heading--center heading--light">Jadłospis</h2>
            <Separator />
            <MenuTabs />
          </div>
        </section>
        <WaveDivider fill="var(--bg-surface)" flip />

        {/* ═══ GALERIA ═══ */}
        <section className="gallery" id="galeria">
          <div className="container">
            <span className="label label--center">Nasze wnętrza i potrawy</span>
            <h2 className="heading heading--center">Galeria</h2>
            <GalleryFilter />
          </div>
        </section>

        {/* ═══ ZESPÓŁ ═══ */}
        <section className="team" id="zespol">
          <div className="container">
            <div className="team__grid">
              <RevealOnScroll>
                <span className="label">Nasz zespół</span>
                <h2 className="heading">Ludzie Starego Domu</h2>
                <Separator />
                <p>Zespół Restauracji Stary Dom tworzą zarówno młodzi kucharze, jak i doświadczeni mistrzowie z kilkudziesięcioletnim stażem.</p>
                <p>Szef Kuchni, <strong>Łukasz Federowicz</strong>, tworzy dania oparte na tradycyjnych przepisach oraz na świeżych, sezonowych produktach od sprawdzonych dostawców z różnych zakątków kraju.</p>
                <p>Potrawy kuchni polskiej łączymy z najnowszymi zdobyczami wiedzy kulinarnej, przygotowując i serwując wybrane specjały bezpośrednio na oczach gości. Profesjonalna obsługa i kultura osobista personelu współtworzy wyjątkowy klimat Starego Domu.</p>
              </RevealOnScroll>
              <RevealOnScroll className="team__img">
                <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=600&fit=crop" alt="Szef kuchni Łukasz Federowicz" width={500} height={600} style={{ width: '100%', height: 480, objectFit: 'cover' }} />
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ VOUCHERY ═══ */}
        <section className="vouchers">
          <div className="container">
            <RevealOnScroll className="vouchers__inner">
              <div className="vouchers__icon" aria-hidden="true"><IconGift size={48} /></div>
              <h2 className="heading heading--center">Podaruj Stary Dom</h2>
              <p>Zaproszenie w formie vouchera do Starego Domu to doskonały pomysł na sprawienie przyjemności najbliższym oraz oderwanie ich od codziennych obowiązków.</p>
              <p>Można go wykorzystać jako świetny pomysł na prezent lub formę płatności za słodkości i napoje w Cukierni Stary Dom.</p>
              <a href="tel:+48226464208" className="btn btn--gold btn--lg">Podaruj voucher</a>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══ DLA RODZIN ═══ */}
        <section className="families">
          <div className="container">
            <div className="families__grid">
              <RevealOnScroll className="families__img">
                <Image src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=600&fit=crop" alt="Desery dla dzieci" width={500} height={600} style={{ width: '100%', height: 480, objectFit: 'cover' }} />
              </RevealOnScroll>
              <RevealOnScroll>
                <span className="label">Dla najmłodszych</span>
                <h2 className="heading">Rodzinnie w Starym Domu</h2>
                <p>Oferujemy szereg atrakcji i udogodnień dla rodzin, które przychodzą z wizytą w pełnym składzie:</p>
                <ul className="families__list">
                  <li>Przewijak dla tych, co jeszcze nie chodzą samodzielnie</li>
                  <li>Krzesełka dla najmłodszych gości</li>
                  <li>Specjalne menu spełniające gusta najwybredniejszych smakoszy</li>
                  <li>Pyszne słodkości, na widok których każdy mały gość pochłonie obiad</li>
                  <li>Rodzinna atmosfera — na weekendy tylko z rezerwacją!</li>
                  <li>Każdy mały gość dostanie od nas słodki prezent na pożegnanie</li>
                </ul>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ KONTAKT ═══ */}
        <section className="contact" id="kontakt">
          <div className="container">
            <span className="label label--center">Zapraszamy</span>
            <h2 className="heading heading--center">Kontakt</h2>
            <div className="contact__grid">
              <RevealOnScroll className="contact__info">
                <div className="contact__card">
                  <div className="contact__card-icon"><IconMapPin /></div>
                  <h3>Adres</h3>
                  <p>ul. Puławska 104/106<br />02-620 Warszawa</p>
                </div>
                <div className="contact__card">
                  <div className="contact__card-icon"><IconClock /></div>
                  <h3>Godziny otwarcia</h3>
                  <p>Poniedziałek — Niedziela<br />12:00 — 23:30</p>
                </div>
                <div className="contact__card">
                  <div className="contact__card-icon"><IconPhone /></div>
                  <h3>Rezerwacje</h3>
                  <p><a href="tel:+48226464208">(+48) 22 646 42 08</a></p>
                  <p><a href="mailto:info@restauracjastarydom.pl">info@restauracjastarydom.pl</a></p>
                </div>
                <div className="contact__socials">
                  <a href="https://www.facebook.com/RestauracjaStaryDom/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/starydom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a href="https://g.page/r/CfF9EP6zSh02EAE" target="_blank" rel="noopener noreferrer" aria-label="Google">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </a>
                </div>
              </RevealOnScroll>
              <RevealOnScroll className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222.8!2d20.9986!3d52.1888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d2964f0f44d%3A0x361d4afefe107df1!2sRestauracja%20Stary%20Dom!5e0!3m2!1spl!2spl!4v1"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu do Restauracji Stary Dom"
                />
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Kolumna 1 — Marka */}
            <div className="footer__col">
              <div className="footer__brand">
                <Image src="/logo.jpg" alt="Stary Dom" width={44} height={44} className="footer__logo-img" />
                <span className="footer__name">Stary Dom</span>
              </div>
              <p className="footer__desc">Tradycyjna kuchnia polska w sercu Mokotowa. Od lat 50. ubiegłego stulecia serwujemy potrawy oparte na najlepszych regionalnych produktach.</p>
              <div className="footer__socials">
                <a href="https://www.facebook.com/RestauracjaStaryDom/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/starydom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://g.page/r/CfF9EP6zSh02EAE" target="_blank" rel="noopener noreferrer" aria-label="Google">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </a>
                <a href="https://pl.tripadvisor.com/Restaurant_Review-g274856-d2299324-Reviews-Stary_Dom_Restaurant-Warsaw_Mazovia_Province_Central_Poland.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                </a>
              </div>
            </div>

            {/* Kolumna 2 — Nawigacja */}
            <div className="footer__col">
              <h4 className="footer__heading">Nawigacja</h4>
              <nav className="footer__nav" aria-label="Nawigacja w stopce">
                <a href="#o-nas">O restauracji</a>
                <a href="#jadlospis">Jadłospis</a>
                <a href="#galeria">Galeria</a>
                <a href="#zespol">Nasz zespół</a>
                <a href="#kontakt">Kontakt</a>
                <a href="/zamowienia">Zamów online</a>
              </nav>
            </div>

            {/* Kolumna 3 — Kontakt */}
            <div className="footer__col">
              <h4 className="footer__heading">Kontakt</h4>
              <address className="footer__address">
                <p>ul. Puławska 104/106<br />02-620 Warszawa</p>
                <p><a href="tel:+48226464208">(+48) 22 646 42 08</a></p>
                <p><a href="mailto:info@restauracjastarydom.pl">info@restauracjastarydom.pl</a></p>
              </address>
            </div>

            {/* Kolumna 4 — Godziny */}
            <div className="footer__col">
              <h4 className="footer__heading">Godziny otwarcia</h4>
              <div className="footer__hours">
                <p>Poniedziałek — Piątek<br /><strong>12:00 — 23:30</strong></p>
                <p>Sobota — Niedziela<br /><strong>12:00 — 23:30</strong></p>
              </div>
              <a href="/rezerwacja" className="btn btn--gold footer__cta">Rezerwacja</a>
            </div>
          </div>

          {/* Dolny pasek */}
          <div className="footer__bottom">
            <p className="footer__copy">&copy; {new Date().getFullYear()} Restauracja Stary Dom Sp. z o.o. Sp.k. Wszelkie prawa zastrzeżone.</p>
            <div className="footer__legal">
              <a href="/polityka-prywatnosci">Polityka prywatności</a>
              <a href="/regulamin">Regulamin</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ BELECZKA EU FUNDS ═══ */}
      <div className="eu-bar" aria-label="Fundusze Europejskie">
        <div className="container">
          <div className="eu-bar__inner">
            <div className="eu-bar__logos">
              <svg className="eu-bar__logo" viewBox="0 0 200 40" height="28" aria-label="Krajowy Plan Odbudowy">
                <rect width="200" height="40" rx="3" fill="#003399" />
                <text x="100" y="16" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="700" fontFamily="sans-serif">KRAJOWY PLAN</text>
                <text x="100" y="28" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="700" fontFamily="sans-serif">ODBUDOWY</text>
              </svg>
              <svg className="eu-bar__logo" viewBox="0 0 160 40" height="28" aria-label="Rzeczpospolita Polska">
                <rect width="160" height="20" fill="#DC143C" rx="2" />
                <rect y="20" width="160" height="20" fill="#FFF" rx="2" />
                <text x="80" y="14" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="700" fontFamily="sans-serif">RZECZPOSPOLITA</text>
                <text x="80" y="34" textAnchor="middle" fill="#DC143C" fontSize="8" fontWeight="700" fontFamily="sans-serif">POLSKA</text>
              </svg>
              <svg className="eu-bar__logo" viewBox="0 0 200 40" height="28" aria-label="Finansowane przez Unię Europejską – NextGenerationEU">
                <rect width="200" height="40" rx="3" fill="#003399" />
                <text x="100" y="14" textAnchor="middle" fill="#FFD700" fontSize="7" fontWeight="600" fontFamily="sans-serif">Finansowane przez</text>
                <text x="100" y="24" textAnchor="middle" fill="#FFD700" fontSize="8" fontWeight="700" fontFamily="sans-serif">Unię Europejską</text>
                <text x="100" y="34" textAnchor="middle" fill="#FFD700" fontSize="6" fontFamily="sans-serif">NextGenerationEU</text>
              </svg>
            </div>
            <p className="eu-bar__text">
              Projekt współfinansowany z KPO — działanie A1.2.1. Dofinansowanie: <strong>410 934,33 zł</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
