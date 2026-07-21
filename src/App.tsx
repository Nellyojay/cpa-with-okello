import { useEffect, useState, type JSX } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages'
import StudentPage from './pages/studentPage'
import LoginPage from './pages/auth/login'
import SignupPage from './pages/auth/signup'
import StudentRegistry from './pages/studentRegistery'
import PaymentSchedule from './components/paymentschedule'
import TimeTable from './components/timeTable'

function App() {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Boolean(window.localStorage.getItem('signedIn'))
    }
    return false
  })

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (window.localStorage.getItem('cpa-theme') as 'dark' | 'light') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('cpa-theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (signedIn) {
        window.localStorage.setItem('signedIn', 'true')
      } else {
        window.localStorage.removeItem('signedIn')
      }
    }
  }, [signedIn])

  function RequireAuth({ children }: { children: JSX.Element }) {
    return signedIn ? children : <Navigate to="/login" replace />
  }

  const handleSignIn = () => setSignedIn(true)
  const handleSignOut = () => setSignedIn(false)

  return (
    <HashRouter>
      <div className="min-h-screen bg-bg text-text">
        <Navbar
          theme={theme}
          onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          signedIn={signedIn}
          onSignOut={handleSignOut}
        />
        <main className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage signedIn={signedIn} />} />
            <Route path="/student" element={<RequireAuth><StudentPage /></RequireAuth>} />
            <Route path="/register" element={<RequireAuth><StudentRegistry /></RequireAuth>} />
            <Route path="/timetable" element={<RequireAuth><TimeTable /></RequireAuth>} />
            <Route path="/payments" element={<PaymentSchedule />} />
            <Route
              path="/login"
              element={signedIn ? <Navigate to="/student" replace /> : <LoginPage onSignIn={handleSignIn} />}
            />
            <Route
              path="/signup"
              element={signedIn ? <Navigate to="/student" replace /> : <SignupPage onSignIn={handleSignIn} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
