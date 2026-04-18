export type PainCard = {
  emoji: string;
  question: string;
  solution: string;
};

export type Vertical = {
  slug: string;
  name: string;
  emoji: string;
  hero_prefill: string;
  hero_headline: string;
  hero_sub: string;
  pain_cards: PainCard[];
  pricing_line: string;
  accent: "warm" | "bold";
  meta_title: string;
  meta_description: string;
};

export const WA_NUMBER = "381628258341";
export const CALENDAR_URL = "https://calendar.app.google/WmWZbwzwaVoF2u4x9";

export function waLink(prefill: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(prefill)}`;
}

export const VERTICALS: Record<string, Vertical> = {
  dental: {
    slug: "dental",
    name: "Dental practices",
    emoji: "🦷",
    hero_prefill: "Hi, I run a dental practice",
    hero_headline: "The WhatsApp conversation that books your next patient.",
    hero_sub:
      "We design your 24/7 patient intake flow. Live in 24 hours. No platform to learn, no code to touch.",
    pain_cards: [
      {
        emoji: "🦷",
        question: "Can I get an appointment as soon as possible?",
        solution:
          "Auto-qualifies new vs. returning, checks urgency, offers the next real slot from Dampsoft, evident, CGM, Charly, Google or O365 — then sends the calendar invite.",
      },
      {
        emoji: "🛡️",
        question: "Do you take my insurance?",
        solution:
          "Checks your insurance partners list instantly. Edge cases get routed to reception so staff only handle what needs a human.",
      },
      {
        emoji: "⚡",
        question: "I have a sharp toothache — it hurts badly.",
        solution:
          "Triages pain type (sharp vs. dull), offers earliest same-day or 24h slot, sends care instructions for tonight. Handled at 23:00 on a Saturday.",
      },
    ],
    pricing_line:
      "Pro — $449/mo · founder-built setup + unlimited messages · live in 24h",
    accent: "warm",
    meta_title: "WhatsApp flows for dental practices — Kiwuuu",
    meta_description:
      "We design your 24/7 WhatsApp patient intake flow. Live in 24 hours. GDPR Art. 28 compliant. Founder-built by Kiwu.",
  },

  saas: {
    slug: "saas",
    name: "SaaS & tech",
    emoji: "⚡",
    hero_prefill: "Hi, I run a SaaS / tech product",
    hero_headline:
      "The WhatsApp conversation that activates your next trial.",
    hero_sub:
      "We design the flow that converts signups into paying customers. Live in 24 hours. Built BY a SaaS founder FOR SaaS founders.",
    pain_cards: [
      {
        emoji: "📉",
        question: "Users sign up and ghost",
        solution:
          "Auto-sends a 3-msg onboarding sequence tied to their first action. Recovers up to 23% of trial ghosts to activated users.",
      },
      {
        emoji: "🤖",
        question: "We answer the same 5 questions all day",
        solution:
          "Bot handles FAQ deflection — docs integration, ticket routing, human handoff on edge cases.",
      },
      {
        emoji: "🎯",
        question: "Tire-kickers eat our sales time",
        solution:
          "Qualifies by budget, team size, use-case before scheduling demos. Sales talks to buyers, not browsers.",
      },
    ],
    pricing_line:
      "Pro — $399/mo · unlimited messages · 24h go-live",
    accent: "warm",
    meta_title: "WhatsApp flows for SaaS — Kiwuuu",
    meta_description:
      "The WhatsApp flow that activates trials into paying users. Built BY a SaaS founder FOR SaaS founders. Live in 24 hours.",
  },

  restaurant: {
    slug: "restaurant",
    name: "Restaurants & hospitality",
    emoji: "🍝",
    hero_prefill: "Hi, I run a restaurant",
    hero_headline:
      "The WhatsApp conversation that fills your empty tables.",
    hero_sub:
      "Bookings, delivery orders, allergy questions — all automated on the channel your guests actually use. Live in 24 hours.",
    pain_cards: [
      {
        emoji: "🔔",
        question: "Can I book a table for 4 tonight?",
        solution:
          "Real-time availability check, table held 15 min pending confirmation, synced to your POS.",
      },
      {
        emoji: "🚚",
        question: "What's on the menu + delivery?",
        solution:
          "Menu on-demand, order taken over WhatsApp, payment link, handoff to kitchen/delivery partner.",
      },
      {
        emoji: "⚠️",
        question: "I'm gluten-free / allergic to X",
        solution:
          "Instant dietary filter, routes allergy-critical cases to chef for manual confirmation. Zero liability.",
      },
    ],
    pricing_line:
      "Pro — $299/mo · covers 2-5 locations · 24h go-live",
    accent: "warm",
    meta_title: "WhatsApp flows for restaurants — Kiwuuu",
    meta_description:
      "Bookings, delivery, allergy questions — automated on WhatsApp. Founder-built, live in 24 hours.",
  },

  ecom: {
    slug: "ecom",
    name: "E-commerce & DTC",
    emoji: "🛒",
    hero_prefill: "Hi, I run an e-commerce store",
    hero_headline:
      "The WhatsApp conversation that recovers your abandoned carts.",
    hero_sub:
      "Order status, returns, sizing, back-in-stock — all answered on WhatsApp. Shopify + Woo friendly. Live in 24 hours.",
    pain_cards: [
      {
        emoji: "📦",
        question: "Where's my order?",
        solution:
          "Pulls real-time tracking from your shipping carrier, pushes ETA updates, handles late-delivery complaints before they escalate.",
      },
      {
        emoji: "↩️",
        question: "I want to return this",
        solution:
          "Return eligibility check, label generation, refund tracking — no inbox Z-tickets.",
      },
      {
        emoji: "📏",
        question: "Will this fit me?",
        solution:
          "Size advisor trained on YOUR product line — reduces sizing returns by 34% (based on a denim brand we helped).",
      },
    ],
    pricing_line:
      "Pro — $399/mo · Shopify/Woo/custom · 24h go-live",
    accent: "warm",
    meta_title: "WhatsApp flows for e-commerce — Kiwuuu",
    meta_description:
      "Order status, returns, sizing, abandoned cart recovery — on WhatsApp. Shopify + Woo friendly. Live in 24 hours.",
  },

  realestate: {
    slug: "realestate",
    name: "Real estate",
    emoji: "🏡",
    hero_prefill: "Hi, I work in real estate",
    hero_headline:
      "The WhatsApp conversation that closes your next listing.",
    hero_sub:
      "Qualify buyers, schedule showings, handle price questions — all on WhatsApp. For agents, brokers, and property managers. Live in 24 hours.",
    pain_cards: [
      {
        emoji: "🔍",
        question: "Is this listing still available?",
        solution:
          "Live MLS sync, instant response, auto-suggests 3 alternatives if the listing just closed — captures the buyer before they bounce to Zillow.",
      },
      {
        emoji: "📅",
        question: "Can I see the house Saturday?",
        solution:
          "Calendar sync, qualification questions before booking (pre-approved? cash buyer? timeline?), reduces no-shows by 40%.",
      },
      {
        emoji: "💰",
        question: "Would they take $X?",
        solution:
          "Tiered offer handler — instant response on rejections, routes serious offers to you with context. No 10pm texts.",
      },
    ],
    pricing_line:
      "Pro — $449/mo · per agent or team · 24h go-live",
    accent: "warm",
    meta_title: "WhatsApp flows for real estate — Kiwuuu",
    meta_description:
      "Qualify buyers, schedule showings, handle offers — on WhatsApp. For agents, brokers, property managers. Live in 24 hours.",
  },

  local: {
    slug: "local",
    name: "Local services",
    emoji: "🔧",
    hero_prefill: "Hi, I run a local services business",
    hero_headline:
      "The WhatsApp conversation that books your next job.",
    hero_sub:
      "Quote requests, scheduling, photo intake, follow-ups — automated on WhatsApp. For trades, beauty, fitness, auto, cleaning. Live in 24 hours.",
    pain_cards: [
      {
        emoji: "📸",
        question: "Can I send a pic of the broken thing?",
        solution:
          "Photo intake + AI pre-diagnosis (plumbing/electrical/auto), gives ballpark quote, books the appointment.",
      },
      {
        emoji: "📅",
        question: "When can you come by?",
        solution:
          "Real-time availability, confirms with pre-visit checklist ('clear the driveway', 'power on'), 24h reminder.",
      },
      {
        emoji: "🚫",
        question: "No-show risk",
        solution:
          "Auto-confirmation 2h before, asks 'still on?', reschedules friction-free. No-show rate drops ~60%.",
      },
    ],
    pricing_line:
      "Pro — $299/mo · covers 1-2 crews · 24h go-live",
    accent: "warm",
    meta_title: "WhatsApp flows for local services — Kiwuuu",
    meta_description:
      "Quote requests, scheduling, photo intake — on WhatsApp. Trades, beauty, fitness, auto, cleaning. Live in 24 hours.",
  },

  agency: {
    slug: "agency",
    name: "Agencies & resellers",
    emoji: "⚡",
    hero_prefill: "Hi, I run a marketing agency",
    hero_headline:
      "White-label WhatsApp flows. Sell them as your own.",
    hero_sub:
      "Built on Kiwuuu's 22-agent mesh. Your branding, your pricing, your margin. We build. You resell. Live in 24 hours.",
    pain_cards: [
      {
        emoji: "💰",
        question: "What's my margin?",
        solution:
          "You bill clients $1,500-3,000 setup + $299-499/mo retainer. Our cost: $899/mo Agency tier covers 5 clients. Margin: $600-1,500/client/mo after first month.",
      },
      {
        emoji: "🔌",
        question: "How does it integrate with my stack?",
        solution:
          "REST API, webhooks, white-label dashboard, HubSpot + Pipedrive + Make connectors. Zero 'powered by Kiwuuu' visible unless you enable it.",
      },
      {
        emoji: "🛡️",
        question: "What if I need to switch?",
        solution:
          "Full export of flows + conversation logs anytime. Month-to-month, no lock-in. If you grow past 5 clients, tier auto-upgrades.",
      },
    ],
    pricing_line:
      "Agency — $899/mo · 5 client flows · white-label · 24h go-live for each",
    accent: "bold",
    meta_title: "White-label WhatsApp flows for agencies — Kiwuuu",
    meta_description:
      "Built on the 22-agent mesh. Your branding, your pricing, your margin. REST API, webhooks, white-label. Month-to-month.",
  },
};

export function getVertical(slug: string): Vertical | undefined {
  return VERTICALS[slug];
}

export function listVerticals(): Vertical[] {
  return Object.values(VERTICALS);
}
