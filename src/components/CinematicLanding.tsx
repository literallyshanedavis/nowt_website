const featureCards = [
  {
    title: "Canvas",
    body: "Compose models, inputs and outputs on a visual workspace that feels made for touch.",
    variant: "canvas",
  },
  {
    title: "Pipelines",
    body: "Run the whole chain with a tap, then adjust the parts that need another pass.",
    variant: "pipeline",
  },
  {
    title: "iPad",
    body: "Sketch, capture, annotate and iterate where the idea actually happens.",
    variant: "ipad",
  },
];

const studioMarks = [
  "OpenAI",
  "Anthropic",
  "Replicate",
  "Core ML",
  "ControlNet",
  "Runway",
  "Stability",
  "Local models",
];

function MediaFrame({
  variant,
  className = "",
}: {
  variant: string;
  className?: string;
}) {
  return (
    <div className={`studio-frame studio-frame-${variant} ${className}`} aria-hidden>
      <span />
    </div>
  );
}

function MarkStrip() {
  const marks = [...studioMarks, ...studioMarks];

  return (
    <div className="studio-mark-strip" aria-label="Supported model providers">
      <div className="studio-mark-track">
        {marks.map((mark, index) => (
          <span key={`${mark}-${index}`}>{mark}</span>
        ))}
      </div>
    </div>
  );
}

export function CinematicLanding() {
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

      <header className="studio-hero" id="hero">
        <video
          className="studio-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/thirtyseven-hero-poster.jpg"
          aria-label="Abstract cinematic motion for thirtyseven"
        >
          <source src="/thirtyseven-hero.mp4" type="video/mp4" />
        </video>
        <div className="studio-hero-shade" aria-hidden />
        <div className="studio-hero-copy">
          <h1>
            Visual AI workflows
            <br />
            for iPad
          </h1>
        </div>
      </header>

      <section className="studio-intro" id="about">
        <p>
          thirtyseven is an iPad-first AI workflow studio for building, running
          and refining creative pipelines on an infinite canvas.
        </p>
      </section>

      <section className="studio-feature-grid" aria-label="Thirtyseven capabilities">
        {featureCards.map((card) => (
          <article key={card.title} className="studio-feature-card">
            <MediaFrame variant={card.variant} />
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </article>
        ))}
      </section>

      <section className="studio-showcase" id="commercial">
        <div className="studio-section-head">
          <div>
            <h2>Build once. Run it when the idea comes back.</h2>
            <p>
              Save the process, swap the input, change the prompt, run another
              branch. The workflow becomes part of the work.
            </p>
          </div>
          <div className="studio-actions">
            <a href="#final">Get in touch</a>
            <a href="#films">See more</a>
          </div>
        </div>
        <MediaFrame variant="wide" className="studio-wide-frame" />
      </section>

      <section className="studio-strip-section" id="films">
        <div className="studio-mini-strip" aria-hidden>
          {Array.from({ length: 8 }).map((_, index) => (
            <MediaFrame
              key={index}
              variant={index % 3 === 0 ? "canvas" : index % 3 === 1 ? "pipeline" : "ipad"}
            />
          ))}
        </div>
        <MarkStrip />
      </section>

      <section className="studio-work-section" id="access">
        <div className="studio-section-head">
          <div>
            <h2>From first sketch to finished chain.</h2>
            <p>
              Use the iPad camera, Pencil, models and saved workflows without
              having to return to a desktop setup.
            </p>
          </div>
          <a className="studio-pill studio-pill-large" href="#final">
            Request invite
          </a>
        </div>
        <div className="studio-work-grid">
          <MediaFrame variant="process" />
          <MediaFrame variant="finish" />
        </div>
      </section>
    </main>
  );
}
