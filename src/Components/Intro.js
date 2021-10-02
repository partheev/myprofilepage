import React from 'react'
import styles from './intro.module.css'
// import image from 'images/partheev.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
const Intro = (props) => {
  return (
    <div>
      <canvas id='canvas'></canvas>
      <div className={styles.title}>
        <div className={styles.textbox}>
          <div className={styles.profilepic}>
            <img src='images/partheev.jpg' alt='profile pic' />
          </div>
          <div className={styles.name}>
            Hello, I'm <span>Partheev</span>.
          </div>
          <div className={styles.name}>Full stack web developer.</div>
          <a href='#about'>
            <button className={styles.workbtn}>
              View My Work
              <span className={styles.arrow}>
                <ArrowForwardIosIcon />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro
