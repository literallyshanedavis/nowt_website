import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsNowt } from "@/components/WhatIsNowt";
import { WhyIPad } from "@/components/WhyIPad";
import { NodesShowcase } from "@/components/NodesShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyIPad />
      <WhatIsNowt />
      <NodesShowcase />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </>
  );
}
