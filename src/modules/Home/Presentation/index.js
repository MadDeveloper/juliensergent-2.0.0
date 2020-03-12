import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Typography } from "../../../components/Typography"
import { config } from "../../../config"
import styles from "./Presentation.module.css"

export function Presentation() {
  const history = useHistory()

  function navigateToResume() {
    history.push(config.routes.resume)
  }

  return (
    <div className={styles.root}>
      <div>
        <Typography.PageTitle className={styles.name} heading>
          Hi, I'm Julien.
        </Typography.PageTitle>
        <div className={styles.description}>
          <Typography.Subtitle className={styles.element}>
            I'm a <span className={styles.highlight}>software engineer</span>,
            <br />
            <span className={styles.highlight}>web artisan</span> and{" "}
            <span className={styles.highlight}>design maniac</span>.
          </Typography.Subtitle>
        </div>
        <div className={styles.showMore}>
          <Button onClick={navigateToResume} className={styles.button}>
            Show resume
          </Button>
        </div>
      </div>
      <div className={styles.photo} />
    </div>
  )
}
