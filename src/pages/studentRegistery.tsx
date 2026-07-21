import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentSchedule from "../components/paymentschedule";

function StudentRegistry() {
  const navigate = useNavigate();
  const [openStep1, setOpenStep1] = useState(false);
  const [openStep2, setOpenStep2] = useState(false);
  const [registered, setRegistered] = useState(false)

  return (
    <div className="portal-card w-full p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Registration</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Register for your next intake</h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        Complete your registration quickly and keep your exam plans on track.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="portal-card-strong p-5 sm:hover:border-gray-300">
          <a
            href="#"
            onClick={() => {
              setOpenStep1(!openStep1)
              setOpenStep2(false)
            }
            }
          >
            <h2 className="text-lg font-semibold text-white">Step 1</h2>
            <p className="mt-2 text-sm text-slate-400">Submit your selected papers and review your study details.</p>
          </a>

          {openStep1 && (
            <div>
              <div id="papers" className="py-4 px-2">
                <h2 className="text-primary underline">Papers</h2>
                <p>Paper 1</p>
                <p>Paper 2</p>
                <p>Paper 3</p>
                <p>Paper 4</p>
              </div>

              <div id="tie-table" className="px-2">
                <h2 className="mb-2 underline text-primary">Sitting</h2>
                <select name="" id="" className="bg-card-strong rounded-2xl px-2">
                  <option value="">--Select--</option>
                  <option value="may">May</option>
                  <option value="august">August</option>
                  <option value="december">December</option>
                </select>
              </div>
            </div>
          )}

        </div>
        <div className="portal-card-strong p-5 sm:hover:border-gray-300">
          <a
            href="#"
            onClick={() => {
              setOpenStep2(!openStep2)
              setOpenStep1(false)
            }
            }
          >
            <h2 className="text-lg font-semibold text-white">Step 2</h2>
            <p className="mt-2 text-sm text-slate-400">Review payments details.</p>
          </a>

          {openStep2 && (
            <div className="mt-4">
              <PaymentSchedule />
            </div>
          )}

        </div>

        <div className="flex items-center justify-center pt-4">
          <button
            title="submit-data"
            onClick={() => {
              setRegistered(true)

              if (registered === true) {
                localStorage.setItem("registered", JSON.stringify(registered));
                navigate('/student')
              }
            }}
            className="border border-gray-500 px-4 py-2 rounded-2xl bg-primary-strong text-card-strong font-semibold sm:hover:bg-primary transition-all"
          >
            Submit Registraton
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentRegistry
