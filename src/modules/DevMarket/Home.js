import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { Typography } from "../../components/Typography"
import { Components } from "./Components"

export function Home() {
  return (
    <Fragment>
      <Typography.Paragraph>
        <Typography.Text>
          I'm a big fan of open source and I would like to give back to the
          company everything it has brought me since I started development.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Below, you will be able to found a list of open source components I
          created and which I want to share with you. Feel free to use or edit
          them as you want. More components will be added with time.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          I'm opened to put some components from anyone who want to share them
          here, and I will provide author name, and some author social links.
          Feel free to <Link to="/contact">contact me</Link>.
        </Typography.Text>
      </Typography.Paragraph>
      <Components />
    </Fragment>
  )
}
