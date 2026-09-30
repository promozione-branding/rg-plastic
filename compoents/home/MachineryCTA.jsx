"use client";

import { ArrowRight, PhoneCall } from "lucide-react";

export default function MachineryCTA() {
  return (
    <section className="px-4 py-2 sm:px-2">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-lg bg-gradient-to-r from-[#008F82] via-[#008F82] to-[#008F82] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">

        {/* =====================================================
            DECORATIVE CIRCLES
        ====================================================== */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

        {/* Subtle glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />


        {/* =====================================================
            CONTENT
        ====================================================== */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">

          <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[52px]">
            Ready to Upgrade
            <br className="hidden sm:block" />
            Your Production?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Get reliable plastic processing machinery designed for efficient
            production, consistent performance and long-term industrial use.
          </p>


          {/* =====================================================
              BUTTONS
          ====================================================== */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            {/* Get Quote */}
            <a
              href="#quote"
              className="group flex min-w-[175px] items-center justify-center gap-3 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#075B96] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-xl"
            >
              Get a Quote

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>


            {/* Call Us */}
            <a
              href="tel:+919876543210"
              className="group flex min-w-[175px] items-center justify-center gap-3 rounded-md border border-white/80 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#075B96]"
            >
              <PhoneCall
                size={16}
                className="transition-transform duration-300 group-hover:rotate-6"
              />

              Call Us

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}