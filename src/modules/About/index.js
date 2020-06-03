import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { Contributions } from "./Contributions"
import { Projects } from "./Projects"

export function About() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle>Hi, I'm Julien.</Typography.PageTitle>
      <div>
        <Typography.Paragraph>
          <Typography.Text>
            I'm a <Typography.Text bold>software engineer</Typography.Text>,
            based in France.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            I used for the first time a computer when I was 4, and I started to
            code when I was 11. I always had a strong taste for well-written
            code, designing systems, pay attention to details, and make each
            view an incredible experience.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            True passionate, spending my nights coding has been my daily life
            for a long time.
            <br />
            Graduated in 2018, since then I walk through experiences and
            technologies across the professional world of IT.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            I learnt a lot from the open source community, and today, I want to
            give her back. That's why I'm opening my own personal website, where
            I host free articles where I share my knowledge and experiences, as
            well as sharing some UI components in the{" "}
            <Link to="/devmarket">dev. market</Link>.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            If you are a recruiter, or just curious about my career path, you
            can <Link to="/resume">view my resume</Link>.<br />
            If you have any question, a suggestion, a detail to fix on my
            website, a subject to talk with me, or something whatever it is,
            feel free to <Link to="/contact">contact me</Link>. I will be happy
            to discuss it with you.
          </Typography.Text>
        </Typography.Paragraph>
      </div>
      <Contributions />
      <Projects />
    </Layout.MainContent>
  )
}
