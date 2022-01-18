import { Paper } from '@mui/material'
import React from 'react'
import styles from './about.module.css'
const About = () => {
    const Cards = () => {
        const cardDetails = [
            {
                title: 'My Expertise',
                image: require('../images/card/experience.png').default,
                message:
                    'I can build frontend and backend application for large scale enterprises. Design and Performance of the app are my first priorities.',
            },
            {
                title: 'Education',
                image: require('../images/card/education.png').default,
                message:
                    'I am currently pursuing my B.Tech 2nd in Computer Science and Technology from G.Pulla Reddy Enginnering College.',
            },
        ]
        const Card = ({ heading, message, image }) => {
            return (
                <div className={styles.card}>
                    <img src={image} alt={heading} />
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
                        <div key={e.title} data-aos='flip-down'>
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
                        I'm enthusiastic software developer. My passion towards
                        computer science made me full stack web developer.
                        Tasting latest technologies and improving knowledge on
                        various domains in IT are my hobbies.{' '}
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
