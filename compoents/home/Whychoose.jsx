"use client";

import {
  FiCheckCircle,
  FiCpu,
  FiZap,
  FiSettings,
  FiHeadphones,
  FiArrowRight,
  FiShield,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiCpu,
    title: "Precision Engineering",
    description:
      "Advanced engineering and accurate machine construction deliver consistent performance and repeatable results.",
    position: "left",
  },
  {
    icon: FiSettings,
    title: "Advanced Technology",
    description:
      "Smart controls, servo technology and intelligent automation improve production efficiency and machine control.",
    position: "right",
  },
  {
    icon: FiZap,
    title: "Energy Efficient",
    description:
      "Optimized servo-driven systems help reduce unnecessary power consumption while maintaining high output.",
    position: "left",
  },
  {
    icon: FiHeadphones,
    title: "Reliable After-Sales",
    description:
      "Dedicated installation, technical support and genuine OEM spare parts keep your production moving.",
    position: "right",
  },
];

export default function Whychoose() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#f8faf9] py-6 sm:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008f82]/[0.035] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING
        ================================================== */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#eaf5f2] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#008f82]">
            <FiCheckCircle className="text-[13px]" />
            Why Choose Us
          </div>

          <h2 className="text-[34px] font-extrabold leading-tight tracking-[-0.035em] text-[#162321] sm:text-[42px] lg:text-[48px]">
            Built Around{" "}
            <span className="text-[#008f82]">
              Performance & Reliability
            </span>
          </h2>

          
        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}
        <div className="relative mx-auto mt-14 max-w-[1180px]">

          {/* Desktop connector lines */}
          {/* <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[#dfe8e5] lg:block" /> */}

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px_1fr] lg:gap-8">

            {/* =================================================
                LEFT REASONS
            ================================================== */}
            <div className="order-2 space-y-6 lg:order-1">
              {reasons
                .filter((item) => item.position === "left")
                .map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-2xl border border-[#e5ebe8] bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008f82]/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.055)] lg:text-right"
                    >
                      {/* Content */}
                      <div className="order-2 flex-1 lg:order-1">
                        <h3 className="text-lg font-bold text-[#202c29] sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[11px] leading-5 text-[#7a8582] sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      {/* Icon */}
                      <div className="order-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5f2] text-[#008f82] transition-all duration-300 group-hover:bg-[#008f82] group-hover:text-white lg:order-2">
                        <Icon className="text-[19px]" />
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* =================================================
                CENTER MACHINE
            ================================================== */}
            <div className="order-1 flex justify-center lg:order-2">
              <div className="relative">

                {/* Outer glow */}
                <div className="absolute inset-4 rounded-full bg-[#008f82]/10 blur-3xl" />

                {/* Image frame */}
                <div className="group relative z-10 w-[260px] overflow-hidden rounded-[28px] border-[8px] border-white bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:w-[320px] lg:w-[370px]">

                  <div className="aspect-[4/5] overflow-hidden rounded-[20px]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxBV8xn1CaqtHqEw-4WGHKiL_8-eXZtEKyGA6nA0_BG8dYvNgcdW7B-YmI6kRGXKxYlTNSULQIwZM5kW9C9yoCLzQH4ifVXvTHs6r-5Ke2n7U1IQ0eaTd9sefl_Cg0csHTMRRMllAyixQQVTM_NT32JYpW1djBaYSnQyIzGraSLduPigIp3GNmGY1IhpKO11Gn_cbhCZR9fKV7AOtl65iwsN0s6i0haExSyedoD1emRCf9Paw0Krt1rg"
                      alt="Texmo Precision Machinery"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    />
                  </div>

                  {/* Machine status */}
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#13211e]/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    Precision Manufacturing
                  </div>

                  {/* Bottom badge */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-[#13211e]/85 px-4 py-3 text-white backdrop-blur-md">
                    <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50">
                      Manufacturing Capability
                    </div>

                    <div className="mt-1 text-[14px] font-bold sm:text-[15px]">
                      Built for Industrial Performance
                    </div>
                  </div>
                </div>

                {/* Decorative corners */}
                {/* <div className="absolute -left-5 -top-5 h-16 w-16 rounded-tl-[20px] border-l border-t border-[#008f82]/30" />
                <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-br-[20px] border-b border-r border-[#008f82]/30" /> */}
              </div>
            </div>

            {/* =================================================
                RIGHT REASONS
            ================================================== */}
            <div className="order-3 space-y-6">
              {reasons
                .filter((item) => item.position === "right")
                .map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-2xl border border-[#e5ebe8] bg-white p-5 shadow-[0_5px_20px_rgba(0,0,0,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-[#008f82]/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.055)]"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf5f2] text-[#008f82] transition-all duration-300 group-hover:bg-[#008f82] group-hover:text-white">
                        <Icon className="text-[19px]" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-[#202c29] sm:text-lg">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-[11px] leading-5 text-[#7a8582] sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* =================================================
              CENTER CTA
          ================================================== */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contact-quote-section"
              className="group inline-flex h-12 items-center gap-3 rounded-lg bg-[#008f82] px-6 text-[13px] font-bold text-white shadow-[0_8px_22px_rgba(0,143,130,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00796f] hover:shadow-[0_12px_28px_rgba(0,143,130,0.25)]"
            >
              <span>Get a Free Quote</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/15">
                <FiArrowRight className="text-[15px] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}