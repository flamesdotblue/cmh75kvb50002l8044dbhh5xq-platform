import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none"></div>

      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-white/80 bg-white/10 rounded-full px-3 py-1 mb-4">
            <span className="inline-flex items-center gap-1"><Star size={14} className="text-yellow-300" /> Featured</span>
            <span className="opacity-60">Sci‑Fi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Journey Through the Purple Galaxy
          </h1>
          <p className="mt-3 sm:mt-4 text-white/80 max-w-prose">
            Explore a cosmic saga across a digital nebula. Stream stunning stories in ultra clarity with immersive sound.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 bg-white text-black font-semibold px-5 py-2.5 rounded-full hover:opacity-90">
              <Play size={18} />
              Watch Now
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/20">
              + My List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
