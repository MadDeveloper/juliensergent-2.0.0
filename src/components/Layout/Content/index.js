import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Content.module.css"

export function Content({
  compact = false,
  headerSpacing = false,
  className = "",
  children,
}) {
  return (
    <div
      className={cs(styles.root, className, {
        [styles.compact]: compact,
        [styles.headerSpacing]: headerSpacing,
      })}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  compact: PropTypes.bool,
  className: PropTypes.string,
  headerSpacing: PropTypes.bool,
  children: PropTypes.any,
}
