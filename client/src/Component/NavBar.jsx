import React from 'react'
import styles from "./NavBar.module.css"
import logo from '../images/logo.png'
import {Link} from 'react-scroll'
const NavBar = () => {
  return (
    <div className={styles.dflex}>
    <img src={logo} alt="Logo" height="50"/>
    <ul className={styles.nav}>
                <li><a href="/"><button className={styles.btn}>Home</button></a></li>
                <li><Link activeClass={styles.active} to="about" spy={true} smooth={true} duration={500}><button className={styles.btn}>About</button></Link></li> 
                <li><Link activeClass={styles.active} to="portfolio" spy={true} smooth={true} duration={500}><button className={styles.btn}>Portfolio</button></Link></li>
                <li><Link activeClass={styles.active} to="contact" spy={true} smooth={true} duration={500}><button className={styles.btn}>Contact Me</button></Link></li> 
                <li><Link activeClass={styles.active} to="resume" spy={true} smooth={true} duration={500}><button className={styles.btn}>Resume</button></Link></li> 
    </ul>
    </div>
  )
}

export default NavBar