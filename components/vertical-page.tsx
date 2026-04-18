import type { Vertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

type Props = {
  vertical: Vertical;
  painHeading?: string;
};

export function VerticalPage({ vertical, painHeading }: Props) {
  const heading =
    painHeading ??
    "Conversations your business has every day, now automated";
  const content = (
    <>
      <Nav prefill={vertical.hero_prefill} />
      <main>
        <Hero
          eyebrow={`For ${vertical.name.toLowerCase()} ${vertical.emoji}`}
          headline={vertical.hero_headline}
          sub={vertical.hero_sub}
          prefill={vertical.hero_prefill}
        />
        <HowItWorks />
        <PainSolutionGrid heading={heading} cards={vertical.pain_cards} />
        <TrustRow />
        <FounderNote />
        <Pricing line={vertical.pricing_line} />
        <FinalCta prefill={vertical.hero_prefill} />
      </main>
      <Footer />
    </>
  );

  if (vertical.accent === "bold") {
    return <div className="bold min-h-screen">{content}</div>;
  }
  return content;
}
