import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-white bg-clip-text text-transparent">Starstream</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm text-white/80">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">TV</a>
            <a href="#" className="hover:text-white transition">Movies</a>
            <a href="#" className="hover:text-white transition">Sports</a>
            <a href="#" className="hover:text-white transition">Premium</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
            <Search size={16} className="text-white/70" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none placeholder:text-white/50 text-sm w-40"
            />
          </div>
          <button aria-label="Notifications" className="p-2 hover:bg-white/10 rounded">
            <Bell size={20} />
          </button>
          <button aria-label="Account" className="flex items-center gap-2 bg-white text-black text-sm font-medium px-3 py-1.5 rounded-full">
            <User size={16} />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
