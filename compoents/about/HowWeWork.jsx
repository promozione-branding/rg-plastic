"use client";

import Image from "next/image";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your production requirements, material needs and machinery goals.",
  },
  {
    number: "02",
    title: "Recommend",
    description:
      "Our team recommends the right machinery and configuration based on your application.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We ensure reliable manufacturing, quality checks and timely delivery of your machine.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Our relationship continues with installation guidance, service and technical support.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-13">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#1261A0]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
              Our Process
            </span>

            <span className="h-px w-8 bg-[#1261A0]" />
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl lg:text-[54px]">
            How We
            <span className="text-[#1261A0]"> Work</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            From understanding your requirements to delivering the right
            machinery and ongoing support, we keep every step focused on
            quality, reliability and your production goals.
          </p>
        </div>

        {/* VIDEO / IMAGE */}
        <div className="relative mx-auto mt-12 max-w-6xl sm:mt-8">
          <div className="group relative overflow-hidden rounded-[28px] bg-[#0d1720] shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[16/7] min-h-[280px]">
              <Image
                src="/images/how-we-work.jpg"
                alt="Dharam Engg Work"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/25" />

              {/* Play Button */}
              <button
                type="button"
                aria-label="Play company video"
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1261A0] text-white shadow-[0_10px_35px_rgba(18,97,160,0.4)] transition duration-300 hover:scale-110 hover:bg-[#0b4d82] sm:h-20 sm:w-20"
              >
                <Play
                  size={25}
                  fill="currentColor"
                  className="ml-1 sm:h-7 sm:w-7"
                />
              </button>

              {/* Bottom Label */}
              <div className="absolute bottom-5 left-5 hidden rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md sm:block">
                Dharam Engg Work
              </div>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="relative mt-16 lg:mt-20">
          {/* Connecting Line */}
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="relative group">
                {/* Number */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#1261A0]/20 bg-white text-sm font-bold text-[#1261A0] shadow-sm transition duration-300 group-hover:border-[#1261A0] group-hover:bg-[#1261A0] group-hover:text-white">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-[#111]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-500">
                  {step.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#1261A0]">
                  <CheckCircle2 size={15} />
                  Quality focused
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#f3f8fc] px-6 py-7 sm:flex-row sm:px-8 lg:mt-20">
          <div>
            <h3 className="text-lg font-semibold text-[#111]">
              Looking for the right plastic machinery?
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Talk to our team about your production requirements.
            </p>
          </div>

          <button className="group flex shrink-0 items-center gap-3 rounded-full bg-[#1261A0] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#0b4d82]">
            Talk to Us
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
