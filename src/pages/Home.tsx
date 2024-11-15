import React from "react";
import HeroSection from "../components/HeroSection";
import AfricanAnimationStudio from "../components/AfricanAnimationStudio";
import OurWorksHome from "../components/OurWorksHome";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AfricanAnimationStudio />
      <OurWorksHome />
    </main>
  );
};

export default Home;
