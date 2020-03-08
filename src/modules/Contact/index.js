import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import styles from "./Contact.module.css"
import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <Layout.Main>
      <Layout.Content>
        <Typography.Paragraph heading>
          <Typography.Text>
            Hi, I'm Julien, a software engineer based in France.
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
        <Typography.Title>How to contact me</Typography.Title>
        <Typography.Paragraph>
          <Typography.Text>You can use the form below</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </Layout.Content>
    </Layout.Main>
  )
}
