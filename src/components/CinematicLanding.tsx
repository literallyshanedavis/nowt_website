import {
  fallbackStudioBlocks,
  type StudioBlock,
  type StudioCard,
} from "@/lib/studio-blocks";

function MediaFrame({
  variant,
  className = "",
  imageUrl,
}: {
  className?: string;
  imageUrl?: string;
  variant?: string;
}) {
  return (
    <div className={`studio-frame studio-frame-${variant ?? "canvas"} ${className}`} aria-hidden>
      {imageUrl ? <img src={imageUrl} alt="" /> : <span />}
    </div>
  );
}

function splitHeading(heading: string) {
  return heading.split("\n").filter(Boolean);
}

function MarkStrip({ marks }: { marks: string[] }) {
  const trackMarks = [...marks, ...marks];

  return (
    <div className="studio-mark-strip" aria-label="Supported model providers">
      <div className="studio-mark-track">
        {trackMarks.map((mark, index) => (
          <span key={`${mark}-${index}`}>{mark}</span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  ctaHref,
  ctaLabel,
  intro,
  secondaryHref,
  title,
}: {
  ctaHref?: string;
  ctaLabel?: string;
  intro?: string;
  secondaryHref?: string;
  title: string;
}) {
  return (
    <div className="studio-section-head">
      <div>
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {ctaLabel || secondaryHref ? (
        <div className="studio-actions">
          <a href="#final">Get in touch</a>
          {ctaLabel ? <a href={ctaHref ?? "#"}>{ctaLabel}</a> : null}
        </div>
      ) : null}
    </div>
  );
}

function CardGrid({ cards }: { cards: StudioCard[] }) {
  return (
    <>
      {cards.map((card) => (
        <article key={card.title} className="studio-feature-card">
          <MediaFrame variant={card.variant} imageUrl={card.imageUrl} />
          <h2>{card.title}</h2>
          {card.body ? <p>{card.body}</p> : null}
        </article>
      ))}
    </>
  );
}

function renderBlock(block: StudioBlock, index: number) {
  const key = block.id ?? `${block.blockType}-${index}`;

  switch (block.blockType) {
    case "hero":
      return (
        <header className="studio-hero" id="hero" key={key}>
          <video
            className="studio-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster={block.posterUrl ?? "/thirtyseven-hero-poster.jpg"}
            aria-label="Abstract cinematic motion for thirtyseven"
          >
            <source src={block.videoUrl ?? "/thirtyseven-hero.mp4"} type="video/mp4" />
          </video>
          <div className="studio-hero-shade" aria-hidden />
          <div className="studio-hero-copy">
            {block.eyebrow ? <p className="studio-kicker">{block.eyebrow}</p> : null}
            <h1>
              {splitHeading(block.heading).map((line, lineIndex) => (
                <span key={line}>
                  {line}
                  {lineIndex < splitHeading(block.heading).length - 1 ? <br /> : null}
                </span>
              ))}
            </h1>
            {block.subheading ? <p className="studio-hero-subcopy">{block.subheading}</p> : null}
          </div>
        </header>
      );
    case "intro":
      return (
        <section className="studio-intro" id="about" key={key}>
          <p>{block.copy}</p>
        </section>
      );
    case "servicesGrid":
      return (
        <section className="studio-feature-grid" aria-label="Thirtyseven services" key={key}>
          {block.heading || block.intro ? (
            <div className="studio-feature-intro">
              {block.heading ? <h2>{block.heading}</h2> : null}
              {block.intro ? <p>{block.intro}</p> : null}
            </div>
          ) : null}
          <CardGrid cards={block.services} />
        </section>
      );
    case "projectShowcase": {
      const primaryProject = block.projects[0];

      return (
        <section className="studio-showcase" id="commercial" key={key}>
          <SectionHead
            ctaHref={block.ctaHref}
            ctaLabel={block.ctaLabel}
            intro={block.intro}
            secondaryHref={block.ctaHref}
            title={block.heading}
          />
          <MediaFrame
            variant={primaryProject?.variant ?? "wide"}
            imageUrl={primaryProject?.imageUrl}
            className="studio-wide-frame"
          />
          {block.projects.length > 1 ? (
            <div className="studio-project-grid">
              {block.projects.slice(1, 4).map((project) => (
                <article key={project.title} className="studio-content-card">
                  <h3>{project.title}</h3>
                  {project.body ? <p>{project.body}</p> : null}
                </article>
              ))}
            </div>
          ) : null}
        </section>
      );
    }
    case "mediaStrip": {
      const frameCount = Math.max(3, Math.min(block.frameCount ?? 8, 12));
      const marks = block.marks.length > 0 ? block.marks : fallbackStudioBlocks.flatMap((item) =>
        item.blockType === "mediaStrip" ? item.marks : [],
      );

      return (
        <section className="studio-strip-section" id="films" key={key}>
          <div className="studio-mini-strip" aria-hidden>
            {Array.from({ length: frameCount }).map((_, frameIndex) => (
              <MediaFrame
                key={frameIndex}
                variant={
                  frameIndex % 3 === 0 ? "canvas" : frameIndex % 3 === 1 ? "pipeline" : "ipad"
                }
              />
            ))}
          </div>
          <MarkStrip marks={marks} />
        </section>
      );
    }
    case "contentFeed":
      return (
        <section className="studio-showcase" key={key}>
          <SectionHead intro={block.intro} title={block.heading} />
          <div className="studio-feed-grid">
            <CardGrid cards={block.items} />
          </div>
        </section>
      );
    case "teamGrid":
      return (
        <section className="studio-showcase" key={key}>
          <SectionHead intro={block.intro} title={block.heading} />
          <div className="studio-team-grid">
            {block.members.map((member) => (
              <article key={member.title} className="studio-feature-card">
                <MediaFrame variant={member.variant ?? "finish"} imageUrl={member.imageUrl} />
                <h2>{member.title}</h2>
                {member.role ? <p className="studio-card-kicker">{member.role}</p> : null}
                {member.body ? <p>{member.body}</p> : null}
              </article>
            ))}
          </div>
        </section>
      );
    case "cta":
      return (
        <section className="studio-work-section" id="access" key={key}>
          <div className="studio-section-head">
            <div>
              {block.kicker ? <p className="studio-kicker">{block.kicker}</p> : null}
              <h2>{block.heading}</h2>
              {block.copy ? <p>{block.copy}</p> : null}
            </div>
            <a className="studio-pill studio-pill-large" href={block.ctaHref ?? "#final"}>
              {block.ctaLabel ?? "Get in touch"}
            </a>
          </div>
          <div className="studio-work-grid">
            <MediaFrame variant="process" />
            <MediaFrame variant="finish" />
          </div>
        </section>
      );
    default:
      return null;
  }
}

export function CinematicLanding({ blocks }: { blocks?: StudioBlock[] }) {
  const pageBlocks = blocks && blocks.length > 0 ? blocks : fallbackStudioBlocks;

  return (
    <main className="studio-page">
      <nav className="studio-nav" aria-label="Primary navigation">
        <a href="#hero" className="studio-logo" aria-label="thirtyseven home">
          thirtyseven
        </a>
        <div className="studio-nav-links">
          <a href="#about">About</a>
          <a href="#commercial">Workflow</a>
          <a href="#films">Canvas</a>
          <a href="#access">Early access</a>
        </div>
        <a href="#final" className="studio-pill">
          Get in touch
        </a>
      </nav>
      {pageBlocks.map(renderBlock)}
    </main>
  );
}
