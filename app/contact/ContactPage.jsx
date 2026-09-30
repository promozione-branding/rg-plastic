"use client";

import { ArrowRight, Mail, Phone, MapPin, Clock3, Factory ,CheckCircle2 } from "lucide-react";


export default function ContactPage() {
  return (
    <main className="bg-white text-[#111]">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[520px] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/contact-hero.jpg')",
          }}
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#062d4f]/75" />

        {/* Subtle Grid */}

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[520px] items-center justify-center px-5 text-center">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#4ca7e8]" />
              Get In Touch
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl ">
              Let's Build
              <br />
              <span className="text-[#65b5ee]">Something Better.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Have a machinery requirement, product enquiry or technical
              question? Our team is ready to understand your needs and help you
              find the right plastic processing solution.
            </p>
          </div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f4f8fb] py-6 sm:py-13">
        {" "}
        {/* ===================================================== BACKGROUND DECORATION ===================================================== */}{" "}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1261A0]/5 blur-3xl" />{" "}
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#1261A0]/5 blur-3xl" />{" "}
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {" "}
          {/* ===================================================== TOP HEADING ===================================================== */}{" "}
          <div className="mb-14 max-w-3xl sm:mb-16">
            {" "}
            <div className="mb-5 flex items-center gap-3">
              {" "}
              <span className="h-px w-9 bg-[#1261A0]" />{" "}
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1261A0]">
                {" "}
                Get In Touch{" "}
              </span>{" "}
            </div>{" "}
            <h2 className="text-[42px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#111] sm:text-5xl lg:text-[60px]">
              {" "}
              Let&apos;s build the <br />{" "}
              <span className="text-[#1261A0]">right solution.</span>{" "}
            </h2>{" "}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-base">
              {" "}
              Have a machinery requirement or looking for the right plastic
              processing solution? Share your requirements with us and our team
              will get back to you.{" "}
            </p>{" "}
          </div>{" "}
          {/* ===================================================== MAIN CONTACT GRID ===================================================== */}{" "}
          <div className="grid overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
            {" "}
            {/* ================================================= LEFT CONTACT PANEL ================================================= */}{" "}
            <div className="relative overflow-hidden bg-[#0d4f7d] p-7 text-white sm:p-10 lg:p-12">
              {" "}
              {/* Decorative grid */}{" "}
              <div
                className="pointer-events-none absolute right-0 top-0 h-64 w-64 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                  maskImage:
                    "linear-gradient(to bottom left, black, transparent)",
                }}
              />{" "}
              {/* Circle */}{" "}
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-white/10" />{" "}
              <div className="relative z-10">
                {" "}
                {/* Label */}{" "}
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  {" "}
                  Talk To Our Team{" "}
                </span>{" "}
                <h3 className="mt-5 max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
                  {" "}
                  Have a project <br /> in mind?{" "}
                </h3>{" "}
                <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                  {" "}
                  From individual machines to complete plastic processing
                  requirements, we can help you find a practical solution.{" "}
                </p>{" "}
                {/* Contact Items */}{" "}
                <div className="mt-10 space-y-5">
                  {" "}
                  {/* Email */}{" "}
                  <a
                    href="mailto:info@plasticextrussion.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10"
                  >
                    {" "}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      {" "}
                      <Mail size={18} />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-white/50">
                        {" "}
                        Email{" "}
                      </span>{" "}
                      <span className="mt-1 block text-sm font-medium">
                        {" "}
                        info@plasticextrussion.com{" "}
                      </span>{" "}
                    </span>{" "}
                  </a>{" "}
                  {/* Phone */}{" "}
                  <a
                    href="tel:+919999999999"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:bg-white/10"
                  >
                    {" "}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      {" "}
                      <Phone size={18} />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-white/50">
                        {" "}
                        Call Us{" "}
                      </span>{" "}
                      <span className="mt-1 block text-sm font-medium">
                        {" "}
                        +91 99999 99999{" "}
                      </span>{" "}
                    </span>{" "}
                  </a>{" "}
                  {/* Location */}{" "}
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    {" "}
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      {" "}
                      <MapPin size={18} />{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      <span className="block text-[10px] uppercase tracking-[0.16em] text-white/50">
                        {" "}
                        Location{" "}
                      </span>{" "}
                      <span className="mt-1 block text-sm font-medium">
                        {" "}
                        India{" "}
                      </span>{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Bottom Trust */}{" "}
                <div className="mt-10 border-t border-white/10 pt-7">
                  {" "}
                  <p className="text-xs text-white/50">
                    {" "}
                    Why work with us?{" "}
                  </p>{" "}
                  <div className="mt-4 space-y-3">
                    {" "}
                    {[
                      "Industry-focused machinery solutions",
                      "Quality-driven engineering",
                      "Responsive customer support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-xs text-white/80"
                      >
                        {" "}
                        <CheckCircle2
                          size={15}
                          className="text-white/70"
                        />{" "}
                        {item}{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* ================================================= RIGHT FORM ================================================= */}{" "}
            <div className="p-7 sm:p-10 lg:p-12">
              {" "}
              {/* Form Heading */}{" "}
              <div className="mb-9 flex items-start justify-between gap-5">
                {" "}
                <div>
                  {" "}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
                    {" "}
                    Enquiry Form{" "}
                  </span>{" "}
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#111] sm:text-3xl">
                    {" "}
                    Tell us what you need{" "}
                  </h3>{" "}
                  <p className="mt-2 text-sm text-gray-500">
                    {" "}
                    Fill in your details and we&apos;ll contact you
                    shortly.{" "}
                  </p>{" "}
                </div>{" "}
                {/* Number */}{" "}
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf4fb] text-sm font-semibold text-[#1261A0] sm:flex">
                  {" "}
                  01{" "}
                </div>{" "}
              </div>{" "}
              <form className="space-y-7">
                {" "}
                {/* ================================================= NAME + PHONE ================================================= */}{" "}
                <div className="grid gap-7 sm:grid-cols-2">
                  {" "}
                  <div className="group">
                    {" "}
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {" "}
                      Full Name *{" "}
                    </label>{" "}
                    <input
                      type="text"
                      placeholder="Your name"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 text-sm text-gray-900 outline-none transition focus:border-[#1261A0] focus:bg-white focus:ring-4 focus:ring-[#1261A0]/5"
                    />{" "}
                  </div>{" "}
                  <div className="group">
                    {" "}
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {" "}
                      Phone Number *{" "}
                    </label>{" "}
                    <input
                      type="tel"
                      placeholder="+91"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 text-sm text-gray-900 outline-none transition focus:border-[#1261A0] focus:bg-white focus:ring-4 focus:ring-[#1261A0]/5"
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* ================================================= EMAIL + PRODUCT ================================================= */}{" "}
                <div className="grid gap-7 sm:grid-cols-2">
                  {" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {" "}
                      Email Address *{" "}
                    </label>{" "}
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 text-sm text-gray-900 outline-none transition focus:border-[#1261A0] focus:bg-white focus:ring-4 focus:ring-[#1261A0]/5"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      {" "}
                      Product / Machine{" "}
                    </label>{" "}
                    <select
                      defaultValue=""
                      className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 text-sm text-gray-500 outline-none transition focus:border-[#1261A0] focus:bg-white focus:ring-4 focus:ring-[#1261A0]/5"
                    >
                      {" "}
                      <option value="" disabled>
                        {" "}
                        Select a product{" "}
                      </option>{" "}
                      <option>Plastic Granules Making Machine</option>{" "}
                      <option>Scrap Grinder Machine</option>{" "}
                      <option>Plastic Extrusion Machine</option>{" "}
                      <option>Recycling Machine</option>{" "}
                      <option>Other</option>{" "}
                    </select>{" "}
                  </div>{" "}
                </div>{" "}
                {/* ================================================= MESSAGE ================================================= */}{" "}
                <div>
                  {" "}
                  <label className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    {" "}
                    Your Requirement *{" "}
                  </label>{" "}
                  <textarea
                    rows={5}
                    placeholder="Tell us about your machinery requirement..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#1261A0] focus:bg-white focus:ring-4 focus:ring-[#1261A0]/5"
                  />{" "}
                </div>{" "}
                {/* ================================================= BOTTOM CTA ================================================= */}{" "}
                <div className="flex flex-col gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  {" "}
                  <p className="max-w-xs text-xs leading-5 text-gray-400">
                    {" "}
                    By submitting this form, you agree to be contacted regarding
                    your enquiry.{" "}
                  </p>{" "}
                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#1261A0] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1261A0]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b4d82] hover:shadow-xl hover:shadow-[#1261A0]/25"
                  >
                    {" "}
                    Send Enquiry{" "}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                      {" "}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />{" "}
                    </span>{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
          {/* ===================================================== BOTTOM NOTE ===================================================== */}{" "}
          <div className="mt-7 flex flex-col gap-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            {" "}
            <span>
              {" "}
              R G Plastics Machinery — Engineering reliable solutions.{" "}
            </span>{" "}
            <span className="flex items-center gap-2">
              {" "}
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Our
              team is ready to help{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="border-y border-gray-200 bg-[#f7faff] py-6 sm:py-13">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1261A0]">
              Find Us
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Visit R G Plastics Machinery
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* ADDRESS */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4fb]">
                <MapPin size={19} className="text-[#1261A0]" />
              </div>

              <h3 className="mt-5 font-semibold">Our Address</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                R G Plastics Machinery
                <br />
                Add your complete business address
                <br />
                Delhi, India
              </p>
            </div>

            {/* PHONE */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4fb]">
                <Phone size={19} className="text-[#1261A0]" />
              </div>

              <h3 className="mt-5 font-semibold">Phone & Enquiries</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                +91 99999 99999
                <br />
                info@plasticextrussion.com
              </p>
            </div>

            {/* HOURS */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf4fb]">
                <Clock3 size={19} className="text-[#1261A0]" />
              </div>

              <h3 className="mt-5 font-semibold">Working Hours</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP
      ====================================================== */}
      <section className="bg-white py-6 sm:py-13">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative h-[400px] overflow-hidden rounded-[28px] border border-gray-200 bg-gray-100 sm:h-[500px]">
            <iframe
              title="R G Plastics Machinery Location"
              src="https://www.google.com/maps?q=Delhi,India&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
            />

            {/* Map Label */}
            <div className="absolute left-5 top-5 rounded-xl bg-white px-5 py-4 shadow-xl sm:left-7 sm:top-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1261A0]">
                  <Factory size={17} className="text-white" />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    R G Plastics Machinery
                  </p>

                  <p className="text-xs text-gray-500">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
