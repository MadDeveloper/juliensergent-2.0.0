import React from "react"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"

export default function Education() {
  return (
    <Layout.Content>
      <article>
        <Typography.Title>Education</Typography.Title>
        <Typography.Subtitle>
          Master project manager in software engineering
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2016 - 2018</Typography.Text>
        </Typography.Paragraph>
        <Typography.Subtitle>
          Bachelor of Science in Information Technology
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2013 - 2016</Typography.Text>
        </Typography.Paragraph>
        <Typography.Subtitle>
          High school diploma - Scientific Subjects
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2012 - 2013</Typography.Text>
        </Typography.Paragraph>
      </article>
    </Layout.Content>
  )
}
