function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Tailwind is ready
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Your React + TypeScript app is now styled with Tailwind CSS.
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          You can start building interfaces with utility classes immediately.
        </p>
      </div>
    </main>
  )
}

export default App
