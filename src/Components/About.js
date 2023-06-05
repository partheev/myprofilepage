import { Avatar, Box, Paper, Typography } from '@mui/material';
import React from 'react';
import styles from './about.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { workTimelineData } from '../data/workTimelineData';
import { TimelineOppositeContent } from '@mui/lab';
import { ABOUT_ME_DESCRIPTION, CARD_DETAILS } from '../data/infoData';
const About = () => {
    const Cards = () => {
        const Card = ({ heading, message, image }) => {
            return (
                <div className={styles.card}>
                    <img src={image} alt={heading} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <h2>{heading}</h2>
                        <p>{message}</p>
                    </Box>
                </div>
            );
        };
        return (
            <div>
                {CARD_DETAILS.map((e) => {
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
                    );
                })}
            </div>
        );
    };
    const WorkExperienceTimeline = () => {
        const CompanyContent = ({ companyName, role, logo }) => {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        width: '10rem',
                    }}
                >
                    <Avatar src={logo} sx={{ marginX: '1rem' }} />
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}
                        >
                            {companyName}
                        </Typography>
                        <Typography
                            sx={{ fontSize: '0.8rem' }}
                            color={'GrayText'}
                        >
                            {role}
                        </Typography>
                    </Box>
                </Box>
            );
        };
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        columnGap: '2rem',
                        marginTop: '2rem',
                    }}
                >
                    <img
                        alt='work experience'
                        width={'50rem'}
                        src={
                            process.env.PUBLIC_URL + '/images/card/workexp.png'
                        }
                    />
                    <div className={styles.title}>
                        <div data-aos-delay='300' data-aos='fade-left'>
                            Work Experience
                        </div>
                        <div
                            data-aos='fade-left'
                            className={styles.bottomborder}
                        ></div>
                    </div>
                </Box>
                <Timeline sx={{ width: '100%' }}>
                    {workTimelineData.map((work, index) => {
                        return (
                            <TimelineItem
                                key={index}
                                sx={{ cursor: 'pointer' }}
                                onClick={() => window.open(work.link, '_blank')}
                            >
                                <TimelineOppositeContent
                                    color='text.secondary'
                                    sx={{ width: '5rem' }}
                                >
                                    {work.dates}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color='primary' />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <CompanyContent
                                        logo={work.logo}
                                        companyName={work.companyName}
                                        role={work.role}
                                    />
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            </>
        );
    };
    const AboutDetails = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}
            >
                <div className={styles.aboutdetails}>
                    <div className={styles.title}>
                        <span
                            className={styles.titlebig}
                            data-aos='fade-left'
                            data-aos-delay='300'
                        >
                            About me
                        </span>
                    </div>
                    <div className={styles.aboutpara}>
                        <p>{ABOUT_ME_DESCRIPTION} </p>
                    </div>
                    <a
                        href='./cv.pdf'
                        target='_blank'
                        download='cv.pdf'
                        className={styles.cvbtn}
                    >
                        <button>DOWNLOAD RESUME</button>
                    </a>
                </div>
                <WorkExperienceTimeline />
            </Box>
        );
    };
    const AboutLayout = () => {
        return (
            <div className={styles.layout}>
                <Cards />
                <AboutDetails />
            </div>
        );
    };
    return (
        <section id='about' className={styles.about}>
            <div className='container'>
                <span className={styles.titlesm} data-aos='fade-left'>
                    LET ME INTRODUCE MYSELF
                </span>
                <AboutLayout />
            </div>
        </section>
    );
};

export default About;
