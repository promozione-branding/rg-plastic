"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* Palette: ink #0B2233 · steel #EDF1F4 · paper #FFFFFF · brand #0878D1 · signal #F2A81D */

const product = {
  name: "125 kVA Diesel Generator",
  category: "Diesel Generator",
  model: "LPS-125",
  description:
    "A fuel-efficient diesel generator for continuous and prime power. Robust engine, digital controls and an acoustic canopy keep factories, buildings and project sites running.",
  images: [
    { src: "/images/products/generator-125.jpg", label: "Front view" },
    { src: "/images/products/generator-control.jpg", label: "Control panel" },
    { src: "/images/products/generator-engine.jpg", label: "Engine" },
    { src: "/images/products/generator-inside.jpg", label: "Inside canopy" },
  ],
  highlights: [
    ["125 kVA", "Prime power"],
    ["100 kW", "Rated output"],
    ["400 V · 3 ph", "Voltage"],
    ["50 Hz", "Frequency"],
  ],
  specifications: [
    ["Model", "LPS-125"],
    ["Prime power", "125 kVA / 100 kW"],
    ["Standby power", "138 kVA / 110 kW"],
    ["Voltage", "400 V, 3 phase"],
    ["Frequency", "50 Hz"],
    ["Engine make", "Cummins"],
    ["Alternator make", "Stamford / LPS"],
    ["Fuel tank capacity", "250 litres"],
    ["Dimensions (L × W × H)", "3200 × 1100 × 1750 mm"],
    ["Dry weight", "2500 kg"],
    ["Noise level", "75 dB(A) at 7 m"],
    ["Control panel", "Deep Sea / ComAp (optional)"],
  ],
  features: [
    [
      "Heavy-duty engine",
      "Built for long running hours in continuous and prime power duty.",
    ],
    [
      "Fuel efficient",
      "Tuned fuel consumption lowers your running cost per kWh.",
    ],
    [
      "Digital controls",
      "Monitor load, temperature and faults, with automatic protection.",
    ],
    [
      "Easy to service",
      "Filters, belts and the battery are reachable without removing panels.",
    ],
    ["Low noise", "The acoustic canopy keeps sound at 75 dB(A) at 7 m."],
    [
      "Site ready",
      "Weather-resistant canopy suits factories, buildings and project sites.",
    ],
  ],
  applications: [
    {
      title: "Industrial",
      subtitle: "Factories and plants",
      image: "/images/applications/industrial.jpg",
    },
    {
      title: "Commercial",
      subtitle: "Malls, offices, hotels",
      image: "/images/applications/commercial.jpg",
    },
    {
      title: "Healthcare",
      subtitle: "Hospitals and clinics",
      image: "/images/applications/hospital.jpg",
    },
    {
      title: "Infrastructure",
      subtitle: "Construction sites",
      image: "/images/applications/infrastructure.jpg",
    },
    {
      title: "Data centres",
      subtitle: "Uninterrupted power",
      image: "/images/applications/data-center.jpg",
    },
  ],
  relatedProducts: [
    {
      name: "62.5 kVA Diesel Generator",
      image: "/images/products/generator-62.jpg",
    },
    {
      name: "100 kVA Diesel Generator",
      image: "/images/products/generator-100.jpg",
    },
    {
      name: "200 kVA Diesel Generator",
      image: "/images/products/generator-200.jpg",
    },
    {
      name: "250 kVA Diesel Generator",
      image: "/images/products/generator-250.jpg",
    },
  ],
};

const sections = [
  ["overview", "Overview"],
  ["features", "Features"],
  ["specs", "Specifications"],
  ["applications", "Applications"],
  ["enquiry", "Get a quote"],
];

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878D1] focus-visible:ring-offset-2";

