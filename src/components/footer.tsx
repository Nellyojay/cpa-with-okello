function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-surface/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p>
            <strong>Contact:</strong> <a href="mailto:info@okellocpa.com" className="text-slate-200">info@okellocpa.com</a> · <a href="mailto:support@okellocpa.com" className="text-slate-200">support@okellocpa.com</a>
            <br />
            <strong>Phone:</strong> <a href="tel:+256700000000" className="text-slate-200">+256 700 000 000</a>
            <br />
            <strong>Address:</strong> Kampala, Uganda
          </p>
        </div>
        <p>© 2026 CPA WITH OKELLO DICKSON</p>
        <p>Simple tools for focused study and clear progress.</p>
      </div>
    </footer>
  )
}

export default Footer
