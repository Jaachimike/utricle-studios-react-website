import React from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div>
      <AboutHeroSection />
      <div className="width-container pt-32 flex flex-col lg:flex-row justify-between">
        <h2 className="text-center font-semibold text-3xl lg:text-[40px] mb-4 md:mb-6 text-utricleBlack">
          Who We Are ?
        </h2>
        <div className="*:mb-4">
          {" "}
          <p className=" text-sm md:text-base font-light text-utricleGrey leading-6 md:leading-7 lg:leading-8  max-w-3xl mx-auto">
            At Utricle, we interpret ideas and concepts into captivating stories
            through our mastery of explainer videos, storyboard illustrations,
            animation, and live-action. We tell stories the Utricle way; short,
            creative and informative!
          </p>
          <p className=" text-sm md:text-base font-light text-utricleGrey leading-6 md:leading-7 lg:leading-8 max-w-3xl mx-auto">
            From a scribble on paper to the most visually pleasing images on
            screen, we continue to push the borders of creativity in content
            creation for animation and live action.
          </p>
          <p className=" text-sm md:text-base font-light text-utricleGrey leading-6 md:leading-7 lg:leading-8 max-w-3xl mx-auto">
            We pride ourselves in creating innovative and disruptive contents.
            Our ever-evolving production pipeline ensures our contents have the
            audience on the edge of their seat with an experience that leaves
            them wanting more.
          </p>
          <p className="text-sm md:text-base font-light text-utricleGrey leading-6 md:leading-7 lg:leading-8  max-w-3xl mx-auto">
            For us, we believe that even the most complex ideas can be
            interpreted into the most intriguing stories.
          </p>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default About;
