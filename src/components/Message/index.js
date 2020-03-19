import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({
  icon,
  actionIcon,
  className,
  children,
  onTriggerAction
}) {
  return (
    <div className={cs(styles.root, className)}>
      <div className={styles.content}>
        {/* <FontIcon value={icon} className={styles.icon} /> */}
        {children}
      </div>
      {/* {actionIcon && (
        <IconButton
          icon={actionIcon}
          className={styles.action}
          onClick={onTriggerAction}
        />
      )} */}
    </div>
  )
}

Message.propTypes = {
  icon: PropTypes.string,
  actionIcon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool
  ]),
  onTriggerAction: PropTypes.func
}
