import React from 'react';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Designing fintech with calm colors',
    excerpt: 'How soft pastels increase trust and reduce cognitive load in money apps.',
    tag: 'Design',
    date: 'Oct 2025',
  },
  {
    title: 'Issuing virtual cards in minutes',
    excerpt: 'A technical walkthrough of our modern card issuing stack.',
    tag: 'Product',
    date: 'Sep 2025',
  },
  {
    title: 'Beyond payment links: checkout as a service',
    excerpt: 'Why embeddable flows beat building from scratch for growing teams.',
    tag: 'Growth',
    date: 'Aug 2025',
  },
];

const Blog = () => {
  return (
    <section className="relative bg-white py-20" id="blog">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">From our blog</h2>
          <p className="mt-3 text-slate-600">Insights on payments, cards, and building a modern financial platform.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group relative rounded-2xl bg-gradient-to-br from-sky-50 to-pink-50 p-6 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/5"
            >
              <div className="text-xs font-medium text-slate-500">{p.tag} • {p.date}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">Read more <ArrowRight className="ml-1 h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
