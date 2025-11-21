export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 pb-16 pt-24 text-sm text-slate-400 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-heading text-lg text-white">Kling</span>
        <div className="flex gap-4 text-xs uppercase tracking-[0.3em]">
          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>
          <a href="#cascades" className="transition hover:text-white">
            Cascades
          </a>
          <a href="#testimonials" className="transition hover:text-white">
            Proof
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
      </div>
      <p className="text-xs text-slate-500/80">
        © {new Date().getFullYear()} Kling Labs. Engineered across Tokyo, Berlin, and São Paulo.
      </p>
    </footer>
  );
}
