import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { MyPresentation } from "../../components/MyPresentation"
import { Typography } from "../../components/Typography"
import { Contributions } from "./Contributions"
import { Projects } from "./Projects"

export function About() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle>Hi, I'm Julien.</Typography.PageTitle>
      <MyPresentation />
      <Typography.Paragraph>
        <Typography.Text>
          I learnt a lot from the open source community, and today, I want to
          give her back. That's why I'm opening my own personal website, where I
          host free articles where I share my knowledge and experiences, as well
          as sharing some UI components in the{" "}
          <Link to="/devmarket">dev. market</Link>.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          If you are a recruiter, or just curious about my career path, you can{" "}
          <Link to="/resume">view my resume</Link>.<br />
          If you have any question, a suggestion, a detail to fix on my website,
          a subject to talk with me, or something whatever it is, feel free to{" "}
          <Link to="/contact">contact me</Link>. I will be happy to discuss it
          with you.
        </Typography.Text>
      </Typography.Paragraph>
      <Contributions />
      <Projects />
    </Layout.MainContent>
  )
}
