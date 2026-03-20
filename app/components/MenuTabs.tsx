'use client';

import { useState, useRef, KeyboardEvent } from 'react';

const CATEGORIES = [
  { key: 'zimny', label: 'Zimny bufet' },
  { key: 'zupy', label: 'Zupy' },
  { key: 'cieply', label: 'Ciepły bufet' },
  { key: 'glowne', label: 'Dania główne' },
  { key: 'desery', label: 'Desery' },
] as const;

type Item = { name: string; desc?: string; price: string };

const DATA: Record<string, Item[]> = {
  zimny: [
    { name: 'Domowy chleb ze smalcem i kiszonymi ogórkami z Hajnówki', price: '27 zł' },
    { name: 'Śledzie tradycyjne w oleju lnianym z cebulką i ogórkiem kiszonym', price: '49 zł' },
    { name: 'Plastry wędzonego łososia z domowym twarożkiem i winegretem', price: '59 zł' },
    { name: 'Galareta z wieprzowych nóg z domowymi marynatami z Podlasia', price: '49 zł' },
    { name: 'Tatar z dojrzewającej wołowiny', price: '67 zł' },
    { name: 'Carpaccio wołowe ze świeżą rukolą i musem chrzanowym', price: '59 zł' },
    { name: 'Deska domowych pasztetów i tradycyjnych mięs pieczonych', desc: 'Pasztet z dzika, z kaczki, cielęco-wieprzowy, karczki i boczki z codziennego wypieku, domowe marynaty', price: '93 zł' },
  ],
  zupy: [
    { name: 'Rosół z domowym makaronem', desc: 'Tradycyjny rosół z kury i wołowiny, podawany z ręcznie robionym makaronem', price: '32 zł' },
    { name: 'Żurek na zakwasie z jajkiem i kiełbasą', price: '34 zł' },
    { name: 'Krem z dyni z prażonymi pestkami', price: '29 zł' },
    { name: 'Barszcz czerwony z uszkami', price: '30 zł' },
  ],
  cieply: [
    { name: 'Pierogi z mięsem w sosie grzybowym', desc: 'Ręcznie lepione, z farszem z duszonej wołowiny', price: '42 zł' },
    { name: 'Pierogi ruskie ze skwarkami i cebulką', price: '38 zł' },
    { name: 'Naleśniki z twarogiem i sosem waniliowym', price: '35 zł' },
    { name: 'Gołąbki w sosie pomidorowym', desc: 'Z mięsem i kaszą, w domowym sosie pomidorowym', price: '44 zł' },
  ],
  glowne: [
    { name: 'Kotlet schabowy z ziemniakami i surówką', desc: 'Klasyczny schabowy panierowany, ziemniaki z koperkiem', price: '52 zł' },
    { name: 'Polędwica wołowa z sosem z kurek', price: '89 zł' },
    { name: 'Kaczka pieczona z jabłkami i modrą kapustą', price: '78 zł' },
    { name: 'Sandacz ze szpinakiem i masłem czosnkowym', price: '72 zł' },
    { name: 'Dziczyzna — sarnina duszona w winie z kluskami śląskimi', price: '85 zł' },
  ],
  desery: [
    { name: 'Szarlotka na ciepło z lodami waniliowymi', price: '28 zł' },
    { name: 'Sernik domowy z sosem malinowym', price: '26 zł' },
    { name: 'Pączki z różą i lukrem', price: '18 zł' },
    { name: 'Racuchy z jabłkami i cukrem pudrem', price: '24 zł' },
  ],
};

export function MenuTabs() {
  const [active, setActive] = useState('zimny');
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const activate = (key: string, idx: number) => {
    setActive(key);
    tabsRef.current[idx]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const idx = CATEGORIES.findIndex((c) => c.key === active);
    let next = idx;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next = (idx + 1) % CATEGORIES.length; }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); next = (idx - 1 + CATEGORIES.length) % CATEGORIES.length; }
    else if (e.key === 'Home') { e.preventDefault(); next = 0; }
    else if (e.key === 'End') { e.preventDefault(); next = CATEGORIES.length - 1; }
    else return;
    activate(CATEGORIES[next].key, next);
  };

  return (
    <>
      <div className="menu__tabs" role="tablist" aria-label="Kategorie jadłospisu" onKeyDown={onKeyDown}>
        {CATEGORIES.map((c, i) => (
          <button
            key={c.key}
            ref={(el) => { tabsRef.current[i] = el; }}
            role="tab"
            id={`tab-${c.key}`}
            aria-selected={active === c.key}
            aria-controls={`panel-${c.key}`}
            tabIndex={active === c.key ? 0 : -1}
            className={`menu__tab${active === c.key ? ' menu__tab--active' : ''}`}
            onClick={() => activate(c.key, i)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {CATEGORIES.map((c) => (
        <div
          key={c.key}
          role="tabpanel"
          id={`panel-${c.key}`}
          aria-labelledby={`tab-${c.key}`}
          className={`menu__panel${active === c.key ? ' menu__panel--active' : ''}`}
        >
          <ul className="menu__list">
            {DATA[c.key].map((item, i) => (
              <li key={i} className="menu__item">
                <div>
                  <h4>{item.name}</h4>
                  {item.desc && <p className="menu__item-desc">{item.desc}</p>}
                </div>
                <span className="menu__price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
