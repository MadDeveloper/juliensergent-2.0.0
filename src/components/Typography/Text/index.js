import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Text.module.css"

export function Text({
  children,
  bold = false,
  small = false,
  secondary = false,
  className = "",
  ...props
}) {
  return (
    <span
      className={cs(styles.root, className, {
        [styles.bold]: bold,
        [styles.secondary]: secondary,
        [styles.small]: small
      })}
      {...props}
    >
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string
}
