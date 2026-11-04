import AboutSection from "@/compoents/home/About";
import Cta from "@/compoents/home/Cta";
import FAQSection from "@/compoents/home/FAQSection";
import Hero from "@/compoents/home/Hero";
import Industry from "@/compoents/home/Industry";
import MachineryCTA from "@/compoents/home/MachineryCTA";
import ProductSlider from "@/compoents/home/ProductSlider";
import Testimonials from "@/compoents/home/Testimonials";
// import Why2 from "@/compoents/home/Why2";
import Whychoose from "@/compoents/home/Whychoose";
import Work from "@/compoents/home/Work";
import HomeReveal from "@/compoents/home/HomeReveal";
// import Footer from "@/compoents/layout/Footer";
// import Navbar from "@/compoents/layout/Navbar";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <HomeReveal><Hero/></HomeReveal>
      <HomeReveal><AboutSection/></HomeReveal>
      <HomeReveal><ProductSlider/></HomeReveal>
      <HomeReveal><Work/></HomeReveal>
      <HomeReveal><Whychoose/></HomeReveal>
      {/* <Why2/> */}
      <HomeReveal><Industry/></HomeReveal>
      <HomeReveal><Testimonials/></HomeReveal>
      <HomeReveal><MachineryCTA/></HomeReveal>
      <HomeReveal><FAQSection/></HomeReveal>
      <HomeReveal><Cta/></HomeReveal>
   
    </>
  );
}
