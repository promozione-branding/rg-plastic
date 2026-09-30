"use client";

import {
  FiCheckCircle,
  FiCpu,
  FiZap,
  FiSettings,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiCpu,
    number: "01",
    title: "Precision Engineering",
    description:
      "Advanced engineering and accurate machine construction deliver consistent performance and repeatable results.",
    position: "left",
  },
  {
    icon: FiSettings,
    number: "02",
    title: "Advanced Technology",
    description:
      "Smart controls, servo technology and intelligent automation improve production efficiency and machine control.",
    position: "right",
  },
  {
    icon: FiZap,
    number: "03",
    title: "Energy Efficient",
    description:
      "Optimized servo-driven systems help reduce unnecessary power consumption while maintaining high output.",
    position: "left",
  },
  {
    icon: FiHeadphones,
    number: "04",
    title: "Reliable After-Sales",
    description:
      "Dedicated installation, technical support and genuine OEM spare parts keep your production moving.",
    position: "right",
  },
];

export default function Whychoose() {
  const leftReasons = reasons.filter(
    (item) => item.position === "left"
  );

  const rightReasons = reasons.filter(
    (item) => item.position === "right"
  );

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#d2e9e1] py-6 sm:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft glow */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008f82]/[0.055] blur-[100px]" />

        {/* top right glow */}
        <div className="absolute right-[-140px] top-[-120px] h-[380px] w-[380px] rounded-full bg-[#008f82]/[0.035] blur-[90px]" />

        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#008f82]/10 bg-white px-3.5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.035)]">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#008f82]/10">
              <FiCheckCircle className="text-[11px] text-[#093372]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#53635e] sm:text-[10px]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-[36px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#162321] sm:text-[46px] lg:text-[54px]">
            Built Around{" "}
            <span className="text-[#093372]">
              Performance & Reliability
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-[#74807c] sm:text-[15px]">
            Engineering focused on precision, efficiency and dependable
            performance for demanding plastic manufacturing environments.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mx-auto mt-12 grid max-w-[1240px] items-center gap-8 lg:mt-16 lg:grid-cols-[1fr_390px_1fr] lg:gap-10">

          {/* ===================================================
              LEFT
          ==================================================== */}
          <div className="order-2 space-y-4 lg:order-1">
            {leftReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#e3ebe7] bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008f82]/20 hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)] lg:text-right"
                >
                  {/* Hover accent */}
                  <div className="absolute inset-y-0 right-0 w-1 bg-[#297eff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-4 lg:flex-row-reverse">

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5f2] text-[#297eff] transition-all duration-300 group-hover:bg-[#2b6ac9] group-hover:text-white">
                      <Icon className="text-[18px]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex  items-center gap-2 lg:justify-end">
                        <span className="text-[9px] md:text-2xl font-bold tracking-[0.15em] text-[#9aa6a2]">
                          {item.number}
                        </span>

                        <h3 className="text-[15px] font-extrabold text-[#202c29] sm:text-[16px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-[12px]  text-[#78837f] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ===================================================
              CENTER MACHINE
          ==================================================== */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-[-25px] rounded-[40px] bg-[#008f82]/10 blur-3xl" />

              {/* Main frame */}
              <div className="group relative z-10 w-[275px] overflow-hidden rounded-[30px] border-[7px] border-white bg-white shadow-[0_25px_65px_rgba(0,0,0,0.14)] sm:w-[320px] lg:w-[350px]">

                <div className="aspect-[4/5] overflow-hidden rounded-[23px]">
                  <img
                    src="https://media.istockphoto.com/id/179078166/photo/injection-moulding-machine.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQChhtVqSYiYbZqclx7qfyoI_xWb2H570_WFYGkdZyI="
                    alt="Texmo Precision Machinery"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Top status */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101d1b]/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    Precision Manufacturing
                  </div>
                </div>

                {/* Bottom card */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#101d1b]/88 p-4 text-white backdrop-blur-md">
                  <div className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/45">
                    Manufacturing Capability
                  </div>

                  <div className="mt-1 text-[13px] font-extrabold sm:text-[14px]">
                    Built for Industrial Performance
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-5 -left-5 z-20 rounded-xl border border-white bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
                <div className="text-[27px] font-extrabold leading-none tracking-[-0.04em] text-[#093372]">
                  25+
                </div>

                <div className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#7b8783]">
                  Years Experience
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-tr-[24px] border-r border-t border-[#008f82]/30 lg:block" />
            </div>
          </div>

          {/* ===================================================
              RIGHT
          ==================================================== */}
          <div className="order-3 space-y-4">
            {rightReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#e3ebe7] bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008f82]/20 hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]"
                >
                  {/* Hover accent */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#297eff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5f2] text-[#297eff] transition-all duration-300 group-hover:bg-[#297eff] group-hover:text-white">
                      <Icon className="text-[18px]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] md:text-2xl font-bold tracking-[0.15em] text-[#9aa6a2]">
                          {item.number}
                        </span>

                        <h3 className="text-[15px] font-extrabold text-[#202c29] sm:text-[16px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-[12px]  text-[#78837f] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>

                    <FiArrowRight className="mt-1 hidden shrink-0 text-[15px] text-[#bcc6c2] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#008f82] sm:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row">

          <a
            href="#contact-quote-section"
            className="group inline-flex h-12 items-center gap-3 rounded-lg bg-[#093372] px-6 text-[12px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_22px_rgba(0,143,130,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00796f] hover:shadow-[0_12px_28px_rgba(0,143,130,0.24)]"
          >
            Get a Free Quote

            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              <FiArrowRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>

          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#093372]">
            Precision • Efficiency • Reliability
          </span>
        </div>
      </div>
    </section>
  );
}