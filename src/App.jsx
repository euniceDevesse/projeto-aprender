import React from "react"
import './App.css'
import Header from "./components/header/header"
import Banner from "./components/banner/banner"
import Cursos from "./components/cursos/cursos"
import Testimonial from "./components/testimonials/testimonial"
import Line from "./components/lines/line"
import Title from "./components/title/title"
import Pricing from "./components/pricing/pricing"
import Footer from "./components/footer/footer"



function App() {
  return (
      <div>
        <Header />
        <Banner />
        <Cursos />
        <Testimonial />
        <Line />
        <Title />
        <Pricing />
        <Footer />
      </div>

  )
}

export default App
