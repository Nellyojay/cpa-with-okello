import { useEffect, useState } from 'react'
import StudentInfo from '../components/studentInfo'
import { useNavigate } from 'react-router-dom';

function StudentPage() {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState<string | boolean | null>(null);

  useEffect(() => {
    const confirm = localStorage.getItem('registered')
    setRegistered(confirm)
  }, [])

  return (
    <div className="w-full space-y-6">
      <section className="portal-card p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Student dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back.</h1>
        <p className="mt-2 max-w-2xl text-gray-400">
          Review your profile, keep up with your timetable, and plan your next study session.
        </p>
      </section>

      {registered ? (
        <StudentInfo />
      ) : (
        <div
          className='flex items-center justify-center'
        >
          <button
            title='register for CPA paper'
            onClick={() => navigate('/register')}
            className='border border-gray-700 p-3 rounded-2xl bg-primary-strong sm:hover:bg-primary font-semibold text-black'
          >
            Register For Paper
          </button>
        </div>
      )}
    </div>
  )
}

export default StudentPage
