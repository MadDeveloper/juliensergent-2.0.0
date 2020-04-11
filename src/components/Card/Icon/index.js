import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Icon.module.css"

export function Icon({ icon: Icon, className = "" }) {
  return (
    <div className={styles.root}>
      <Icon className={cs(styles.icon, className)} />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.object,
  className: PropTypes.string,
}
