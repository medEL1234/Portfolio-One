import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Oea from './components/Oea/Oea'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Oea/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
    </>
  )
}

export default App