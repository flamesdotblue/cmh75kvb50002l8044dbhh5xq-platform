import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm">
        <div className="col-span-2 md:col-span-2">
          <div className="text-xl font-bold">Starstream</div>
          <p className="mt-2 text-white/70 max-w-sm">
            Stream premium stories across devices. Experience a universe of entertainment with a sleek, immersive interface.
          </p>
          <p className="mt-4 text-white/40">© {new Date().getFullYear()} Starstream Media</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white/80 font-semibold mb-1">Browse</h4>
          <a href="#" className="text-white/60 hover:text-white">TV</a>
          <a href="#" className="text-white/60 hover:text-white">Movies</a>
          <a href="#" className="text-white/60 hover:text-white">Sports</a>
          <a href="#" className="text-white/60 hover:text-white">News</a>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white/80 font-semibold mb-1">Company</h4>
          <a href="#" className="text-white/60 hover:text-white">About</a>
          <a href="#" className="text-white/60 hover:text-white">Careers</a>
          <a href="#" className="text-white/60 hover:text-white">Press</a>
          <a href="#" className="text-white/60 hover:text-white">Investors</a>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-white/80 font-semibold mb-1">Help</h4>
          <a href="#" className="text-white/60 hover:text-white">FAQ</a>
          <a href="#" className="text-white/60 hover:text-white">Contact</a>
          <a href="#" className="text-white/60 hover:text-white">Supported Devices</a>
          <a href="#" className="text-white/60 hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
