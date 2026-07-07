function SignupPage() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Create account</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Join the CPA portal</h1>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">Set up your account to start learning with structure.</p>
      <div className="mt-6 space-y-3">
        <input className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Full name" />
        <input className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Email address" />
        <input className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400" placeholder="Password" type="password" />
        <button className="w-full rounded-full bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">Sign up</button>
        <a href="/login" className="block text-center text-sm text-cyan-300 transition hover:text-cyan-400">Already have an account? Log in</a>
      </div>
    </div>
  )
}

export default SignupPage
