import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { WorkingExperiences } from "./WorkingExperiences"

export function Resume() {
  return (
    <Layout.MainContent>
      <Typography.Title heading>Here is my background</Typography.Title>
      {/* <Typography.Title heading>Hi, I'm Julien.</Typography.Title> */}
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

      <WorkingExperiences />
    </Layout.MainContent>
  )
}
