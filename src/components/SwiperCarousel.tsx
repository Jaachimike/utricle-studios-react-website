import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import ReactPlayer from "react-player";
import {Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

interface SwiperCarouselProps {
  videoLinks: string[];
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = ({videoLinks}) => {
  return (
    <div className="w-full h-full ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="w-full"
      >
        {videoLinks.map((videoLink, index) => (
          <SwiperSlide key={index} className="px-2">
            <div className="aspect-video w-full h-full min-h-[200px] md:min-h-[225px] lg:min-h-[250px] px-2">
              <ReactPlayer
                url={videoLink}
                controls={true}
                width="100%"
                height="100%"
                className="!w-full !h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
