import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access";
import { featuredImageField, publishedFields, slugField } from "../fields";

export const Team: CollectionConfig = {
  slug: "team",
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "role", "status", "updatedAt"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    slugField("name"),
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
    },
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
