import React from "react"
import { ExternalLink } from "../../../components/ExternalLink"
import { Typography } from "../../../components/Typography"

export function AroundTheWeb() {
  return (
    <section>
      <Typography.Subtitle>Around the web</Typography.Subtitle>
      <Typography.Text>
        You can also find me around the web, on{" "}
        <ExternalLink to="https://github.com/MadDeveloper">GitHub</ExternalLink>
        <span>, </span>
        <ExternalLink to="https://twitter.com/_maddeveloper">
          Twitter
        </ExternalLink>
        <span>, </span>
        <ExternalLink to="https://www.npmjs.com/~maddeveloper">
          npm
        </ExternalLink>
        <span>, </span>
        <ExternalLink to="https://stackoverflow.com/users/6708504/julien-sergent">
          StackOverflow
        </ExternalLink>
        <span> or </span>
        <ExternalLink to="https://www.linkedin.com/in/julien-sergent/">
          LinkedIn
        </ExternalLink>
        .
      </Typography.Text>
    </section>
  )
}
