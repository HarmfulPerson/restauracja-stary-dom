'use client';

import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => { setOpen(false); document.body.style.overflow = ''; };

  const toggle = () => {
    setOpen((v) => {
      document.body.style.overflow = !v ? 'hidden' : '';
      return !v;
    });
  };

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo" aria-label="Strona główna">
          <span className="nav__logo-icon">&#9753;</span>
          <span className="nav__logo-text">Stary Dom</span>
        </a>

        <button className={`nav__toggle${open ? ' nav__toggle--open' : ''}`} onClick={toggle} aria-label="Menu" aria-expanded={open}>
          <div className="nav__bars"><span /><span /><span /></div>
        </button>

        <div className={`nav__backdrop${open ? ' nav__backdrop--open' : ''}`} onClick={close} />

        <nav className={`nav__links${open ? ' nav__links--open' : ''}`} aria-label="Menu główne">
          {['o-nas', 'jadlospis', 'galeria', 'zespol', 'kontakt'].map((id) => (
            <a key={id} href={`#${id}`} className="nav__link" onClick={close}>
              {id === 'o-nas' ? 'O nas' : id === 'jadlospis' ? 'Jadłospis' : id === 'galeria' ? 'Galeria' : id === 'zespol' ? 'Zespół' : 'Kontakt'}
            </a>
          ))}
          <a href="/zamowienia" className="nav__link" onClick={close}>Zamów online</a>
          <a href="/rezerwacja" className="nav__cta" onClick={close}>Rezerwacja</a>
        </nav>
      </div>
    </header>
  );
}
