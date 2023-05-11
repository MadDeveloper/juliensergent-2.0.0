import React from "react"
import { ExternalLink } from "../../../components/ExternalLink"
import { Typography } from "../../../components/Typography"
import styles from "./AroundTheWeb.module.css"

export function AroundTheWeb() {
  return (
    <section>
      <Typography.Subtitle>Around the web</Typography.Subtitle>
      <Typography.Text>
        You can also find me around the web, on
        <ul className={styles.links}>
          <li>
            <ExternalLink to="https://github.com/MadDeveloper">
              GitHub
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://twitter.com/_maddeveloper">
              Twitter
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.npmjs.com/~maddeveloper">
              npm
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://stackoverflow.com/users/6708504/julien-sergent">
              Stack Overflow
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://www.linkedin.com/in/julien-sergent/">
              LinkedIn
            </ExternalLink>
          </li>
        </ul>
      </Typography.Text>
    </section>
  )
}
