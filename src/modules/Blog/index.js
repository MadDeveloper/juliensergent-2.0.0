import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { Article } from "./Article"

export function Blog() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle heading>Let's read a bit</Typography.PageTitle>
      <Article />
    </Layout.MainContent>
  )
}
