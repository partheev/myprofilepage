import React from 'react'
import styles from './skills.module.css'
import { skillsData } from '../skillsData'
// import image from '../images/skillsData/javascript.png'
const Skills = () => {
    let key = 1
    return (
        <div>
            <nav className={styles.nav}>
                <div className='container'>Skills</div>
            </nav>
            <div className={styles.skill_list_bg}>
                <div className='container'>
                    <div className={styles.skill_list}>
                        {skillsData.map((ele) => {
                            key = key + 1
                            return (
                                <div
                                    data-aos='flip-down'
                                    className={styles.skill_container}
                                    key={key}
                                >
                                    <div className={styles.skilltitle}>
                                        {ele.title}
                                    </div>
                                    <hr />
                                    <div className={styles.skilldetail}>
                                        {ele.techStack.map((tech) => {
                                            key = key + 1
                                            return (
                                                <div
                                                    className={styles.tech}
                                                    key={key}
                                                >
                                                    <img
                                                        className={
                                                            styles.tech_img
                                                        }
                                                        src={tech.image}
                                                        alt={tech.title}
                                                    />
                                                    <div
                                                        className={
                                                            styles.tech_title
                                                        }
                                                    >
                                                        {tech.title}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
