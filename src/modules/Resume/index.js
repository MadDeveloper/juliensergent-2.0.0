import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { Introduction } from "./Introduction"
import { MainSkills } from "./MainSkills"
import { WorkingExperiences } from "./WorkingExperiences"

export function Resume() {
  return (
    <Layout.MainContent>
      <Typography.Title heading>Here is my background</Typography.Title>
      <Introduction />
      <MainSkills />
      <WorkingExperiences />
    </Layout.MainContent>
  )
}
