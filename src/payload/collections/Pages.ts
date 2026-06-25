import type { CollectionConfig } from "payload";

import { authenticated, publishedOrAuthenticated } from "../access";
import { pageBlocks } from "../blocks";
import { publishedFields, slugField } from "../fields";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: authenticated,
    delete: authenticated,
    read: publishedOrAuthenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "slug", "status", "updatedAt"],
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
      name: "meta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
    {
      name: "layout",
      type: "blocks",
      blocks: pageBlocks,
      required: true,
      minRows: 1,
    },
    ...publishedFields,
  ],
};
