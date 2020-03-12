import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Main.module.css"

export function Main({ className = "", children }) {
  return <div className={cs(styles.root, className)}>{children}</div>
}

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}
