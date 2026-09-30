"use client";

import { useState } from "react";
import {
  FiPhoneCall,
  FiMail,
  FiMessageCircle,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiSend,
  FiFileText,
} from "react-icons/fi";

export default function Cta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      e.target.reset();
    }, 100);
  };

  return (
    <section
      id="contact-quote-section"
      className="relative overflow-hidden bg-[#f4f8f7] py-6 sm:py-16"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#008f82]/[0.05] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#008f82]/[0.04] blur-3xl" />

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
        {/* =================================================
            MAIN CARD
        ================================================== */}
        <div className="overflow-hidden rounded-[28px] border border-[#e1e9e6] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-12">
            {/* =================================================
                LEFT PANEL
            ================================================== */}
            <div className="relative overflow-hidden bg-[#093372] p-7 text-white sm:p-7 lg:col-span-5 ">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-white/[0.05]" />
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full border-[50px] border-white/[0.04]" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm sm:text-[10px]">
                    <FiFileText className="text-[14px]" />
                    Fast Technical Quotation
                  </div>

                  {/* Heading */}
                  <h2 className="mt-7 max-w-md text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[42px] ">
                    Looking for the Right
                    <span className="block text-[#c9f1e8]">
                      Plastic Moulding Machine?
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="mt-5 max-w-lg text-[14px]  text-white/75 sm:text-[15px] ">
                    Tell us about your production requirements, target material,
                    mould dimensions and application. Our technical engineering
                    team can help determine the right machine configuration for
                    your production needs.
                  </p>

                  {/* =================================================
                      CONTACT OPTIONS
                  ================================================== */}
                  <div className="mt-8 space-y-3">
                    {/* Phone */}
                    <a
                      href="tel:+919876543210"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3.5 transition-all duration-300 hover:bg-white/[0.13]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <FiPhoneCall className="text-[17px] text-[#c9f1e8] transition-transform duration-300 group-hover:rotate-12" />
                      </div>

                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/50">
                          Direct Sales Desk
                        </div>

                        <div className="mt-0.5 text-[14px] font-bold">
                          +91 98765 43210
                        </div>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:sales@texmoprecision.com"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3.5 transition-all duration-300 hover:bg-white/[0.13]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <FiMail className="text-[17px] text-[#c9f1e8]" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/50">
                          Official RFQ Email
                        </div>

                        <div className="mt-0.5 truncate text-[13px] font-bold sm:text-[14px]">
                          sales@texmoprecision.com
                        </div>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919876543211"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.08] p-3.5 transition-all duration-300 hover:bg-white/[0.13]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <FiMessageCircle className="text-[17px] text-[#c9f1e8]" />
                      </div>

                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/50">
                          WhatsApp Business Desk
                        </div>

                        <div className="mt-0.5 text-[14px] font-bold">
                          +91 98765 43211
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT FORM
            ================================================== */}
            {/* =================================================
    RIGHT FORM
================================================== */}
            <div className="p-6 sm:p-8 lg:col-span-7 ">
              {/* Form heading */}
              <div className="mb-7">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#093372]">
                  <span className="h-px w-6 bg-[#093372]" />
                  Factory Direct Enquiry
                </div>

                <h3 className="mt-3 text-[27px] font-extrabold tracking-[-0.025em] text-[#182522] sm:text-[32px]">
                  Request a Quote
                </h3>

                <p className="mt-2 max-w-xl text-[13px] leading-6 text-[#7a8582]">
                  Tell us what you need and our team will get back to you
                  shortly.
                </p>
              </div>

              {/* =================================================
      FORM
  ================================================== */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
                      Name <span className="text-[#008f82]">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-12 w-full rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 placeholder:text-[#a1aaa7] focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
                      Email <span className="text-[#093372]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                      className="h-12 w-full rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 placeholder:text-[#a1aaa7] focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
                    />
                  </div>
                </div>

                {/* Phone + Product */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
                      Phone <span className="text-[#008f82]">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      className="h-12 w-full rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 placeholder:text-[#a1aaa7] focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
                      Product <span className="text-[#008f82]">*</span>
                    </label>

                    <select
                      name="product"
                      required
                      defaultValue=""
                      className="h-12 w-full cursor-pointer rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
                    >
                      <option value="" disabled>
                        Select Product
                      </option>

                      <option value="Injection Moulding Machine">
                        Injection Moulding Machine
                      </option>

                      <option value="Blow Moulding Machine">
                        Blow Moulding Machine
                      </option>

                      <option value="PET Preform Machine">
                        PET Preform Machine
                      </option>

                      <option value="Compression Moulding Machine">
                        Compression Moulding Machine
                      </option>

                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 py-3 text-[13px] text-[#25312f] outline-none transition-all duration-300 placeholder:text-[#a1aaa7] focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  <button
                    type="submit"
                    className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#093372] px-5 text-[13px] font-bold text-white shadow-[0_7px_18px_rgba(0,143,130,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#00796f] hover:shadow-[0_10px_24px_rgba(0,143,130,0.23)] sm:w-auto"
                  >
                    <FiSend className="text-[16px] transition-transform duration-300 group-hover:translate-x-0.5" />

                    <span>Send Enquiry</span>

                    <FiArrowRight className="text-[15px] transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <a
                    href="https://wa.me/919876543211"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#25D366]/20 bg-[#093372]/[0.07] px-5 text-[13px] font-bold text-[#093372] transition-all duration-300 hover:bg-[#25D366]/[0.12] sm:w-auto"
                  >
                    <FiMessageCircle className="text-[17px]" />
                    WhatsApp Chat
                  </a>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[19px] text-[#093372]" />

                    <div>
                      <div className="text-[12px] font-bold">
                        Enquiry submitted successfully
                      </div>

                      <p className="mt-1 text-[11px] leading-5 text-emerald-700">
                        Thank you. Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Note */}
                <div className="flex items-center justify-between border-t border-[#edf1ef] pt-4 text-[10px] text-[#8b9592]">
                  <span>Fields marked with * are required.</span>

                  <div className="flex items-center gap-1.5">
                    <FiShield className="text-[13px] text-[#093372]" />
                    Secure enquiry
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({ label, required = false, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
        {label}
        {required && <span className="ml-1 text-[#008f82]">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 placeholder:text-[#a1aaa7] focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function FormSelect({ label, required = false, options = [] }) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] font-bold text-[#34403d]">
        {label}
        {required && <span className="ml-1 text-[#008f82]">*</span>}
      </label>

      <select
        required={required}
        className="h-12 w-full cursor-pointer rounded-xl border border-[#dde5e2] bg-[#f8faf9] px-4 text-[13px] text-[#25312f] outline-none transition-all duration-300 focus:border-[#008f82]/40 focus:bg-white focus:ring-4 focus:ring-[#008f82]/[0.07]"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
