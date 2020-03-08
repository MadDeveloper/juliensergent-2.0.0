import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Content.module.css"

export function Content({ compact = false, children }) {
  return (
    <div className={cs(styles.root, { [styles.compact]: compact })}>
      {children}
    </div>
  )
}

Content.propTypes = {
  compact: PropTypes.bool,
  children: PropTypes.any
}
