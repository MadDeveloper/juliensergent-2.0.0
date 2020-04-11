import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../Typography"
import styles from "./Title.module.css"

export function Title({ className = "", children }) {
  return (
    <Typography.Subtitle className={cs(styles.root, className)}>
      {children}
    </Typography.Subtitle>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}
