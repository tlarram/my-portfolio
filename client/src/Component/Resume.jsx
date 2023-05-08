import React from 'react'
import styles from './Resume.module.css'
const Resume = (props) => {
  return (
    <div className={styles.background} id="resume" ref={props.resume}><h1 className={styles.header}>Resume</h1>
    <div>
     <article className={styles.header}>
            <a  href="https://docs.google.com/document/d/1INhwPKWwlS8PZmhHXoyd-D0Wc17tGhpafQ7XUy1iMHs/edit?usp=share_link" rel="noopener">
                                    <button className={styles.btn}>View</button>
                                </a> or <a href="https://docs.google.com/document/d/1INhwPKWwlS8PZmhHXoyd-D0Wc17tGhpafQ7XUy1iMHs/copy">
                                    <button className={styles.btn}>download</button>
                                </a> my resume.
    </article>
                        <iframe src="https://docs.google.com/document/d/1INhwPKWwlS8PZmhHXoyd-D0Wc17tGhpafQ7XUy1iMHs/preview" className={styles.resume} allow="autoplay" title="Timothy's Resume 2023"></iframe>
    </div>
    </div>
  )
}

export default Resume