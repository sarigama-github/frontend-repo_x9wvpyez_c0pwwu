import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft pastel gradient veil to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-pink-100/80 px-3 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-200 backdrop-blur">
          <Rocket className="h-3.5 w-3.5" />
          Modern Fintech Platform
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          The pastel-simple way to manage your digital commerce
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">
          Accept payments, issue virtual cards, and automate payouts with a minimalist, secure experience.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#auth"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-[-1px] hover:shadow-slate-900/20"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-white/80 px-5 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
