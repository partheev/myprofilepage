import React from 'react'
import styles from './intro.module.css'
const Navbar = (props) => {
    const routes = [
        {
            name: 'Home',
            href: '#home',
        },
        {
            name: 'About',
            href: '#about',
        },
        {
            name: 'Portfolio',
            href: '#portfolio',
        },
        {
            name: 'Contact',
            href: '#contact',
        },
    ]
    // return <div></div>
    return (
        <div id='navbar' className={styles.navbar_bg}>
            <div className={`container ${styles.navbar}`}>
                {routes.map((e) => {
                    return (
                        <a href={e.href} key={e.href}>
                            <div>
                                <span>{e.name}</span>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar
