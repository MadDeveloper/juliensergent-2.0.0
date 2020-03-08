import React from "react"
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import twitterIcon from "../../assets/icons/twitter.svg"
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
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>You can also find me around the web:</Typography.Text>
      </Typography.Paragraph>
      <ul className={styles.social}>
        <li className={styles.item}>
          <a
            href="https://github.com/MadDeveloper"
            target="_blank"
            rel="noopener"
          >
            <img src={githubIcon} className={styles.icon} alt="" />
            <span>MadDeveloper</span>
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.linkedin.com/in/julien-sergent/"
            target="_blank"
            rel="noopener"
          >
            <img src={linkedinIcon} className={styles.icon} alt="" />
            <span>julien-sergent</span>
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://twitter.com/_maddeveloper"
            target="_blank"
            rel="noopener"
          >
            <img src={twitterIcon} className={styles.icon} alt="" />
            <span>_maddeveloper</span>
          </a>
        </li>
      </ul>
    </Layout.MainContent>
  )
}
