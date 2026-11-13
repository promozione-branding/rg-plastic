import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

export default function StickyButton() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 z-[60] flex flex-col gap-3 sm:bottom-7 sm:right-7"
    >
      <a
        href="https://wa.me/919891468647"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex min-h-14 items-center gap-3 rounded-full border border-white/20 bg-[#18b85a] py-2 pl-2 pr-5 text-white shadow-[0_12px_35px_rgba(24,184,90,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#129e4c] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#18b85a]/40"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <FaWhatsapp className="text-[22px]" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-bold">WhatsApp</span>
          <span className="mt-0.5 text-[10px] font-medium text-white/80">
            Chat with us
          </span>
        </span>
      </a>

      <a
        href="tel:+919891468647"
        aria-label="Call us at 98914 68647"
        className="group flex min-h-14 items-center gap-3 rounded-full border border-white/20 bg-[#0d2461] py-2 pl-2 pr-5 text-white shadow-[0_12px_35px_rgba(13,36,97,0.3)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#16408f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0d2461]/35"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <FiPhoneCall className="text-[20px] transition-transform duration-300 group-hover:rotate-12" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-sm font-bold">Call us</span>
          <span className="mt-0.5 text-[10px] font-medium text-white/80">
            98914 68647
          </span>
        </span>
      </a>
    </aside>
  );
}