'use client';

import { useState } from 'react';
import Image from 'next/image';

const FILTERS = ['all', 'wnetrza', 'potrawy', 'kuchnia'] as const;
const LABELS: Record<string, string> = { all: 'Wszystkie', wnetrza: 'Wnętrza', potrawy: 'Potrawy', kuchnia: 'Kuchnia od kuchni' };

const ITEMS = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', alt: 'Eleganckie wnętrze restauracji', cat: 'wnetrza' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop', alt: 'Polędwica wołowa z sosem', cat: 'potrawy' },
  { src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop', alt: 'Szef kuchni przygotowuje danie', cat: 'kuchnia' },
  { src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop', alt: 'Stolik nakryty dla gości', cat: 'wnetrza' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop', alt: 'Pierogi tradycyjne', cat: 'potrawy' },
  { src: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=600&h=400&fit=crop', alt: 'Kucharze przy pracy', cat: 'kuchnia' },
  { src: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&h=400&fit=crop', alt: 'Bar z kolekcją alkoholi', cat: 'wnetrza' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', alt: 'Deska serów i wędlin', cat: 'potrawy' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop', alt: 'Kolorowa sałatka', cat: 'potrawy' },
];

export function GalleryFilter() {
  const [active, setActive] = useState<string>('all');

  return (
    <>
      <div className="gallery__filters" role="group" aria-label="Filtry galerii">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`gallery__filter${active === f ? ' gallery__filter--active' : ''}`}
            onClick={() => setActive(f)}
          >
            {LABELS[f]}
          </button>
        ))}
      </div>
      <div className="gallery__grid">
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={`gallery__item${active !== 'all' && item.cat !== active ? ' gallery__item--hidden' : ''}`}
          >
            <Image src={item.src} alt={item.alt} width={600} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div className="gallery__item__overlay"><span>{item.alt}</span></div>
          </div>
        ))}
      </div>
    </>
  );
}
