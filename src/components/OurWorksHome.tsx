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

const OurWorksHome = () => {
  return (
    <div className="pt-32 mx-8">
      {" "}
      <h2 className="text-center font-semibold text-3xl lg:text-[40px] mb-4 md:mb-6 text-utricleBlack">
        Our Works
      </h2>
      {/* grid images */}
      <div className="grid lg:grid-cols-2 gap-3 mb-3">
        <div className="relative group">
          <img src={gammy} alt="" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
            <h2 className="text-gray-300 text-3xl">3D Animation</h2>{" "}
          </div>
        </div>
        <div className="relative group">
          <img src={eto} alt="" className="h-full" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
            <h2 className="text-gray-300 text-3xl">3D Animation</h2>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3">
        {" "}
        <div className="lg:w-5/12 relative group">
          <img src={cluckStars} alt="" className="h-full " />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
            <h2 className="text-gray-300 text-3xl">2D Animation</h2>{" "}
          </div>
        </div>
        <div className="flex-1 relative group">
          <img src={sexualHarrasment} alt="" className="h-full " />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
            <h2 className="text-gray-300 text-3xl">Explainer Videos</h2>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorksHome;
