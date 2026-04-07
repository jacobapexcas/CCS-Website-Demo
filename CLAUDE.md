# CCS Website Demo — Claude Code Rules

<!--
  Added: 2026-04-06
  Source: Claude Code optimization — execution discipline, subagents, self-testing
  Review after 30 days to assess which rules are being followed vs. ignored.
  If hooks aren't firing, check: https://docs.anthropic.com/en/docs/claude-code/hooks
-->

## Execution Discipline

### Think Before You Build
Before writing any code, reason through the approach step by step. For complex tasks, explicitly consider:
- What are the edge cases?
- What could break?
- Is there a simpler approach?
- What would need to change if requirements shift?
For architecturally significant decisions, ask me before committing. For everything else, think hard and execute.

### Never Call It Done Until It Proves It Works
- Before marking ANY task complete, run the test suite. If tests fail, fix them. Do not ask permission.
- If no test suite exists, run type check (tsc --noEmit) or build (npm run build). Something must verify the code works.
- If verification fails, diagnose root cause and retry up to 3 times. Then explain the blocker.
- NEVER say "the implementation is complete" or "let me know if you'd like me to test this." Test it yourself. Always.
- After fixing a bug, verify the fix actually works before reporting back.

### Use Subagents for Parallel Work
- When a task has 3+ independent parts, use subagents with worktree isolation so they run in parallel.
- Each subagent gets full context to work independently — don't assume shared state.
- Each subagent: implements, tests, reports results.
- Don't do sequential work that could be parallelized.

### Self-Review Every Change
- After changes, read your own diff before presenting.
- Fix silently: unused imports, hardcoded values, missing error handling, leftover TODOs, console.logs.
- For database changes (Supabase migrations, RLS policies), verify SQL syntax.
- For API changes, verify request/response types match.
- Don't narrate small fixes. Just do them.

### Error Handling Is Mandatory
- Every async operation: try/catch with context-rich error messages.
- Every API endpoint: proper HTTP status codes, not generic 500s.
- Every user-facing error: human-readable. "Something went wrong" is never acceptable.
- Log errors with: function name, relevant input params, timestamp.

### Git Discipline
- Commit messages explain WHY, not WHAT.
- One logical change per commit.
- Never commit .env, secrets, API keys. If you see them staged, remove and warn me.

### Communication
- Lead with what you did, not what you're about to do.
- Fix obvious things without asking. Ask about architecture decisions that have big implications.
- Be concise. No "Great question!" or "Happy to help!" Just work.
- Show relevant code, not entire files.

---

<!-- Full project scan: 2026-04-06. Re-scan if major structural changes occur. -->

## Project Architecture

### Tech Stack
- **Framework:** Next.js 15.3.1 (App Router) + React 19.1
- **Language:** TypeScript 5.8 (strict mode)
- **Styling:** Tailwind CSS 4.1 via `@tailwindcss/postcss` + inline styles per design
- **Fonts:** 5 Google Fonts loaded via `<link>` in layout: Fraunces, Plus Jakarta Sans, Playfair Display, DM Sans, Cormorant Garamond
- **Deployment:** Vercel (auto-deploy from GitHub on push to `master`)
- **Repo:** github.com/jacobapexcas/CCS-Website-Demo
- **Live URL:** ccs-website-demo.vercel.app (password: `ccsdemo`)
- **Database:** None — fully static, no data layer
- **Auth:** Client-side password gate only (not real auth)
- **API Routes:** None
- **Tests:** None — verify via `npm run build`

