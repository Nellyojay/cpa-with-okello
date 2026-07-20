import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/student', label: 'Dashboard' },
  { to: '/register', label: 'Register' },
  { to: '/timetable', label: 'Timetable' },
  { to: '/payments', label: 'Payments' },
]

function Navbar({ theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-lg font-semibold text-[var(--color-primary)]" onClick={() => setIsOpen(false)}>
            CPA Portal
          </NavLink>

          <div className="flex items-center gap-2">
            <button
              title='coming soon'
              type="button"
              onClick={() => { }}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-soft)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            <button
              title='Toggle navigation'
              type="button"
              className="rounded-full border border-[var(--color-border)] p-2 text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:hidden"
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
        </div>

        <div className="overflow-hidden md:block">
          <nav
            className={`flex flex-col gap-2 border-t border-[var(--color-border)] pt-3 transition-all duration-300 ease-out md:flex md:flex-row md:items-center md:gap-2 md:border-t-0 md:pt-0 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
              }`}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm transition ${isActive
                    ? 'bg-[var(--color-primary)] text-slate-950'
                    : 'text-[var(--color-text-soft)] hover:bg-[var(--color-surface-soft)] hover:text-[var(--color-text)]'
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
