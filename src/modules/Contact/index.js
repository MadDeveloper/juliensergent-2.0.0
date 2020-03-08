import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import styles from "./Contact.module.css"
import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <Layout.MainContent>
      <Typography.Title heading>Hi, I'm Julien.</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text>
          A software engineer based in France.
          <br />I started to code when I was 11. I always had a taste for
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
      <Typography.Subtitle>How to contact me</Typography.Subtitle>
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
