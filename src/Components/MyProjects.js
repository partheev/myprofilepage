import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import styles from './portfolio.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import { projectData } from '../data/projectsData'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MyProjects = () => {
    const [project, setproject] = useState({
        open: false,
        projectDetails: null,
    })
    const handleClose = () => {
        setproject({
            ...project,
            open: !project.open,
        })
    }
    const openProjectHandler = (projectidx) => {
        const projectDetails = projectData[projectidx]
        setproject({
            projectDetails,
            open: true,
        })
    }
    const ProjectDialog = () => {
        return (
            <Dialog
                open={project.open}
                maxWidth='md'
                fullWidth='true'
                onClose={handleClose}
                scroll='paper'
            >
                <div className={styles.projectlayout}>
                    <div className={styles.titlecontainer}>
                        <h2>{project.projectDetails.name}</h2>
                        <div onClick={handleClose}>Close</div>
                    </div>
                    <hr></hr>

                    <div className={styles.procontent}>
                        <div className={styles.githubbtn}>
                            <div
                                onClick={() =>
                                    window.open(
                                        project.projectDetails.githubLink
                                    )
                                }
                                className={styles.btnflex}
                            >
                                <GitHubIcon
                                    sx={{
                                        marginRight: '1rem',
                                        fontSize: '2rem',
                                        color: 'white',
                                    }}
                                />
                                <span>View Project</span>
                            </div>
                        </div>
                        <h4>Description:</h4>
                        <p>{project.projectDetails.description}</p>

                        <h4>Tools Used:</h4>
                        <div className={styles.techstack}>
                            {project.projectDetails.techstack.map((e, idx) => {
                                return <li key={idx}>{e}</li>
                            })}
                        </div>
                        <h4>Features:</h4>
                        <div>
                            <ol>
                                {project.projectDetails.features.map(
                                    (e, idx) => {
                                        return <li key={idx}>{e}</li>
                                    }
                                )}
                            </ol>
                        </div>
                        {project.projectDetails.images.length !== 0 && (
                            <>
                                <h3>Images</h3>
                                <div>
                                    {project.projectDetails.images.map(
                                        (e, idx) => {
                                            return (
                                                <img
                                                    className={
                                                        styles.projectimg
                                                    }
                                                    key={idx}
                                                    alt={
                                                        project.projectDetails
                                                            .title
                                                    }
                                                    src={e}
                                                />
                                            )
                                        }
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Dialog>
        )
    }
    const Project = ({ projectIdx, projectDetails }) => {
        const [isHover, setIsHover] = useState(false)

        return (
            <div
                style={
                    !isHover
                        ? {
                              backgroundSize: 'cover',
                              backgroundImage: `url(${
                                  process.env.PUBLIC_URL +
                                  projectDetails.outlookImg
                              })`,
                          }
                        : {}
                }
                onClick={() => setIsHover(true)}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className={`${styles.project} ${
                    isHover ? styles.projecthover : ' '
                }`}
            >
                {isHover && (
                    <>
                        <span className={styles.projecthead}>
                            {projectDetails.name}
                        </span>
                        <p className={styles.description}>
                            {projectDetails.description}
                        </p>
                        <div
                            onClick={() => openProjectHandler(projectIdx)}
                            className={styles.seebtn}
                        >
                            <span>See Details</span>
                            <ArrowForwardIosIcon sx={{ color: 'white' }} />
                        </div>
                    </>
                )}
            </div>
        )
    }
    return (
        <div className={`${styles.myprojectcon} container`}>
            <div className={styles.title}>
                <div data-aos-delay='300' data-aos='fade-left'>
                    My Projects
                </div>
                <div data-aos='fade-left' className={styles.bottomborder}></div>
            </div>
            <div className={styles.projectitems}>
                {projectData.map((project, idx) => {
                    return (
                        <Project
                            key={idx}
                            projectIdx={idx}
                            projectDetails={project}
                        />
                    )
                })}
            </div>
            {project.open && <ProjectDialog />}
        </div>
    )
}

export default MyProjects
