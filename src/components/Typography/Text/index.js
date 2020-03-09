import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Text.module.css"

export function Text({ children, bold = false, secondary = false }) {
  return (
    <span
      className={cs(styles.root, {
        [styles.bold]: bold,
        [styles.secondary]: secondary
      })}
    >
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  bold: PropTypes.bool,
  secondary: PropTypes.bool
}
