import type { Metadata } from "next";
import { getVertical } from "@/lib/verticals";
import { Nav } from "@/components/nav";
import { HeroCartSave } from "@/components/hero-cart-save";
import { CartRecoveryFlow } from "@/components/cart-recovery-flow";
import { PainSolutionGrid } from "@/components/pain-solution-grid";
import { TrustRow } from "@/components/trust-row";
import { FounderNote } from "@/components/founder-note";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

const v = getVertical("ecom")!;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
  openGraph: {
    title: v.meta_title,
    description: v.meta_description,
    type: "website",
    url: "https://ecom.kiwuuu.com",
    siteName: "Kiwuuu",
  },
  twitter: { card: "summary_large_image", title: v.meta_title, description: v.meta_description },
  alternates: { canonical: "https://ecom.kiwuuu.com" },
};

export default function EcomPage() {
  return (
    <div className="ecom-theme min-h-screen">
      <Nav prefill={v.hero_prefill} />
      <main>
        <HeroCartSave
          eyebrow={`For e-commerce & DTC ${v.emoji}`}
          headline={v.hero_headline}
          sub={v.hero_sub}
          prefill={v.hero_prefill}
        />
        <CartRecoveryFlow />
        <PainSolutionGrid
          heading="The tickets killing your inbox, now answered on WhatsApp"
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
