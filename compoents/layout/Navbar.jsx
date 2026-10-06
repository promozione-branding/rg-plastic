"use client";

import Image from "next/image";
import Link from "next/link";
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

import MachineMarquee from "../MachineMarquee";


/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
    active: true,
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
    dropdown: true,
  },
  {
    label: "Blogs",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];


/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">

        {/* =====================================================
            MACHINE MARQUEE
        ====================================================== */}

        <MachineMarquee />


        {/* =====================================================
            TOP INFO STRIP
            Currently disabled
        ====================================================== */}

        {/*
        <div className="bg-[#00356B] text-white">

          <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-4 text-[10px] sm:gap-6 sm:text-[11px]">

              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-white" />

                <span className="whitespace-nowrap">
                  Quality Machinery Solutions
                </span>
              </div>

              <span className="hidden h-3 w-px bg-white/20 sm:block" />

              <div className="hidden items-center gap-1.5 sm:flex">
                <FiGlobe className="text-white" />

                <span>
                  Serving Plastic Processing Industries
                </span>
              </div>

            </div>


            <a
              href="tel:+919876543210"
              className="group flex items-center gap-2 text-[10px] sm:text-[11px]"
            >

              <FiPhoneCall className="text-white transition-transform group-hover:rotate-12" />

              <span className="hidden text-white sm:inline">
                Call Us
              </span>

              <span className="font-semibold text-white">
                +91 98765 43210
              </span>

            </a>

          </div>

        </div>
        */}


        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}

        <div>

          <div className="mx-auto max-w-full">

            <div className="relative border border-white/70 bg-white/95 shadow-[0_10px_40px_rgba(6,43,77,0.10)] backdrop-blur-xl">

              {/* =================================================
                  NAVBAR INNER
              ================================================= */}

              <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:h-[76px]">


                {/* =================================================
                    LOGO
                ================================================= */}

                <Link
                  href="/"
                  className="group flex shrink-0 items-center"
                >

                  <Image
                    src="/dharam.webp"
                    alt="DEV Plastic - Plastic Processing and Recycling Machines"
                    width={190}
                    height={70}
                    priority
                    className="h-auto w-[150px] object-contain sm:w-[155px]"
                  />

                </Link>


                {/* =================================================
                    DESKTOP NAVIGATION
                ================================================= */}

                <nav className="hidden items-center gap-1 lg:flex">

                  {navItems.map((item) => (

                    <Link
                      key={item.label}
                      href={item.href}
                      className={`
                        group relative flex items-center gap-1
                        rounded-xl px-4 py-3
                        text-[13px] font-semibold
                        transition-all duration-300
                        xl:px-5

                        ${
                          item.active
                            ? "bg-[#EAF5FC] text-[#0070FF]"
                            : "text-[#0070FF] hover:bg-[#F3F8FC] hover:text-[#175a50]"
                        }
                      `}
                    >

                      <span>
                        {item.label}
                      </span>


                      {/* Dropdown Arrow */}

                      {item.dropdown && (
                        <FiChevronDown
                          size={13}
                          className="mt-0.5 transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}

                    </Link>

                  ))}

                </nav>


                {/* =================================================
                    RIGHT SIDE CTA
                ================================================= */}

                <div className="hidden items-center gap-5 md:gap-2 lg:flex">


                  {/* =================================================
                      TALK TO EXPERT
                  ================================================= */}

                  <Link
  href="tel:+919876543210"
  onClick={() => setMobileOpen(false)}
  className="group flex items-center justify-center gap-3 rounded-xl border border-[#D9E5EF] bg-[#F7FAFC] py-2 text-sm font-semibold px-3 text-[#092F4F] transition-all duration-300 hover:border-[#0070FF] hover:text-[#0070FF]"
>
  {/* Call Icon */}
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF5FC] text-[#0070FF] transition-all duration-300 group-hover:bg-[#0070FF] group-hover:text-white">
    <FiPhoneCall
      size={16}
      className="transition-transform duration-300 group-hover:rotate-12"
    />
  </span>

  {/* Phone Number */}
  <span className="flex flex-col items-start leading-none">

    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400">
      Call Us
    </span>

    <span className="mt-1 font-bold text-[#092F4F] group-hover:text-[#0070FF]">
      +91 98765 43210
    </span>

  </span>

  

</Link>


                  {/* =================================================
                      GET A QUOTE
                  ================================================= */}

                  <Link
                    href="#quote"
                    className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-xl bg-[#0F52BA] px-5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(7,91,150,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4289f5] hover:shadow-[0_9px_24px_rgba(7,91,150,0.28)]"
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


                    {/* Shine Effect */}

                    <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/15 transition-all duration-700 group-hover:left-[130%]" />

                  </Link>

                </div>


                {/* =================================================
                    MOBILE MENU BUTTON
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

                  {/* Menu Icon */}

                  <span
                    className={`
                      absolute transition-all duration-300
                      ${
                        mobileOpen
                          ? "scale-75 rotate-90 opacity-0"
                          : "scale-100 rotate-0 opacity-100"
                      }
                    `}
                  >
                    <HiOutlineMenuAlt3 className="text-[24px]" />
                  </span>


                  {/* Close Icon */}

                  <span
                    className={`
                      absolute transition-all duration-300
                      ${
                        mobileOpen
                          ? "scale-100 rotate-0 opacity-100"
                          : "scale-75 -rotate-90 opacity-0"
                      }
                    `}
                  >
                    <IoCloseOutline className="text-[27px]" />
                  </span>

                </button>

              </div>


              {/* =====================================================
                  MOBILE MENU
              ====================================================== */}

              <div
                className={`
                  grid overflow-hidden rounded-b-2xl
                  border-t border-gray-100
                  transition-all duration-500
                  lg:hidden

                  ${
                    mobileOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >

                <div className="min-h-0 overflow-hidden">

                  <div className="px-4 pb-5 pt-2 sm:px-6">


                    {/* =================================================
                        MOBILE NAVIGATION
                    ================================================= */}

                    <nav className="flex flex-col">

                      {navItems.map((item, index) => (

                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={`
                            flex items-center justify-between
                            border-b border-gray-100
                            py-4
                            text-sm font-semibold
                            transition-all duration-300

                            ${
                              item.active
                                ? "text-[#075B96]"
                                : "text-[#475663] hover:pl-1 hover:text-[#075B96]"
                            }
                          `}
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
                            className={`
                              transition-all duration-300

                              ${
                                item.active
                                  ? "text-[#075B96]"
                                  : "text-gray-300"
                              }
                            `}
                          />

                        </Link>

                      ))}

                    </nav>


                    {/* =================================================
                        MOBILE CTA
                    ================================================= */}

                    <div className="mt-5 space-y-3">


                      {/* =================================================
                          MOBILE EXPERT CTA
                      ================================================= */}

                  


                      {/* =================================================
                          MOBILE GET QUOTE
                      ================================================= */}

                      <Link
                        href="#quote"
                        onClick={() => setMobileOpen(false)}
                        className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-[#075B96] text-sm font-semibold text-white shadow-lg shadow-[#075B96]/15 transition-all duration-300 hover:bg-[#0F52BA]"
                      >

                        <FiFileText size={17} />

                        <span>
                          Get a Quote
                        </span>

                        <FiArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </Link>

                    </div>


                    {/* =================================================
                        MOBILE CONTACT
                    ================================================= */}

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
    </>
  );
}