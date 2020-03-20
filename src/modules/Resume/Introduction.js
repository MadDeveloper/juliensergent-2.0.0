import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { calculateAge } from "../../lib/time"
import { TechnologyList } from "./TechnologyList"

export function Introduction() {
  return (
    <Layout.Content>
      <Typography.Paragraph>
        <Typography.Text>
          Hi, I'm <Typography.Text bold>Julien</Typography.Text>, I'm{" "}
          <Typography.Text bold>
            {calculateAge(new Date(1995, 9, 18))}
          </Typography.Text>
          , and I'm a <Typography.Text bold>software engineer</Typography.Text>{" "}
          based in France.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          I started to code when I was 11. I always had a taste for well-written
          code, design systems, attention to details, making each view an
          incredible experience, both in terms of UX and UI.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          My natural addiction towards the design, prevents me to be just a
          frontend or backend developer, I can only be a fullstack developer.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Subtitle>Loved technologies</Typography.Subtitle>
      <TechnologyList
        list={[
          {
            name: "JavaScript",
            path: "javascript",
            content: (
              <span>Highly skilled, daily usage. Preferred language.</span>
            )
          },
          {
            name: "Node.js",
            path: "node",
            content: <span>Who can't love Node.js? Favorite revolution.</span>
          },
          {
            name: "React",
            path: "react",
            content: <span>The best UI library. I love it, really.</span>
          },
          {
            name: "React Native",
            path: "react",
            content: <span>React best friend, mine too.</span>
          },
          {
            name: "TypeScript",
            path: "typescript",
            content: <span>I can not do without it.</span>
          },
          {
            name: "MongoDB",
            path: "mongodb",
            content: (
              <span>
                Daily usage. Match perfectly with JavaScript, and my opinion.
              </span>
            )
          },
          {
            name: "GraphQL",
            path: "graphql",
            content: (
              <span>
                When I discovered it, I just stopped developing REST API.
              </span>
            )
          }
        ]}
      />
    </Layout.Content>
  )
}
