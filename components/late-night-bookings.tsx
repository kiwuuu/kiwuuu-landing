const BARS = [
  { hour: "18", count: 2, label: "Dinner rush begins" },
  { hour: "19", count: 3, label: "Prime time" },
  { hour: "20", count: 4, label: "Floor at capacity" },
  { hour: "21", count: 5, label: "Peak · staff slammed" },
  { hour: "22", count: 7, label: "Kitchen closing · phones down", highlight: true },
  { hour: "23", count: 9, label: "After-hours inbound · bot handling", highlight: true },
  { hour: "00", count: 6, label: "Midnight · staff long gone", highlight: true },
  { hour: "01", count: 3, label: "Brunch bookings for tomorrow", highlight: true },
];

const MAX = 9;

export function LateNightBookings() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--surface)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary-dark)]">
            Bookings by hour · last Saturday
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--ink)] sm:text-3xl">
            Your busiest bookings come after your busiest shift.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            The phone's ringing at 23:00. Nobody's picking it up. We do.
          </p>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-6">
          <div className="flex items-end justify-between gap-2 sm:gap-3">
            {BARS.map((b) => (
              <div key={b.hour} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-[var(--ink)]">{b.count}</span>
                <div
                  className={`w-full rounded-t-md transition ${
                    b.highlight ? "bg-[var(--primary)]" : "bg-[var(--primary)]/25"
                  }`}
                  style={{ height: `${(b.count / MAX) * 180}px` }}
                  aria-label={`${b.hour}:00 — ${b.count} bookings`}
                />
                <span className="font-mono text-[11px] font-semibold text-[var(--muted)]">
                  {b.hour}:00
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-2 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)] sm:grid-cols-2">
            <p><span className="inline-block h-2 w-2 rounded-full bg-[var(--primary)]/25" /> &nbsp; Staff-handled hours</p>
            <p><span className="inline-block h-2 w-2 rounded-full bg-[var(--primary)]" /> &nbsp; Bot-handled hours (22:00 – 02:00)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
