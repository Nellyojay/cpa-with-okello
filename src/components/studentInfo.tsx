function StudentInfo() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30 sm:p-6">
        <h2 className="text-xl font-semibold text-white">Profile summary</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <span>Student ID</span>
            <span className="font-medium text-white">CPA-2048</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <span>Program</span>
            <span className="font-medium text-white">Certified Public Accountant</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <span>Status</span>
            <span className="font-medium text-emerald-300">Active</span>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30 sm:p-6">
        <h2 className="text-xl font-semibold text-white">Study progress</h2>
        <div className="mt-4 space-y-4">
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Financial Reporting</span>
              <span>76%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[76%] rounded-full bg-cyan-500" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <span>Taxation</span>
              <span>54%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[54%] rounded-full bg-violet-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentInfo
