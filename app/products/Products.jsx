"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Settings2,
  CheckCircle2,
} from "lucide-react";

import { products } from "@/data/data";

export default function Products() {
  return (
    <main className="bg-white text-[#101820]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#061A2A] pt-6 pb-6 sm:pt-35 ">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#1678B8]/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#55B8F2]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55B8F2]">
                All Products
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Machinery built
              <br />
              for{" "}
              <span className="text-[#55B8F2]">
                performance.
              </span>
            </h1>

          

          </div>


          {/* Hero Bottom Stats */}
          <div className="mt-14 grid max-w-3xl grid-cols-2 border-t border-white/10 sm:grid-cols-4">

            <HeroStat number="06" label="Demo Products" />
            <HeroStat number="10+" label="Years Experience" />
            <HeroStat number="100+" label="Clients Served" />
            <HeroStat number="24/7" label="Support" />

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}
      <section className="py-6 sm:py-13">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Section Heading */}
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
                Explore Our Range
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Our Machinery
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Discover dependable machinery solutions designed for plastic
              recycling, processing and industrial production.
            </p>

          </div>


          {/* Product Grid */}
          <div className="grid gap-6 md:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="pb-20 sm:pb-24 lg:pb-28">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="relative overflow-hidden rounded-[30px] bg-[#075B96] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-14 h-48 w-48 rounded-full border border-white/10" />

            <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Need a Custom Solution?
                </span>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let's find the right machinery for your production.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/65">
                  Tell us about your application, material and production
                  requirements. Our team can help you identify a suitable
                  machinery solution.
                </p>

              </div>


              <a
                href="#contact"
                className="group flex w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#075B96] transition hover:-translate-y-1 hover:shadow-xl"
              >
                Get a Quote

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product }) {
  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#1261A0]/20 hover:shadow-[0_25px_60px_rgba(7,91,150,0.12)]">

      {/* IMAGE */}
      <div className="relative aspect-[1.15/0.88] overflow-hidden bg-[#F3F7FA]">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        

      </div>


      {/* CONTENT */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <h3 className="max-w-[290px] text-xl font-semibold leading-tight tracking-tight text-[#111]">
            {product.name}
          </h3>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF5FC] text-[#075B96] transition duration-300 group-hover:bg-[#075B96] group-hover:text-white">
            <Settings2 size={16} />
          </div>

        </div>


       


        


        {/* View Product */}
        <a
          href={`/products/${product.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "")}`}
          className="group/button mt-7 flex items-center justify-between border-t border-gray-100 pt-5"
        >

          <span className="text-sm font-semibold text-[#075B96]">
            View Product
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#075B96]/20 text-[#075B96] transition-all duration-300 group-hover/button:bg-[#075B96] group-hover/button:text-white">

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
            />

          </span>

        </a>

      </div>

    </article>
  );
}


/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({ number, label }) {
  return (
    <div className="border-r border-white/10 px-4 py-5 first:pl-0 last:border-r-0">

      <div className="text-2xl font-semibold text-white">
        {number}
      </div>

      <div className="mt-1 text-[10px] uppercase tracking-wider text-white/45">
        {label}
      </div>

    </div>
  );
}