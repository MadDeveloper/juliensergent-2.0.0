import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import styles from "./NotFound.module.css"

export function NotFound() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle className={styles.pageTitle}>
        404
      </Typography.PageTitle>
      <Typography.Paragraph>
        <Typography.Text>
          The page you are looking for does not exist.
        </Typography.Text>
      </Typography.Paragraph>
    </Layout.MainContent>
  )
}
