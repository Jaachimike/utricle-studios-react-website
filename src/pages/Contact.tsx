import React from "react";
import ContactHeroSection from "../components/ContactHeroSection";

const Contact = () => {
  return (
    <div>
      <ContactHeroSection />
      <div className="width-container py-32 flex flex-col lg:space-x-32 lg:flex-row ">
        <div className="w-6/12">
          <h2 className="font-bold text-3xl mb-4 md:mb-12 text-utricleBlack">
            Get In Touch.
          </h2>
          <form action="" className="flex flex-col space-y-7">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border-b border-[#C5C5C5] outline-0"
            />
            <input
              type="text"
              placeholder="Email"
              className="p-4 border-b border-[#C5C5C5] outline-0"
            />
            <textarea
              name="Message"
              id=""
              cols={100}
              rows={6}
              placeholder="Message"
              className="p-4 border border-[#C5C5C5] outline-0"
            />
            <button className="text-utricleBlack hover:text-utricleBrown bg-utricleBrown hover:bg-white border border-utricleBrown w-fit px-9 py-3 text-sm font-medium tracking-widest transition-all delay-100">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="flex-1 *:mb-12">
          <div>
            <h2 className="font-bold text-3xl mb-4 md:mb-6 text-utricleBlack">
              Contact Info.
            </h2>
          </div>

          <div className="*:mb-2">
            <h3 className="text-utricleBlack text-lg font-semibold tracking-widest">
              LET'S TALK .
            </h3>
            <p className="text-utricleGrey">
              <a href="mailto:info@utriclestudios.com">
                info@utriclestudios.com
              </a>
            </p>
            <p className="text-utricleGrey">
              <a href="tel:+2348142927006">+234 814 292 7006</a>
            </p>
          </div>

          <div className="*:mb-2">
            <h3 className="text-utricleBlack text-lg font-semibold tracking-widest">
              VISIT US .
            </h3>
            <p className="text-utricleGrey w-8/12">
              47, Oba Yekini Street, Ikate Elegushi, Lekki, Lagos, Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
