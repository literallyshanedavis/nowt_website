import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access";
import {
  featuredImageField,
  publishedFields,
  slugField,
  visualVariantField,
} from "../fields";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "client", "status", "updatedAt"],
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
      name: "client",
      type: "text",
    },
    {
      name: "year",
      type: "number",
    },
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
      name: "services",
      type: "relationship",
      hasMany: true,
      relationTo: "services",
    },
    visualVariantField,
    featuredImageField,
    ...publishedFields,
  ],
};
