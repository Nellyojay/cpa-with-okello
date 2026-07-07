import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import HomePage from './pages'
import StudentPage from './pages/studentPage'
import LoginPage from './pages/auth/login'
import SignupPage from './pages/auth/signup'
import StudentRegistry from './components/studentRegistery'
import PaymentSchedule from './components/paymentschedule'
import TimeTable from './components/timeTable'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student" element={<StudentPage />} />
            <Route path="/register" element={<StudentRegistry />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/payments" element={<PaymentSchedule />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
