import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.nav}>
      
        <div className={styles.logo}><h1>LOGBREAKER</h1></div>
        <div className={styles.tabs}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={styles.button}>
            <button>Projects</button>
        </div>
      
    </div>
  )
}

export default Navbar
