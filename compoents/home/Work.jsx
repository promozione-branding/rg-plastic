"use client";

import {
  FiMessageSquare,
  FiSettings,
  FiTool,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const processSteps = [
  {
    number: "01",
    icon: FiMessageSquare,
    title: "CONSULTATION & REQUIREMENT",
    description:
      "We understand your production requirements, application, material, output target and machine specifications.",
  },
  {
    number: "02",
    icon: FiSettings,
    title: "ENGINEERING & PLANNING",
    description:
      "Our engineering team evaluates the application and develops the appropriate machine configuration for your production needs.",
  },
  {
    number: "03",
    icon: FiTool,
    title: "MANUFACTURING & ASSEMBLY",
    description:
      "Precision components are manufactured, assembled and tested according to our quality and performance standards.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "TESTING & DELIVERY",
    description:
      "Every machine undergoes inspection and performance testing before commissioning and final delivery to your facility.",
  },
];

export default function Work() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0b1110] py-6 text-white sm:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">

        {/* Teal glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#008f82]/[0.06] blur-[130px]" />

       

        {/* Bottom glow */}
        <div className="absolute bottom-[-200px] right-[-100px] h-[450px] w-[450px] rounded-full bg-[#008f82]/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* =================================================
            HEADING
        ================================================== */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7bd8cb]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7bd8cb]" />
            How We Work
          </div>

          <h2 className="text-[34px] font-extrabold uppercase leading-[1.05] tracking-[-0.035em] text-white sm:text-[44px] lg:text-[52px]">
            Our Simple
            <span className="text-[#79d8ca]"> Process</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-white/45 sm:text-[14px] sm:leading-7">
            From the initial requirement to final machine delivery, every
            stage is carefully planned and executed for dependable results.
          </p>
        </div>

        {/* =================================================
            PROCESS GRID
        ================================================== */}
        <div className="relative mt-6 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[108px] hidden h-px bg-white/10 lg:block" />

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group relative px-5 py-5 sm:px-6 lg:px-7 ${
                  index !== processSteps.length - 1
                    ? "border-b border-white/[0.07] sm:border-b-0 lg:border-r lg:border-white/[0.07]"
                    : ""
                }`}
              >

                {/* =================================================
                    NUMBER
                ================================================== */}
                <div className="relative h-[120px] overflow-hidden">

                  <span
                    className="
                      absolute left-0 top-2
                      font-black
                      text-[100px]
                      leading-none
                      tracking-[-0.08em]
                      text-white/[0.22]
                      transition-all
                      duration-500
                      ease-out
                      group-hover:-translate-y-7
                      group-hover:text-[#79d8ca]
                      group-hover:scale-[1.04]
                    "
                  >
                    {step.number}
                  </span>

                  {/* Active line */}
                  <span
                    className="
                      absolute bottom-2 left-0
                      h-[2px]
                      w-10
                      bg-white/30
                      transition-all
                      duration-500
                      group-hover:w-20
                      group-hover:bg-[#008f82]
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}
                <div className="relative">

                  {/* Icon */}
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-300 group-hover:border-[#008f82]/30 group-hover:bg-[#008f82]/10 group-hover:text-[#79d8ca]">
                    <Icon className="text-[16px]" />
                  </div>

                  {/* Title */}
                  <h3 className="max-w-[250px] text-[12px] font-extrabold uppercase leading-5 tracking-[0.05em] text-white transition-colors duration-300 group-hover:text-[#79d8ca] sm:text-[13px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-[270px] text-[11px] leading-6 text-white/45 transition-colors duration-300 group-hover:text-white/60 sm:text-[12px]">
                    {step.description}
                  </p>

                  {/* Learn more */}
                  <div className="mt-5 flex items-center gap-2 overflow-hidden text-[9px] font-bold uppercase tracking-[0.1em] text-[#79d8ca]">
                    <span
                      className="
                        translate-y-3 opacity-0
                        transition-all duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      Next Step
                    </span>

                    <FiArrowRight
                      className="
                        translate-x-[-10px]
                        opacity-0
                        transition-all duration-300
                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =================================================
            CTA
        ================================================== */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contact-quote-section"
            className="group inline-flex h-12 items-center gap-3 rounded-md bg-[#008f82] px-6 text-[12px] font-bold uppercase tracking-[0.05em] text-white shadow-[0_8px_25px_rgba(0,143,130,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00776d] hover:shadow-[0_12px_32px_rgba(0,143,130,0.25)]"
          >
            <span>Start Your Project</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
              <FiArrowRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}