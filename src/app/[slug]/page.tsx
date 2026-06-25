import { notFound } from "next/navigation";

import { CinematicLanding } from "@/components/CinematicLanding";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { getPageBySlug } from "@/lib/payload/pages";

export const revalidate = 60;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CmsPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug, { fallback: false });

  if (!page) {
    notFound();
  }

  return (
    <>
      <CinematicLanding blocks={page.blocks} />
      <FinalCTA />
      <Footer />
    </>
  );
}
