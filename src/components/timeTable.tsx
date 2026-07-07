const schedule = [
  { day: 'Monday', task: 'Audit practice', time: '7:00 PM' },
  { day: 'Tuesday', task: 'Tax revision', time: '6:30 PM' },
  { day: 'Wednesday', task: 'Financial reporting review', time: '8:00 PM' },
  { day: 'Thursday', task: 'Group discussion', time: '7:30 PM' },
]

function TimeTable() {
  return (
    <div className="portal-card w-full p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-primary)]">Study timetable</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Weekly learning plan</h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        A simple weekly plan to help you stay consistent and reduce last-minute stress.
      </p>
      <div className="mt-6 space-y-3">
        {schedule.map((item) => (
          <div key={item.day} className="portal-card-strong flex flex-wrap items-center justify-between px-4 py-4">
            <div>
              <p className="font-semibold text-white">{item.day}</p>
              <p className="text-sm text-slate-400">{item.task}</p>
            </div>
            <p className="text-sm font-semibold text-[var(--color-primary)]">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeTable
