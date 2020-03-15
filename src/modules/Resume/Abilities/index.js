import React from "react"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { Languages } from "./Languages"
import { Skills } from "./Skills"
import { Tools } from "./Tools"

export function Abilities() {
  return (
    <Layout.Content>
      <Typography.Title>Abilities</Typography.Title>
      <Skills />
      <Tools />
      <Languages />
    </Layout.Content>
  )
}
