import React from 'react'
import styles from './intro.module.css'
const Navbar = (props) => {
  return (
    <div className={styles.navbar_bg}>
      <div className={`container ${styles.navbar}`}>
        <div>
          <span>Home</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>Portfolio</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </div>
    </div>
    // <nav class='navbar navbar-expand-lg navbar-light bg-light'>
    //   <button
    //     class='navbar-toggler'
    //     type='button'
    //     data-toggle='collapse'
    //     data-target='#navbarNavAltMarkup'
    //     aria-controls='navbarNavAltMarkup'
    //     aria-expanded='false'
    //     aria-label='Toggle navigation'
    //   >
    //     <span class='navbar-toggler-icon'></span>
    //   </button>
    //   <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
    //     <div class='navbar-nav'>
    //       <a class='nav-item nav-link active' href='#'>
    //         Home
    //       </a>
    //       <a class='nav-item nav-link' href='#'>
    //         About
    //       </a>
    //       <a class='nav-item nav-link' href='#'>
    //         Portfolio
    //       </a>
    //       <a class='nav-item nav-link' href='#'>
    //         Contact
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
