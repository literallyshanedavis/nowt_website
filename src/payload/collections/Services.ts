import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access";
import {
  featuredImageField,
  publishedFields,
  slugField,
  visualVariantField,
} from "../fields";

export const Services: CollectionConfig = {
  slug: "services",
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "status", "updatedAt"],
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    slugField(),
    {
      name: "summary",
      type: "textarea",
      required: true,
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "serviceType",
      type: "select",
      options: [
        {
          label: "Strategy",
          value: "strategy",
        },
        {
          label: "Creative",
          value: "creative",
        },
        {
          label: "Production",
          value: "production",
        },
        {
          label: "Technology",
          value: "technology",
        },
      ],
    },
    visualVariantField,
    featuredImageField,
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      },
    },
    ...publishedFields,
  ],
};
