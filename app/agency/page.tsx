import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroMarginMath } from "@/components/hero-margin-math";
import { WhiteLabelStack } from "@/components/white-label-stack";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("agency")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://agency.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://agency.kiwuuu.com" },
};

export default function AgencyPage() {
  return (
    <div className="bold min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroMarginMath
          eyebrow={`For agencies & resellers ${v.emoji}`}
          headline={v.hero_headline}
          sub="Built on the 22-agent Kiwuuu mesh. Your branding. Your pricing. Your margin. We ship the flow, you invoice the client."
          prefill={v.hero_prefill}
        />
        <WhiteLabelStack />
        <PainSolutionGrid
          heading="What every agency asks before they resell us"
          cards={v.pain_cards}
        />
        <TrustRow />
        <FounderNote />
        <Pricing line={v.pricing_line} />
        <FinalCta prefill={v.hero_prefill} />
      </main>
      <Footer />
    </div>
  );
}
