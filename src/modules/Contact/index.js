import React from "react"
import { ExternalLink } from "../../components/ExternalLink"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { AroundTheWeb } from "./AroundTheWeb"
import { ContactForm } from "./ContactForm"

export default function Contact() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle>How to contact me</Typography.PageTitle>
      <Typography.Paragraph heading>
        <Typography.Text>
          You can use the awesome serverless form below
        </Typography.Text>
      </Typography.Paragraph>
      <ContactForm />
      <Typography.Paragraph>
        <Typography.Text>
          Or you can contact me directly at sergent.julien@icloud.com
          <ExternalLink to="mailto:sergent.julien@icloud.com">
            new email
          </ExternalLink>{" "}
          or try something new I don't know existance.
        </Typography.Text>
      </Typography.Paragraph>
      <AroundTheWeb />
    </Layout.MainContent>
  )
}
