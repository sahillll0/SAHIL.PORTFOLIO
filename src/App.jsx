import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Cursor from './components/cursor/Cursor'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import Skills from './pages/Skills'
import Bio from './pages/Bio'

import SmoothScroll from './components/common/SmoothScroll'

const App = () => {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </Router>
  )
}

export default App