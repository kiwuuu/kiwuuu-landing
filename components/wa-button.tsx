import { waLink } from "@/lib/verticals";

type Props = {
  prefill: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

export function WaButton({
  prefill,
  label = "Chat with Kiwu on WhatsApp",
  size = "md",
  className = "",
  ariaLabel,
}: Props) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <a
      href={waLink(prefill)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] font-semibold text-[var(--on-primary)] shadow-sm transition hover:bg-[var(--primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-dark)] ${sizes[size]} ${className}`}
    >
      <span aria-hidden>💬</span>
      <span>{label}</span>
    </a>
  );
}
