import AboutSection from "@/compoents/home/About";
import Cta from "@/compoents/home/Cta";
import Hero from "@/compoents/home/Hero";
import Industry from "@/compoents/home/Industry";
import Whychoose from "@/compoents/home/Whychoose";
import Footer from "@/compoents/layout/Footer";
import Navbar from "@/compoents/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <Whychoose/>
      <Industry/>
      <Cta/>
      <Footer/>
    </>
  );
}
