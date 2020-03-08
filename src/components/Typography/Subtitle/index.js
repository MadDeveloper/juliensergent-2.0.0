import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Subtitle.module.css"

export function Subtitle({
  heading = false,
  className = "",
  style = {},
  children
}) {
  return (
    <h2
      className={cs(styles.root, className, { [styles.heading]: heading })}
      style={style}
    >
      {children}
    </h2>
  )
}

Subtitle.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
