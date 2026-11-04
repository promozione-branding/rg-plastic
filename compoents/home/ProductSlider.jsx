
"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

import "swiper/css";
import Link from "next/link";

const products = [
  {
    slug: "vented-extruder-granule-machine",
    title: "Vented Extruders Granule Machine",
    description:
      "Designed for efficient plastic recycling and granule production, vented extruder granule machines support material processing with moisture and volatile removal during extrusion.",
    image: "/products/Vented.webp",
  },
  {
    slug: "two-stage-granule-machine",
    title: "Two Stage Granule Machine",
    description:
      "Two-stage granule machines are designed for plastic recycling applications that require multi-stage processing, helping improve melt filtration, material consistency, and granule quality.",
    image: "/products/two-gran.webp",
  },
  {
    slug: "thermocol-eps-granule-machine",
    title: "Granule Machine for Thermocol & EPS Recycling",
    description:
      "Specially designed for Thermocol and expanded polystyrene (EPS) recycling applications, these machines help process recyclable foam materials into reusable granules for further manufacturing.",
    image: "/products/gran.webp",
  },
  {
    slug: "mixture-machine",
    title: "Mixture Machine",
    description:
      "Built for efficient material mixing, mixture machines help blend plastic raw materials, additives, colours, and other compatible ingredients to support consistent processing and production requirements.",
    image: "/products/mixture.webp",
  },
  {
    slug: "agglomerator-machine",
    title: "Agglomerator",
    description:
      "Agglomerators are designed to process lightweight plastic films and other suitable plastic waste into denser material, making handling, feeding, and subsequent recycling operations more efficient.",
    image: "/products/agglo.webp",
  },
];

