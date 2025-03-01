import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <AboutSection />
    <WhyChooseUs />
    <HowItWorks />
    </>
  );
}

export default App;

