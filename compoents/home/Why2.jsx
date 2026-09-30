"use client";

import {
  Settings2,
  ShieldCheck,
  Wrench,
  Gauge,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Advanced Machinery",
    description:
      "Modern machinery solutions engineered for reliable performance and efficient plastic processing.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "We maintain strict quality standards to deliver durable and dependable machinery.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description:
      "Our team provides practical technical assistance and support for your machinery requirements.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Designed for consistent production, efficient operation and long-term industrial use.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Why2() {
  return (
    <section className="bg-white px-4 py-6 sm:px-6 sm:py-13">
      <div className="mx-auto max-w-[1400px]">

        {/* =====================================================
            MAIN BOX
        ====================================================== */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#075B96]/20 bg-[#F7FAFC] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

          {/* Decorative Blue Border */}
          <div className="pointer-events-none absolute inset-2 rounded-[20px] border border-[#075B96]/[0.06]" />

          {/* Background circles */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#075B96]/[0.06]" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-[#075B96]/[0.06]" />

          {/* =================================================
              CONTENT
          ================================================== */}
          <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

            {/* =================================================
                LEFT SIDE
            ================================================== */}
            <div className="flex flex-col justify-center">

              {/* Eyebrow */}
              <div className="mb-5">
                <span className="relative inline-block text-xs font-bold uppercase tracking-[0.2em] text-black">
                  Why RG Plastic?

                  <span className="absolute -bottom-2 left-0 h-[2px] w-8 bg-[#093372]" />
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#101820] sm:text-5xl lg:text-[52px]">
                Why People
                <br />
                <span className="text-[#093372]">
                  Choose Us?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-md text-sm leading-6 text-gray-500 sm:text-[15px]">
                At RG Plastic, we combine engineering expertise, dependable
                machinery and customer-focused service to deliver practical
                solutions for modern plastic processing and recycling
                requirements.
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="group mt-7 flex w-fit items-center gap-3 rounded-md bg-[#093372] px-5 py-3 text-xs font-semibold text-white shadow-[0_6px_18px_rgba(0,143,130,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#297eff] hover:shadow-lg"
              >
                Talk to Our Team

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>


            {/* =================================================
                RIGHT FEATURES
            ================================================== */}
            <div className="grid sm:grid-cols-2">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className={`
                      group relative isolate overflow-hidden
                      min-h-[190px]
                      p-5 sm:p-6
                      transition-all duration-500
                      ${index === 0
                        ? "border-b border-[#075B96]/15 sm:border-r"
                        : ""}
                      ${index === 1
                        ? "border-b border-[#075B96]/15"
                        : ""}
                      ${index === 2
                        ? "sm:border-r"
                        : ""}
                    `}
                  >

                    {/* =================================================
                        BACKGROUND IMAGE
                    ================================================== */}
                    <div
                      className="absolute inset-0 -z-20 bg-cover bg-center opacity-0 scale-105 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                      style={{
                        backgroundImage: `url("${feature.image}")`,
                      }}
                    />

                    {/* =================================================
                        DARK BLUE IMAGE OVERLAY
                    ================================================== */}
                    <div className="absolute inset-0 -z-10 bg-[#032B46]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Extra gradient */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#075B96]/70 via-[#063D60]/75 to-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                    {/* =================================================
                        ICON
                    ================================================== */}
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#075B96]/15 bg-white text-[#093372] shadow-sm transition-all duration-500 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#093372] group-hover:shadow-lg">

                      <Icon
                        size={18}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />

                    </div>


                    {/* =================================================
                        TITLE
                    ================================================== */}
                    <h3 className="relative mt-5 text-base font-semibold text-[#18232C] transition-colors duration-500 sm:text-lg group-hover:text-white">
                      {feature.title}
                    </h3>


                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}
                    <p className="relative mt-2 max-w-[240px] text-xs leading-5 text-gray-500 transition-colors duration-500 sm:text-[13px] group-hover:text-white/85">
                      {feature.description}
                    </p>


                    {/* =================================================
                        HOVER CORNER
                    ================================================== */}
                    <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-8 translate-y-8 rounded-full bg-white/10 opacity-0 transition-all duration-500 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:opacity-100" />

                  </div>
                );
              })}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}