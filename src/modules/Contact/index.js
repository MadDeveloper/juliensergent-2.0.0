import React from "react"
import { ExternalLink } from "../../components/ExternalLink"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import styles from "./Contact.module.css"
import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle heading>How to contact me</Typography.PageTitle>
      <Typography.Paragraph>
        <Typography.Text>You can use the form below:</Typography.Text>
      </Typography.Paragraph>
      <div className={styles.form}>
        <ContactForm />
      </div>
      <Typography.Paragraph>
        <Typography.Text>
          Or you can contact me directly at{" "}
          <ExternalLink to="mailto:sergent.julien@icloud.com">
            sergent.julien@icloud.com
          </ExternalLink>
          .
        </Typography.Text>
        <br />
        <Typography.Text>
          You can also find me around the web, on{" "}
          <ExternalLink to="https://github.com/MadDeveloper">
            GitHub
          </ExternalLink>
          <span>, </span>
          <ExternalLink to="https://twitter.com/_maddeveloper">
            Twitter
          </ExternalLink>
          <span> or </span>
          <ExternalLink to="https://www.linkedin.com/in/julien-sergent/">
            LinkedIn
          </ExternalLink>
          .
        </Typography.Text>
      </Typography.Paragraph>
    </Layout.MainContent>
  )
}
