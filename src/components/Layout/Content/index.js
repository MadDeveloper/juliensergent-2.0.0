import PropTypes from "prop-types"
import React from "react"
import styles from "./Content.module.css"

export function Content({ children }) {
  return <div className={styles.root}>{children}</div>
}

Content.propTypes = {
  children: PropTypes.any
}
