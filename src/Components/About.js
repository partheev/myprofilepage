import React from 'react'
import styles from './about.module.css'
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='container'>
        <div className={styles.title}>
          <span data-aos='fade-right'>ABOUT ME</span>
          <div
            data-aos='fade-right'
            data-aos-delay='300'
            className={styles.bottomborder}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default About
