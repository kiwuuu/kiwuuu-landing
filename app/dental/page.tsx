import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroDental } from "@/components/hero-dental";
import { AfterHoursTimeline } from "@/components/after-hours-timeline";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("dental")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://dental.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://dental.kiwuuu.com" },
};

export default function DentalPage() {
  return (
    <div className="dental-theme min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroDental
          eyebrow={`For dental practices ${v.emoji}`}
          headline={v.hero_headline}
          sub={v.hero_sub}
          prefill={v.hero_prefill}
        />
        <AfterHoursTimeline />
        <PainSolutionGrid
          heading="Conversations your practice has every day, now automated"
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
