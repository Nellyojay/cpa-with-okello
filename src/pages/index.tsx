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

import { Link } from 'react-router-dom'

function HomePage({ signedIn }: { signedIn: boolean }) {
  return (
    <div className="w-full space-y-6">
      <section className="portal-card p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">CPA WITH OKELLO DICKSON</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Learn better with a calm and more interactive experience.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          This starter portal helps CPA students stay on track with study resources, registration, payments, and their weekly timetable.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to={signedIn ? '/student' : '/login'} className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-primary-strong">
            {signedIn ? 'Go to dashboard' : 'Open dashboard'}
          </Link>
          {!signedIn && (
            <Link to="/signup" className="rounded-full border border-slate-700 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 transition hover:border-primary hover:text-primary">
              Create account
            </Link>
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item) => (
          <article key={item.title} className="portal-card-strong p-5">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HomePage
