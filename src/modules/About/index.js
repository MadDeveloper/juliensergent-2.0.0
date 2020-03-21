import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { calculateAge } from "../../lib/time"
import styles from "./About.module.css"
import { AroundTheWeb } from "./AroundTheWeb"

export function About() {
  const navigate = useNavigate()

  function navigateToResume() {
    navigate("/resume")
  }

  function navigateToContact() {
    navigate("/contact")
  }

  return (
    <Layout.MainContent>
      <Typography.PageTitle>Hi, I'm Julien.</Typography.PageTitle>
      <div>
        <Typography.Paragraph>
          <Typography.Text>
            Hi, I'm <Typography.Text bold>Julien</Typography.Text>
            <span>, I'm </span>
            <Typography.Text bold>
              {calculateAge(new Date(1995, 9, 18))}
            </Typography.Text>
            <span>, and I'm a </span>
            <Typography.Text bold>software engineer</Typography.Text> based in
            France.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            I started to code when I was 11. I always had a taste for
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
        <Typography.Paragraph>
          <Button onClick={navigateToResume}>View my resume</Button>
          <Button
            className={styles.contactMeButton}
            onClick={navigateToContact}
          >
            Contact me
          </Button>
        </Typography.Paragraph>
      </div>
      <AroundTheWeb />
    </Layout.MainContent>
  )
}
