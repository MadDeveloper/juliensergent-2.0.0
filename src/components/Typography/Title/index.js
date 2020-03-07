import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Title.module.css"

export function Title({ className = "", style = {}, children }) {
  return (
    <h1 className={cs(styles.root, className)} style={style}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
