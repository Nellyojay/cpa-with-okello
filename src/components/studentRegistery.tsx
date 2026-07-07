function StudentRegistry() {
  return (
    <div className="portal-card w-full p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">Registration</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Register for your next intake</h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        Complete your registration quickly and keep your exam plans on track.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="portal-card-strong p-5">
          <h2 className="text-lg font-semibold text-white">Step 1</h2>
          <p className="mt-2 text-sm text-slate-400">Confirm your personal details and preferred exam center.</p>
        </div>
        <div className="portal-card-strong p-5">
          <h2 className="text-lg font-semibold text-white">Step 2</h2>
          <p className="mt-2 text-sm text-slate-400">Submit your selected papers and review payment instructions.</p>
        </div>
      </div>
    </div>
  )
}

export default StudentRegistry
