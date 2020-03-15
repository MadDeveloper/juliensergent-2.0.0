import React from "react"
import { Typography } from "../../../../components/Typography"

export function Languages() {
  return (
    <article>
      <Typography.Subtitle>Languages</Typography.Subtitle>
      <Typography.Paragraph>
        <Typography.Text>Todo</Typography.Text>
      </Typography.Paragraph>
      <ul>
        <li>French (native)</li>
        <li>English (daily use)</li>
      </ul>
    </article>
  )
}
