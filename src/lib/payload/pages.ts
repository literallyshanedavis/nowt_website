import config from "@payload-config";
import { getPayload } from "payload";

import { fallbackStudioBlocks, normalizePayloadBlocks, type StudioBlock } from "../studio-blocks";

type StudioPage = {
  blocks: StudioBlock[];
  title: string;
};

type PageOptions = {
  fallback?: boolean;
};

const fallbackPage: StudioPage = {
  blocks: fallbackStudioBlocks,
  title: "thirtyseven",
};

export const getPageBySlug = async (
  slug: string,
  options: PageOptions = {},
): Promise<StudioPage | null> => {
  const shouldFallback = options.fallback !== false;

  if (!process.env.DATABASE_URL) {
    return shouldFallback ? fallbackPage : null;
  }

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "pages",
      depth: 2,
      limit: 1,
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            status: {
              equals: "published",
            },
          },
        ],
      },
    });

    const page = result.docs[0];

    if (!page) {
      return shouldFallback ? fallbackPage : null;
    }

    const blocks = normalizePayloadBlocks(page.layout);

    return {
      blocks: blocks.length > 0 ? blocks : fallbackStudioBlocks,
      title: page.title,
    };
  } catch (error) {
    console.warn("Payload page lookup failed; rendering static fallback.", error);
    return shouldFallback ? fallbackPage : null;
  }
};
