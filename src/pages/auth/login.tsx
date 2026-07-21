import { useNavigate } from "react-router-dom";

function LoginPage() {
  const session = "CPA-session-123456789";
  const navigate = useNavigate();

  return (
    <div className="portal-card mx-auto flex w-full max-w-xl flex-col p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Sign in</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Access your student account</h1>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">Enter your credentials to continue.</p>
      <div className="mt-6 space-y-3">
        <input className="w-full rounded-2xl border border-slate-700 bg-surface-soft px-4 py-3 text-slate-100 outline-none focus:border-primary" placeholder="Email address" />
        <input className="w-full rounded-2xl border border-slate-700 bg-surface-soft px-4 py-3 text-slate-100 outline-none focus:border-primary" placeholder="Password" type="password" />
        <button
          onClick={() => {
            localStorage.setItem('signedIn', session)
            navigate('/student')
          }}
          className="w-full rounded-full bg-primary px-4 py-3 font-semibold text-slate-950 transition hover:bg-primary-strong"
        >Log in</button>
      </div>
      <p className="mt-4 text-sm text-slate-400">
        New here? <a href="/signup" className="text-primary">Create an account</a>
      </p>
    </div>
  )
}

export default LoginPage
