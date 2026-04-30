# Aparisi Law site — context for future Claude sessions

This file gives a future Claude session the context to pick up where the last one left off. Read this first before suggesting changes or asking questions the user has already answered.

---

## What this is

A static HTML/CSS/JS marketing site for **Aparisi Law**, an immigration law firm in Silver Spring, MD. Bilingual EN/ES, built without a framework (just plain HTML, a shared `styles.css`, and a small `script.js` for the language toggle).

## Hosting

- **Production domain (intended):** `https://aparisi.com`. Currently still running an old WordPress site on Bluehost; this static site replaces it once DNS flips. All `<link rel="canonical">`, `og:url`, og:image, and JSON-LD `@id` already point at `aparisi.com`.
- **Staging URL:** `https://volcanicsand.github.io/aparisi-site/` (GitHub Pages, auto-deploys on push to `master`).
- **Repo:** `github.com/volcanicsand/aparisi-site` (the user's GitHub account is `volcanicsand`).
- **Deploy workflow:** `git push origin master` → GitHub Pages rebuilds in ~60 seconds. No CI, no build step.

## Architecture

```
/index.html                       (homepage)
/our-attorneys/index.html         (about / attorneys)
/areas-of-practice/index.html     (How We Help)
/how-it-works/index.html          (How It Works)
/contact/index.html               (Contact + form)
/styles.css                       (shared base styles)
/script.js                        (lang toggle + localStorage persistence)
/about.html, /practice-areas.html, /contact.html, /how-it-works.html
                                  (meta-refresh + JS redirect stubs at old URLs)
/jaime.jpg, /sylvie.jpg, /hannah.jpg, /felipe.jpg
                                  (attorney photos)
/hero.jpg, /america.jpg           (decorative imagery, copyright-questionable;
                                  flag for replacement before live launch)
```

URL paths intentionally match what the old WordPress site used (`/our-attorneys/`, `/areas-of-practice/`, `/contact/`) for SEO continuity when DNS flips. Stubs at `/about.html` etc. redirect old bookmarks to the directory URLs.

## Font system

Two fonts, loaded from Google Fonts in each HTML file's `<head>`:

- **DM Serif Display** — high-contrast serif. Used for headlines and brand wordmark.
- **Karla** — humanist sans (replaced Inter earlier in the project; user found Inter too "corporate-tech"). Used for body, navigation, buttons, forms, footer.

CSS variables defined in `styles.css`:

```css
--serif: 'DM Serif Display', Georgia, serif;
--sans:  'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

Note: DM Serif Display is only published in 400 weight; the `nav-logo` uses `font-weight: 600` which the browser synthesizes. The user is OK with that, finds the synthetic-bold nav-logo distinct from the hero "Aparisi Law" by design.

## Card hierarchy on How We Help and How It Works (recently inverted)

The user wanted "Step One" / "Family Immigration" treated as the **headline** rather than as a small tag above the title. Current state:

```
Family Immigration            ← serif headline (was a small tag)
FAMILY-BASED PETITIONS        ← small uppercase sans subtitle (was the title)
[hover description]           ← sans, white text
```

Same pattern on the steps cards (with a small decorative number kept).

**Pending work the user paused on:** the headlines themselves (the former tags) need to be tweaked to read better as headlines. Some of them ("Family Immigration", "Immigration Court", "Children's Relief") are bland as headlines. The user also wants to **add a few business-immigration categories** (E-2, EB-5, H-1B, L-1 etc., or some grouping thereof) even though business work is a small part of their practice. They paused before deciding label phrasing and how many cards total. See "Pending" section below.

## Recent design decisions (don't reverse without asking)

- **Hero overlay** lightened from ~70% navy to ~30% so the underlying mural shows through. Text-shadow added on `.hero-content` for legibility.
- **"Aparisi Law" in the hero** has `letter-spacing: 8px` and `font-size: clamp(60px, 11vw, 140px)` — wide and dramatic. User likes it.
- **Eyebrow above the hero name:** "Maryland *Immigration* Attorneys" — "Immigration" is sized 1.7x with brighter white via `.hero-eyebrow-key`.
- **Hero is vertically centered**, fills viewport via `flex-grow: 1` on the hero plus body's flex-column min-height: 100vh sticky-footer pattern. Don't undo this.
- **Hero scripture (Juan 10:11-16) is Spanish-only on purpose.** Lives on the How We Help page now, between practice grid and CTA banner. User explicitly does not want an English translation.
- **About page header** uses `america.jpg` (a 1940s WWII propaganda poster) at `opacity: 0.5`. Copyright-questionable, fine for staging, replace before live.
- **Hero image** (`hero.jpg`) is a copyrighted-looking immigration mural. Same caveat — replace before live.

## Known placeholders the user explicitly chose to leave alone

- Homepage `<h1>` is `[Slogan placeholder]` — until the user has a real slogan, leave it.
- Attorney bios: Jaime and Sylvie have real bios. **Hannah, Felipe, and John still have `[Bio placeholder]` and `[Title]`.** User has written some content for Sylvie that we cleaned up (dropped a Marquis Who's Who reference because it's a vanity publication; reframed "innate drive" → "dedication ... rooted in her own experience as an immigrant"). Wait for user to provide content for the others.
- Contact form posts to `action="#"` — no backend yet. Will need a service like Formspree or Netlify Forms before launch.

## Pending / what to do next

1. **Refine the practice-area card headlines** (the former small tags; now the visible serif headlines). Some are too bland — user wants tweaks. They paused after seeing the inverted hierarchy.
2. **Add business-immigration categories** to the practice grid. User does little business work but wants representation. Options discussed: Investor Visas (E-2/EB-5), Specialty Workers (H-1B/O-1/TN), Intracompany (L-1), Employer Compliance, Religious Workers. User hadn't decided how many to add or how to slice them. Layout works at 8 (4×2), 12 (4×3), or could become 5×2 = 10. Ask which they want.
3. **SEO follow-ups** if relevant: a real OG image at 1200×630 (currently using hero.jpg), Google Business Profile setup advice (already given once).
4. **Replace `hero.jpg` and `america.jpg`** with non-copyrighted alternatives before flipping DNS.
5. **Wire the contact form** to a real submission endpoint before launch.
6. **Fill content placeholders** when user provides text (slogan, attorney bios, attorney titles).

## User preferences and behaviors to remember

- User is an attorney at the firm (John Hare). Direct, prefers concise responses, doesn't want hand-holding on technical concepts (he'll ask if confused).
- He prefers terse responses with no trailing summaries when the diff is enough.
- The user's GitHub account is `volcanicsand`; on this Mac the GitHub PAT is cached via macOS Keychain so `git push origin master` runs silently. **On other machines (e.g. home Mac) the PAT setup will need to be repeated.**
- He commits with `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` trailer (matches earlier commits' style).
- He uses Google Docs (with "Paste from Markdown" enabled) to read .md files generated for case work. He doesn't have Microsoft Word installed.
- He's at $200/month Claude Max plan. Most case work is well within capacity; long single conversations get expensive per-turn so prefer fresh threads for new cases.

## Workflow notes

- Don't write CSS into individual HTML files unless it's genuinely page-specific. Shared rules belong in `styles.css`.
- The bilingual structure uses `<span class="en">` and `<span class="es">` inside elements; the global rule `[lang="es"] .en, [lang="en"] .es { display: none; }` handles toggling. Don't break this.
- Language toggle persistence is via `localStorage` in `script.js`. Don't add a server-side or cookie-based version.
- Hero scripture has no `.es` wrapping on purpose — it's intentionally Spanish-only regardless of toggle.
- Inner pages live one directory deep, so their internal links use relative paths (`../`, `../our-attorneys/`, etc.) and `<link rel="stylesheet" href="../styles.css">`. Maintain that.
- The four `.html` redirect stubs at root use both `<meta http-equiv="refresh">` and `<script>window.location.replace(...)</script>` for fast redirect without history pollution.

## Recent commit history (for orientation)

Most recent at top — `git log --oneline -20` will show the rest:

- Card hierarchy inverted (label as headline, title as subtitle)
- Card label/title font swap (italic serif labels) — this was an intermediate step before the inversion
- Sylvie bio: commitment → dedication
- Sylvie bio: drop "innate drive" framing
- Hannah/Felipe attorney photos and names
- Karla replaced Inter as body sans
- Hero overlay lightened, text-shadow added
- Hero "Aparisi Law" letter-spacing widened, slogan filled in
- Centered hero vertically; sticky-footer flex
- Redirect stubs hardened (JS replace + meta refresh)
- "Path forward is always clear" → "you'll always know where yours stands" (How It Works)
- Scripture moved from homepage to How We Help; eyebrow added above Aparisi Law
- URL restructure to directory-based paths matching the old WordPress site
- JSON-LD LegalService + Open Graph tags added
- Initial CSS/JS extraction and structural normalization

---

*If anything here conflicts with what the user just said, the user wins. This file is a starting point, not the truth.*
