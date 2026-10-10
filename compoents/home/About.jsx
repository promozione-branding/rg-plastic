"use client";

import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

export default function AboutSection() {
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

        <div
          className="absolute bottom-0 left-0 h-64 w-1/3 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* =================================================
            MAIN LAYOUT
        ================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* =================================================
              LEFT IMAGE
          ================================================== */}
          <div className="relative lg:col-span-6">

            {/* Decorative corner */}
            <div className="absolute -left-3 -top-3 z-0 h-20 w-20 rounded-tl-[28px] border-l border-t border-[#008f82]/20" />

            {/* Main image */}
            <div className="relative z-10 overflow-hidden rounded-[18px] sm:rounded-[22px]">
              <div className="aspect-[4/3] overflow-hidden bg-[#edf3f1]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1JR0yqweW2K_3C46sN0m4jVV76xjzAXCup3Uva6gGE4rNjPxAVdFzEexzoP6T_sReljaxdJs9xdif0WQvgQbWk-duOVwU4QCCwZ6chsn3JkZOI8MYUfP914fODCCjgWb0Mcg9jRS36S1Fv0qpqjwr5qe-Xv5OyWroe_sJJwQEWTjf4VRSgI7d0fwlpV0GijyfHNSGEzOCLJ9HibZnB0w_41-wV9VcKtNVBmCUs9fGk6jOmfn7Z5RK8g"
                  alt="Texmo Precision Machinery manufacturing facility"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* =================================================
                EXPERIENCE BADGE
            ================================================== */}
            <div className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-lg bg-[#0F52BA] px-4 py-3 text-white shadow-[0_12px_30px_rgba(0,143,130,0.22)] sm:-bottom-6 sm:left-8 sm:px-5 sm:py-4">

              <div className="text-[34px] font-extrabold leading-none tracking-[-0.04em] sm:text-[40px]">
                25+
              </div>

              <div className="border-l border-white/20 pl-3 text-[9px] font-semibold uppercase leading-4 tracking-[0.08em] text-white/80">
                Years Of
                <br />
                Experience
              </div>
            </div>

            {/* =================================================
                SMALL TRUST BADGE
            ================================================== */}
       

          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="relative z-20 lg:col-span-6 lg:-ml-20 xl:-ml-28">

            {/* Black content card */}
            <div className="relative overflow-hidden rounded-[16px] bg-[#101716] p-7 shadow-[0_22px_55px_rgba(0,0,0,0.18)] sm:p-9 lg:p-10 xl:p-12">

              {/* Decorative teal glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#008f82]/10 blur-3xl" />

              {/* Small top line */}
              <div className="relative mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7bd8cb]">
                <span className="h-5 w-5 rounded-full border border-[#008f82]/30 bg-[#008f82]/10" />

                About Us
              </div>

              {/* Heading */}
              <h2 className="relative max-w-full text-[31px] font-extrabold uppercase leading-[1.08] tracking-[-0.025em] text-white sm:text-[39px] lg:text-[42px] xl:text-[48px]">
                Leading Plant Processing{" "} 
                <span className=" text-[#54a2bc]">
                  Machine Manufacturer
                </span>
              </h2>

              {/* Divider */}
              <div className="relative my-6 h-px w-14 bg-[#0096c7]" />

              {/* Description */}
              <div className="relative max-w-[620px] space-y-4 text-[13px] leading-6 text-white/65 sm:text-[14px] sm:leading-7">

                <p>
                  Dharam Engg Work is dedicated to manufacturing reliable industrial machinery and plant processing solutions designed to meet diverse industrial requirements. With a strong focus on quality engineering, durable construction, and efficient performance, we aim to help businesses improve productivity and streamline their operations.
                </p>
              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}
              <div className="relative mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-white/70">
                  <FiCheckCircle className="shrink-0 text-[#78d5c8]" />
                  Precision Engineering
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-white/70">
                  <FiCheckCircle className="shrink-0 text-[#78d5c8]" />
                  Quality Manufacturing
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-white/70">
                  <FiCheckCircle className="shrink-0 text-[#78d5c8]" />
                  Reliable Performance
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.06em] text-white/70">
                  <FiCheckCircle className="shrink-0 text-[#78d5c8]" />
                  Customer Satisfaction 
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================== */}
              <a
                href="#manufacturing-facility"
                className="group relative mt-8 inline-flex h-11 items-center gap-2 overflow-hidden rounded-md bg-[#0F52BA] px-5 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00776d] hover:shadow-[0_10px_25px_rgba(0,143,130,0.22)]"
              >
                <span className="relative z-10">
                  Learn More About Us
                </span>

                <FiArrowRight className="relative z-10 text-[15px] transition-transform duration-300 group-hover:translate-x-1" />

                <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />
              </a>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute -bottom-3 right-5 h-[3px] w-24 rounded-full bg-[#0096c7] sm:right-8" />
          </div>
        </div>
      </div>
    </section>
  );
}