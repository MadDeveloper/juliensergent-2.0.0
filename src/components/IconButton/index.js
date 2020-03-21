import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./IconButton.module.css"

export function IconButton({ active = false, children, ...props }) {
  return (
    <div className={cs(styles.root, { [styles.active]: active })} {...props}>
      {children}
    </div>
  )
}

IconButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
}
