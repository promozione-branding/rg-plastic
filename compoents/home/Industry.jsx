
"use client";

import {
  FiArrowRight,
  FiCpu,
  FiPackage,
  FiHeart,
  FiMonitor,
  FiShoppingBag,
  FiDroplet,
  FiTool,
} from "react-icons/fi";

const industries = [
  {
    number: "01",
    category: "AUTOMOTIVE",
    title: "Interior Trims & Radiator Grilles",
    description: "PP, ABS, PA66-GF30 · Zero flash parting",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8jigbxw0gZgR50C5hE6fIWQCvNylW_USNFVOwM7tuwrVDo2gsCbxNdODeTnH-LYpwcQ0go31j0-H_ieap7-CGlRaog-KI9zwj2fAW4AN046RIoY606Zfsg-lWdKKV-0-ykfAHWM1K1zHH-iSlEp7ZrYNYjtSJuZRFjRfU3-4nfvbyHQRBRXP1xvVyIfYdkG4D5EXfjIsq7linYMtyFKG2N1lKK7rw3HIvx81flchZ5I7qx-rAekq55g",
    icon: FiCpu,
  },
  {
    number: "02",
    category: "PACKAGING",
    title: "Caps, Closures & Thin-Wall",
    description: "HDPE, PP, PET · Fast cycle multicavity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPGnNc2qhm7mYpDcA-pNEidHowb_G5Ek_pi7mBkJT2xvbUQtndlcFBroEbPCLmgE8T0z11NCI8YS__SDykDRWjrbK4XI_yvaU12KZZ8Y908niHbnIPmBnpB2kS_kc-UwCwGzdKI0EhKj5pNKMf-bs95Gr9aNb7Ab7rU3Qdi0A0D3OkweZcseyavXVY-FRxdGzoM1MPxXTg7pdWcJLCN3IXbUdCEJm8m2S8IEs2JqEqs5XSOJjYT_JiZg",
    icon: FiPackage,
  },
  {
    number: "03",
    category: "MEDICAL",
    title: "Syringes & Diagnostic Labware",
    description: "ISO Class 7/8 Cleanroom compatible",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuYP9OUhCgPrEhReMtp5I4KUCl6g3F5EAdkJrjbXs4RJ1OcTHTuA3D0dOH9FjLolp9LkNNiYRRxixe-Ft7ke9Zb0cfbkOV_faofLffIrYtgoVRe7CWo6YugY3h_YZlYMJHt-LikH1GzjNOFt455zuXbrU0mBCH99vdAfVBhDqnaLfbYZTcWoHooWROmoo0FpgCWfGDci3KeLZfNjuBHMb0XSIlaS_TRith_JJK8A5NrS8Lsb3_3aJi7g",
    icon: FiHeart,
  },
  {
    number: "04",
    category: "ELECTRONICS",
    title: "Switchgears & Terminal Blocks",
    description: "Flame retardant Polycarbonate / PBT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDiRbhbEaEm-x1UZiXNYF8u7qzVHIPQVumU3nrbywCv0NtfMkzWe1xQnHBQVILUCLq_ypqacxkJL2hpKBDnpWHKpwnZS4r3MgRJ6h4D4D-9mzDTElh6gIXgOS3Swu6_up0BGtMZrK2n5yBYGZ8P0JotC7clhIbMr8LxaTW6yQDRSCNPMBZKvV4fYVEZiZbLe2zOfS4IDDZJhgzd9Q8ufAPZEbL4x1xrBrnoD8_yNm0Hk2ao-iCPT1muw",
    icon: FiMonitor,
  },
  {
    number: "05",
    category: "CONSUMER",
    title: "Appliances & Storage Crates",
    description: "High-impact copolymer PP",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDPu55E921UBe6LNa7-gwOLFhtToa83xFYeHosd4BpgoZwLqbCgsyoud-epEFA6Yl8WM4vFTwdbh5sGUFoW6RJQWlezVGHRGEnWvhGwGT01wyH-9gkiYWcYLvQSzwlcYyXgk8TekenSgKOUKQCPg5VYo8PrAmDKsiRm0JwEJd_MqEli8lRR2Lj7gASVfgVvx_cWod9oJtvR6l-IAg7VVPTVtudmMCQnvPEaFQ8lf_auETP_njE0d1q2A",
    icon: FiShoppingBag,
  },
  {
    number: "06",
    category: "AGRICULTURE",
    title: "Drip Emitters & Sprinklers",
    description: "UV stabilized POM & HDPE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJQccE3pGl_k9QrfCJhRPYr4x3Qyy-NtIfeXmwnXWUqQDMKr2AB-ti2juB3j4PGxmRz5U9pgz24dVrZrbpCDBrkPby5ZsHsaw5B084zd3ZZ_EgdiL5OkCIPPT5fcECkCwnug-3pBBh8dgA3Wd0Hge577KPcl008pAE-xHwDFhZN0KOVHFsXwCTp9EC3zzHxx2GSiZYGOBUJaJdniUQmjha5QtTMDE4NZrdno4Kn6v6vNSDJWTttGZ6_Q",
    icon: FiDroplet,
  },
  {
    number: "07",
    category: "CONSTRUCTION",
    title: "Pipe Couplers & Conduit Bends",
    description: "Rigid PVC, CPVC & PPR",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaEWn9ze0nZwr9veXQwZL2ZbeZiucl7bjE5vJnVK6AhgdL0ypZLztb7SSggNe8Wx2_Vdbg4rsxwbGfb-v89s3Buxn4Cf8AcnmHkK4zsDMvQhCOCvn7lNEWkhzhclaL5wrzd4J1MPacOxpNGDfkwo7XQZjnCBgNAz99f7u7JCBWAzixhcpj7blcJb4Hcvuy905Iw6t2DhV-xBzsSmstmG6k4haDLzNoPziDz2uQDMx4Q-dGn9xiz6WN6g",
    icon: FiTool,
  },
];

