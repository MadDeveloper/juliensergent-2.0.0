import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as ExternalLinkIcon } from "../../assets/icons/external-link.svg"
import styles from "./ExternalLink.module.css"

export function ExternalLink({
  to = "",
  className = "",
  showIcon = true,
  children,
  ...props
}) {
  return (
    <a
      {...props}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={cs(styles.root, className)}
    >
      {showIcon && (
        <ExternalLinkIcon title={props.title || to} className={styles.icon} />
      )}
      {children || to}
    </a>
  )
}

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  showIcon: PropTypes.bool,
  children: PropTypes.any,
}
