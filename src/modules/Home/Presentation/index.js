import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "../../../components/Typography"
import styles from "./Presentation.module.css"

export function Presentation() {
  return (
    <div className={styles.root}>
      <div>
        <Typography.Title className={styles.name} heading>
          Hi, I'm Julien.
        </Typography.Title>
        <div className={styles.description}>
          <Typography.Subtitle className={styles.element}>
            I'm a <span className={styles.highlight}>software engineer</span>,
            <br />
            <span className={styles.highlight}>web artisan</span> and{" "}
            <span className={styles.highlight}>design maniac</span>.
          </Typography.Subtitle>
        </div>
        <div className={styles.showMore}>
          <span role="img" aria-labelledby="Show More" className={styles.emoji}>
            👉
          </span>
          <Link to="/resume" className={styles.link}>
            Tell me more
          </Link>
        </div>
      </div>
      <div className={styles.photo} />
    </div>
  )
}
