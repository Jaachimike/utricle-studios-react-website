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
    <div className=" py-32 mx-8">
      {" "}
      <h2 className="text-center font-semibold text-[40px] mb-6 text-utricleBlack">
        Our Works
      </h2>
      {/* grid images */}
      <div className="grid lg:grid-cols-2 gap-3 mb-3">
        <div>
          <img src={gammy} alt="" />
        </div>
        <div>
          <img src={eto} alt="" className="h-full" />
        </div>
      </div>
      <div className="flex gap-3">
        {" "}
        <div className="w-5/12">
          <img src={cluckStars} alt="" className="h-full " />
        </div>
        <div className="flex-1 ">
          <img src={sexualHarrasment} alt="" className="h-full " />
        </div>
      </div>
    </div>
  );
};

export default OurWorksHome;
