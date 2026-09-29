"use client";

import { FiArrowRight, FiAward, FiCheckCircle, FiCpu, FiGlobe, FiHeadphones, FiShield, FiSliders, FiTool, FiZap } from "react-icons/fi";



export default function AboutSection() {
  const pillars = [
    {
      icon: FiTool,
      title: "Precision Engineering",
      description:
        "Micron-level clamping position sensing and rigid tie-bar alignment.",
    },
    {
      icon: FiCpu,
      title: "Advanced Technology",
      description:
        "KEBA touch screen interface, IoT telemetry, and digital servo control.",
    },
    {
      icon: FiZap,
      title: "Energy Efficient",
      description:
        "Variable speed internal gear pumps eliminate idle electrical power draw.",
    },
    {
      icon: FiShield,
      title: "Robust Construction",
      description:
        "High tensile structural steel base fabricated for zero structural deflection.",
    },
    {
      icon: FiSliders,
      title: "Customised Solutions",
      description:
        "Specific screw configurations for engineering polymers, PVC, and bio-plastics.",
    },
    {
      icon: FiHeadphones,
      title: "Reliable After-Sales",
      description:
        "Dedicated installation field engineers and rapid dispatch OEM spare parts.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-6 sm:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#008f82]/[0.035] blur-3xl" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#008f82]/[0.025] blur-3xl" />

        {/* Subtle technical grid */}
        <div
          className="absolute bottom-0 left-0 h-64 w-1/3 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">

          {/* =================================================
              LEFT VISUAL
          ================================================== */}
          <div className="relative md:col-span-6">

            {/* Floating experience badge */}
            

            {/* Decorative corner */}
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-[28px] border-l border-t border-[#008f82]/20" />

            {/* Main image */}
            <div className="relative ml-0 mr-8 aspect-[4/5] overflow-hidden rounded-[30px] bg-[#edf3f1] shadow-[0_20px_55px_rgba(0,0,0,0.10)] sm:mr-14 lg:mr-10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JR0yqweW2K_3C46sN0m4jVV76xjzAXCup3Uva6gGE4rNjPxAVdFzEexzoP6T_sReljaxdJs9xdif0WQvgQbWk-duOVwU4QCCwZ6chsn3JkZOI8MYUfP914fODCCjgWb0Mcg9jRS36S1Fv0qpqjwr5qe-Xv5OyWroe_sJJwQEWTjf4VRSgI7d0fwlpV0GijyfHNSGEzOCLJ9HibZnB0w_41-wV9VcKtNVBmCUs9fGk6jOmfn7Z5RK8g"
                alt="Texmo precision machine manufacturing facility"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10201d]/60 via-transparent to-transparent" />

              {/* Facility card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#14211f]/90 p-4 text-white shadow-xl backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[21px] font-extrabold tracking-tight sm:text-[24px]">
                      250,000 SQ.FT
                    </div>

                    <div className="mt-1 text-[9px] font-medium uppercase leading-4 tracking-[0.08em] text-white/60 sm:text-[10px]">
                      Integrated Heavy Machine
                      <br />
                      Manufacturing Plant
                    </div>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    {/* <FiFactory className="text-[21px] text-[#a9dfd1]" /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary image-style panel */}
            <div className="absolute -bottom-7 right-0 z-10 hidden w-[48%] overflow-hidden rounded-[24px] border-[8px] border-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] sm:block lg:-right-4">
              <div className="aspect-[4/3] bg-[#dfeae6]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JR0yqweW2K_3C46sN0m4jVV76xjzAXCup3Uva6gGE4rNjPxAVdFzEexzoP6T_sReljaxdJs9xdif0WQvgQbWk-duOVwU4QCCwZ6chsn3JkZOI8MYUfP914fODCCjgWb0Mcg9jRS36S1Fv0qpqjwr5qe-Xv5OyWroe_sJJwQEWTjf4VRSgI7d0fwlpV0GijyfHNSGEzOCLJ9HibZnB0w_41-wV9VcKtNVBmCUs9fGk6jOmfn7Z5RK8g"
                  alt="Texmo manufacturing operations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Small badge */}
            <div className="absolute -bottom-10 left-0 hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.08)] sm:flex lg:-left-2">
              <FiAward className="text-[17px] text-[#f39200]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#4b5754]">
                Established 1999
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}
          <div className="md:col-span-6">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f39200]/10">
                <FiAward className="text-[14px] text-[#f39200]" />
              </span>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f39200]">
                About Our Company
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[38px] font-light leading-[1.08] tracking-[-0.04em] text-[#202826] sm:text-[48px] lg:text-[52px] xl:text-[58px]">
              Engineering Machines That Power{" "}
              <span className="font-extrabold text-[#008f82]">
                Modern Plastic Manufacturing
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-3xl text-[15px] leading-7 text-[#737e7b] sm:text-[16px] sm:leading-8">
              Established in 1999, Texmo Precision Machinery designs,
              machines, and commissions world-class plastic injection and
              blow moulding machinery. Built using finite element analysis
              (FEA) optimized spheroidal graphite iron platens, German
              hydraulics, and intelligent multi-touch PLC controllers, our
              machines operate under the most grueling factory conditions
              across 5 continents.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================== */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.title}
                    className="group flex gap-3 rounded-xl border border-[#e8edeb] bg-[#fafcfb] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#008f82]/20 hover:bg-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.045)]"
                  >
                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#008f82]/10 text-[#008f82] transition-all duration-300 group-hover:bg-[#008f82] group-hover:text-white">
                      <Icon className="text-[17px]" />
                    </div>

                    <div>
                      <h3 className="text-[13px] font-bold text-[#263330]">
                        {pillar.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-[#78827f]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM ROW
            ================================================== */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* Learn more */}
              <a
                href="#manufacturing-facility"
                className="group inline-flex items-center gap-2 text-[13px] font-bold text-[#008f82]"
              >
                <span className="border-b border-[#008f82]/30 pb-0.5 transition-colors group-hover:border-[#008f82]">
                  Learn More About Our Infrastructure
                </span>

                <FiArrowRight className="text-[16px] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}