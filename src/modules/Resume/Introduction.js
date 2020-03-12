import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { TechnologyIcon } from "./TechnologyIcon"

export function Introduction() {
  return (
    <Layout.Content>
      <Typography.Paragraph>
        <Typography.Text>
          Actually, I am a software engineer based in France.
          <br />I started to code when I was 11. I always had a taste for
          well-written code, design systems, attention to details, making each
          view an incredible experience, both in terms of UX and UI.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          My natural addiction towards the design, prevents me to be just a
          frontend or backend developer, I can only be a fullstack developer.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Subtitle>Favorite technologies</Typography.Subtitle>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TechnologyIcon name="Javascript" path="javascript.png" />
        <TechnologyIcon name="Node.js" path="node.png" />
        <TechnologyIcon name="React" path="react.png" />
      </div>
    </Layout.Content>
  )
}
