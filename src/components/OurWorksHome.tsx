import React from "react";
import gammy from "../assets/png/homepageGrid/gammyposter.jpg";
import eto from "../assets/png/homepageGrid/eto.png";
import cluckStars from "../assets/png/homepageGrid/cluckstarsbgopt.jpg";
import sexualHarrasment from "../assets/png/homepageGrid/harrasmentopt.jpg";

const gridImages = [
  {imageSrc: gammy},
  {imageSrc: eto},
  {imageSrc: cluckStars},
  {imageSrc: sexualHarrasment},
];

const images = [
  {src: gammy, title: "3D Animation", gridSpan: "lg:col-span-1"},
  {src: eto, title: "3D Animation", gridSpan: "lg:col-span-1"},
  {src: cluckStars, title: "2D Animation", width: "lg:w-5/12"},
  {src: sexualHarrasment, title: "Explainer Videos", width: "flex-1"},
];

const OurWorksHome = () => {
  return (
    <div className="pt-32 mx-8">
      {" "}
      <h2 className="text-center font-semibold text-3xl lg:text-[40px] mb-4 md:mb-6 text-utricleBlack">
        Our Works
      </h2>
      {/* grid images */}
      <div className="container mx-auto p-4 space-y-3">
        {/* Top grid - two equal columns on large screens, stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative group aspect-video">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
                <h2 className="text-gray-300 text-xl md:text-2xl lg:text-3xl">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - flex column on mobile, row on large screens */}
        <div className="flex flex-col lg:flex-row gap-3">
          {images.slice(2).map((image, index) => (
            <div
              key={index}
              className={`relative group aspect-video ${image.width}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
                <h2 className="text-gray-300 text-xl md:text-2xl lg:text-3xl">
                  {image.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorksHome;
