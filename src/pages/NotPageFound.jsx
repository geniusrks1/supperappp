import React from 'react'
import styles from './NotPageFound.module.css'
import { Link } from 'react-router-dom'
const NotPageFound = () => {
  return (
   <div className={styles.container}>
    <h1 className={styles.heading}> 404 </h1>
    <p className={styles.text}>Oops! Page Not Found</p>
    <p className={styles.subText}> The page you looking for might be changed its name or its not existing currently!</p>
    <Link  to ="/"className={styles.link}>Go to HomePage</Link>
    </div>
    

  )
}

export default NotPageFound