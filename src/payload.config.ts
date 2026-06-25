import path from "path";
import { fileURLToPath } from "url";

import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Blog } from "./payload/collections/Blog";
import { Media } from "./payload/collections/Media";
import { News } from "./payload/collections/News";
import { Pages } from "./payload/collections/Pages";
import { Projects } from "./payload/collections/Projects";
import { Services } from "./payload/collections/Services";
import { Team } from "./payload/collections/Team";
import { Users } from "./payload/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: dirname,
    },
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Services, Projects, Team, Blog, News],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "development-payload-secret-change-me",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
