import React, { Fragment } from "react"
import { Typography } from "../../components/Typography"
import { TechnologyIcon } from "./TechnologyIcon"

export function MainSkills() {
  return (
    <Fragment>
      <Typography.Title>Main skills</Typography.Title>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TechnologyIcon name="Javascript" path="javascript.png" />
        <TechnologyIcon name="Node.js" path="node.png" />
        <TechnologyIcon name="React" path="react.png" />
      </div>
    </Fragment>
  )
}
