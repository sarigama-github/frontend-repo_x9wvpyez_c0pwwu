import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Blog from './components/Blog';

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#" className="flex items-center gap-2 text-slate-900">
        <span className="inline-block h-6 w-6 rounded-lg bg-gradient-to-br from-pink-400 to-sky-400" />
        <span className="font-semibold">PastelPay</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
        <a href="#features" className="hover:text-slate-900">Features</a>
        <a href="#pricing" className="hover:text-slate-900">Pricing</a>
        <a href="#blog" className="hover:text-slate-900">Blog</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#auth" className="hidden text-sm text-slate-700 hover:text-slate-900 md:inline">
          Sign in
        </a>
        <a href="#auth" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Get started
        </a>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-600 md:flex-row">
      <div className="flex items-center gap-2">
        <span className="inline-block h-6 w-6 rounded-lg bg-gradient-to-br from-pink-400 to-sky-400" />
        <span className="font-semibold text-slate-900">PastelPay</span>
        <span className="hidden md:inline">— calm fintech for modern teams</span>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-slate-900">Privacy</a>
        <a href="#" className="hover:text-slate-900">Terms</a>
        <a href="#" className="hover:text-slate-900">Status</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Auth />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
