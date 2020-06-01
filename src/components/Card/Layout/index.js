import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Layout.module.css"

export function Layout({
  className = "",
  clickable = true,
  children,
  ...props
}) {
  return (
    <div
      className={cs(styles.root, className, { [styles.clickable]: clickable })}
      {...props}
    >
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  clickable: PropTypes.bool,
  children: PropTypes.any,
}
