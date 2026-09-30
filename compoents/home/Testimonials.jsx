"use client";

import { BsFillChatQuoteFill } from "react-icons/bs";
import { FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";



const testimonials = [
  {
    quote:
      "Texmo machines have delivered consistent performance for our production requirements. The machine quality, precision and technical support have helped us maintain reliable output.",
    name: "Rajesh Kumar",
    company: "Industrial Manufacturing Company",
    role: "Plant Manager",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
];

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-6 sm:py-13"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#008f82]/[0.035] blur-3xl" />

        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#008f82]/[0.025] blur-3xl" />

        <div
          className="absolute bottom-0 left-0 h-64 w-1/3 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* =================================================
            MAIN GRID
        ================================================== */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">

          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div className="relative lg:col-span-6">

            {/* Label */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#008f82]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf5f2]">
                <BsFillChatQuoteFill className="text-[12px]" />
              </span>

              Client Testimonials
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.04em] text-[#162321] sm:text-[46px] ">
              Trusted by Manufacturers for{" "}
              <span className="text-[#093372]">
                Reliable Performance
              </span>
            </h2>

            {/* CTA */}
            <a
              href="#contact-quote-section"
              className="group mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#093372] px-5 text-[12px] font-bold text-white shadow-[0_8px_20px_rgba(0,143,130,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a4b7d]"
            >
              Discuss Your Requirement

              <FiArrowRight className="text-[15px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* =================================================
                TESTIMONIAL IMAGE
            ================================================== */}
            <div className="relative mt-10 max-w-[620px]">

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl bg-[#e9f0ee] shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
                <div className="aspect-[1.55/1]">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85"
                    alt="Industrial manufacturing team"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                {/* Bottom image label */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#101d1b]/80 p-4 text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/50">
                    Customer Experience
                  </div>

                  <div className="mt-1 text-[14px] font-bold sm:text-[16px]">
                    Precision machines. Consistent production.
                  </div>
                </div>
              </div>

              {/* =================================================
                  RATING CARD
              ================================================== */}
              <div className="absolute -right-2 -top-7 w-[155px] rounded-2xl border border-[#e3eae7] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.10)] sm:-right-5 sm:w-[175px] sm:p-5">

                {/* Stars */}
                <div className="mb-2 flex gap-1 text-[#f39a0a]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      className="fill-current text-[14px]"
                    />
                  ))}
                </div>

                <div className="text-[42px] font-extrabold leading-none tracking-[-0.04em] text-[#162321] sm:text-[48px]">
                  5.0
                </div>

                <div className="mt-1 text-[10px] font-semibold text-[#7b8582]">
                  Client Rating
                </div>

                <div className="mt-3 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#093372]">
                  <FiCheckCircle className="text-[12px]" />
                  Verified Feedback
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-bl-2xl border-b border-l border-[#008f82]/20" />
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}
          <div className="lg:col-span-6">

            {/* Large stat */}
            <div className="mb-8">
              <div className="text-[72px] font-extrabold leading-none tracking-[-0.06em] text-[#093372] sm:text-[88px]">
                25+
              </div>

              <div className="mt-1 text-[13px] font-bold uppercase tracking-[0.13em] text-[#495652]">
                Years of Engineering Experience
              </div>
            </div>

            {/* Quote */}
            <div className="relative">

              <BsFillChatQuoteFill className="absolute -left-1 -top-6 text-[50px] text-[#008f82]/10" />

              <blockquote className="relative max-w-[610px] text-[20px] font-medium tracking-[-0.015em] text-[#27332f] sm:text-[24px] ">
                “{testimonial.quote}”
              </blockquote>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full max-w-[600px] bg-[#e5ebe8]" />

            {/* Customer */}
            <div className="flex items-center gap-4">

              {/* Avatar */}
              <div className="h-14 w-14 overflow-hidden rounded-full border-4 border-[#eaf5f2] bg-[#eef4f2]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="text-[14px] font-extrabold text-[#202c29]">
                  {testimonial.name}
                </div>

                <div className="mt-0.5 text-[11px] font-medium text-[#78837f]">
                  {testimonial.role}
                </div>

                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#093372]">
                  {testimonial.company}
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <TrustItem text="Precision Engineering" />
              <TrustItem text="Reliable Performance" />
              <TrustItem text="Technical Support" />

            </div>

            {/* Bottom CTA */}
            <div className="mt-9 flex flex-col gap-4 border-t border-[#e7ecea] pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7d8784]">
                <FiCheckCircle className="text-[#093372]" />
                Built for demanding industries
              </div>

              <a
                href="#contact-quote-section"
                className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#093372]"
              >
                Start Your Project

                <FiArrowRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({ text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-[#f6f9f8] px-3 py-3">
      <FiCheckCircle className="shrink-0 text-[14px] text-[#093372]" />

      <span className="text-[10px] font-bold text-[#56625f]">
        {text}
      </span>
    </div>
  );
}