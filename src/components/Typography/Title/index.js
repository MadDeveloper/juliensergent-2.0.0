import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Title.module.css"

export function Title({
  heading = false,
  className = "",
  style = {},
  children
}) {
  return (
    <h1
      className={cs(styles.root, className, { [styles.heading]: heading })}
      style={style}
    >
      {children}
    </h1>
  )
}

Title.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
