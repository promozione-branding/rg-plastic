
"use client";

import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const sections = [
  {
    title: "Our Mission",
    eyebrow: "WHAT DRIVES US",
    number: "01",
    description:
      "At R G Plastics Machinery, our mission is to provide dependable, efficient and high-performance machinery for the plastic processing industry. We combine technical expertise, quality engineering and customer-focused service to deliver solutions that create long-term value.",
    points: [
      "Deliver Reliable Machinery",
      "Focus on Quality & Performance",
      "Build Long-Term Partnerships",
      "Provide Responsive Service",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
    reverse: false,
  },
  {
    title: "Our Vision",
    eyebrow: "WHERE WE'RE GOING",
    number: "02",
    description:
      "Our vision is to become a trusted name in plastic processing machinery by continuously improving our technology, manufacturing capabilities and customer experience. We aim to help businesses achieve greater productivity through practical and innovative solutions.",
    points: [
      "Advancing Plastic Processing Technology",
      "Driving Manufacturing Efficiency",
      "Creating Smarter Solutions",
      "Growing With Our Customers",
    ],
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85",
    reverse: true,
  },
//   {
//     title: "Our Journey",
//     eyebrow: "BUILT ON EXPERIENCE",
//     number: "03",
//     description:
//       "Our journey has been shaped by a commitment to quality, engineering excellence and customer satisfaction. From supplying individual machines to developing complete machinery solutions, R G Plastics Machinery continues to grow through trust, experience and consistent performance.",
//     points: [
//       "Strong Industry Experience",
//       "Growing Customer Network",
//       "Quality-Driven Approach",
//       "A Foundation Built on Trust",
//     ],
//     image:
//       "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85",
//     reverse: false,
//   },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8fb] py-6 sm:py-13">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[450px] w-[450px] rounded-full bg-[#1261A0]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-180px] h-[450px] w-[450px] rounded-full bg-[#1261A0]/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-20 max-w-3xl sm:mb-28">

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-[#1261A0]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1261A0]">
              About R G Plastics Machinery
            </span>
          </div>

          <h2 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#111] sm:text-5xl lg:text-[64px]">
            Built on{" "}
            <span className="text-[#1261A0]">quality.</span>
            <br />
            Driven by innovation.
          </h2>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-base">
            We combine engineering expertise, dependable machinery and
            customer-focused service to deliver practical solutions for the
            evolving plastic processing industry.
          </p>
        </div>

        {/* =====================================================
            STORY BLOCKS
        ===================================================== */}

        <div className="space-y-28 sm:space-y-36 lg:space-y-44">

          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                section.reverse
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative">

                {/* Background number */}
                <div
                  className={`pointer-events-none absolute z-0 select-none text-[130px] font-bold leading-none tracking-[-0.08em] text-[#1261A0]/[0.055] sm:text-[170px] ${
                    section.reverse
                      ? "-right-3 -top-16"
                      : "-left-3 -top-16"
                  }`}
                >
                  {section.number}
                </div>

                {/* Image */}
                <div className="relative z-10 overflow-hidden rounded-[28px] bg-gray-200 shadow-[0_25px_70px_rgba(0,0,0,0.10)]">

                  <div className="relative aspect-[1.15/0.92] sm:aspect-[1.25/0.95]">

                    <Image
                      src={section.image}
                      alt={`${section.title} - R G Plastics Machinery`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                    {/* Image bottom label */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                          R G Plastics Machinery
                        </p>

                        <p className="mt-1 text-lg font-medium text-white">
                          {section.title}
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                        <ArrowUpRight
                          size={18}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blue corner block */}
                <div
                  className={`absolute -bottom-5 z-0 h-24 w-24 rounded-2xl bg-[#1261A0] sm:-bottom-7 sm:h-28 sm:w-28 ${
                    section.reverse
                      ? "-left-5 sm:-left-7"
                      : "-right-5 sm:-right-7"
                  }`}
                />

                {/* Number badge */}
                <div
                  className={`absolute -top-5 z-20 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#1261A0] text-sm font-semibold text-white shadow-xl ${
                    section.reverse
                      ? "left-5 sm:left-7"
                      : "left-5 sm:left-7"
                  }`}
                >
                  {section.number}
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative max-w-xl">

                {/* Eyebrow */}
                <div className="flex items-center gap-3">

                  <span className="h-px w-7 bg-[#1261A0]" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
                    {section.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#111] sm:text-[46px]">
                  {section.title}
                </h3>

                {/* Accent */}
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-[#1261A0]" />
                  <span className="h-1 w-2 rounded-full bg-[#1261A0]/30" />
                </div>

                {/* Description */}
                <p className="mt-7 text-[15px] leading-7 text-gray-600 sm:text-base">
                  {section.description}
                </p>

                {/* Points */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">

                  {section.points.map((point) => (
                    <div
                      key={point}
                      className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1261A0]/20 hover:shadow-[0_10px_30px_rgba(18,97,160,0.07)]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1261A0]/10">
                        <CheckCircle2
                          size={16}
                          strokeWidth={2.2}
                          className="text-[#1261A0]"
                        />
                      </span>

                      <span className="text-[13px] font-medium leading-5 text-gray-700">
                        {point}
                      </span>
                    </div>
                  ))}

                </div>

                {/* Bottom line */}
                <div className="mt-9 flex items-center gap-4 border-t border-gray-200 pt-6">

                  <div className="flex -space-x-2">
                    <span className="h-7 w-7 rounded-full border-2 border-[#f5f8fb] bg-[#1261A0]" />
                    <span className="h-7 w-7 rounded-full border-2 border-[#f5f8fb] bg-[#1261A0]/60" />
                    <span className="h-7 w-7 rounded-full border-2 border-[#f5f8fb] bg-[#1261A0]/30" />
                  </div>

                  <span className="text-xs font-medium text-gray-500">
                    Engineering with purpose
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

