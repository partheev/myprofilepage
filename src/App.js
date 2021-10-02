import About from './Components/About'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  })
  return (
    <>
      <Intro />
      <Navbar />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
