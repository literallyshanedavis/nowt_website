import path from "path";
import { fileURLToPath } from "url";

import type { CollectionConfig } from "payload";

import { anyone, authenticated } from "../access";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: "alt",
  },
  upload: {
    staticDir: path.resolve(dirname, "../../../public/media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "caption",
      type: "textarea",
    },
  ],
};
