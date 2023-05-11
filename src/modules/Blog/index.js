import React from "react"
import { Layout } from "../../components/Layout"
import { Message } from "../../components/Message"
import { Typography } from "../../components/Typography"

export default function Blog() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle heading>Let's read a bit</Typography.PageTitle>
      <Message info>
        Nothing here at the moment, but it's in preparation in the backstage.
      </Message>
      {/* <Article /> */}
    </Layout.MainContent>
  )
}
