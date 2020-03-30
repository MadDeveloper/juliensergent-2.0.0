import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../../../components/Typography"

export function Name({ children }) {
  return <Typography.Title>{children}</Typography.Title>
}

Name.propTypes = {
  children: PropTypes.string,
}
