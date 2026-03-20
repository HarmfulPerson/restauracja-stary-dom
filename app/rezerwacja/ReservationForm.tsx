'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ReservationForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/rezerwacja', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || 'Wystąpił błąd.');
      }

      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rez__success">
        <div className="rez__success-icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
          </svg>
        </div>
        <h2 className="rez__success-title">Dziękujemy</h2>
        <p className="rez__success-text">Twoja prośba o rezerwację została wysłana. Potwierdzimy ją telefonicznie lub mailowo najszybciej jak to możliwe.</p>
        <button className="btn btn--gold" onClick={() => setStatus('idle')} type="button">Nowa rezerwacja</button>
      </div>
    );
  }

  return (
    <form className="rez__form" onSubmit={handleSubmit} noValidate>
      <div className="rez__row">
        <div className="rez__field">
          <label htmlFor="name">Imię i nazwisko</label>
          <input type="text" id="name" name="name" required autoComplete="name" placeholder="Jan Kowalski" />
        </div>
      </div>

      <div className="rez__row rez__row--2">
        <div className="rez__field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required autoComplete="email" placeholder="jan@example.com" />
        </div>
        <div className="rez__field">
          <label htmlFor="phone">Telefon</label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" placeholder="+48 600 000 000" />
        </div>
      </div>

      <div className="rez__row rez__row--3">
        <div className="rez__field">
          <label htmlFor="date">Data</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="rez__field">
          <label htmlFor="time">Godzina</label>
          <select id="time" name="time" required>
            <option value="">Wybierz</option>
            {Array.from({ length: 23 }, (_, i) => {
              const h = 12 + Math.floor(i / 2);
              const m = i % 2 === 0 ? '00' : '30';
              if (h > 22 || (h === 22 && m === '30')) return null;
              const val = `${h}:${m}`;
              return <option key={val} value={val}>{val}</option>;
            })}
          </select>
        </div>
        <div className="rez__field">
          <label htmlFor="guests">Goście</label>
          <select id="guests" name="guests" required>
            <option value="">Ile osób</option>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'osoba' : n < 5 ? 'osoby' : 'osób'}</option>
            ))}
            <option value="10+">Więcej niż 10</option>
          </select>
        </div>
      </div>

      <div className="rez__row">
        <div className="rez__field">
          <label htmlFor="message">Uwagi <span className="rez__optional">(opcjonalnie)</span></label>
          <textarea id="message" name="message" rows={3} placeholder="Specjalne okazje, alergie, preferencje dotyczące stolika..." />
        </div>
      </div>

      {status === 'error' && <p className="rez__error" role="alert">{error}</p>}

      <button className="btn btn--primary rez__submit" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Wysyłanie...' : 'Wyślij prośbę o rezerwację'}
      </button>

      <p className="rez__disclaimer">Rezerwacja wymaga potwierdzenia. Skontaktujemy się z Tobą w ciągu kilku godzin.</p>
    </form>
  );
}
