import React from 'react'
import styles from './intro.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import profilePic from '../images/partheev.jpg'
const Intro = (props) => {
    return (
        <div id='home'>
            <canvas id='canvas'></canvas>
            <div className={styles.title}>
                <div className={styles.textbox}>
                    <div className={styles.profilepic}>
                        <img
                            src={require('../images/partheev.jpg').default}
                            alt='profile pic'
                        />
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