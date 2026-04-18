import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroTrialRescue } from "@/components/hero-trial-rescue";
import { ActivationLoop } from "@/components/activation-loop";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { FounderNote } from "@/components/founder-note";
import { TrustRow } from "@/components/trust-row";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("saas")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://saas.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://saas.kiwuuu.com" },
};

export default function SaasPage() {
  return (
    <div className="saas-theme min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroTrialRescue
          eyebrow={`For SaaS & tech founders ${v.emoji}`}
          headline={v.hero_headline}
          sub={v.hero_sub}
          prefill={v.hero_prefill}
        />
        <ActivationLoop />
        <PainSolutionGrid
          heading="The SaaS conversations eating your team's time, now automated"
          cards={v.pain_cards}
        />
        <FounderNote />
        <TrustRow />
        <Pricing line={v.pricing_line} />
        <FinalCta prefill={v.hero_prefill} />
      </main>
      <Footer />
    </div>
  );
}
