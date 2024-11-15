import React from "react";
import video from "/videos/Gammy and the living things (Official teaser) (with behind the scenes footage).mp4";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">We</h1>
        <p className="text-5xl md:text-7xl font-bold text-center max-w-6xl">
          Capture the Ideas of Magic
        </p>
      </div>

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
};

export default HeroSection;
