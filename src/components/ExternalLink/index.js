import PropTypes from "prop-types"
import React from "react"

export function ExternalLink({ to = "", className = "", children, ...props }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children || to}
    </a>
  )
}

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
}
