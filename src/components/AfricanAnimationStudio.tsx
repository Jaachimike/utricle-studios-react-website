import React from "react";
import MiniSwiper from "./MiniSwiper";

const AfricanAnimationStudio = () => {
  return (
    <div className="width-container py-32">
      <h2 className="text-center font-semibold text-[40px] mb-6 text-utricleBlack">
        An African Animation Studio
      </h2>
      <p className="text-center font-light text-utricleGrey leading-8 mb-20">
        We are a full-service Media Production Company with a focus on Design,
        Animation and Creative technology. We interpret ideas and concepts into
        captivating stories through our mastery of explainer videos, storyboard
        illustrations, animation, and live-action. We tell stories the Utricle
        way; short, creative and informative!
      </p>
      <MiniSwiper />
    </div>
  );
};

export default AfricanAnimationStudio;
