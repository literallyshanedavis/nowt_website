export type StudioCard = {
  body?: string;
  imageUrl?: string;
  title: string;
  variant?: string;
};

export type StudioPerson = StudioCard & {
  role?: string;
};

export type StudioHeroBlock = {
  blockType: "hero";
  eyebrow?: string;
  heading: string;
  id?: string;
  posterUrl?: string;
  subheading?: string;
  videoUrl?: string;
};

export type StudioIntroBlock = {
  blockType: "intro";
  copy: string;
  id?: string;
};

export type StudioServicesGridBlock = {
  blockType: "servicesGrid";
  heading?: string;
  id?: string;
  intro?: string;
  services: StudioCard[];
};

export type StudioProjectShowcaseBlock = {
  blockType: "projectShowcase";
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  id?: string;
  intro?: string;
  projects: StudioCard[];
};

export type StudioMediaStripBlock = {
  blockType: "mediaStrip";
  frameCount?: number;
  id?: string;
  marks: string[];
};

export type StudioContentFeedBlock = {
  blockType: "contentFeed";
  heading: string;
  id?: string;
  intro?: string;
  items: StudioCard[];
};

export type StudioTeamGridBlock = {
  blockType: "teamGrid";
  heading: string;
  id?: string;
  intro?: string;
  members: StudioPerson[];
};

export type StudioCtaBlock = {
  blockType: "cta";
  copy?: string;
  ctaHref?: string;
  ctaLabel?: string;
  heading: string;
  id?: string;
  kicker?: string;
};

export type StudioBlock =
  | StudioHeroBlock
  | StudioIntroBlock
  | StudioServicesGridBlock
  | StudioProjectShowcaseBlock
  | StudioMediaStripBlock
  | StudioContentFeedBlock
  | StudioTeamGridBlock
  | StudioCtaBlock;

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

export const fallbackStudioBlocks: StudioBlock[] = [
  {
    blockType: "hero",
    heading: "Visual AI workflows\nfor iPad",
    posterUrl: "/thirtyseven-hero-poster.jpg",
    videoUrl: "/thirtyseven-hero.mp4",
  },
  {
    blockType: "intro",
    copy: "thirtyseven is an iPad-first AI workflow studio for building, running and refining creative pipelines on an infinite canvas.",
  },
  {
    blockType: "servicesGrid",
    services: [
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
    ],
  },
  {
    blockType: "projectShowcase",
    ctaHref: "#films",
    ctaLabel: "See more",
    heading: "Build once. Run it when the idea comes back.",
    intro:
      "Save the process, swap the input, change the prompt, run another branch. The workflow becomes part of the work.",
    projects: [],
  },
  {
    blockType: "mediaStrip",
    frameCount: 8,
    marks: studioMarks,
  },
  {
    blockType: "cta",
    copy:
      "Use the iPad camera, Pencil, models and saved workflows without having to return to a desktop setup.",
    ctaHref: "#final",
    ctaLabel: "Request invite",
    heading: "From first sketch to finished chain.",
  },
];

type UnknownRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const asString = (value: unknown, fallback = "") =>
  typeof value === "string" && value.trim() ? value : fallback;

const asNumber = (value: unknown, fallback: number) =>
  typeof value === "number" && Number.isFinite(value) ? value : fallback;

const recordsFromRelation = (value: unknown) =>
  Array.isArray(value) ? value.filter(isRecord) : [];

const imageUrlFrom = (value: unknown) => {
  if (!isRecord(value)) {
    return undefined;
  }

  const media = value.featuredImage;

  if (isRecord(media)) {
    return asString(media.url) || undefined;
  }

  return undefined;
};

const cardFromDoc = (doc: UnknownRecord, fallbackTitle: string): StudioCard => ({
  body: asString(doc.summary) || asString(doc.excerpt) || asString(doc.bio),
  imageUrl: imageUrlFrom(doc),
  title: asString(doc.title) || asString(doc.name) || fallbackTitle,
  variant: asString(doc.visualVariant, "canvas"),
});

export const normalizePayloadBlocks = (layout: unknown): StudioBlock[] => {
  if (!Array.isArray(layout)) {
    return [];
  }

  return layout.flatMap((block): StudioBlock[] => {
    if (!isRecord(block)) {
      return [];
    }

    const id = asString(block.id) || undefined;

    switch (block.blockType) {
      case "hero":
        return [
          {
            blockType: "hero",
            eyebrow: asString(block.eyebrow) || undefined,
            heading: asString(block.heading, "Visual AI workflows\nfor iPad"),
            id,
            posterUrl: asString(block.posterUrl) || undefined,
            subheading: asString(block.subheading) || undefined,
            videoUrl: asString(block.videoUrl) || undefined,
          },
        ];
      case "intro":
        return [
          {
            blockType: "intro",
            copy: asString(block.copy),
            id,
          },
        ];
      case "servicesGrid":
        return [
          {
            blockType: "servicesGrid",
            heading: asString(block.heading) || undefined,
            id,
            intro: asString(block.intro) || undefined,
            services: recordsFromRelation(block.services).map((doc, index) =>
              cardFromDoc(doc, `Service ${index + 1}`),
            ),
          },
        ];
      case "projectShowcase":
        return [
          {
            blockType: "projectShowcase",
            ctaHref: asString(block.ctaHref, "#films"),
            ctaLabel: asString(block.ctaLabel, "See more"),
            heading: asString(block.heading, "Featured work"),
            id,
            intro: asString(block.intro) || undefined,
            projects: recordsFromRelation(block.projects).map((doc, index) =>
              cardFromDoc(doc, `Project ${index + 1}`),
            ),
          },
        ];
      case "mediaStrip":
        return [
          {
            blockType: "mediaStrip",
            frameCount: asNumber(block.frameCount, 8),
            id,
            marks: recordsFromRelation(block.marks)
              .map((mark) => asString(mark.label))
              .filter(Boolean),
          },
        ];
      case "contentFeed": {
        const sourceDocs =
          asString(block.source, "blog") === "news"
            ? recordsFromRelation(block.newsItems)
            : recordsFromRelation(block.blogPosts);

        return [
          {
            blockType: "contentFeed",
            heading: asString(block.heading, "Latest"),
            id,
            intro: asString(block.intro) || undefined,
            items: sourceDocs.map((doc, index) => cardFromDoc(doc, `Item ${index + 1}`)),
          },
        ];
      }
      case "teamGrid":
        return [
          {
            blockType: "teamGrid",
            heading: asString(block.heading, "Team"),
            id,
            intro: asString(block.intro) || undefined,
            members: recordsFromRelation(block.members).map((doc, index) => ({
              ...cardFromDoc(doc, `Member ${index + 1}`),
              role: asString(doc.role) || undefined,
            })),
          },
        ];
      case "cta":
        return [
          {
            blockType: "cta",
            copy: asString(block.copy) || undefined,
            ctaHref: asString(block.ctaHref, "#final"),
            ctaLabel: asString(block.ctaLabel, "Get in touch"),
            heading: asString(block.heading, "Get in touch"),
            id,
            kicker: asString(block.kicker) || undefined,
          },
        ];
      default:
        return [];
    }
  });
};
