import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Project from '../Pages/Project'
import Resume from '../Pages/Resume'

const Routing = () => {
  return (
    <div>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        
     </Routes>


     <Footer/>


    </div>
  )
}

export default Routing