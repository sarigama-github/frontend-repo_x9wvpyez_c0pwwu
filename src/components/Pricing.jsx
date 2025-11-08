import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    tagline: 'For trying things out',
    features: [
      'Up to 500 monthly active cards',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Start for free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$49',
    tagline: 'For scaling teams',
    features: [
      'Up to 10k active cards',
      'Advanced analytics',
      'Priority chat support',
      'Custom card controls',
    ],
    cta: 'Upgrade',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'For regulated at scale',
    features: [
      'Unlimited cards',
      'Dedicated SSO & SAML',
      'Premium support',
      'Compliance assistance',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-sky-50/50 py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you grow. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition ${
                tier.popular ? 'shadow-xl shadow-pink-200/50' : 'shadow-sm'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pink-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{tier.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-semibold text-slate-900">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="mb-1 text-sm text-slate-500">/mo</span>}
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-pink-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#auth"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
                  tier.popular
                    ? 'bg-slate-900 text-white hover:translate-y-[-1px]'
                    : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
