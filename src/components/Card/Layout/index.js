import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Layout.module.css"

export function Layout({ className = "", children, ...props }) {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
