import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access";
import { featuredImageField, publishedFields, slugField } from "../fields";

export const Blog: CollectionConfig = {
  slug: "blog",
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "status", "publishedAt", "updatedAt"],
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
      name: "excerpt",
      type: "textarea",
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "team",
    },
    featuredImageField,
    ...publishedFields,
  ],
};
