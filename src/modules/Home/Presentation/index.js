import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "../../../components/Typography"
import styles from "./Presentation.module.css"

export function Presentation() {
  return (
    <div className={styles.root}>
      <div>
        <Typography.Title className={styles.name}>
          Julien Sergent
        </Typography.Title>
        <div className={styles.description}>
          <Typography.Subtitle className={styles.element}>
            Software engineer
          </Typography.Subtitle>
          <Typography.Subtitle className={styles.element}>
            Design maniac
          </Typography.Subtitle>
          <Typography.Subtitle className={styles.element}>
            Web artisan
          </Typography.Subtitle>
        </div>
        <div className={styles.showMore}>
          <span role="img" aria-labelledby="Show More" className={styles.emoji}>
            👉
          </span>
          <Link to="/me" className={styles.link}>
            I want to know more
          </Link>
        </div>
      </div>
      <div className={styles.photo} />
    </div>
  )
}