function Heading({ title, intro, light }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`text-4xl font-bold leading-none tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-[#0B2233]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-[15px] leading-7 ${light ? "text-white/70" : "text-slate-600"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export default function SingleProduct() {
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);
  const current = product.images[active];

  return (
    <main className={"scroll-smooth bg-white text-[#0B2233]"}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200 bg-[#EDF1F4] pt-10"
      >
        <ol className="mx-auto flex max-w-[1360px] flex-wrap items-center gap-2 px-5 py-3.5 text-[13px] text-slate-600 sm:px-8 lg:px-12">
          {[
            ["Home", "/"],
            ["Products", "/products"],
            ["Diesel generators", "/products/diesel-generators"],
          ].map(([label, href]) => (
            <li key={href} className="flex items-center gap-2">
              <Link
                href={href}
                className={`rounded hover:text-[#0878D1] ${focus}`}
              >
                {label}
              </Link>
              <span aria-hidden className="text-slate-400">
                /
              </span>
            </li>
          ))}
          <li aria-current="page" className="font-semibold text-[#0B2233]">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      {/* Hero */}
      <section className="bg-[#EDF1F4]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 pb-14 pt-8 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12 lg:pb-20 lg:pt-12">
          {/* Gallery */}
          <div className="flex flex-col gap-3 lg:flex-row-reverse">
            <div className="relative  flex-1 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <Image
                src={current.src}
                alt={`${product.name}: ${current.label}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain p-6 sm:p-10"
              />
              <span className="absolute bottom-4 left-4 rounded bg-[#0B2233] px-3 py-1.5 text-xs font-medium text-white">
                {current.label}
              </span>
            </div>

            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {product.images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${img.label}`}
                  aria-pressed={active === i}
                  className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-white transition-colors ${focus} ${
                    active === i
                      ? "border-[#0878D1]"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#0878D1]">
              {product.category} · Model {product.model}
            </p>
            <h1
              className={`mt-3 text-5xl font-extrabold leading-[.95] tracking-tight sm:text-6xl lg:text-7xl`}
            >
              {product.name}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-700">
              {product.description}
            </p>

            {/* Rating plate: the one memorable element */}
            <dl className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border-2 border-[#0B2233] bg-white sm:grid-cols-4">
              {product.highlights.map(([value, label], i) => (
                <div
                  key={label}
                  className={`px-4 py-4 ${i > 0 ? "sm:border-l-2" : ""} ${
                    i % 2 ? "border-l-2" : ""
                  } ${i > 1 ? "border-t-2 sm:border-t-0" : ""} border-[#0B2233]`}
                >
                  <dd className={`text-2xl font-bold leading-none`}>{value}</dd>
                  <dt className="mt-1.5 text-xs text-slate-600">{label}</dt>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#enquiry"
                className={`inline-flex items-center justify-center rounded-lg bg-[#0878D1] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0669B8] ${focus}`}
              >
                Get a quote
              </Link>
              <button
                type="button"
                className={`inline-flex items-center justify-center rounded-lg border-2 border-[#0B2233] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#0B2233] hover:text-white ${focus}`}
              >
                Download brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section nav */}
      <div className="sticky top-20 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Product sections"
          className="mx-auto flex max-w-[1360px] gap-1 overflow-x-auto px-5 sm:px-8 lg:px-12"
        >
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`shrink-0 border-b-2 border-transparent px-4 py-3.5 text-sm font-medium text-slate-600 transition hover:border-[#0878D1] hover:text-[#0B2233] ${focus}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overview */}
      <section id="overview" className="scroll-mt-14">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-13 ">
          <Heading title="Reliable power for demanding sites" />
          <div className="space-y-4 text-[15px] leading-7 text-slate-700">
            <p>
              The {product.name} pairs dependable output with low running cost
              and easy servicing. It is made for industrial, commercial and
              infrastructure sites where an outage is expensive.
            </p>
            <p>
              A heavy-duty engine, digital control system and acoustic canopy
              work together to give steady performance with controlled noise.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-14 bg-[#0B2233]">
        <div className="mx-auto max-w-[1360px] px-5 py-16 sm:px-8 md:px-12 md:py-13">
          <Heading
            light
            title="Built to keep running"
            intro="Six design choices that matter most when the grid goes down."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map(([title, text]) => (
              <div key={title} className="border-t-2 border-[#F2A81D] pt-5">
                <h3 className={`text-2xl font-bold text-white`}>{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-white/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="scroll-mt-14 bg-[#EDF1F4]">
        <div className="mx-auto grid max-w-[1360px] gap-12 px-5 py-16 sm:px-8 md:px-12 md:py-13 lg:grid-cols-[1.4fr_.6fr] lg:gap-16">
          {/* Specifications */}
          <div>
            <Heading title="Technical specifications" />

            <dl className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
              {product.specifications.map(([key, value], i) => (
                <div
                  key={key}
                  className={`grid grid-cols-[1fr_1.1fr] gap-4 px-5 py-3.5 text-sm ${
                    i % 2 ? "bg-slate-50" : ""
                  }`}
                >
                  <dt className="text-slate-600">{key}</dt>
                  <dd className="font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Sticky Right Side */}
          <aside className="self-start md:sticky md:top-35 rounded-xl bg-white p-6">
            <h3 className="text-2xl font-bold">Need the full datasheet?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Download dimensions, fuel consumption at load and electrical
              details.
            </p>

            <button
              type="button"
              className={`mt-5 w-full rounded-lg bg-[#0B2233] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0878D1] ${focus}`}
            >
              Download brochure
            </button>

            <p className="mt-6 text-xs font-semibold text-slate-500">
              Certifications
            </p>

            <div className="mt-2 flex flex-wrap gap-2">
              {["CE", "ISO", "CPCB"].map((c) => (
                <span
                  key={c}
                  className="rounded border border-slate-300 px-3 py-1.5 text-sm font-bold"
                >
                  {c}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Applications */}

      <section id="applications" className="scroll-mt-14">
        <div className="mx-auto max-w-[1360px] px-5 py-6 sm:px-8 md:px-12 md:py-13">
          <Heading
            title="Where it works"
            intro="From the factory floor to the server room, one generator size covers many jobs."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {product.applications.map((a, index) => (
              <div
                key={a.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0878D1] hover:shadow-lg"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0B2233] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-[#0B2233]">{a.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {a.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-14 bg-[#0878D1]">
        <div className="mx-auto grid max-w-[1360px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[.8fr_1.2fr] md:gap-16 md:px-12 md:py-13">
          <div className="text-white">
            <h2 className={`text-4xl font-bold leading-none sm:text-5xl`}>
              Tell us your power need.
              <br /> We will send a quote.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/85">
              Share your load and site details. Our team will confirm the right
              configuration, price and delivery time.
            </p>
            <ul className="mt-8 space-y-3 text-sm font-medium">
              {[
                "Help choosing the right size",
                "Custom canopy and panel options",
                "Installation and after-sales service",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F2A81D] text-xs font-bold text-[#0B2233]">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-xl bg-white p-6 text-[#0B2233] sm:p-8"
          >
            {sent ? (
              <div role="status" className="py-12 text-center">
                <div className={`text-3xl font-bold`}>Enquiry sent</div>
                <p className="mt-2 text-sm text-slate-600">
                  Our team will contact you shortly with your quote.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91"
                  />
                  <Field
                    label="Power needed"
                    name="power"
                    placeholder="e.g. 125 kVA"
                  />
                  <Field
                    label="Where will you use it?"
                    name="application"
                    placeholder="Factory, hospital, site"
                  />
                </div>
                <label className="mt-4 block text-sm font-medium">
                  Message
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Load, run hours, location, any special needs"
                    className={`mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 ${focus}`}
                  />
                </label>
                <button
                  type="submit"
                  className={`mt-5 w-full rounded-lg bg-[#0B2233] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0878D1] sm:w-auto ${focus}`}
                >
                  Send enquiry
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      {required && <span className="text-[#0878D1]"> *</span>}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm placeholder:text-slate-400 ${focus}`}
      />
    </label>
  );
}
