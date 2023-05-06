import React from 'react'
import TechWeb from "../images/techskillsweb.png"
const Portfolio = (props) => {
  return (
    <>
    <div id="portfolio" ref={props.portfolio}>Portfolio
    <img src={TechWeb} alt="TechWeeb" height="400"/>
    </div>
    
    </>
  )
}

export default Portfolio