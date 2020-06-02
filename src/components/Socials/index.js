import React from "react"
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg"
import { ReactComponent as StackOverflowIcon } from "../../assets/icons/stack-overflow.svg"
import { ReactComponent as TwitterIcon } from "../../assets/icons/twitter.svg"
import { useAnalytics } from "../../lib/analytics"
import { ExternalLink } from "../ExternalLink"
import styles from "./Socials.module.css"

export function Socials() {
  const analytics = useAnalytics()

  function trackSocialLinkClicked(name = "") {
    analytics.event({
      category: "Social",
      action: `Social footer link clicked`,
      label: name,
    })
  }

  function trackGitHubLinkClicked() {
    trackSocialLinkClicked("GitHub")
  }

  function trackTwitterLinkClicked() {
    trackSocialLinkClicked("Twitter")
  }

  function trackStackOverflowLinkClicked() {
    trackSocialLinkClicked("Stack Overflow")
  }

  function trackLinkedInLinkClicked() {
    trackSocialLinkClicked("LinkedIn")
  }

  return (
    <div className={styles.root}>
      <ExternalLink
        to="https://github.com/MadDeveloper"
        className={styles.social}
        onClick={trackGitHubLinkClicked}
      >
        <GitHubIcon title="GitHub" className={styles.socialIcon} />
      </ExternalLink>
      <ExternalLink
        to="https://twitter.com/_maddeveloper"
        className={styles.social}
        onClick={trackTwitterLinkClicked}
      >
        <TwitterIcon title="Twitter" className={styles.socialIcon} />
      </ExternalLink>
      <ExternalLink
        to="https://stackoverflow.com/users/6708504/julien-sergent"
        className={styles.social}
        onClick={trackStackOverflowLinkClicked}
      >
        <StackOverflowIcon
          title="Stack Overflow"
          className={styles.socialIcon}
        />
      </ExternalLink>
      <ExternalLink
        to="https://www.linkedin.com/in/julien-sergent"
        className={styles.social}
        onClick={trackLinkedInLinkClicked}
      >
        <LinkedinIcon title="LinkedIn" className={styles.socialIcon} />
      </ExternalLink>
    </div>
  )
}
