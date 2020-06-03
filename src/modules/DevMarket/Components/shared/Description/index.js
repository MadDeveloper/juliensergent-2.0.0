import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../../../components/Typography"

export function Description({ children }) {
  return (
    <Typography.Paragraph heading>
      <Typography.Text>{children}</Typography.Text>
    </Typography.Paragraph>
  )
}

Description.propTypes = {
  children: PropTypes.string,
}