### Directory Map
```
app/                    → Next.js App Router pages and global styles
  layout.tsx            → Root layout, metadata, favicon, Google Fonts
  page.tsx              → Password gate + design switcher (main entry)
  globals.css           → Tailwind import, font theme vars, fadeUp animations
components/             → React components
  DesignSwitcher.tsx    → Floating bottom pill to toggle designs A/B/C/D
  TeamModal.tsx         → Shared bio popup + centralized team data (Tom & Brent)
  designs/              → One file per design option (~900-1100 lines each)
    OptionA.tsx          → "Editorial Authority" — dark, Playfair Display, gold
    OptionB.tsx          → "Modern Warmth" — light cream, Fraunces, terracotta
    OptionC.tsx          → "Full Website" — multi-page with internal tab nav
    OptionD.tsx          → "Premium Executive" — navy/cream, Cormorant Garamond
hooks/                  → Custom React hooks
  useIsMobile.ts        → Media query hook (breakpoint: 768px)
public/                 → Static assets served by CDN
  logo.png              → Primary CCS logo (circular navy, ocean waves)
  logo-alt.png          → Logo variant
  logo-alt2.png         → Logo variant
  TomTriolo.jpg         → Tom's professional headshot
  HomePageBackground.jpg → Austin skyline with river
  ExecutiveCoachingImage.jpg → Austin skyline (blue tones)
  TalentManagementImage.jpg  → Ocean/beach sunset
.claude/                → Claude Code config
  settings.local.json   → Permission allow-list for this project
  agents/               → Custom subagent definitions
    code-reviewer.md     → Bug/security review agent
    test-writer.md       → Test generation agent
    debugger.md          → Root-cause debugging agent
.vercel/                → Vercel project link (auto-generated)
```

### Database Schema
<!-- No database. Fully static site. All content is hardcoded in TSX files. -->
No database. Team bios are centralized in `components/TeamModal.tsx` as a `teamData` object. All other content is inline in each design file.

### API Reference
<!-- No API routes. No server actions. No edge functions. -->
No API routes exist. This is a fully static, client-rendered site. The password gate is client-side only (not secure — demo use only).

### Auth Model
<!-- Client-side password gate, not real authentication. -->
- **Password gate** in `app/page.tsx` — compares input to hardcoded string `"ccsdemo"` (case-insensitive)
- No user accounts, sessions, tokens, or roles
- No server-side verification — this is a demo access gate, not security

### External Integrations
- **Google Fonts** — loaded via `<link>` tag in `app/layout.tsx`
- **Vercel** — deployment platform (auto-deploys on push)
- **GitHub** — source repo at `jacobapexcas/CCS-Website-Demo`
- **No environment variables required** — no `.env` files, no secrets

### Patterns & Conventions

#### Adding a New Design Option
1. Create `components/designs/OptionX.tsx` following the pattern of existing options
2. Import `useIsMobile` from `@/hooks/useIsMobile` for responsive layout
3. Import `TeamModal` and `teamData` from `@/components/TeamModal` for team section
4. Add state: `const [modalMember, setModalMember] = useState<"tom" | "brent" | null>(null)`
5. Use `const m = useIsMobile()` then apply `m ? mobileValue : desktopValue` throughout
6. Render `<TeamModal member={modalMember} onClose={() => setModalMember(null)} />` before closing `</div>`
7. Register in `app/page.tsx`: add to the `Design` type union, `designs` record, and `labels` in `DesignSwitcher.tsx`

#### Styling Pattern
- All designs use **inline styles** (no CSS modules, no Tailwind classes in components)
- Each design file defines its own color palette as constants or a `css` object
- Responsive: ternary expressions `m ? mobile : desktop` — never media queries in CSS
- Fonts referenced by string name from Google Fonts loaded in layout

#### Component Pattern
- All design components are `"use client"` (client components)
- Sub-components in Option C are defined as functions in the same file (not separate files)
- Props are passed through for mobile state (`m`) when sub-components exist
- Team data is centralized in `TeamModal.tsx`, not duplicated per design

#### Naming Conventions
- **Files:** PascalCase for components (`OptionA.tsx`), camelCase for hooks (`useIsMobile.ts`)
- **Components:** PascalCase (`DesignSwitcher`, `TeamModal`)
- **Hooks:** camelCase prefixed with `use` (`useIsMobile`)
- **CSS variables:** kebab-case with `--font-` prefix
- **Design keys:** lowercase letters (`"a"`, `"b"`, `"c"`, `"d"`)
- **Image files:** PascalCase descriptive names (`TomTriolo.jpg`, `HomePageBackground.jpg`)

### Build & Deploy

