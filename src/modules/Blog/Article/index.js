import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "../../../components/Typography"

export function Article() {
  return (
    <article>
      <Typography.Subtitle>Getting started with React</Typography.Subtitle>
      <div style={{ marginTop: "-10px", marginBottom: 20 }}>
        <Typography.Paragraph>
          <Typography.Text secondary>
            {new Date().toUTCString()}
          </Typography.Text>
        </Typography.Paragraph>
      </div>
      <div>
        <Link to="">Read more</Link>
      </div>
    </article>
  )
}