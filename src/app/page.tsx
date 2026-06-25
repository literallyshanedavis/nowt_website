import { CinematicLanding } from "@/components/CinematicLanding";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { getPageBySlug } from "@/lib/payload/pages";

export const revalidate = 60;

export default async function Home() {
  const page = await getPageBySlug("home");

  return (
    <>
      <CinematicLanding blocks={page?.blocks} />
      <FinalCTA />
      <Footer />
    </>
  );
}
