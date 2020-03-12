import React from "react"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import ExtraInfos from "../ExtraInfos"

export default function Education() {
  return (
    <Layout.Content>
      <Typography.Title>Education</Typography.Title>
      <article>
        <Typography.Subtitle>
          Master project manager in software engineering
        </Typography.Subtitle>
        <ExtraInfos
          date="2016 - 2018"
          location="Blagnac"
          link="https://www.ipi-ecoles.com"
        />
      </article>
      <article>
        <Typography.Subtitle>
          Bachelor of Science in Information Technology
        </Typography.Subtitle>
        <ExtraInfos
          date="2013 - 2016"
          location="Toulouse"
          link="https://www.supinfo.com"
        />
      </article>
      <article>
        <Typography.Subtitle>
          High school diploma - Scientific Subjects
        </Typography.Subtitle>
        <ExtraInfos date="2012 - 2013" location="Cahors" />
      </article>
    </Layout.Content>
  )
}
