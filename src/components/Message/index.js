import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({
  action,
  className,
  success = false,
  warning = false,
  error = false,
  info = false,
  children,
}) {
  return (
    <div
      className={cs(
        styles.root,
        {
          [styles.success]: success,
          [styles.warning]: warning,
          [styles.error]: error,
          [styles.info]: info,
        },
        className
      )}
    >
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
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),
}
