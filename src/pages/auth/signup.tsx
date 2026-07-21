import { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignupPage({ onSignIn }: { onSignIn: () => void }) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [next, setNext] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="portal-card mx-auto flex w-full max-w-xl flex-col p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Create account</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Join the CPA portal</h1>
      <p className="mt-3 text-sm text-slate-300 sm:text-base">Set up your account to start learning with structure.</p>
      <div className="mt-6 space-y-3">
        {next ? (
          <>
            <a
              href=""
              onClick={() => setNext(false)}
              className="text-gray-500 hover:text-gray-400"
            >
              - Go back
            </a>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-surface-soft px-4 py-3 mt-4 text-slate-100 outline-none focus:border-primary"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Full name"
            />
          </>

        ) : (
          <>
            <input
              className="w-full rounded-2xl border border-slate-700 bg-surface-soft px-4 py-3 text-slate-100 outline-none focus:border-primary"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="w-full rounded-2xl border border-slate-700 bg-surface-soft px-4 py-3 text-slate-100 outline-none focus:border-primary"
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </>
        )}

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {!next ? (
          <button
            onClick={() => {
              if (email && password) {
                setError('')
                setNext(true)
              } else {
                setError("Please fill in the required field")
              }
            }}
            className="w-full rounded-full bg-primary px-4 py-3 font-semibold text-slate-950 transition hover:bg-primary-strong"
          >Next</button>
        ) : (
          <button
            onClick={() => {
              if (name) {
                setError('')
                onSignIn()
                navigate('/student')
              } else {
                setError("Please fill in the required field")
              }
            }}
            className="w-full rounded-full bg-primary px-4 py-3 font-semibold text-slate-950 transition hover:bg-primary-strong"
          >Sign up</button>
        )}
        <a href="/login" className="block text-center text-sm text-primary transition hover:text-primary-strong">Already have an account? Log in</a>
      </div>
    </div>
  )
}

export default SignupPage

