import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({ action, className, children }) {
  return (
    <div className={cs(styles.root, className)}>
      <div className={styles.content}>{children}</div>
      {React.isValidElement(action) && (
        <div className={styles.actionIconContainer}>{action}</div>
      )}
    </div>
  )
}

Message.propTypes = {
  action: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),
  onTriggerAction: PropTypes.func,
}
