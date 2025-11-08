import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange }) => (
  <div className="group relative">
    <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-slate-200 bg-white/80 py-3 pl-10 pr-3 text-sm text-slate-900 placeholder-slate-400 outline-none ring-0 transition focus:border-pink-300 focus:bg-white focus:shadow-[0_0_0_4px] focus:shadow-pink-100"
    />
  </div>
);

const Auth = () => {
  const [mode, setMode] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === 'signup' ? 'Signed up' : 'Logged in'} as ${email}`);
  };

  return (
    <section className="relative py-20" id="auth">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Create your account</h2>
          <p className="mt-3 text-slate-600">Start issuing cards and accepting payments in minutes. No code required.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• One-click SSO</li>
            <li>• 2FA and device approvals</li>
            <li>• Granular team roles</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 backdrop-blur">
          <div className="mb-4 inline-flex rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100">Secure by design</div>
          <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
            <button
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              onClick={() => setMode('signup')}
            >
              Sign up
            </button>
            <button
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${mode === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              onClick={() => setMode('login')}
            >
              Log in
            </button>
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            {mode === 'signup' && (
              <Input icon={User} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
            )}
            <Input icon={Mail} type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input icon={Lock} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]"
            >
              {mode === 'signup' ? 'Create account' : 'Sign in'}
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-slate-500">
            By continuing, you agree to our Terms and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