export default function Industry() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#f4f8f6] py-6 sm:py-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#008f82]/[0.035] blur-3xl" />

        <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#008f82]/[0.04] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#162321 1px, transparent 1px), linear-gradient(90deg, #162321 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 xl:px-12">

        {/* ================= HEADER ================= */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#093372]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#093372]">
                Application Sectors
              </span>
            </div>

            <h2 className="max-w-4xl text-[38px] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#13211f] sm:text-[50px] lg:text-[64px]">
              One Technology.
              <span className="block text-[#093372]">
                Many Industries.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-lg text-[13px] leading-6 text-[#687874] sm:text-[14px] sm:leading-7">
              Texmo moulding machinery supports demanding applications across
              automotive, packaging, medical, electronics and industrial
              manufacturing.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008f82] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#093372]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#093372]">
                Engineering for diverse applications
              </span>
            </div>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.number}
                className="group relative h-[380px] overflow-hidden rounded-[22px] bg-[#12201e] shadow-[0_15px_45px_rgba(19,33,31,0.09)]"
              >
                {/* Image */}
                <img
                  src={industry.image}
                  alt={industry.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.72] transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#07110f]/50 via-transparent to-[#07110f]/95" />

                {/* Teal hover overlay */}
                <div className="absolute inset-0 bg-[#008f82]/0 transition-all duration-500 group-hover:bg-[#008f82]/10" />

                {/* Border */}
                <div className="absolute inset-0 rounded-[22px] border border-white/10 transition-colors duration-500 group-hover:border-[#f5a14a]/40" />

                {/* Top */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f5a14a]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/80">
                      {industry.number} / {industry.category}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#f5a14a] group-hover:bg-[#f5a14a] group-hover:text-[#13211f]">
                    <Icon className="text-[15px]" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-[2px] w-7 bg-[#f5a14a] transition-all duration-500 group-hover:w-14" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#f5a14a] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Application
                    </span>
                  </div>

                  <h3 className="max-w-[290px] text-[21px] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-3 max-w-[290px] text-[11px] leading-5 text-white/60 sm:text-xs">
                    {industry.description}
                  </p>

                  <div className="mt-5 flex translate-y-3 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#f5a14a] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Explore application
                    <FiArrowRight className="text-[14px] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            );
          })}

          {/* ================= CUSTOM CARD ================= */}
          <article className="group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#093372] p-6 shadow-[0_18px_45px_rgba(0,143,130,0.16)] sm:p-7">

            {/* Decorative ring */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full border-[55px] border-white/[0.055] transition-transform duration-700 group-hover:scale-110" />

            <div className="pointer-events-none absolute -bottom-28 -left-28 h-[280px] w-[280px] rounded-full border-[50px] border-white/[0.045]" />

            {/* Grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            {/* Top */}
            <div className="relative">

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f5a14a]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/75">
                    08 / CUSTOM WORK
                  </span>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm">
                  <FiSettingsIcon />
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                  Bespoke Engineering
                </p>

                <h3 className="max-w-[280px] text-[29px] font-extrabold leading-[1] tracking-[-0.04em] text-white">
                  Tailored
                  <span className="block text-[#f5a14a]">
                    SPM Cells.
                  </span>
                </h3>

                <p className="mt-4 max-w-[290px] text-[12px] leading-6 text-white/70">
                  Multi-material rotary tables, side-entry in-mold labeling
                  (IML), and automated 6-axis robotic extraction.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact-quote-section"
              className="group/link relative z-10 inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.13em] text-white"
            >
              <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover/link:border-white">
                Consult Tooling Engineers
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/link:bg-[#f5a14a] group-hover/link:text-[#13211f]">
                <FiArrowRight className="text-[13px] transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </span>
            </a>
          </article>
        </div>

        {/* ================= BOTTOM STRIP ================= */}
        <div className="mt-10 flex flex-col gap-5 border-t border-[#d8e2de] pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex max-w-2xl items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#093372]" />

            <p className="text-[11px] leading-5 text-[#71807c] sm:text-xs">
              From automotive components to medical applications, our
              technology is engineered around your production requirements.
            </p>
          </div>

          <a
            href="#contact-quote-section"
            className="group inline-flex shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#008f82]"
          >
            Discuss Your Application

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#008f82]/20 transition-all duration-300 group-hover:bg-[#008f82] group-hover:text-white">
              <FiArrowRight className="text-[13px] transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FiSettingsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.7-1.7.1-.1A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.5-1H6.7v-2.4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  );
}