export default function ProductSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fcf8ef] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="mb-9 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#297eff]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#34312d]">
                Our Products
              </span>
            </div>

            <h2 className="max-w-[700px] text-[34px] font-extrabold uppercase leading-[1.08] tracking-[-0.045em] text-[#25221f] sm:text-[48px]">
              High-Performance Plastic Recycling
              <span className="mt-1 block text-[#093372]">
                & Processing Machinery
              </span>
            </h2>
          </div>

          <Link
            href="/products"
            className="group inline-flex h-12 shrink-0 items-center gap-3 self-start rounded-full bg-[#297eff] pl-5 pr-2 text-[11px] font-extrabold uppercase tracking-[0.04em] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#093372] hover:shadow-xl md:self-auto"
          >
            <span>Explore Products</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
              <FiArrowUpRight className="text-[16px] text-[#297eff] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        {/* PRODUCT SLIDER */}
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
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 22,
            },
          }}
          className="!overflow-visible !pb-3"
        >
          {products.map((product, index) => {
            const active = index === activeIndex;

            return (
              <SwiperSlide key={product.slug}>
                <article
                  className={`
                    product-shine-card group relative flex h-full flex-col
                    overflow-hidden rounded-[18px] border bg-white
                    transition-all duration-500 ease-out
                    ${
                      active
                        ? "border-[#093372]/40 shadow-[0_10px_35px_rgba(9,51,114,0.10)]"
                        : "border-[#e9e4d9] shadow-[0_5px_20px_rgba(0,0,0,0.035)]"
                    }
                    hover:-translate-y-2
                    hover:border-[#297eff]/50
                    hover:shadow-[0_18px_45px_rgba(9,51,114,0.13)]
                  `}
                >
                  {/* MOVING SHINE */}
                  <div className="product-shine pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[18px]" />

                  {/* TOP ACCENT */}
                  <div className="absolute left-0 top-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#297eff] via-[#5ca4ff] to-[#093372] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* PRODUCT IMAGE */}
                  <div className="relative mx-2 mt-2 overflow-hidden rounded-[13px] bg-[#f8f9fb]">
                    <div className="relative flex h-[215px] items-center justify-center overflow-hidden sm:h-[225px]">
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className="h-full w-full object-contain p-3 transition-transform duration-700 ease-out group-hover:scale-[1.09]"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#093372]/[0.04] via-transparent to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* PRODUCT NUMBER */}
                      <span className="absolute right-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/80 bg-white/85 px-2 text-[10px] font-extrabold tracking-wider text-[#093372] shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-[#093372] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 flex flex-1 flex-col px-4 pb-5 pt-4 sm:px-5 sm:pb-6">

                    {/* CATEGORY LABEL */}
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-[5px] w-[5px] rounded-full bg-[#297eff] transition-transform duration-300 group-hover:scale-[1.8]" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#8b8b8b]">
                        Industrial Machinery
                      </span>
                    </div>

                    {/* ANIMATED PRODUCT TITLE */}
                    <h3 className="product-title min-h-[42px] text-[15px] font-extrabold uppercase leading-[1.35] tracking-[-0.025em] text-[#25221f] sm:text-[16px]">
                      <span className="product-title-text">
                        {product.title}
                      </span>
                    </h3>

                    {/* DESCRIPTION - 2 LINE CLAMP */}
                    <p className="mt-2 line-clamp-2 min-h-[40px] text-[11px] leading-[1.8] text-[#77736d] sm:text-[12px]">
                      {product.description}
                    </p>

                    {/* DIVIDER */}
                    <div className="my-4 h-px w-full bg-[#eeeae2] transition-colors duration-300 group-hover:bg-[#c8d9f3]" />

                    {/* VIEW PRODUCT */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#25221f]"
                    >
                      <span className="relative">
                        View Product

                        <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#297eff] transition-all duration-300 group-hover/link:w-full" />
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#edf3ff] transition-all duration-300 group-hover/link:bg-[#093372]">
                        <FiArrowUpRight className="text-[14px] text-[#093372] transition-all duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white" />
                      </span>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* BOTTOM NAVIGATION */}
        <div className="mt-8 flex items-center justify-between sm:mt-10">

          {/* SLIDE COUNTER */}
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-extrabold text-[#093372]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="h-px w-8 bg-[#c8c1b4]" />

            <span className="text-[11px] font-bold text-[#9b968d]">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous products"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={activeIndex === 0}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#093372] bg-white text-[#093372] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#093372] hover:text-white hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-white disabled:hover:text-[#093372]"
            >
              <FiArrowLeft className="text-[17px] transition-transform duration-300 group-hover:-translate-x-1" />
            </button>

            <button
              type="button"
              aria-label="Next products"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={activeIndex >= products.length - 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-[#093372] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#297eff] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-[#093372]"
            >
              <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        /* CARD SHINE EFFECT */
        .product-shine::after {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 55%;
          height: 300%;
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.65),
            rgba(255, 255, 255, 0.08),
            transparent
          );
          opacity: 0;
        }

        .product-shine-card:hover .product-shine::after {
          opacity: 1;
          animation: cardShine 0.85s ease-in-out;
        }

        @keyframes cardShine {
          0% {
            left: -100%;
          }

          100% {
            left: 160%;
          }
        }

        /* PRODUCT TITLE GRADIENT */
        .product-title {
          position: relative;
          width: fit-content;
          max-width: 100%;
          cursor: default;
        }

        .product-title-text {
          display: inline;
          background-image: linear-gradient(
            90deg,
            #093372 0%,
            #297eff 35%,
            #72b5ff 50%,
            #093372 70%
          );
          background-size: 220% 100%;
          background-position: 100% 50%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: #25221f;
          transition:
            background-position 0.7s ease,
            letter-spacing 0.5s ease;
        }

        /* TITLE HOVER */
        .product-shine-card:hover .product-title-text {
          background-position: 0% 50%;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.005em;
        }

        /* ANIMATED UNDERLINE */
        .product-title::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          margin-top: 5px;
          border-radius: 10px;
          background: linear-gradient(90deg, #093372, #297eff);
          transition: width 0.45s ease;
        }

        .product-shine-card:hover .product-title::after {
          width: 48px;
        }

        /* ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {
          .product-shine-card,
          .product-shine-card *,
          .product-title::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
