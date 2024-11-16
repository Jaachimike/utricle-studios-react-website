import React from "react";
import threeD from "../assets/svg/plugin-svgrepo-com.svg";
import twoD from "../assets/svg/monitor-svgrepo-com.svg";
import motionGraphics from "../assets/svg/film-svgrepo-com.svg";
import illustration from "../assets/svg/pen-clip-svgrepo-com.svg";
import scriptWriting from "../assets/svg/script-svgrepo-com.svg";
import visualEffects from "../assets/svg/bow-and-arrow-svgrepo-com.svg";
import rightArrow from "../assets/svg/chevron-right-svgrepo-com.svg";

const props = [
  {
    imgSrc: twoD,
    text: "2d Animation",
    link: "#",
  },
  {
    imgSrc: threeD,
    text: "3d Animation",
    link: "#",
  },
  {
    imgSrc: motionGraphics,
    text: "Motion Graphics",
    link: "#",
  },
  {
    imgSrc: illustration,
    text: "Illustration",
    link: "#",
  },
  {
    imgSrc: scriptWriting,
    text: "Script Writing",
    link: "#",
  },
  {
    imgSrc: visualEffects,
    text: "Visual Effects",
    link: "#",
  },
];

const WhatWeDo = () => {
  return (
    <div className="width-container pt-32">
      <h2 className="text-center font-semibold text-3xl lg:text-[40px] mb-4 md:mb-6 text-utricleBlack">
        What we do
      </h2>
      <p className="text-center text-sm md:text-base font-light text-utricleGrey leading-6 md:leading-7 lg:leading-8 mb-8 md:mb-12 lg:mb-20 max-w-2xl mx-auto">
        We offer great services in visual production, post-production, 3d
        animation, motion graphics, 2d animation, documentaries, illustration
        and visual effects.
      </p>

      {/* services grid */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 max-w-5xl mx-auto">
        {props.map(prop => (
          <div className="bg-[#F7F7F7] w-[270px] p-10 flex flex-col border-2 hover:border-utricleBrown transition-all delay-100 cursor-pointer">
            <img src={prop.imgSrc} alt="" className="h-11 w-11 mb-8" />
            <p className="font-semibold mb-6">{prop.text}</p>
            <div className="flex justify-end">
              <div className="p-3 rounded-full border-2 w-fit">
                <img src={rightArrow} alt="right arrow" className="h-5 " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
