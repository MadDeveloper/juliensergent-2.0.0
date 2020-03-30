import React, { Fragment } from "react"
import { InfoMessage } from "../../components/Message/InfoMessage"
import { Typography } from "../../components/Typography"
import { Components } from "./Components"

export default function Home() {
  return (
    <Fragment>
      <InfoMessage>More content is coming soon.</InfoMessage>
      <Typography.Paragraph>
        <Typography.Text>
          You will be able to found a list of open source components I created
          and which I want to share with you. Feel free to use or edit them as
          you want.
        </Typography.Text>
      </Typography.Paragraph>
      <Components />
    </Fragment>
  )
}
