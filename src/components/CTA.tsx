import React from "react";

const CTA = () => {
  return (
    <div className="width-container py-32 flex flex-col lg:flex-row lg:items-center justify-between">
      {/* write up */}
      <div className="mb-8 lg:mb-0">
        {/* subscript text */}
        <p className="text-utricleBrown tracking-widest text-sm mb-5">
          LET'S TALK
        </p>
        <h2 className="text-6xl md:text-[68px] leading-none font-bold text-white drop-shadow-[0_1.2px_1.7px_rgba(0,0,0,0.9)]">
          ABOUT YOUR{" "}
          <span className="text-black">
            NEXT <br className="hidden md:block" /> PROJECT
          </span>
        </h2>
      </div>
      {/* cta button */}
      <div>
        <button className="text-white hover:text-utricleBlack font-bold bg-utricleBlack hover:bg-white border-2 border-utricleBlack px-9 py-4 transition-all delay-150">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default CTA;
