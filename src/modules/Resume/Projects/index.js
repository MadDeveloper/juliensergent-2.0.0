import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { config } from "../../../config"

export function Projects() {
  const navigate = useNavigate()

  function navigateToProjects() {
    navigate(config.routes.projects)
  }

  return (
    <Layout.Content>
      <article>
        <Typography.Title>Projects</Typography.Title>
        <Typography.Paragraph>
          <Typography.Text>
            You can go to the{" "}
            <Button onClick={navigateToProjects}>Projects</Button> menu if you
            want to see all my personal projects.
          </Typography.Text>
        </Typography.Paragraph>
      </article>
    </Layout.Content>
  )
}
