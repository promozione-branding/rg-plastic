"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Settings2 } from "lucide-react";

const faqs = [
  {
    question: "What types of plastic machinery do you provide?",
    answer:
      "RG Plastic provides a range of plastic processing and recycling machinery, including plastic granules making machines, scrap grinder machines, extrusion machinery and other industrial plastic processing solutions.",
  },
  {
    question: "Can you help me choose the right machine?",
    answer:
      "Yes. Our team can understand your material, production capacity and application requirements and help you identify a suitable machinery solution.",
  },
  {
    question: "Do you provide machinery for plastic recycling?",
    answer:
      "Yes. We provide machinery designed for plastic recycling and processing applications, helping manufacturers efficiently process plastic waste into reusable material.",
  },
  {
    question: "What factors should I consider before buying a machine?",
    answer:
      "Production capacity, material type, required output, machine configuration, available space, power requirements and long-term operating requirements are important factors to consider.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes. RG Plastic focuses on customer support and can assist with machinery-related technical requirements, operation guidance and service-related enquiries.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact RG Plastic through the enquiry form, call our team directly or use the Get a Quote button to share your machinery requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-6 sm:py-13">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            MAIN GRID
        ====================================================== */}
        <div className="grid gap-7 lg:grid-cols-[1fr_1fr]">

          {/* =================================================
              FAQ ACCORDION
          ================================================= */}
          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#1261A0]/20 bg-[#F4F9FD] shadow-[0_8px_30px_rgba(7,91,150,0.06)]"
                      : "border-gray-100 bg-white hover:border-[#1261A0]/15 hover:shadow-sm"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <span className="flex items-center gap-3">

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                          isOpen
                            ? "bg-[#1261A0] text-white"
                            : "bg-[#EAF4FB] text-[#1261A0]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-semibold leading-5 text-[#18232C] sm:text-[15px]">
                        {faq.question}
                      </span>

                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-[#1261A0] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>

                  </button>


                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="min-h-0 overflow-hidden">

                      <div className="border-t border-[#1261A0]/10 px-5 pb-5 pt-4 pl-[60px] sm:px-6 sm:pl-[68px]">

                        <p className="max-w-xl text-sm leading-6 text-gray-500">
                          {faq.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          {/* =================================================
              RIGHT INFORMATION CARD
          ================================================= */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#F4F8FB] p-5 sm:p-6">

            {/* Heading */}
            <div className="px-1">

              <div className="flex items-center gap-2">

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F0FA]">
                  <Settings2
                    size={14}
                    className="text-[#1261A0]"
                  />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1261A0]">
                  FAQs
                </span>

              </div>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.08] tracking-tight text-[#111C24] sm:text-4xl">
                Answers to Your Most
                <br className="hidden sm:block" />
                Common Machinery Questions
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
                Find answers to common questions about our plastic processing
                machinery, applications, selection and customer support.
              </p>

            </div>


            {/* IMAGE */}
            <div className="relative mt-7 overflow-hidden rounded-2xl">

              <div className="relative aspect-[1.7/1]">

                <Image
                  src="https://images.unsplash.com/photo-1655294706775-90c348b0ecc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdWRsaW5nJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A2A]/40 via-transparent to-transparent" />

              </div>


              {/* Floating Stat */}
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_35px_rgba(0,0,0,0.15)] sm:bottom-5 sm:left-5">

                <div className="text-3xl font-bold tracking-tight text-[#1261A0]">
                  100+
                </div>

                <div className="mt-0.5 text-xs font-medium text-gray-600">
                  Customers Served
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}