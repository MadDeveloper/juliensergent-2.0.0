import React, { Fragment } from "react"
import { Typography } from "../../components/Typography"
import { Components } from "./Components"

export function Home() {
  return (
    <Fragment>
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
