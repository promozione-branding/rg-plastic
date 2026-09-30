
"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden mt-20 bg-white py-6 sm:py-14 ">
      {/* Subtle Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1261A0]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 ">
        <div className="grid items-center gap-5 md:gap-14 lg:grid-cols-[0.88fr_1.12fr] ">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="max-w-xl">

            {/* Breadcrumb */}
           

            {/* Small Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#1261A0]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[600px] text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#111111] sm:text-[52px] lg:text-[58px]">
              Engineering
              <br />
              <span className="text-[#1261A0]">Excellence</span>
              <br />
              Together.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-gray-600 sm:text-base">
              At R G Plastics Machinery, we are committed to delivering
              reliable and innovative plastic extrusion machinery designed
              for performance, precision and long-term productivity. With
              years of industry experience and technical expertise, we help
              businesses build efficient solutions that stand the test of
              time.
            </p>

            {/* Feature Points */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Precision Engineering",
                "Reliable Performance",
                "Industry Expertise",
                "Long-Term Productivity",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#222]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1261A0]/10">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-[#1261A0]"
                    />
                  </span>

                  {item}
                </div>
              ))}
            </div>

           
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">

            {/* Decorative Grid */}
            <div
              className="
                pointer-events-none
                absolute
                -right-5
                -top-5
                h-28
                w-28
                opacity-40
                sm:-right-7
                sm:-top-7
              "
              style={{
                backgroundImage:
                  "radial-gradient(#1261A0 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />

            {/* Image Container */}
            <div className="relative z-10 overflow-hidden rounded-[30px] bg-gray-100 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

              {/* Image */}
              <div className="relative aspect-[1.35/1] sm:aspect-[1.5/1]">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1664298925852-a10f7112c548?w=1200&auto=format&fit=crop&q=80"
                  alt="R G Plastics Machinery"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Image Caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      R G Plastics Machinery
                    </p>

                    <p className="mt-1 text-lg font-medium text-white sm:text-xl">
                      Precision. Performance. Progress.
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md sm:flex">
                    <ArrowUpRight
                      size={18}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING BADGE
            ================================================= */}
            <div
              className="
                absolute
                -bottom-10
                left-[-10px]
                z-20
                flex
                h-[112px]
                w-[112px]
                items-center
                justify-center
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                sm:-bottom-12
                sm:-left-10
                sm:h-[132px]
                sm:w-[132px]
              "
            >
              <div className="relative flex h-full w-full items-center justify-center">

                {/* Rotating Text */}
                <svg
                  viewBox="0 0 132 132"
                  className="absolute inset-0 h-full w-full animate-[spin_18s_linear_infinite]"
                >
                  <defs>
                    <path
                      id="aboutCirclePath"
                      d="
                        M 66,66
                        m -48,0
                        a 48,48 0 1,1 96,0
                        a 48,48 0 1,1 -96,0
                      "
                    />
                  </defs>

                  <text
                    fill="#111111"
                    fontSize="9"
                    fontWeight="600"
                    letterSpacing="2.5"
                  >
                    <textPath href="#aboutCirclePath">
                      R G PLASTICS MACHINERY • ENGINEERED FOR EXCELLENCE •
                    </textPath>
                  </text>
                </svg>

                {/* Center */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1261A0] shadow-lg shadow-[#1261A0]/25 transition-transform duration-300 hover:scale-110">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={2}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute -bottom-5 right-8 h-px w-24 bg-[#1261A0]/40 sm:right-12" />
          </div>
        </div>
      </div>
    </section>
  );
}

