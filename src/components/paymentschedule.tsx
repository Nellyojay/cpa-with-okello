const payments = [
  { label: 'Tuition fee', amount: 'UGX 150,000', due: 'Due now' },
  { label: 'Revision package', amount: 'UGX 25,000', due: 'Due in 10 days' },
]

function PaymentSchedule() {
  return (
    <div className="portal-card w-full p-6 sm:p-8 lg:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Payment plan</p>
      <h1 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Stay ahead of your fees</h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
        Keep track of your upcoming payments and avoid delays in your student account.
      </p>
      <div className="mt-6 space-y-3">
        {payments.map((item) => (
          <div key={item.label} className="portal-card-strong flex flex-wrap items-center justify-between px-4 py-4">
            <div>
              <p className="font-semibold text-white">{item.label}</p>
              <p className="text-sm text-slate-400">{item.due}</p>
            </div>
            <p className="text-sm font-semibold text-primary">{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentSchedule
