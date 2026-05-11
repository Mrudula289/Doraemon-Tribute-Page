import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Aboutus from './component/Aboutus'
import Maincharacters from './component/Maincharacters'
import GadgetSection from './component/GadgetSection'
import Gallery from './component/Gallery'
import Timeline from './component/Timeline'
import FunFacts from './component/FunFacts'
import Newsletter from './component/Newsletter'
import Footer from './component/footer'
import BackToTop from './component/BackToTop'

function App() {
  
  return (
    <>
      <Navbar />
      <Header />
      <Aboutus />
      <Maincharacters />
      <GadgetSection />
      <Gallery />
      <Timeline />
      <FunFacts />
      <Newsletter />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App