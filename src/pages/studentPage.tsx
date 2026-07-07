import StudentInfo from '../components/studentInfo'

function StudentPage() {
  return (
    <div className="w-full space-y-6">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Student dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back, Daniel.</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Review your profile, keep up with your timetable, and plan your next study session.
        </p>
      </section>

      <StudentInfo />
    </div>
  )
}

export default StudentPage
