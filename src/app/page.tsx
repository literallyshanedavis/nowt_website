import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { PipelineDemo } from "@/components/PipelineDemo";
import { Features } from "@/components/Features";
import { ModelsTicker } from "@/components/ModelsTicker";
import { Pricing } from "@/components/Pricing";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustSection />
      <PipelineDemo />
      <Features />
      <ModelsTicker />
      <Pricing />
      <FinalCTA />
      <Footer />
    </>
  );
}
