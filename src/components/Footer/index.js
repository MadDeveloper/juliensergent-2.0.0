import React from "react"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import twitterIcon from "../../assets/icons/twitter.svg"
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.root}>
      <a
        href="https://github.com/MadDeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
      >
        <img src={githubIcon} alt="github" className={styles.socialIcon} />
      </a>
      <a
        href="https://twitter.com/_maddeveloper"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
      >
        <img src={twitterIcon} alt="twitter" className={styles.socialIcon} />
      </a>
      <a
        href="https://www.linkedin.com/in/julien-sergent"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
      >
        <img src={linkedinIcon} alt="linkedin" className={styles.socialIcon} />
      </a>
    </footer>
  )
}
