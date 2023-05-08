import React from 'react'
import styles from './Contact.module.css'
import Email from "../images/email.png"
import LinkedIn from"../images/linkedin.png"
import GitHub from "../images/github.png"
const Contact = () => {
  return (
    <>
    <div className={styles.background} id="contact"><h1 className={styles.header}>Contact Me</h1>
        <div className={styles.contactActions}>
          <ul className={styles.contactList}>
            <li><a href="https://www.linkedin.com/in/tlarram/" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={LinkedIn} alt="LinkedIn Icon"/></a></li>
            <li><a href="https://github.com/tlarram" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={GitHub} alt="GitHub Icon"/></a></li>
            <li><a href="mailto:tlarramore@gmail.com?subject=Porfolio%20Contact" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={Email} alt="Email button"/></a></li>
          </ul>
        </div>
        </div>
        </>
    )
}

export default Contact