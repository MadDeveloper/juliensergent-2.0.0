import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.css"

export function Menu() {
  return (
    <div className={styles.root}>
      <Link to="/blog" className={styles.link}>
        Blog
      </Link>
      <Link to="/projects" className={styles.link}>
        Projects
      </Link>
      <Link to="/contact" className={styles.link}>
        Contact
      </Link>
    </div>
  )
}
