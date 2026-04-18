# kiwuuu-landing

Landing site for Kiwuuu — a WhatsApp-native AI employee for small businesses.

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` config in `app/globals.css`)
- 7 vertical surfaces routed via `proxy.ts` (dental / saas / restaurant / ecom / realestate / local / agency)
- Shared components in `components/`; page composition in `app/<vertical>/page.tsx`

## Design system
- Tokens live in `app/globals.css` under `@theme` + `:root` + per-vertical `.{vertical}-theme` blocks.
- Core palette: cream `#fafaf7`, sage `#4a7c59`, sand `#e8d5a4`, ink `#1a1a1a`.
- Agency is the one BOLD dark/neon variant (electric lime `#a3e635`). Every other vertical is warm/light.
- Type: Inter (UI) + JetBrains Mono (timestamps, numbers).
- Every async component must design all three states — loading / error / success.

## Brand voice
Founder-to-founder. Concrete over abstract. Time-of-day framing ("Saturday night. 22:58."). German is first-class. Forbidden: "revolutionary", "game-changing", "platform", "enterprise-grade", "22 agents" (agency-audience only).

## Run
```bash
npm install
npm run dev    # port 4200
```
