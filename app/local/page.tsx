import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroPhotoQuote } from "@/components/hero-photo-quote";
import { PhotoIntakeTimeline } from "@/components/photo-intake-timeline";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("local")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://local.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://local.kiwuuu.com" },
};

export default function LocalPage() {
  return (
    <div className="local-theme min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroPhotoQuote
          eyebrow={`For trades, beauty & local services ${v.emoji}`}
          headline={v.hero_headline}
          sub="Customers send a photo. You get a pre-diagnosed job request. Slot booked before you pick up the phone. Live in 24 hours."
          prefill={v.hero_prefill}
        />
        <PhotoIntakeTimeline />
        <PainSolutionGrid
          heading="Quote requests and scheduling calls, handled on WhatsApp"
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
