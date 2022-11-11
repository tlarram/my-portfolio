import React from 'react'
import {Container, Button, Nav,Navbar as NavbarBs} from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import {useRef } from 'react'

const NavBar = () => {
    const about = useRef(null);
    const portfolio = useRef(null);
    const contact = useRef(null);
  
    const scrollToSelection = (elementRef) => {
      window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior: 'smooth'
      })
  
    }
  return (
    <ul sticky="top" className="bg-black shadow-lg mb-3 text-white text-decoration-none">
        <Container>
                <li className=" text-white text-decoration-none "><a href="/">Home</a></li>
                <li className=" text-white text-decoration-none "><a href="#about">About</a></li> 
                <li className=" text-white text-decoration-none "><a href="#portfolio">Portfolio</a></li>
                <li className=" text-white text-decoration-none "><a href="#contact">Contact</a></li> 
                <li className=" text-white text-decoration-none "><a href="/resume">Resume</a></li> 
        </Container>
    </ul>
  )
}

export default NavBar