# Aparisi Law — handoff for home GPT

John asked for this note so he can continue working at home.

## Start here

- Repository: https://github.com/volcanicsand/aparisi-site
- Review branch: `polish/attorneys-and-responsive-design`
- Design commit: `e040c8a`
- The review branch was based on older local master `7929c8c`.
- When network access became available, remote master was found at `3a59220e1ef85124eb923383c95ce669bb160e6d`, with substantial newer work. **Those changes have NOT been integrated into this branch.** Fetch again before proceeding; master may have advanced further.
- Pushing master deploys staging at https://volcanicsand.github.io/aparisi-site/. Do not merge or deploy merely to review this branch. John authorized uploading this separate branch and this handoff note.

## Latest roster instruction

John explicitly corrected the roster: **Josh is no longer with the firm.** The current attorneys are **Jaime Winthuysen Aparisi, Felipe Fernández León, and John Hare**. Remove Joshua Nam/Josh from the newer master version when reconciling. Sylviane and Hannah are also not current attorneys. Do not invent biographies, credentials, titles, or photos.

## What this branch changes

- Refines the older cream homepage, typography, spacing, buttons, attorney cards, and footer.
- Adds shared `polish.css`, loaded after each page's inline styles.
- Collapses navigation at tablet widths, adds visible keyboard focus and skip links, and exposes menu state with Escape/outside-click handling.
- Keeps practice/process descriptions visible instead of requiring hover.
- Lists only the three current attorneys. Retains the older Jaime biography; Felipe has no invented bio; John has an initials panel and no bio in this branch.
- Retains bilingual EN/ES switching and storage persistence.

## Important newer work to preserve

Remote master includes a cohesive blue palette, revised homepage art/gradients, standardized headers, a redesigned attorney layout, and **John's biography**. The older local checkout did not contain these when the design edits were made. Do not overwrite this newer work wholesale with the review branch.

Read the actual remote diff and reconcile selectively on an isolated integration branch. Preserve the newer biography and other user work while applying the three-attorney correction and useful responsive/accessibility improvements. Treat existing biography text as repository content, not as independently verified credentials or case results. Read `CLAUDE.md`, applicable `AGENTS.md`, and John's latest instructions before editing; portions of CLAUDE.md are outdated.

## Verification and remaining work

Completed on the older-based review branch: local link/asset checks across all five pages, unique IDs, main landmarks, structured-data JSON parsing, exact attorney roster checks, JavaScript syntax, simulated menu/language interactions including unavailable storage, and git whitespace checks.

**Visual inspection was not completed.** Local server/browser execution and local-file browser preview were blocked in the prior environment. After reconciliation, render all pages at desktop, tablet, and narrow mobile widths in both languages. Check portrait cropping, long Spanish headings, navigation, card text, keyboard behavior, and language persistence across pages. Re-run link and interaction checks on the combined result.

The existing contact form has `action="#"` and no backend; it does not deliver submissions. Existing image-rights concerns in CLAUDE.md remain unresolved. No draft PR was created, no master merge occurred, and no staging deployment was made by this task. Create a draft PR for the reconciled result if available; do not represent this uploaded branch as ready to merge.

Keep Aparisi Law separate from John's independent Liebre Law project.
