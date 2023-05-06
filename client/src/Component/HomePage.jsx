import React from 'react'
import Home  from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import {useRef } from 'react'
const HomePage = () => {

  return (
    <>
    <Home/>
    <About />
    <Portfolio  />
    <Contact />
    </>
  )
}

export default HomePage