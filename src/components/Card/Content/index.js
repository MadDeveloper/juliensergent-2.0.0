import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Content.module.css"

export function Content({ className = "", children }) {
  return <div className={cs(styles.root, className)}>{children}</div>
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
