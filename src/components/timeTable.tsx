import { useState } from "react";

const schedule = [
  { day: 'Monday', task: 'Audit practice', time: '7:00 PM', sessionLink: 'https:123456789' },
  { day: 'Tuesday', task: 'Tax revision', time: '6:30 PM', sessionLink: 'https:123456789' },
  { day: 'Wednesday', task: 'Financial reporting review', time: '8:00 PM', sessionLink: '' },
  { day: 'Thursday', task: 'Group discussion', time: '7:30 PM', sessionLink: 'https:123456789' },
]

function TimeTable() {
  const [openLink, setOpenLink] = useState(false);
  return (
    <div className="portal-card w-full p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Study timetable</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Weekly learning plan</h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        A simple weekly plan to help you stay consistent and reduce last-minute stress.
      </p>
      <div className="mt-6 space-y-3">
        {schedule.map((item) => (
          <div key={item.day} className="portal-card-strong px-4 py-4 sm:hover:border-gray-500">
            <div className="flex flex-1 items-center justify-between mb-2">
              <a href="#" key={item.day} onClick={() => setOpenLink(!openLink)}>
                <p className="font-semibold text-white">{item.day}</p>
                <p className="text-sm text-slate-400">{item.task}</p>
              </a>
              <p className="text-sm font-semibold text-primary">{item.time}</p>
            </div>

            {Boolean(openLink && item.sessionLink) ? (
              <a href="#"
                className="text-primary-strong sm:hover:text-primary not-sm:active:text-primary"
              >
                Join class: {item.sessionLink.slice(0, 12)}...
              </a>
            ) : Boolean(openLink && !item.sessionLink) && (
              <p className="text-gray-400">--Class not created yet--</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeTable
