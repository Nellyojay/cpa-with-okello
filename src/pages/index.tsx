const quickLinks = [
  {
    title: 'Study plan',
    description: 'Keep your weekly topics and milestones in one place.',
  },
  {
    title: 'Past papers',
    description: 'Practice real questions and review your weak spots.',
  },
  {
    title: 'Calendar',
    description: 'Track exams, submissions, and revision deadlines.',
  },
  {
    title: 'Support',
    description: 'Reach tutors and peers whenever you need guidance.',
  },
]

function HomePage() {
  return (
    <div className="w-full space-y-6">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/40 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">CPA student portal</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Learn better with a calm, focused study space.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          This starter portal helps CPA students stay on track with study resources, registration, payments, and their weekly timetable.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="/student" className="rounded-full bg-cyan-500 px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Open dashboard
          </a>
          <a href="/signup" className="rounded-full border border-slate-700 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
            Create account
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
