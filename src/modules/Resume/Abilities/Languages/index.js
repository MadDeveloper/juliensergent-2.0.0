import React from "react"
import enFlag from "../../../../assets/images/flags/en.jpg"
import frFlag from "../../../../assets/images/flags/fr.jpg"
import { Typography } from "../../../../components/Typography"
import styles from "./Languages.module.css"

export function Languages() {
  return (
    <article>
      <Typography.Subtitle>Languages</Typography.Subtitle>
      <div className={styles.languages}>
        <div className={styles.lang}>
          <img src={frFlag} alt="fr flag" className={styles.flag} />
          <div>
            <div>
              <Typography.Text bold>French</Typography.Text>
            </div>
            <div>
              <Typography.Text secondary>Native language.</Typography.Text>
            </div>
          </div>
        </div>
        <div className={styles.lang}>
          <img src={enFlag} alt="en flag" className={styles.flag} />
          <div>
            <div>
              <Typography.Text bold>English</Typography.Text>
            </div>
            <div>
              <Typography.Text secondary>
                Daily use, professional experiences.
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
