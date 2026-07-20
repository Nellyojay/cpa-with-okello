import StudentInfo from '../components/studentInfo'

function StudentPage() {
  return (
    <div className="w-full space-y-6">
      <section className="portal-card p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Student dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back.</h1>
        <p className="mt-2 max-w-2xl text-gray-400">
          Review your profile, keep up with your timetable, and plan your next study session.
        </p>
      </section>

      <StudentInfo />
    </div>
  )
}

export default StudentPage
