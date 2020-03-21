import React from "react"
import { ExternalLink } from "../../../components/ExternalLink"
import { Typography } from "../../../components/Typography"
import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <section>
      <Typography.Subtitle>How to contact me</Typography.Subtitle>
      <Typography.Paragraph>
        <Typography.Text>You can use the form below:</Typography.Text>
      </Typography.Paragraph>
      <ContactForm />
      <Typography.Paragraph>
        <Typography.Text>
          Or you can contact me directly at{" "}
          <ExternalLink to="mailto:sergent.julien@icloud.com">
            sergent.julien@icloud.com
          </ExternalLink>
          .
        </Typography.Text>
      </Typography.Paragraph>
    </section>
  )
}
