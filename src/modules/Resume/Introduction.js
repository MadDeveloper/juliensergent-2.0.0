import React from "react"
import { Layout } from "../../components/Layout"
import { MyPresentation } from "../../components/MyPresentation"
import { Typography } from "../../components/Typography"
import styles from "./Introduction.module.css"
import { TechnologyList } from "./TechnologyList"

export function Introduction() {
  return (
    <Layout.Content>
      <div className={styles.root}>
        <MyPresentation detailled />
        <div className={styles.photo}></div>
      </div>
      <Typography.Subtitle>
        Skills quick look &mdash; Software Engineer
      </Typography.Subtitle>
      <TechnologyList
        compact
        list={[
          {
            name: "TypeScript",
            path: "typescript",
          },
          {
            name: "JavaScript",
            path: "javascript",
          },
          {
            name: "Node.js",
            path: "node",
          },
          {
            name: "React",
            path: "react",
          },
          {
            name: "React Native",
            path: "react",
          },
          {
            name: "MongoDB",
            path: "mongodb",
          },
          {
            name: "GraphQL",
            path: "graphql",
          },
        ]}
      />
      <Typography.Paragraph>
        <Typography.Text>
          As a human, I obviously do not master all the technologies, but as an
          enthusiast, I am constantly looking for knowledge.
        </Typography.Text>
      </Typography.Paragraph>
    </Layout.Content>
  )
}
