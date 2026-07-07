function SignupPage() {
  return (
    <div className="portal-card mx-auto flex w-full max-w-xl flex-col p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">Create account</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Join the CPA portal</h1>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">Set up your account to start learning with structure.</p>
      <div className="mt-6 space-y-3">
        <input className="w-full rounded-2xl border border-slate-700 bg-[var(--color-surface-soft)] px-4 py-3 text-slate-100 outline-none focus:border-[var(--color-primary)]" placeholder="Full name" />
        <input className="w-full rounded-2xl border border-slate-700 bg-[var(--color-surface-soft)] px-4 py-3 text-slate-100 outline-none focus:border-[var(--color-primary)]" placeholder="Email address" />
        <input className="w-full rounded-2xl border border-slate-700 bg-[var(--color-surface-soft)] px-4 py-3 text-slate-100 outline-none focus:border-[var(--color-primary)]" placeholder="Password" type="password" />
        <button className="w-full rounded-full bg-[var(--color-primary)] px-4 py-3 font-semibold text-slate-950 transition hover:bg-[var(--color-primary-strong)]">Sign up</button>
        <a href="/login" className="block text-center text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary-strong)]">Already have an account? Log in</a>
      </div>
    </div>
  )
}

export default SignupPage
