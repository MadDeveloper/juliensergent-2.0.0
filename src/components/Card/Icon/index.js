import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Icon.module.css"

export function Icon({ icon: Icon, className = "" }) {
  return <Icon className={cs(styles.root, className)} />
}

Icon.propTypes = {
  icon: PropTypes.object,
  className: PropTypes.string,
}
