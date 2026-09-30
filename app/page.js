import AboutSection from "@/compoents/home/About";
import Cta from "@/compoents/home/Cta";
import Hero from "@/compoents/home/Hero";
import Industry from "@/compoents/home/Industry";
import MachineryCTA from "@/compoents/home/MachineryCTA";
import ProductSlider from "@/compoents/home/ProductSlider";
import Testimonials from "@/compoents/home/Testimonials";
import Whychoose from "@/compoents/home/Whychoose";
import Work from "@/compoents/home/Work";
import Footer from "@/compoents/layout/Footer";
import Navbar from "@/compoents/layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Hero/>
      <AboutSection/>
      <Work/>
      <ProductSlider/>
      <Whychoose/>
      <MachineryCTA/>
      <Industry/>
      <Testimonials/>
      <Cta/>
   
    </>
  );
}
