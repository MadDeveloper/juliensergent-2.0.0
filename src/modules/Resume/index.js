import React from "react"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { Abilities } from "./Abilities"
import { Education } from "./Education"
import { Introduction } from "./Introduction"
import { Jobs } from "./Jobs"
import styles from "./Resume.module.css"

export function Resume() {
  return (
    <section className={styles.root}>
      <article>
        <Layout.Content headerSpacing>
          <Typography.PageTitle>Here is my background</Typography.PageTitle>
        </Layout.Content>
        <Introduction />
      </article>
      <article>
        <Jobs />
      </article>
      <article>
        <Education />
      </article>
      <article>
        <Abilities />
      </article>
    </section>
  )
}
