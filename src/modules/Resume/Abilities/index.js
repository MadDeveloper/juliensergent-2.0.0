import React from "react"
import { Layout } from "../../../components/Layout"
import { Message } from "../../../components/Message"
import { Typography } from "../../../components/Typography"
import styles from "./Abilities.module.css"
import { Languages } from "./Languages"
import { Skills } from "./Skills"
import { Tools } from "./Tools"

export function Abilities() {
  return (
    <Layout.Content>
      <Typography.Title>Abilities</Typography.Title>
      <Message info>
        Only skills and tools with valuable experiences are listed below.
      </Message>
      <section className={styles.sections}>
        <Skills />
        <Tools />
        <Languages />
      </section>
    </Layout.Content>
  )
}
