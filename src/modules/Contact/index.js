import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import styles from "./Contact.module.css"
import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <Layout.MainContent>
      <Typography.Title heading>How to contact me</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text>You can use the form below:</Typography.Text>
      </Typography.Paragraph>
      <div className={styles.form}>
        <ContactForm />
      </div>
      <Typography.Paragraph>
        <Typography.Text>
          Or you can contact me directly at{" "}
          <a href="mailto:sergent.julien@icloud.com">
            sergent.julien@icloud.com
          </a>
          .
        </Typography.Text>
        <br />
        <Typography.Text>
          You can also find me around the web, on{" "}
          <a
            href="https://github.com/MadDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span>, </span>
          <a
            href="https://twitter.com/_maddeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <span> or </span>
          <a
            href="https://www.linkedin.com/in/julien-sergent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </Typography.Text>
      </Typography.Paragraph>
    </Layout.MainContent>
  )
}
