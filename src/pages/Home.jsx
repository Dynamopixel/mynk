import React from 'react'
import Header from '../component/header/Header'
import HeroSection from '../component/herosection/HeroSection'
import FeatureSection from '../component/FeatureSection/FeatureSection'
import BatterySection from '../component/batterySection/BatterySection'
import SwitchSection from '../component/SwitchingSection/SwitchSection'
import LifestyleSection from '../component/liftstyleSection/LifestyleSection'
import RunningManSection from '../component/RunningSection/RunningManSection'
import WellnessSection from '../component/wellnessSection/WellnessSection'
import HealthTrackingSection from '../component/healthtrackingsection/HealthTrackingSection'
import Footer from '../component/footer/Footer'
import FAQSection from '../component/faqsection/FaqSection'
import MetricsHeroSection from '../component/MatricHeroSection/MetricsHeroSection'
import TechComparisonTable from '../component/TableSection/TechComparisonTable'
import AccordianSection from '../component/AccordianSection/AccordianSection'
import TestimonialSection from '../component/TestimonialSection/TestimonialSection'


const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <FeatureSection/>
        <BatterySection/>
        <SwitchSection/>
        <LifestyleSection/>
        <RunningManSection/>
        <WellnessSection/>
        <HealthTrackingSection/>
        <TestimonialSection/>
        <MetricsHeroSection/>
        <TechComparisonTable/>
        <FAQSection/>
        <AccordianSection/>
        <Footer/>
    </div>
  )
}

export default Home