type Props = {
  stat: string;
  label: string;
};

export function SocialProofBar({ stat, label }: Props) {
  return (
    <div className="border-b border-[var(--line)] bg-[var(--surface)] px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 text-sm">
        <span className="flex h-2 w-2 rounded-full bg-green-500" />
        <span className="font-bold text-[var(--primary-dark)]">{stat}</span>
        <span className="text-[var(--muted)]">{label}</span>
      </div>
    </div>
  );
}
