import React from 'react';
import { ShieldCheck, CreditCard, ChartBar, Zap } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    desc: 'Spin up cards instantly with spend controls, soft pastel UI and real-time alerts.'
  },
  {
    icon: ChartBar,
    title: 'Unified Analytics',
    desc: 'Understand revenue, churn, and cohorts at a glance with tidy dashboards.'
  },
  {
    icon: ShieldCheck,
    title: 'Bank‑grade Security',
    desc: 'Encryption, tokenization, and compliance built in by default.'
  },
  {
    icon: Zap,
    title: 'Fast Payouts',
    desc: 'Automate settlement to your bank or wallets in hours, not days.'
  }
];

const Features = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20" id="features">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Everything you need to launch</h2>
        <p className="mt-3 text-slate-600">Designed with a minimalist pastel aesthetic that feels calm and trustworthy.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-sky-100 ring-1 ring-white">
              <Icon className="h-6 w-6 text-slate-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
