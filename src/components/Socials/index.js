import React from "react"
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg"
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg"
import { ExternalLink } from "../ExternalLink"
import styles from "./Socials.module.css"

export function Socials() {
  return (
    <div className={styles.root}>
      <ExternalLink
        to="https://github.com/MadDeveloper"
        className={styles.social}
      >
        <GitHubIcon title="GitHub" className={styles.socialIcon} />
      </ExternalLink>
      <ExternalLink
        to="https://twitter.com/_maddeveloper"
        className={styles.social}
      >
        <TwitterIcon title="Twitter" className={styles.socialIcon} />
      </ExternalLink>
      <ExternalLink
        to="https://www.linkedin.com/in/julien-sergent"
        className={styles.social}
      >
        <LinkedinIcon title="LinkedIn" className={styles.socialIcon} />
      </ExternalLink>
    </div>
  )
}
