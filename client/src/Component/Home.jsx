import React from 'react'
import styles from './Home.module.css'
import Profilepic from '../images/profilepic.png'
export const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.homeText}>
        <h1>Hello there!</h1>
        <p>My name is Timothy Larramore</p>
        <p>Full Stack Web Developer</p>
        <img className ={styles.portraitimg} src={Profilepic} alt="self portrait" height="250"/>
        <p className={styles.noMargin}>Thanks for taking the time to learn more about me!</p>
      </div>
    </div>
  )
  }

export default Home
