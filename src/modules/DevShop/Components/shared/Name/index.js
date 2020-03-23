import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../../../components/Typography"
import styles from "./Name.module.css"

export function Name({ children }) {
  return (
    <Typography.Subtitle className={styles.root}>
      {children}
    </Typography.Subtitle>
  )
}

Name.propTypes = {
  children: PropTypes.string,
}
