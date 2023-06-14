import React from "react"
import csmImage from "../../assets/images/csm.png"
import { ExternalLink } from "../../components/ExternalLink"
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
      <Typography.Subtitle>Skills quick look</Typography.Subtitle>
      <TechnologyList
        list={[
          {
            name: "TypeScript",
            path: "typescript",
            content: <span>Can almost do anything with it, even coffee.</span>,
          },
          {
            name: "JavaScript",
            path: "javascript",
            content: <span>The birth of Christ, and of me.</span>,
          },
          {
            name: "Node.js",
            path: "node",
            content: <span>The birth of Christ, and of me.</span>,
          },
          {
            name: "React",
            path: "react",
            content: <span>The best UI library. I love it, really.</span>,
          },
          {
            name: "React Native",
            path: "react",
            content: <span>React best friend, mine too.</span>,
          },
          {
            name: "MongoDB",
            path: "mongodb",
            content: (
              <span>
                Daily usage. Match perfectly with JavaScript, and my opinion.
              </span>
            ),
          },
          {
            name: "GraphQL",
            path: "graphql",
            content: (
              <span>
                When I discovered it, I just stopped developing REST API.
              </span>
            ),
          },
        ]}
      />
      <div className={styles.csm}>
        <img src={csmImage} alt="Certified Scrum Master" />
        <Typography.Paragraph>
          <Typography.Text bold>Certified Scrum Master</Typography.Text>
          <br />
          <Typography.Text secondary>
            Certification delivered by Scrum Alliance, Inc. on 2022.
          </Typography.Text>
          <br />
          <ExternalLink to="https://bcert.me/bc/html/show-badge.html?b=tsqllzow">
            View certification
          </ExternalLink>
        </Typography.Paragraph>
      </div>
      <Typography.Paragraph>
        <Typography.Text>
          As a human, I obviously do not master all the technologies and
          concepts, but as an enthusiast, I am constantly looking for knowledge.
        </Typography.Text>
      </Typography.Paragraph>
    </Layout.Content>
  )
}
