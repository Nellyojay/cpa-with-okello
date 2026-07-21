import { useState } from "react";

const schedule = [
  { day: 'Monday', task: 'Audit practice', time: '7:00 PM', sessionLink: 'https:123456789' },
  { day: 'Tuesday', task: 'Tax revision', time: '6:30 PM', sessionLink: 'https:123456789' },
  { day: 'Wednesday', task: 'Financial reporting review', time: '8:00 PM', sessionLink: '' },
  { day: 'Thursday', task: 'Group discussion', time: '7:30 PM', sessionLink: 'https:123456789' },
]

function TimeTable() {
  const [openLink, setOpenLink] = useState<string | null>(null);
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
              <button
                type="button"
                onClick={() => setOpenLink(openLink === item.day ? null : item.day)}
                className="flex w-full items-center justify-between text-left"
              >
                <div>
                  <p className="font-semibold text-white">{item.day}</p>
                  <p className="text-sm text-slate-400">{item.task}</p>
                </div>

                <div className="flex items-center">
                  <p className="text-sm font-semibold text-primary w-20 text-right">{item.time}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ml-3 transform transition-transform duration-200 ${openLink === item.day ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-200 ${openLink === item.day ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              {item.sessionLink ? (
                <a
                  href={item.sessionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-strong sm:hover:text-primary not-sm:active:text-primary block"
                >
                  Join class: {item.sessionLink.slice(0, 12)}...
                </a>
              ) : (
                <p className="text-gray-400">--Class not created yet--</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeTable
