import * as React from 'react';

/**
 * TrustSection
 * -----------------------------------------------------------------------------
 * Discreet "used by" band for the thirtyseven landing page.
 *
 * Design notes:
 *  - Low-contrast row of studio marks; brightens on hover.
 *  - Typography is intentionally mixed (sans / serif italic / mono) so the
 *    row reads like a real roster, not a logo wall.
 *  - No imagery — just inline SVG marks + typeset names — keeps it quiet
 *    and lets it sit comfortably between any two sections.
 *
 * Styling:
 *  - Pairs with the global CSS in Landing Page.html (`.trust-band`,
 *    `.trust-row`, `.trust-logo`, `.trust-dot`, `.trust-foot`).
 *  - Expects the --fg, --fg-mute, --line, --bg CSS custom properties.
 *
 * Usage:
 *  <TrustSection />
 *  <TrustSection label="Quietly in use at" studios={customStudios} stat="..." />
 * -----------------------------------------------------------------------------
 */

export type StudioMark =
  | { name: string; kind: 'text'; typeface?: 'sans' | 'serif-italic' | 'mono' }
  | { name: string; kind: 'mark'; svg: React.ReactNode };

export interface TrustSectionProps {
  /** Eyebrow text above the row. */
  label?: string;
  /** Stat line rendered below in monospace. Pass `null` to hide. */
  stat?: string | null;
  /** Studios to render, in order. Defaults to the current roster. */
  studios?: StudioMark[];
  /** Override the section id (used for anchor links / aria). */
  id?: string;
  /** Optional className to forward to the <section>. */
  className?: string;
}

const DEFAULT_STUDIOS: StudioMark[] = [
  {
    name: 'Orbital Type',
    kind: 'mark',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Folio & Field',
    kind: 'mark',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18 L12 4 L20 18 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  { name: 'Terra Botanica', kind: 'text', typeface: 'serif-italic' },
  {
    name: 'Northward',
    kind: 'mark',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  { name: 'SIGNAL/37', kind: 'text', typeface: 'mono' },
  {
    name: 'Harbour Studio',
    kind: 'mark',
    svg: (
      <svg width="20" height="18" viewBox="0 0 28 24" fill="none" aria-hidden="true">
        <path d="M2 18 C 8 18, 8 6, 14 6 S 20 18, 26 18" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: 'Atlas & Cinder',
    kind: 'mark',
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20 L12 4 L20 20" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 13 H16" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const typefaceStyles: Record<NonNullable<Extract<StudioMark, { kind: 'text' }>['typeface']>, React.CSSProperties> = {
  sans: {},
  'serif-italic': {
    fontFamily: "var(--font-serif)",
    fontStyle: 'italic',
    fontSize: 19,
    letterSpacing: '-0.01em',
  },
  mono: {
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    letterSpacing: '0.04em',
  },
};

export function TrustSection({
  label = 'Quietly in use at',
  stat = 'Private beta · 37 studios, 6 countries, 1,400 canvases this month',
  studios = DEFAULT_STUDIOS,
  id = 'trust',
  className,
}: TrustSectionProps) {
  return (
    <section
      id={id}
      className={['trust-band', className].filter(Boolean).join(' ')}
      aria-label="Studios using thirtyseven"
    >
      <div className="wrap">
        <div className="trust-inner">
          <div className="trust-label">{label}</div>
          <div className="trust-row">
            {studios.map((studio, i) => (
              <React.Fragment key={studio.name}>
                <span
                  className="trust-logo"
                  style={studio.kind === 'text' ? typefaceStyles[studio.typeface ?? 'sans'] : undefined}
                >
                  {studio.kind === 'mark' && studio.svg}
                  {studio.name}
                </span>
                {i < studios.length - 1 && <span className="trust-dot" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
          {stat && <div className="trust-foot">{stat}</div>}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;

/* -----------------------------------------------------------------------------
 * Companion stylesheet — copy into your global CSS if not already present.
 * (Already included in Landing Page.html.)
 * -----------------------------------------------------------------------------

.trust-band {
  border-top: 1px solid var(--line);
  padding: 48px 32px;
  background: var(--bg);
}
.trust-band .wrap { max-width: 1200px; margin: 0 auto; }
.trust-inner { display: flex; flex-direction: column; align-items: center; gap: 22px; }
.trust-label {
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--fg-mute);
}
.trust-row {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: center;
  gap: 28px 32px;
  max-width: 1000px;
  color: rgba(236,232,225,0.52);
}
.trust-logo {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Geist', sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.015em;
  transition: color .25s ease;
  white-space: nowrap;
}
.trust-logo:hover { color: var(--fg); }
.trust-logo svg { opacity: 0.85; }
.trust-dot {
  width: 3px; height: 3px; border-radius: 999px;
  background: rgba(236,232,225,0.18);
}
.trust-foot {
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  color: var(--fg-mute);
  letter-spacing: 0.02em;
  margin-top: 6px;
}
@media (max-width: 720px) {
  .trust-row { gap: 18px 20px; }
  .trust-logo { font-size: 13.5px; }
  .trust-dot { display: none; }
}

------------------------------------------------------------------------------- */
