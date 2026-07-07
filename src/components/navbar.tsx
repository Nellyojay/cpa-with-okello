import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/student', label: 'Dashboard' },
  { to: '/register', label: 'Register' },
  { to: '/timetable', label: 'Timetable' },
  { to: '/payments', label: 'Payments' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-lg font-semibold text-cyan-400" onClick={() => setIsOpen(false)}>
            CPA Portal
          </NavLink>

          <button
            title='Toggle navigation'
            type="button"
            className="rounded-full border border-slate-700 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'top-2.5 rotate-45' : 'top-1'
                  }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? '-top-0.5 -rotate-45' : 'top-4'
                  }`}
              />
            </div>
          </button>
        </div>

        <div className="overflow-hidden md:block">
          <nav
            className={`flex flex-col gap-2 border-t border-slate-800 pt-3 transition-all duration-300 ease-out md:flex md:flex-row md:items-center md:gap-2 md:border-t-0 md:pt-0 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
              }`}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${isActive
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
