import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='container'>
        <div className={styles.title}>
          <span data-aos='fade-left'>ABOUT ME</span>
          <div data-aos='fade-left' className={styles.bottomborder}></div>
        </div>
      </div>
    </section>
  )
}

export default About
