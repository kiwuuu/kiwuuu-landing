type Props = {
  line: string;
};

export function Pricing({ line }: Props) {
  return (
    <section className="px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-block rounded-3xl border border-[var(--line)] bg-[var(--accent-soft)] px-8 py-6">
          <p className="text-lg font-semibold text-[var(--ink)] sm:text-xl">
            {line}
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Other tiers if you want more — mention it on the call.
          </p>
        </div>
      </div>
    </section>
  );
}
