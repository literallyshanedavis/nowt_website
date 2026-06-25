import type { Block } from "payload";

export const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: {
    singular: "Hero",
    plural: "Hero blocks",
  },
  fields: [
    {
      name: "eyebrow",
      type: "text",
    },
    {
      name: "heading",
      type: "textarea",
      required: true,
      defaultValue: "Visual AI workflows\nfor iPad",
    },
    {
      name: "subheading",
      type: "textarea",
    },
    {
      name: "videoUrl",
      type: "text",
      defaultValue: "/thirtyseven-hero.mp4",
    },
    {
      name: "posterUrl",
      type: "text",
      defaultValue: "/thirtyseven-hero-poster.jpg",
    },
  ],
};

export const IntroBlock: Block = {
  slug: "intro",
  interfaceName: "IntroBlock",
  labels: {
    singular: "Intro",
    plural: "Intro blocks",
  },
  fields: [
    {
      name: "copy",
      type: "textarea",
      required: true,
    },
  ],
};

export const ServicesGridBlock: Block = {
  slug: "servicesGrid",
  interfaceName: "ServicesGridBlock",
  labels: {
    singular: "Services grid",
    plural: "Services grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "intro",
      type: "textarea",
    },
    {
      name: "services",
      type: "relationship",
      hasMany: true,
      relationTo: "services",
      required: true,
    },
  ],
};

export const ProjectShowcaseBlock: Block = {
  slug: "projectShowcase",
  interfaceName: "ProjectShowcaseBlock",
  labels: {
    singular: "Project showcase",
    plural: "Project showcases",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "intro",
      type: "textarea",
    },
    {
      name: "projects",
      type: "relationship",
      hasMany: true,
      relationTo: "projects",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "See more",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "#films",
    },
  ],
};

export const ContentFeedBlock: Block = {
  slug: "contentFeed",
  interfaceName: "ContentFeedBlock",
  labels: {
    singular: "Content feed",
    plural: "Content feeds",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "intro",
      type: "textarea",
    },
    {
      name: "source",
      type: "select",
      required: true,
      defaultValue: "blog",
      options: [
        {
          label: "Blog",
          value: "blog",
        },
        {
          label: "News",
          value: "news",
        },
      ],
    },
    {
      name: "blogPosts",
      type: "relationship",
      hasMany: true,
      relationTo: "blog",
      admin: {
        condition: (_, siblingData) => siblingData?.source === "blog",
      },
    },
    {
      name: "newsItems",
      type: "relationship",
      hasMany: true,
      relationTo: "news",
      admin: {
        condition: (_, siblingData) => siblingData?.source === "news",
      },
    },
  ],
};

export const TeamGridBlock: Block = {
  slug: "teamGrid",
  interfaceName: "TeamGridBlock",
  labels: {
    singular: "Team grid",
    plural: "Team grids",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "intro",
      type: "textarea",
    },
    {
      name: "members",
      type: "relationship",
      hasMany: true,
      relationTo: "team",
      required: true,
    },
  ],
};

export const MediaStripBlock: Block = {
  slug: "mediaStrip",
  interfaceName: "MediaStripBlock",
  labels: {
    singular: "Media strip",
    plural: "Media strips",
  },
  fields: [
    {
      name: "frameCount",
      type: "number",
      defaultValue: 8,
      min: 3,
      max: 12,
    },
    {
      name: "marks",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export const CtaBlock: Block = {
  slug: "cta",
  interfaceName: "CtaBlock",
  labels: {
    singular: "CTA",
    plural: "CTAs",
  },
  fields: [
    {
      name: "kicker",
      type: "text",
    },
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "copy",
      type: "textarea",
    },
    {
      name: "ctaLabel",
      type: "text",
      defaultValue: "Get in touch",
    },
    {
      name: "ctaHref",
      type: "text",
      defaultValue: "#final",
    },
  ],
};

export const pageBlocks = [
  HeroBlock,
  IntroBlock,
  ServicesGridBlock,
  ProjectShowcaseBlock,
  MediaStripBlock,
  ContentFeedBlock,
  TeamGridBlock,
  CtaBlock,
];
