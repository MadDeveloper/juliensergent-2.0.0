import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Button.module.css"

export function Button({
  type = "button",
  className = "",
  secondary = false,
  onClick,
  children
}) {
  function handleClick(event) {
    if (typeof onClick === "function") {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      className={cs(styles.root, className, { [styles.secondary]: secondary })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  secondary: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
}
