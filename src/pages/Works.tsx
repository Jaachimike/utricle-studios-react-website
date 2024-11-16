import React from "react";
import WorksHeroSection from "../components/WorksHeroSection";
import CTA from "../components/CTA";
import SwiperCarousel from "../components/SwiperCarousel";

interface WorksData {
  title: string;
  videoLinks: string[];
}

const worksData: WorksData[] = [
  {
    title: "3D Animation",
    videoLinks: [
      "https://youtu.be/z3ubO0RY0OE",
      "https://youtu.be/xh_pFYeJqzE",
    ],
  },
  {
    title: "2D Animation",
    videoLinks: [
      "https://youtu.be/YCGX-RJGoj0",
      "https://youtu.be/CCGXk7Fhe2U",
      "https://youtu.be/rl8XkB5yzn4",
      "https://youtu.be/OrpdQVK5WuI",
    ],
  },
  {
    title: "Explainer Videos",
    videoLinks: [
      "https://youtu.be/HwMhDww3EjA",
      "https://youtu.be/PalQZs4biMY",
      "https://youtu.be/CCGXk7Fhe2U",
      "https://youtu.be/YCGX-RJGoj0",
    ],
  },
];

const Works = () => {
  return (
    <div>
      <WorksHeroSection />
      <div className="container mx-auto pt-20 px-4">
        {worksData.map((item, index) => (
          <div key={index} className="works-section mb-16">
            <h3 className="text-3xl font-semibold text-utricleBlack mb-8">
              {item.title}
            </h3>
            <SwiperCarousel videoLinks={item.videoLinks} />
          </div>
        ))}
      </div>

      <CTA />
    </div>
  );
};

export default Works;
