import React from "react";
import HeroSection from "../components/HeroSection";
import AfricanAnimationStudio from "../components/AfricanAnimationStudio";
import OurWorksHome from "../components/OurWorksHome";
import WhatWeDo from "../components/WhatWeDo";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AfricanAnimationStudio />
      <OurWorksHome />
      <WhatWeDo />
      <CTA />
    </main>
  );
};

export default Home;
