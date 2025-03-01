import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import { SignupModal } from './components/SignupModal'

function App() {
  return (
    <>
    <Header />
    <Hero />
    <AboutSection />
    <WhyChooseUs />
    <HowItWorks />
    <Footer />
    <SignupModal/>
    </>
  );
}

export default App;



// function App() {
//   return (
// <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/about" element= {<AboutSection />} />
//         <Route path="/why-choose-us" element= {<WhyChooseUs />} />
//         <Route path="/how-it-works" element= {<HowItWorks />} />
//       </Routes>
//       <Footer />
// </>
//   );
// }

// export default App;



