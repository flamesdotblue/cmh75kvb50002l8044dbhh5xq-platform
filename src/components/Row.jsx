import React, { useRef } from 'react';
import { Star } from 'lucide-react';

export default function Row({ title, items = [] }) {
  const containerRef = useRef(null);

  const scrollBy = (offset) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scrollBy(-500)} className="rounded bg-white/10 hover:bg-white/20 px-3 py-1 text-sm">Prev</button>
          <button onClick={() => scrollBy(500)} className="rounded bg-white/10 hover:bg-white/20 px-3 py-1 text-sm">Next</button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
      >
        {items.map((item) => (
          <a
            key={item.id}
            href="#"
            className="group relative min-w-[55%] sm:min-w-[40%] md:min-w-[28%] lg:min-w-[20%] aspect-[2/3] rounded-xl overflow-hidden bg-white/5 snap-start"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.06]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/80" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <span className="inline-flex items-center gap-1"><Star size={14} className="text-yellow-300" /> {item.rating.toFixed(1)}</span>
                <span className="opacity-60">HD</span>
              </div>
              <h3 className="mt-1 text-sm font-semibold leading-tight line-clamp-2">{item.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
