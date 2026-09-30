"use client";

import { useState } from "react";
import {
  FiCheckCircle,
  FiGlobe,
  FiPhoneCall,
  FiFileText,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const navItems = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", dropdown: true },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* =====================================================
          TOP INFO STRIP
      ====================================================== */}
      <div className="bg-[#00356B] text-white">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left */}
          <div className="flex items-center gap-4 text-[10px] sm:gap-6 sm:text-[11px]">

            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#fff]" />

              <span className="whitespace-nowrap">
                Quality Machinery Solutions
              </span>
            </div>

            <span className="hidden h-3 w-px bg-white/20 sm:block" />

            <div className="hidden items-center gap-1.5 sm:flex">
              <FiGlobe className="text-[#fff]" />

              <span>
                Serving Plastic Processing Industries
              </span>
            </div>

          </div>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-2 text-[10px] sm:text-[11px]"
          >
            <FiPhoneCall className="text-[#fff] transition-transform group-hover:rotate-12" />

            <span className="hidden text-white sm:inline">
              Call Us
            </span>

            <span className="font-semibold text-[#fff]">
              +91 98765 43210
            </span>
          </a>

        </div>
      </div>


      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}
      <div className="">

        <div className="mx-auto max-w-full">

          <div className="relative border border-white/70 bg-white/95 shadow-[0_10px_40px_rgba(6,43,77,0.10)] backdrop-blur-xl">

            <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:h-[76px] ">

              {/* =================================================
                  LOGO
              ================================================= */}
              <a
                href="#"
                className="group flex shrink-0 items-center gap-3"
              >

                {/* Logo Mark */}
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#0070FF] shadow-[0_5px_15px_rgba(7,91,150,0.22)]">

                  <div className="absolute -right-3 -top-3 h-7 w-7 rounded-full border border-white/20" />

                  <div className="absolute -bottom-4 -left-3 h-8 w-8 rounded-full border border-white/20" />

                  <span className="relative text-sm font-black tracking-tight text-white">
                    RG
                  </span>

                </div>


                {/* Brand */}
                <div className="flex flex-col">

                  <span className="text-[20px] font-black leading-none tracking-[-0.045em] text-[#092F4F] transition-colors group-hover:text-[#075B96] sm:text-[22px]">
                    RG PLASTIC
                  </span>

                  <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.25em] text-gray-400 sm:text-[8px]">
                    Plastic Machinery
                  </span>

                </div>

              </a>


              {/* =================================================
                  DESKTOP NAV
              ================================================= */}
              <nav className="hidden items-center gap-1 lg:flex">

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`group relative flex items-center gap-1 rounded-xl px-4 py-3 text-[13px] font-semibold transition-all duration-300 xl:px-5 ${
                      item.active
                        ? "bg-[#EAF5FC] text-[#0070FF]"
                        : "text-[#0070FF] hover:bg-[#F3F8FC] hover:text-[#175a50]"
                    }`}
                  >

                    <span>
                      {item.label}
                    </span>

                    {item.dropdown && (
                      <FiChevronDown
                        size={13}
                        className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}

                  </a>
                ))}

              </nav>


              {/* =================================================
                  DESKTOP CTA
              ================================================= */}
              <div className="hidden lg:flex">

                <a
                  href="#quote"
                  className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-xl bg-[#0F52BA] px-5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(7,91,150,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d7868] hover:shadow-[0_9px_24px_rgba(7,91,150,0.28)]"
                >

                  <FiFileText
                    size={16}
                    className="relative z-10"
                  />

                  <span className="relative z-10 whitespace-nowrap">
                    Get a Quote
                  </span>

                  <FiArrowRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {/* Shine */}
                  <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />

                </a>

              </div>


              {/* =================================================
                  MOBILE BUTTON
              ================================================= */}
              <button
                type="button"
                aria-label={
                  mobileOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#092F4F] transition-all duration-300 hover:border-[#075B96]/30 hover:bg-[#EAF5FC] lg:hidden"
              >

                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "scale-75 rotate-90 opacity-0"
                      : "scale-100 rotate-0 opacity-100"
                  }`}
                >
                  <HiOutlineMenuAlt3 className="text-[24px]" />
                </span>

                <span
                  className={`absolute transition-all duration-300 ${
                    mobileOpen
                      ? "scale-100 rotate-0 opacity-100"
                      : "scale-75 -rotate-90 opacity-0"
                  }`}
                >
                  <IoCloseOutline className="text-[27px]" />
                </span>

              </button>

            </div>


            {/* =================================================
                MOBILE MENU
            ================================================= */}
            <div
              className={`grid overflow-hidden rounded-b-2xl border-t border-gray-100 transition-all duration-500 lg:hidden ${
                mobileOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >

              <div className="min-h-0 overflow-hidden">

                <div className="px-4 pb-5 pt-2 sm:px-6">

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col">

                    {navItems.map((item, index) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between border-b border-gray-100 py-4 text-sm font-semibold transition-all duration-300 ${
                          item.active
                            ? "text-[#075B96]"
                            : "text-[#475663] hover:pl-1 hover:text-[#075B96]"
                        }`}
                        style={{
                          transitionDelay: mobileOpen
                            ? `${index * 45}ms`
                            : "0ms",
                        }}
                      >

                        <span>
                          {item.label}
                        </span>

                        <FiArrowRight
                          size={16}
                          className={`transition-all duration-300 ${
                            item.active
                              ? "text-[#075B96]"
                              : "text-gray-300"
                          }`}
                        />

                      </a>
                    ))}

                  </nav>


                  {/* Mobile CTA */}
                  <div className="mt-5">

                    <a
                      href="#quote"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#075B96] text-sm font-semibold text-white shadow-lg shadow-[#075B96]/15"
                    >
                      <FiFileText size={17} />

                      Get a Quote

                      <FiArrowRight size={16} />

                    </a>

                  </div>


                  {/* Mobile Contact */}
                  <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

                    <FiPhoneCall size={13} />

                    <span>
                      Call us
                    </span>

                    <a
                      href="tel:+919876543210"
                      className="font-semibold text-[#075B96]"
                    >
                      +91 98765 43210
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}