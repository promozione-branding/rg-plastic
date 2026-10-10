"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import "swiper/css";

const products = [
  {
    title: "Vented Extruders Granule Machine",
    description:
      "Designed for efficient plastic recycling and granule production, vented extruder granule machines support material processing with moisture and volatile removal during extrusion.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Two Stage Granule Machine",
    description:
      "Two-stage granule machines are designed for plastic recycling applications that require multi-stage processing, helping improve melt filtration, material consistency, and granule quality.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Granule Machine with Die Face Cutter",
    description:
      "Engineered for efficient plastic pelletizing, granule machines with die face cutters cut extruded plastic directly at the die face to produce uniform granules for further processing and reuse.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Granule Machine for Thermocol & EPS Recycling",
    description:
      "Specially designed for Thermocol and expanded polystyrene (EPS) recycling applications, these machines help process recyclable foam materials into reusable granules for further manufacturing.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Mixture Machine",
    description:
      "Built for efficient material mixing, mixture machines help blend plastic raw materials, additives, colours, and other compatible ingredients to support consistent processing and production requirements",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Agglomerator",
    description:
      "Agglomerators are designed to process lightweight plastic films and other suitable plastic waste into denser material, making handling, feeding, and subsequent recycling operations more efficient.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function ProductSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fcf8ef] py-6 sm:py-13"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">

          <div>
            <div className="mb-4 text-[11px] font-bold text-[#34312d]">
              Our Products
            </div>

            <h2 className="max-w-[700px] text-[38px] font-extrabold uppercase leading-[1.05] tracking-[-0.045em] text-[#25221f] sm:text-[48px] ">
              High-Performance Plastic Recycling
              <span className="block text-[#093372]">
                & Processing Machinery
              </span>
            </h2>
          </div>

          <a
            href="#all-products"
            className="group inline-flex h-11 shrink-0 items-center gap-3 self-start rounded-full bg-[#297eff] pl-5 pr-2 text-[11px] font-extrabold uppercase tracking-[0.04em] text-[#fff] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#093372] hover:shadow-lg md:self-auto"
          >
            <span>Explore Products</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <FiArrowUpRight className="text-[15px] text-[#297eff] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          initialSlide={1}
          spaceBetween={18}
          slidesPerView={1.15}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible"
        >
          {products.map((product, index) => {
            const active = index === activeIndex;

            return (
              <SwiperSlide key={product.title}>
                <div
                  className={`
                    group h-full overflow-hidden rounded-[14px] border bg-white
                    transition-all duration-300
                    ${
                      active
                        ? "border-[#093372] shadow-[0_8px_25px_rgba(240,178,11,0.14)]"
                        : "border-[#ebe7de] shadow-[0_6px_20px_rgba(0,0,0,0.035)]"
                    }
                    hover:-translate-y-1
                    hover:border-[#093372]
                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)]
                  `}
                >
                  {/* Image */}
                  <div className="m-1.5 overflow-hidden rounded-[10px]">
                    <div className="aspect-[1.55/1] bg-[#e8eceb]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pb-5 pt-3 sm:px-5 sm:pb-6">

                    <h3 className="text-[16px] font-extrabold uppercase leading-tight tracking-[-0.02em] text-[#27231f]">
                      {product.title}
                    </h3>

                    <p className="mt-2 min-h-[58px] text-[11px] leading-5 text-[#72706b] sm:text-[12px]">
                      {product.description}
                    </p>

                    <a
                      href="#contact-quote-section"
                      className="group/link mt-4 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-[#25221f]"
                    >
                      <span className="border-b border-transparent transition-colors group-hover/link:border-[#008f82]">
                        View Product
                      </span>

                      <FiArrowUpRight className="text-[13px] text-[#093372] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Bottom navigation */}
        <div className="mt-8 flex items-center justify-center gap-3">

          <button
            type="button"
            aria-label="Previous products"
            onClick={() => swiperRef.current?.slidePrev()}
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#093372] text-[#fff] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <FiArrowLeft className="text-[17px] transition-transform duration-300 group-hover:-translate-x-0.5" />
          </button>

          <button
            type="button"
            aria-label="Next products"
            onClick={() => swiperRef.current?.slideNext()}
            className="group flex h-11 w-11 items-center border border-[#093372] justify-center rounded-full bg-white text-[#25221f] shadow-[0_4px_15px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

        </div>
      </div>
    </section>
  );
}