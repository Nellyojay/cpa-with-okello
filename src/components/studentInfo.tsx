function StudentInfo() {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/30 sm:p-6">
        <h2 className="text-xl font-semibold text-white">Profile summary</h2>
        <div className="mt-4 space-y-3 text-sm text-slate-300">
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Student ID</span>
            <span className="font-medium text-white">CPA27AB1277</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Program</span>
            <span className="font-medium text-white">Certified Public Accountant</span>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Status</span>
            <span className="font-medium text-emerald-300">Active</span>
          </div>
        </div>
      </div>

      <div className="portal-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-white">Registered Pappers</h2>
        <div className="mt-4 space-y-2">
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <p>Financial Reporting</p>
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm text-slate-300">
              <p>Quantitative Techniques</p>
            </div>
          </div>
        </div>
      </div>

      <div className="portal-card p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-white">Time Table</h2>
        <div className="mt-4 space-y-4">
          <p className="font-bold text-gray-500">-- No data --</p>
        </div>
      </div>
    </section>
  )
}

export default StudentInfo
