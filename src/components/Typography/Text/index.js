import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Text.module.css"

export function Text({ children, bold = false }) {
  return (
    <span className={cs(styles.root, { [styles.bold]: bold })}>{children}</span>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  bold: PropTypes.bool
}
