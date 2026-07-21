import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar({
  theme,
  onToggleTheme,
  signedIn,
  onSignOut,
}: {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
  signedIn: boolean
  onSignOut: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const links = [
    { to: '/', label: 'Home' },
    ...(signedIn ? [
      { to: '/student', label: 'Dashboard' },
      { to: '/register', label: 'Registration' },
      { to: '/timetable', label: 'Timetable' },
    ] : []),
    { to: '/payments', label: 'Payments' },
    ...(!signedIn
      ? [
        { to: '/login', label: 'Login' },
        { to: '/signup', label: 'Join' },
      ]
      : [{ to: '/login', label: 'Log Out', isLogout: true }]
    ),
  ]

  return (
    <header className="border-b border-border bg-surface/90 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex md:justify-between max-w-7xl not-md:flex-col md:items-center gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-4">
          <NavLink to="/" className="text-lg font-semibold text-primary" onClick={() => setIsOpen(false)}>
            CPA Portal
          </NavLink>

          <div className="flex items-center gap-2">
            <button
              title='coming soon'
              type="button"
              onClick={() => { onToggleTheme }}
              className="rounded-full border border-border bg-surface-soft px-3 py-2 text-sm font-medium text-text transition hover:border-primary hover:text-primary hidden"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>

            <button
              title='Toggle navigation'
              type="button"
              className="rounded-full border border-border p-2 text-text transition hover:border-primary hover:text-primary md:hidden"
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
            className={`flex flex-col gap-2 border-t border-border pt-3 transition-all duration-300 ease-out md:flex md:flex-row md:items-center md:gap-2 md:border-t-0 md:pt-0 ${isOpen ? 'max-h-auto opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
              }`}
          >
            {links.map((link) => (
              link.isLogout ? (
                <button
                  key={link.to}
                  type="button"
                  onClick={() => {
                    onSignOut()
                    navigate('/login')
                    setIsOpen(false)
                  }}
                  className="rounded-full px-3 py-2 text-sm transition text-text-soft hover:bg-red-900/50 hover:text-text border"
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-sm transition ${isActive
                      ? 'text-text-soft font-semibold border'
                      : 'text-text-soft hover:bg-surface-soft hover:text-text'
                    }
                    ${link.label === 'Join'
                      ? 'font-bold text-center border border-gray-500 sm:hover:border-primary sm:hover:text-white'
                      : ''
                    }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
