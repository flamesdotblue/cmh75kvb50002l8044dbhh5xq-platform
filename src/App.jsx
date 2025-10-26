import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';

const trending = [
  {
    id: 'tr1',
    title: 'Galactic Odyssey',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1517976487492-576ea6b2936f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tr2',
    title: 'Neon Nights',
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tr3',
    title: 'Quantum Rift',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tr4',
    title: 'Starfall',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tr5',
    title: 'Dark Matter',
    rating: 4.4,
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop'
  }
];

const newAndHot = [
  {
    id: 'nh1',
    title: 'Orbit Zero',
    rating: 4.2,
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'nh2',
    title: 'Eclipse Run',
    rating: 4.1,
    img: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'nh3',
    title: 'Photon Edge',
    rating: 4.0,
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'nh4',
    title: 'Aurora Drift',
    rating: 4.3,
    img: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop'
  }
];

const topPicks = [
  {
    id: 'tp1',
    title: 'Cosmos Reborn',
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tp2',
    title: 'Pulse City',
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tp3',
    title: 'Gravity Line',
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'tp4',
    title: 'Nebula Prime',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <main className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-10 pb-16">
        <Row title="Trending Now" items={trending} />
        <Row title="New & Hot" items={newAndHot} />
        <Row title="Top Picks For You" items={topPicks} />
      </main>
      <Footer />
    </div>
  );
}
