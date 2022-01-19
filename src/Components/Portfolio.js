import React from 'react'
import MyProjects from './MyProjects'
import styles from './portfolio.module.css'
import Skills from './Skills'
const Portfolio = () => {
    return (
        <div id='portfolio' className={styles.bg}>
            <MyProjects />
            <Skills />
        </div>
    )
}

export default Portfolio
