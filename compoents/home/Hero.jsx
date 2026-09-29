"use client";

import {
  FiArrowRight,
  FiFileText,
  FiCheckCircle,
  FiShield,
  FiGlobe,
  FiActivity,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101d1b] pt-[108px] sm:pt-15 ">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#101d1b]" />

        {/* Technical gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,143,130,0.18),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.04),transparent_35%)]" />

        {/* Grid */}
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[650px] items-center lg:grid-cols-12">
          {/* =================================================
              LEFT IMAGE
          ================================================== */}
          <div className="relative order-2 h-[420px] sm:h-[500px] lg:order-1 lg:col-span-7 lg:h-[680px]">
            {/* Glow behind image */}
            <div className="absolute left-[-10%] top-1/2 h-[75%] w-[75%] -translate-y-1/2 rounded-full bg-[#008f82]/10 blur-[100px]" />

            {/* Main image frame */}
            <div className="absolute inset-y-8 left-0 right-[-25%] overflow-hidden rounded-r-[32px] rounded-l-[18px] shadow-[0_25px_60px_rgba(0,0,0,0.35)] lg:inset-y-10 lg:right-[-18%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktYGAef2Osy5vK7-4qhEAlNbJJGFkCdWRyOy8zXUWHvrq52ElZBm6TiCq&s=10"
                alt="Texmo Plastic Moulding Machine"
                
                className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#101d1b]/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/50 via-transparent to-transparent" />

              {/* Machine status */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101d1b]/75 px-3.5 py-2 text-white backdrop-blur-xl">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] sm:text-[10px]">
                    Production Ready
                  </span>
                </div>
              </div>

              {/* Bottom machine card */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <div className="rounded-xl border border-white/10 bg-[#101d1b]/80 px-4 py-3 text-white backdrop-blur-xl">
                  <div className="text-[8px] font-semibold uppercase tracking-[0.12em] text-white/45">
                    Precision Manufacturing
                  </div>

                  <div className="mt-1 text-[13px] font-bold sm:text-[14px]">
                    Advanced Servo Technology
                  </div>
                </div>
              </div>
            </div>

            {/* Orange/teal accent line */}
            <div className="absolute bottom-4 left-0 right-[-10%] h-[3px] bg-gradient-to-r from-[#008f82] via-[#56cdbf] to-transparent lg:right-[-8%]" />
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}
          <div className="relative z-10 order-1 py-12 lg:order-2 lg:col-span-5 lg:-ml-4 lg:py-16">
            {/* Small label */}

            {/* Heading */}
            <h1 className="max-w-[620px] text-[40px] font-extrabold leading-[1.03] tracking-[-0.045em] text-white sm:text-[52px] lg:text-[56px] xl:text-[64px]">
              Plastic Moulding
              <br />
              Machines
              <br />
              <span className="text-[#79d8ca]">Built for Precision.</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[560px] text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-7 lg:text-[16px]">
              High-performance plastic moulding machines engineered for
              precision, reliability and efficient production. Designed for
              demanding industrial environments with advanced servo technology
              and consistent repeatability.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary */}
              <a
                href="#products-section"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#008f82] px-6 text-[13px] font-bold text-white shadow-[0_8px_25px_rgba(0,143,130,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00776d]"
              >
                <span>Explore Machines</span>

                <FiArrowRight className="text-[17px] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Secondary */}
              <a
                href="#contact-quote-section"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.06] px-6 text-[13px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                <FiFileText className="text-[16px] text-[#8de0d2]" />

                <span>Request a Quote</span>
              </a>
            </div>

            {/* =================================================
                TRUST POINTS
            ================================================== */}
           

            {/* =================================================
                STATS
            ================================================== */}
            <div className="mt-9 grid max-w-[560px] grid-cols-3 border-y border-white/10">
              <div className="py-4 pr-4">
                <div className="text-[25px] font-extrabold tracking-[-0.04em] text-white sm:text-[30px]">
                  25+
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-white/40 sm:text-[9px]">
                  Years
                  <br />
                  Manufacturing
                </div>
              </div>

              <div className="border-x border-white/10 px-4 py-4">
                <div className="text-[25px] font-extrabold tracking-[-0.04em] text-white sm:text-[30px]">
                  50+
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-white/40 sm:text-[9px]">
                  Countries
                  <br />
                  Exported
                </div>
              </div>

              <div className="py-4 pl-4">
                <div className="text-[25px] font-extrabold tracking-[-0.04em] text-white sm:text-[30px]">
                  1000+
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-white/40 sm:text-[9px]">
                  Machines
                  <br />
                  Installed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ANGLED EDGE
      ====================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-7 overflow-hidden">
        <div className="absolute bottom-[-18px] left-[-2%] h-10 w-[104%] rotate-[1.3deg] bg-[#008f82]" />
        <div className="absolute bottom-[-23px] left-[-2%] h-10 w-[104%] rotate-[1.3deg] bg-[#101d1b]" />
      </div>
    </section>
  );
}
