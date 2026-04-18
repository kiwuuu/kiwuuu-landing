export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--muted)] sm:flex-row">
        <p>© 2026 Kiwuuu LLC · Wyoming, USA · hello@kiwuuu.com</p>
        <nav aria-label="Legal" className="flex gap-5">
          <a href="#" className="hover:text-[var(--primary-dark)]">
            Privacy
          </a>
          <a href="#" className="hover:text-[var(--primary-dark)]">
            Terms
          </a>
          <a href="#" className="hover:text-[var(--primary-dark)]">
            AVV / DPA
          </a>
        </nav>
      </div>
    </footer>
  );
}
