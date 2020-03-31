import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "../../../components/Typography"
import styles from "./Article.module.css"

export function Article() {
  return (
    <article>
      <Typography.Subtitle className={styles.title}>
        <Link to="/">Getting started with React</Link>
      </Typography.Subtitle>
      <div className={styles.description}>
        <Typography.Paragraph heading>
          <Typography.Text secondary>
            {new Date().toLocaleString()}
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography.Text>
        </Typography.Paragraph>
      </div>
      <div>
        <Link to="">Read more</Link>
      </div>
    </article>
  )
}
