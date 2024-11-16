import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import ReactPlayer from "react-player";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../styles/miniSwiper.css";

// import required modules
import {Navigation} from "swiper/modules";

const works = [
  {
    youtubeVideoLink: "https://youtu.be/z3ubO0RY0OE",
    title: "Gammy and The Living Things",
    subtitle: "Nigeria's First feature length 3D animated musical",
    description:
      "Gammy and the Living Things” opens in the Hinterland with the ambitious Gammy and his band. Gammy's dream of making it in the big city leads him to the city of Lagos where he and his band face several hurdles and learn a new meaning of success.",
  },
  {
    youtubeVideoLink: "https://youtu.be/jz9B5gzBgog",
    title: "ètò",
    description:
      "An Electronic Call-Up System for Scheduling the Entry of Trucks and Empty Containers into the Ports.",
  },
];

const MiniSwiper = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {works.map(work => (
          <SwiperSlide>
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-9 px-4 ">
              <div className="flex justify-center mb-6 lg:mb-0">
                {" "}
                <ReactPlayer url={work.youtubeVideoLink} controls={true} />
              </div>
              <div>
                <h3 className="text-utricleBlack font-semibold text-2xl mb-3">
                  {work.title}
                </h3>
                {work.subtitle && (
                  <h5 className="font-semibold text-base text-utricleBlack mb-2">
                    {work.subtitle}
                  </h5>
                )}

                <p className="font-light text-[15px] text-utricleGrey leading-7">
                  {work.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MiniSwiper;
