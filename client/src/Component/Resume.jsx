import React from 'react'
import styles from './Resume.module.css'
const Resume = (props) => {
  return (
    <div className={styles.background} id="resume" ref={props.resume}>Resume
    </div>
  )
}

export default Resume