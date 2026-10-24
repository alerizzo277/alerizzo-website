# AGENTS.md — Alessandro Rizzo Personal Website

## Project and repository

This repository contains the definitive static portfolio built with Astro, TypeScript, semantic HTML and native CSS. Use minimal browser JavaScript and no additional UI frameworks or dependencies without a concrete need.

Work in the existing repository and branch. Preserve Git history, origin and .git. Do not commit, push, merge, change branches or deploy without explicit user instructions. The adjacent alerizzo-website-astro directory is an unchanged reference copy; do not edit it or other repositories.

The former Angular/Ionic application is retained in Git history, not as a parallel application. Production content and assets live in src/ and public/; never reference sibling repositories or machine-specific paths at runtime. Keep verified content and existing AR branding.

## Development

Use the local npm scripts. Node >=22.23.4 is required; GitHub Actions uses Node 24. Install with npm ci, build with npm run build, then run existing tests with node --test tests/*.test.ts. The i18n coverage test reads dist/index.html and requires a build first. No astro check dependency is configured.

Start development in background mode with npm run dev -- --background; manage it with npm run astro -- dev status, npm run astro -- dev logs and npm run astro -- dev stop. Preview a production build with npm run preview.

### Asset Rules

- Copy only assets required by the new website.
- Preserve the original files whenever possible.
- Prefer SVG for logos and icons where suitable. Preserve logo aspect ratios without cropping or distortion; keep compact company marks in timeline cards and use an optional full brand logo in dialogs. In Argentea’s dialog, place the full logo at about 100px on mobile and 130px on desktop beside the visible company name, role, period, and duration; do not repeat the logo slogan or group mark as separate graphics.
- Optimize large images without unnecessarily reducing quality.
- Use descriptive alternative text for meaningful images.
- Do not reuse obsolete technology logos simply because they exist in the old repository.
- Do not reference runtime resources directly from the Angular project.
- All required production assets must eventually reside inside the Astro project.

---

## Design Guidelines

The website must follow a clean, minimal, professional design inspired by Apple’s clarity, precise spacing, and typography. Do not imitate macOS or introduce Liquid Glass, decorative transparency, or excessive animation.

### General Appearance

- Light theme as the default and initial implementation.
- White or very light gray backgrounds.
- Black or graphite as the main identity color.
- Full-width black header and footer with inner elements distributed to viewport edges using responsive 16–24px side padding and no max-width. Main sections independently retain a centered shared maximum width (about 1100–1200px). Keep header branding left and social links right; footer identity left and copyright right, stacking safely on mobile.
- Neutral borders and restrained shadows.
- Clear typography and comfortable spacing.

Light background palette (semantic tokens):

```css
:root {
  --color-background: #fafafa;
  --color-card: #ffffff;
  --color-surface: #f5f5f5;
  --color-primary: #0a0a0a;
  --color-text: #0a0a0a;
  --color-text-description: #262626;
  --color-text-muted: #525252;
  --color-border: #e5e5e5;
  --color-chrome: #000000;
}
```

Keep semantic tokens centralized in the global stylesheet. D1 is the permanent page background: a near-white base and the approved sparse, thin fluid SVG curves in backgrounds.css, without repetition or animation. Do not add full waves, chromatic gradients, dense patterns, glass effects or background preferences. Only the language preference is persisted; the experimental background selector and its runtime have been removed. Biography and timeline cards share the restrained shadow token without changing timeline geometry. Distinguish primary text, descriptions, and metadata; all text/background combinations must meet WCAG AA contrast (at least 4.5:1 for normal text). Header and footer use pure black.

### Important Color Rule

Blue is reserved for the Motory promotional section.

The personal website must use a neutral black/white/gray identity.

Primary buttons, links, active controls, and other general UI elements should not use Motory's blue branding.

### Header

- Preserve the existing AR logo.
- Use a dark background.
- Keep LinkedIn and Instagram links, using the original brand SVG paths from the legacy navbar with consistent sizing, currentColor, and accessible link labels.
- Remove Twitter/X.
- Provide an Italian/English language switch as a compact dark pill with globe, active code and chevron (38px visual height inside a 44px touch target). Its white menu is right-aligned, shows Italiano/English with an active check, and supports arrow/Home/End keys, selection, Escape, outside-click dismissal and focus restoration. Preserve the existing i18n preference logic; no page reload or flag icons.
- Keep the header compact and responsive.

### Personal Profile

- Use one white presentation card. Below 48rem, place an 80px photograph beside name and role, then the biography across the full inner width. From 48rem, use a compact 128px photo column with a 116px photograph anchored at the top and a flexible text column containing name, role and biography. All biography paragraphs use the available column width without max-width restrictions in either disclosure state; expansion must not move the photograph or heading. Keep the overlapping location badge within the card and avoid nested cards.
- Show the location (Trento, Italy) once, as a compact white pill overlapping the lower edge of the photograph, centered horizontally. Reserve space for the overlap.
- Present Alessandro Rizzo as a Full Stack Software Developer.
- Display a concise professional description.
- Include an inline "Show more / Show less" interaction for additional information; the visible control belongs at the end of the text in both states, after all additional paragraphs when open. Anchor the image and location label with start alignment so expanded text grows downward without moving either image or label.
- Avoid unnecessarily large background panels.
- Do not include a CV download button.

### Work Experience and Education

Display two timeline sections:

1. Professional experience.
2. Education.

On desktop, arrange the timelines in two columns.

On mobile, stack them vertically.

Each timeline item should display:

- Company or institution logo.
- Name.
- Role or qualification.
- Start and end dates.
- Clear chronological connection to other items: use a continuous 2px line and filled 9px nodes in the exact same neutral #737373. Both share a single horizontal axis and centre transform, with the line spanning the full timeline height beyond the first and last nodes. No hollow nodes or independent offsets. Keep card dimensions, padding and spacing unchanged.

Work-duration labels appear only on work cards and their dialogs, never on education. Derive durations from the structured YYYY-MM dates in the browser at page load and when the page becomes active (pageshow/visibilitychange), not at static build time. Count calendar months inclusively: endIndex - startIndex + 1, including the current visitor-local month for active jobs; January 2024–March 2025 is 15 months. Do not infer exact days. Hide duration until computed; hide invalid or reversed ranges, and ongoing jobs with future starts. Format Italian singular/plural years and remaining months with a reusable TypeScript utility.

Professional experience cards should be clickable and open an accessible modal dialog containing additional information.

Company and institution logos may link to their official websites.

Keep external-link interactions separate from the modal trigger.

Use native HTML dialog functionality where appropriate. Keep dialog content compact, with an integrated logo/title/role/period heading and a circular, accessible X control at the top right. The X remains reachable while content scrolls; do not duplicate closure with an unnecessary bottom button.

Represent experience and thesis technologies as structured data and non-interactive, neutral informational labels, not repeated prose. Place labels at the lower left and operational actions at the lower right; allow wrapping on small screens.

Group all operational dialog actions at the bottom right. Use a black primary button with white text and a neutral secondary button with a thin border. Controls must have consistent rounded or pill-shaped corners, compact padding and typography, and at least 44px touch height. Keep university actions below the content: neutral secondary thesis link followed by black primary official-site action. On smartphones, technologies must occupy their own first row and both actions a distinct second row aligned right. On desktop, use one row when space permits: technologies, thesis action, then official site at the far right. Prefer subtle brief transitions and respect reduced-motion preferences. Avoid pronounced shadows or scale effects.

### Personal Project — Motory

Motory is the primary featured personal project.

Official website:

https://motory.cloud/

The Motory section should:

- Be compact and visually balanced.
- Use Motory's own branding and blue palette only within its dedicated section.
- Include its logo and a brief product description.
- Include a clear external link to Motory.cloud.
- Avoid dominating the personal website.

Official Motory assets may be sourced from the related project repositories when needed, without modifying those repositories. Use the approved local files under `public/logos/motory/` for logos and responsive mockups; do not duplicate assets, redraw branding, or repeat a tagline already embedded in the logo.

### Technologies

Display only the confirmed technologies: Angular, React, TypeScript, JavaScript, Java, NestJS, Node.js, GraphQL, PostgreSQL, Prisma, InfluxDB, Docker, and Git. Store reliable SVGs locally under `public/logos/technologies/`, retaining source/version/license metadata. Use a consistent visual logo size with object-fit: contain and preserve original brand colors and proportions; colored brand marks do not change the neutral UI palette.

Remove obsolete or no-longer-representative skills such as PHP from the featured technology list.

Place the technology section immediately above the footer.

Use a single-row, slowly scrolling technology carousel containing logos and accessible names.

The carousel should:

- Scroll smoothly and continuously at about 15–20px/s; derive cycle duration from the measured group width rather than a fixed duration.
- Avoid excessive height.
- Pause on hover and where appropriate on focus.
- Respect `prefers-reduced-motion`: stop the animation, hide visual duplicates, and expose a single manually scrollable row.
- Hide duplicated groups from assistive technologies using aria-hidden; keep the same widths/spacing in both groups for a seamless linear cycle and ensure one group exceeds the widest carousel viewport.
- Hide carousel scrollbars locally across browsers and avoid superfluous visible controls. Preserve horizontal touch/keyboard exploration without intercepting vertical page scrolling; stop automatic motion for the rest of the visit once manual exploration starts, preserving the visual offset.
- Avoid distracting visual effects.

### Footer

Use a dark footer matching the visual identity of the header.

Include:

- AR branding.
- Alessandro Rizzo's name.
- Professional role.
- Copyright information.
- Optional unobtrusive website version.

Avoid duplicating extensive content already present in the main page.

---

## Content Guidelines

- Supported locales: it-IT and en-GB only, with Italian as the static/no-JavaScript fallback.
- Preserve the legacy localStorage key aleRizzoWebsiteSelectedLanguage and exact locale values. A valid saved manual choice takes priority; otherwise choose the first supported variant from navigator.languages/navigator.language, falling back to it-IT. Ignore invalid values and tolerate unavailable storage. Save only manual changes and never clear unrelated storage.
- Keep translations centralized in typed IT/EN dictionaries, including metadata and accessible labels. Shared factual metadata (dates, links, names, technologies) stays separate; do not translate proper institution/project names or technology names.
- Use the existing small inline i18n runtime: early locale selection and bounded visibility guard, then synchronous initialization before first paint. Without JavaScript, Italian remains accessible. Manual language switching updates existing text and attributes, including open dialogs, without reloads, URL changes, SSR, or language routes.
- Localize calendar months via Intl.DateTimeFormat and duration wording via the shared formatter; refresh browser-calculated durations on language changes and page activation. Do not duplicate month arithmetic per locale or add an i18n framework without a concrete need.
- Avoid hardcoded user-facing strings scattered throughout components.
- Use concise, professional and accurate descriptions. Keep the short biography introductory, expanded biography a readable career overview without technology lists, and dialogs specific to the confirmed experience/project. Avoid confidential implementation details, unconfirmed leadership titles, quantitative claims, or planned work presented as completed.
- Do not invent employment responsibilities, dates, qualifications, or technical skills.
- Reuse verified historical information as a starting point, updating it according to the new requirements.

The current professional profile should reflect full-stack development, including frontend and backend work, participation in technical and architectural decisions, and involvement in SVN-to-Git migration activities.

Do not imply formal titles or responsibilities that have not been confirmed.

---

## Astro Development Conventions

- Prefer Astro components for static UI.
- Use TypeScript only where needed.
- Use native CSS with semantic variables.
- Prefer CSS Grid and Flexbox for responsive layouts.
- Avoid unnecessary browser-side JavaScript.
- Use semantic HTML.
- Favor reusable, focused components.
- Keep application content separate from presentation where practical.
- Avoid large monolithic components.
- Do not introduce client-side framework hydration without a justified need.

Suggested organization:

```text
src/
├── components/
│   ├── layout/
│   ├── profile/
│   ├── timeline/
│   ├── projects/
│   └── technologies/
├── data/
├── i18n/
├── layouts/
├── pages/
└── styles/

public/
├── images/
├── logos/
└── documents/
```

Adapt the structure if a simpler organization is more appropriate.

### Mobile-first (mandatory)

Mobile-first development is required for all current and future components, as most visits are expected from smartphones.

- Design the smartphone layout first, then adapt it to tablet and desktop using `min-width` media queries where appropriate.
- Prioritize immediate readability, intuitive navigation, and essential content. Keep header, section, and card heights compact.
- Prevent horizontal page scrolling and containers that require zoom to read or interact with content.
- Provide sufficiently large touch targets, ideally at least 44 × 44 CSS pixels.
- Keep fonts readable; main body text should preferably be at least 16 CSS pixels.
- Never make hover the only way to access information or functionality.
- Use responsive images with reserved dimensions or aspect ratios, following the layout-shift prevention requirement under Performance.
- Account for device safe areas where necessary.
- Test at viewport widths of at least 360, 390, 768, 1440, and 2560 CSS pixels, including touch interactions and expanded or open states where applicable.
- Ensure future timelines, experience dialogs, and the technology carousel are fully usable through touch, alongside the keyboard requirements below.

### Links

All links to external websites open in a new tab using `target="_blank"` and `rel="noopener noreferrer"`, including social, institution, company, and future project links. Internal portfolio navigation stays in the same tab; consultation PDFs open in a new tab with the same target and rel attributes and an accessible indication. Indicate external navigation discreetly where appropriate, using a different icon from internal navigation; provide an accessible new-tab indication.

### Accessibility

- Ensure keyboard navigation.
- Provide visible focus indicators.
- Use semantic buttons and links.
- Implement accessible modal dialogs: initial focus inside, keyboard containment, Escape to close, focus returned to the trigger, background interactions blocked, and page scroll position preserved.
- Maintain adequate text contrast.
- Respect reduced-motion preferences.
- Use descriptive image alternatives.

### Performance

- Keep JavaScript minimal.
- Optimize images and fonts.
- Prefer static rendering.
- Avoid unnecessary external dependencies.
- Prevent avoidable layout shifts.

---


## Hosting and delivery

Astro generates static files in dist/. firebase.json publishes exactly dist; do not restore Angular SPA rewrites. Preserve the existing Firebase project alias alerizzo, domain, GitHub secret references and unrelated infrastructure. No additional Firebase services are required.

Existing workflows build and test before Firebase Hosting: pushes to master publish live; same-repository pull requests publish preview channels. A push to an open PR can trigger a preview deployment. Never deploy or trigger publication without explicit authorization. Keep generated dist/, .astro/, node_modules/ and .firebase/ out of Git and keep credentials in GitHub Secrets.

## Workflow

Read relevant components and shared tokens before editing. Make the smallest coherent change, preserve approved design and translations, build and run applicable existing checks, verify responsive behavior and accessibility, then summarize changes and limitations. Consult official Astro and Firebase documentation for configuration changes. README covers setup and project structure; this file owns development conventions.
