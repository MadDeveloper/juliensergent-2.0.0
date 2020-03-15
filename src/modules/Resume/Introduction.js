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
          { name: "JavaScript", path: "javascript.png" },
          { name: "Node.js", path: "node.png" },
          { name: "React", path: "react.png" },
          { name: "React Native", path: "react.png" },
          { name: "GraphQL", path: "graphql.png" },
          { name: "TypeScript", path: "typescript.png" },
          { name: "MongoDB", path: "mongodb.png" }
        ]}
      />
    </Layout.Content>
  )
}
