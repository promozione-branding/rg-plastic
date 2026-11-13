
"use client";

import {
  FiArrowRight,
  FiFileText,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const heroImages = [
  "/slide3.png",
  "/slide-2.webp",
  "/slide-4.webp",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[750px] h-screen w-full overflow-hidden bg-[#101d1b]">

      {/* FULL BACKGROUND IMAGE SLIDER */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-full w-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index} className="h-screen mt-20 w-full">
              <img
                src={image}
                alt={`Plastic Recycling Machine ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#07110f]/55 via-[#07110f]/5 to-transparent" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#07110f] via-[#07110f]/15 to-transparent" />

    

      {/* BOTTOM LEFT CONTENT */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto w-full max-w-[1500px] px-5 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-20">

          <div className="max-w-[850px]">

            {/* SMALL LABEL */}
           

            {/* HEADING */}
            <h1 className="max-w-[850px] text-[39px] font-extrabold leading-[1.04] tracking-[-0.045em] text-white sm:text-[55px] ">

              Plastic Recycling

              <span className="block bg-gradient-to-r from-[#159ed8] to-[#1969e0] bg-clip-text text-transparent">
                Machine Manufacturer.
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-[650px] text-[13px] leading-6 text-white/75 sm:text-[15px] sm:leading-6 ">

              Dharam Engg Work is an experienced Plant Processing Machine
              Manufacturer offering vented extruders, granule machines,
              Thermocol and EPS recycling machines.

            </p>

            {/* CTA BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href="#products"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#0d2461] px-7 text-[13px] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#bb8e2e]"
              >
                Explore Machines

                <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact-quote-section"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-md border border-white/30 bg-white/10 px-7 text-[13px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <FiFileText className="text-base" />

                Request a Quote
              </a>

            </div>

            {/* STATS */}
            {/* <div className="mt-9 grid max-w-[650px] grid-cols-3 border-t border-white/20 pt-5">

              <div className="pr-3 sm:pr-6">
                <div className="text-[25px] font-extrabold tracking-tight text-white sm:text-[32px]">
                  40+
                </div>

                <p className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-wider text-white/55 sm:text-[10px]">
                  Years of Engineering Expertise
                </p>
              </div>

              <div className="border-x border-white/20 px-3 sm:px-6">
                <div className="text-[25px] font-extrabold tracking-tight text-white sm:text-[32px]">
                  6+
                </div>

                <p className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-wider text-white/55 sm:text-[10px]">
                  Plastic Processing Solutions
                </p>
              </div>

              <div className="pl-3 sm:pl-6">
                <div className="text-[20px] font-extrabold tracking-tight text-white sm:text-[28px]">
                  End-to-End
                </div>

                <p className="mt-1 text-[8px] font-bold uppercase leading-4 tracking-wider text-white/55 sm:text-[10px]">
                  Complete Machinery Solutions
                </p>
              </div>

            </div> */}

          </div>
        </div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 z-20 h-[4px] w-full bg-gradient-to-r from-[#159ed8] via-[#0d2461] to-transparent" />

    </section>
  );
}
