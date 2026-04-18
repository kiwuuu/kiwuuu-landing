const ITEMS = [
  "GDPR Art. 28 · EU-hosted (Hetzner DE)",
  "AVV reviewed by Fachanwalt für IT-Recht",
  "24h Live SLA or first month free",
  "Founder-built — no sales team",
];

export function TrustRow() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 text-center text-sm font-medium text-[var(--primary-dark)] sm:grid-cols-2 md:grid-cols-4">
        {ITEMS.map((t) => (
          <div key={t} className="px-2">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
