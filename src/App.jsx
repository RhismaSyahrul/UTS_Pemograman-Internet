import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/footer'
import './components/component.css'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
