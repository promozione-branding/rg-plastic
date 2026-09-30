import AboutIntro from '@/compoents/about/AboutIntro'
import AboutStory from '@/compoents/about/AboutStory'
import CompanyStats from '@/compoents/about/CompanyStats'
import HowWeWork from '@/compoents/about/HowWeWork'
import React from 'react'

export default function About() {
  return (
    <>
    <AboutIntro/>
    <CompanyStats/>
    <AboutStory/>
    <HowWeWork/>
    </>
  )
}
