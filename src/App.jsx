import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar' 
import Home from './webpages/Home'
import Research from './webpages/Research'
import Teaching from './webpages/Teaching'
import CV from './webpages/CV'
import Blog from './webpages/Blog'
import Footer_new from './components/Footer_new'
import './App.css'
//import { useState } from 'react'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer_new />
    </>
  )
}

export default App
