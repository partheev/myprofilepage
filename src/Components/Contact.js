import React from 'react'
import styles from './contact.module.css'
const Contact = () => {
  const ContactForm = () => {
    return (
      <div data-aos='zoom-in-up' className={styles.formlayout}>
        <input placeholder='Name' className={styles.form}></input>
        <input placeholder='Email' className={styles.form}></input>
        <textarea
          rows='10'
          placeholder='Message'
          className={styles.form}
        ></textarea>
        <button>SUBMIT</button>
      </div>
    )
  }
  return (
    <div id='contact' className={styles.sectionht}>
      <svg
        preserveAspectRatio='none'
        viewBox='0 0 100 102'
        height='75'
        width='100%'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        className={styles.shape}
      >
        <path d='M0 0 L50 100 L100 0 Z' fill='white' stroke='white'></path>
      </svg>
      <div className={styles.layout}>
        <div className={styles.title}>
          <div data-aos='fade-left'>CONTACT</div>
          <div
            data-aos='fade-left'
            data-aos-delay='300'
            className={styles.bottomborder}
          ></div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact
