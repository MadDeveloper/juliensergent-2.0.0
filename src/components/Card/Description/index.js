import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../Typography"

export function Description({ className = "", children }) {
  return (
    <Typography.Text secondary className={className}>
      {children}
    </Typography.Text>
  )
}

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}
