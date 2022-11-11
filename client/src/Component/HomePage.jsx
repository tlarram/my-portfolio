import React from 'react'
import Home  from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import {useRef } from 'react'
const HomePage = () => {
  const about = useRef(null);
    const portfolio = useRef(null);
    const contact = useRef(null);
  
    const scrollToSelection = (elementRef) => {
      window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior: 'smooth'
      })
  
    };
  return (
    <>
    <Home/>
    <About  about={about} scrollToSelection={scrollToSelection}/>
    <Portfolio  porfolio={portfolio} scrollToSelection={scrollToSelection}/>
    <Contact contact={contact} scrollToSelection={scrollToSelection}/>
    </>
  )
}

export default HomePage