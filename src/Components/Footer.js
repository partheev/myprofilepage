import React from 'react'
import styles from './footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
const list = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/partheev-budarapu-4a596a1a6/',
    symbol: <LinkedInIcon className={styles.btn} />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/partheevonline/',
    symbol: <InstagramIcon className={styles.btn} />,
  },
  {
    name: 'Youtube',
    href: 'https://www.youtube.com/c/PartheevVideoClub',
    symbol: <YouTubeIcon className={styles.btn} />,
  },
]
const Footer = () => {
  return (
    <div className={styles.footerlayout}>
      <div className={styles.medialist}>
        {list.map((e) => {
          return (
            <div
              key={e.name}
              onClick={() => window.open(e.href, '_blank').focus()}
              className={styles.mediabtn}
            >
              {e.symbol}
            </div>
          )
        })}
      </div>
      <div className={styles.copyright}>
        PARTHEEV <span> &copy;2021</span>{' '}
      </div>
    </div>
  )
}

export default Footer