#### npm Scripts
| Script | Command | What it does |
|--------|---------|-------------|
| `dev` | `next dev` | Start dev server at localhost:3000 |
| `build` | `next build` | Production build (also runs type checking) |
| `start` | `next start` | Serve production build locally |
| `lint` | `next lint` | Run ESLint |

#### Deploy Process
1. Push to `master` branch on GitHub
2. Vercel auto-deploys (GitHub integration connected)
3. Build runs `next build` on Vercel (Washington DC region)
4. Static pages generated at build time
5. Live at: ccs-website-demo.vercel.app

#### Manual Deploy
```bash
npx vercel --yes --prod --scope jacobapexcas-projects
```

#### Environment Variables
None required. No `.env` files needed for any environment.

### Testing
<!-- No test framework installed. No test files exist. Verification is via build. -->
- **Framework:** None installed
- **Test files:** None exist
- **Verification method:** `npm run build` — confirms TypeScript compiles and pages generate
- **Coverage gaps:** Everything — there are no tests
- **To add tests:** Install vitest or jest, add to devDependencies, create `__tests__/` directory

### Key Dependencies
| Package | Version | Role |
|---------|---------|------|
| `next` | ^15.3.1 | App framework, routing, build pipeline |
| `react` | ^19.1.0 | UI rendering |
| `react-dom` | ^19.1.0 | DOM rendering |
| `tailwindcss` | ^4.1.0 | Utility CSS (used for globals, not in components) |
| `typescript` | ^5.8.0 | Type safety (strict mode) |

### Known Issues & Tech Debt
<!-- Initial audit 2026-04-06 -->
1. **Password gate is client-side only** — the password `"ccsdemo"` is visible in the JS bundle. Not a real security measure. Fine for a demo.
2. **No tests** — zero test coverage. Build verification only.
3. **Design files are 900-1100 lines each** — large single files with all inline styles. Works for a demo but would need component extraction for production.
4. **Team data is partially duplicated** — centralized in `TeamModal.tsx` but each design still has its own layout code for team cards. Not DRY but acceptable for isolated design demos.
5. ~~**No CI/CD pipeline**~~ — **RESOLVED 2026-04-07**: Added `.github/workflows/ci.yml` with type check, lint, and build gates on PRs.
6. ~~**Images served unoptimized**~~ — **RESOLVED 2026-04-07**: All `<img>` tags replaced with `next/Image` across all files.
7. **Google Fonts via `<link>` instead of `next/font`** — intentional choice (5 font families across 4 designs), but adds render-blocking requests.
8. ~~**No mobile hamburger menu**~~ — **RESOLVED 2026-04-07**: All 4 designs now have hamburger menus on mobile with animated dropdowns.
9. **No analytics** — no tracking of which design Tom prefers.

---

## Self-Maintaining Documentation

### When to Update This File
After completing any task that changes the project's structure, update the relevant sections of this CLAUDE.md BEFORE marking the task done. This is not optional.

Specifically, update this file when you:
- Create, rename, or delete a database table or column → update Database Schema
- Add, modify, or remove an API route or edge function → update API Reference
- Add or change an RLS policy → update Auth Model
- Add a new external integration or env variable → update External Integrations
- Install or remove a significant dependency → update Tech Stack
- Create a new directory or major structural change → update Directory Map
- Change build scripts, deploy config, or CI → update Build & Deploy
- Add or change test infrastructure → update Testing
- Discover or fix tech debt → update Known Issues

### How to Update
- Keep it concise. One line per route, one line per table column.
- If a section doesn't exist yet, create it following the existing format.
- Wrap historical context in HTML comments so it doesn't consume tokens:
  <!-- Added user_preferences table on 2026-04-10 for client dashboard settings -->
- Update the "Last analyzed" date at the bottom of the file.

### What NOT to Do
- Don't rewrite sections that haven't changed.
- Don't remove existing documentation. Only add or update.
- Don't ask "should I update the CLAUDE.md?" — just do it as part of completing the task.

### Significant Change Detection
If a single task triggers 3+ of the above conditions, add a summary note:
<!-- Major update: [date] — [what changed and why] -->

---
Last analyzed: 2026-04-07
To re-scan this project, paste the scan-and-maintain prompt from your project setup files.
