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
        JavaScript Software Engineer &mdash; Skills quick look
      </Typography.Subtitle>
      <TechnologyList
        compact
        list={[
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
    </Layout.Content>
  )
}
