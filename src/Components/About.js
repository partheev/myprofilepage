import { Paper } from '@mui/material'
import React from 'react'
import styles from './about.module.css'
const About = () => {
    const Cards = () => {
        const cardDetails = [
            {
                title: 'Education',
                image: require('../images/card/education.png').default,
                message:
                    'Begin your self-introduction with an overview of your career, starting with the present. For example, you might say, ',
            },
            {
                title: 'My Expertise',
                image: require('../images/card/experience.png').default,
                message:
                    'Begin your self-introduction with an overview of your career, starting with the present. For example, you might say, ',
            },
        ]
        const Card = ({ heading, message, image }) => {
            return (
                <div className={styles.card}>
                    <img src={image} />
                    <div>
                        <h2>{heading}</h2>
                        <p>{message}</p>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {cardDetails.map((e) => {
                    return (
                        <div data-aos='flip-down'>
                            <Paper elevation={3}>
                                <Card
                                    heading={e.title}
                                    image={e.image}
                                    message={e.message}
                                />
                            </Paper>
                        </div>
                    )
                })}
            </div>
        )
    }
    const AboutDetails = () => {
        return (
            <div className={styles.aboutdetails}>
                <div className={styles.title}>
                    <span className={styles.titlesm} data-aos='fade-left'>
                        LET ME INTRODUCE MYSELF
                    </span>
                    <span
                        className={styles.titlebig}
                        data-aos='fade-left'
                        data-aos-delay='300'
                    >
                        About me
                    </span>
                </div>
                <div className={styles.aboutpara}>
                    <p>
                        Begin your self-introduction with an overview of your
                        career, starting with the present. For example, you
                        might say, “I'm an experienced software engineer” to
                        clarify your current level and role. Continue the
                        overview with a brief mention of how long you've worked
                        in the field and what kind of work you do.
                    </p>
                </div>
                <a
                    href='./cv.pdf'
                    target='_blank'
                    download='cv.pdf'
                    className={styles.cvbtn}
                >
                    <button>DOWNLOAD CV</button>
                </a>
            </div>
        )
    }
    const AboutLayout = () => {
        return (
            <div className={styles.layout}>
                <Cards />
                <AboutDetails />
            </div>
        )
    }
    return (
        <section id='about' className={styles.about}>
            <div className='container'>
                <AboutLayout />
            </div>
        </section>
    )
}

export default About
