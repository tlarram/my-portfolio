import React from 'react'
import TechWeb from "../images/techskillsweb.png"
import styles from "./About.module.css"
const About = () => {
    
  return (
    <div className={styles.background} id="about">
        <h1 className={styles.head}>Get to know me!</h1>
        <div className={styles.dflex}>
          <span>Hello! My name is Timothy Larramore, and I am a full stack web developer.  I have a background in education as a teacher and assistant principal.  
            I decided to take those soft skills and move to a new job field.  I have a passion for developing web pages and spending time solving real-world problems. This web page is an example of my skills as well as a
            way to get to know a little about me.  I want to create web projects as a full stack developer.  When I am not coding, I am a simple man.  I enjoy playing video games, reading books, sports, all things Clemson, and spending time with my family. </span>
          <div>
            <h3 className={styles.head}>My Skills</h3>
            <img  src={TechWeb} alt="TechWeeb" height="300"/>
          </div>
        </div>
    </div>
  )
}

export default About