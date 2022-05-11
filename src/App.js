import React, {useState} from "react"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Socials from "./components/socials/Socials"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
      setShowMobileMenu(!showMobileMenu)
  }

  const closeMobileMenu = () => {
      setShowMobileMenu(false)
  }
  return (
    <>
      <Router>
        <Header
          toggleMobileMenu={toggleMobileMenu}
          showMobileMenu={showMobileMenu}
          closeMobileMenu={closeMobileMenu}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Socials />
      </Router>
    </>
  )
}

export default App;