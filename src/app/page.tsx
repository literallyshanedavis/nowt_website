import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatIsNowt } from "@/components/WhatIsNowt";
import { WhyIPad } from "@/components/WhyIPad";
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
      <HowItWorks />
      <Waitlist />
      <Footer />
    </>
  );
}
