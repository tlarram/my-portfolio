import React from 'react'
import {Container, Button, Nav,Navbar as NavbarBs} from "react-bootstrap"
import logo from '../images/logo.png'
const NavBar = () => {
  return (
    <div>
    <img src={logo} alt="Logo" height="200"/>
    <ul className="nav">
                <li><a className="no" href="/"><button className="btn">Home</button></a></li>
                <li><a className="no"href="#about"><button className="btn">About</button></a></li> 
                <li><a className="no"href="#portfolio"><button className="btn">Portfolio</button></a></li>
                <li><a className="no"href="#contact"><button className="btn">Contact Me</button></a></li> 
                <li><a className="no"href="/resume"><button className="btn">Resume</button></a></li> 
    </ul>
    </div>
  )
}

export default NavBar