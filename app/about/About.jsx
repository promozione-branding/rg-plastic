import AboutIntro from '@/compoents/about/AboutIntro'
import AboutStory from '@/compoents/about/AboutStory'
import CompanyStats from '@/compoents/about/CompanyStats'
import HowWeWork from '@/compoents/about/HowWeWork'
import HomeReveal from '@/compoents/home/HomeReveal'
import React from 'react'

export default function About() {
  return (
    <>
      <HomeReveal><AboutIntro /></HomeReveal>
      <HomeReveal delay={0.08}><CompanyStats /></HomeReveal>
      <HomeReveal delay={0.08}><AboutStory /></HomeReveal>
      <HomeReveal delay={0.08}><HowWeWork /></HomeReveal>
    </>
  )
}
