
"use client";

import Link from "next/link";
import {
  FiSettings,
  FiPackage,
  FiUserCheck,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    title: "Service & Support",
    description:
      "Reliable technical assistance and maintenance guidance to help keep your plastic recycling machinery operating efficiently.",
    icon: FiSettings,
    accent: "teal",
  },
  {
    title: "Genuine Spares",
    description:
      "Access essential machine components and replacement parts to support smooth operations and reduce downtime.",
    icon: FiPackage,
    accent: "blue",
  },
  {
    title: "Technical Training",
    description:
      "Practical machine operation, safety and maintenance guidance for confident day-to-day operations.",
    icon: FiUserCheck,
    accent: "teal",
  },
];

export default function ServiceSupport() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-6 sm:py-12">

      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-[5%]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 pb-12 sm:pb-6 lg:flex-row lg:items-start">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-[13px] font-medium uppercase tracking-[0.04em] text-[#0F52BA]">
                Customer Care
              </span>

              <span className="h-[2px] w-12 bg-[#0F52BA]" />
            </div>

            <h2 className="text-[42px] font-semibold leading-[1.08] tracking-[-0.045em] text-black sm:text-[56px] lg:text-[68px]">
              Service & Support
            </h2>
          </div>

          <Link
            href="/contact"
            className="group mt-2 inline-flex w-fit items-center gap-5 text-[14px] font-medium uppercase text-black"
          >
            <span className="border-b border-black pb-1 transition-colors group-hover:border-[#0F52BA] group-hover:text-[#0F52BA]">
              Contact Us Now
            </span>

            <FiArrowUpRight
              size={32}
              className="text-[#0F52BA] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* TOP DIVIDER */}
        <div className="h-px w-full bg-[#dedede]" />

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group relative flex flex-col py-4 transition-all duration-300 sm:py-6 ${
                  index === 0
                    ? "md:pr-8 lg:pr-12"
                    : index === 1
                    ? "md:border-l md:border-[#dedede] md:px-8 lg:px-12"
                    : "md:border-l md:border-[#dedede] md:pl-8 lg:pl-12"
                }`}
              >

                {/* ICON */}
                <div className="mb-9 flex h-[56px] w-[56px] items-center justify-center">

                  <div className="relative">
                    <Icon
                      size={55}
                      strokeWidth={1.3}
                      className="text-[#555]"
                    />

                    <span
                      className={`absolute -right-1 -top-1 h-3 w-3 rounded-full ${
                        service.accent === "blue"
                          ? "bg-[#0F52BA]"
                          : "bg-[#0F52BA]"
                      }`}
                    />

                  </div>

                </div>

                {/* TITLE */}
                <h3 className="mb-4 text-[26px] font-medium tracking-[-0.035em] text-black transition-colors duration-300 group-hover:text-[#0F52BA] sm:text-[30px]">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="max-w-[480px] text-[15px] leading-5 text-[#747474] sm:text-[16px]">
                  {service.description}
                </p>

                {/* HOVER ACCENT */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0F52BA] transition-all duration-500 group-hover:w-full md:hidden" />

              </div>
            );
          })}

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="h-px w-full bg-[#dedede]" />

      </div>

    </section>
  );
}
