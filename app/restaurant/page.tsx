import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroTableNight } from "@/components/hero-table-night";
import { LateNightBookings } from "@/components/late-night-bookings";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("restaurant")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://restaurant.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://restaurant.kiwuuu.com" },
};

export default function RestaurantPage() {
  return (
    <div className="restaurant-theme min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroTableNight
          eyebrow={`For restaurants & hospitality ${v.emoji}`}
          headline={v.hero_headline}
          sub="Bookings at 11pm. Allergy questions before the rush. Delivery orders without a third-party fee. All on WhatsApp, live in 24 hours."
          prefill={v.hero_prefill}
        />
        <LateNightBookings />
        <PainSolutionGrid
          heading="What your guests message every night, now handled automatically"
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
