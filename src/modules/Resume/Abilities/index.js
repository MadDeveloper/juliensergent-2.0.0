import React from "react"
import { Layout } from "../../../components/Layout"
import { InfoMessage } from "../../../components/Message/InfoMessage"
import { Typography } from "../../../components/Typography"
import { Languages } from "./Languages"
import { Skills } from "./Skills"
import { Tools } from "./Tools"

export function Abilities() {
  return (
    <Layout.Content>
      <Typography.Title>Abilities</Typography.Title>
      <Typography.Paragraph>
        <InfoMessage>
          Only skills and tools with valuable experiences are listed below.
        </InfoMessage>
      </Typography.Paragraph>
      <Skills />
      <Tools />
      <Languages />
    </Layout.Content>
  )
}
