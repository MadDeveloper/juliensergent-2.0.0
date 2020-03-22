import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Tooltip } from "react-tippy"
import styles from "./IconButton.module.css"

export function IconButton({
  active = false,
  children,
  tooltipId = "",
  tooltip = "",
  tooltipProps,
  ...props
}) {
  return (
    <Tooltip
      disabled={!tooltip}
      position="top"
      title={tooltip}
      trigger="mouseenter"
      hideOnClick={false}
      animation="shift"
      animateFill={false}
      arrow
    >
      <button
        className={cs(styles.root, { [styles.active]: active })}
        {...props}
      >
        {children}
      </button>
    </Tooltip>
  )
}

IconButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element.isRequired,
  tooltipId: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipProps: PropTypes.object,
  onClick: PropTypes.func,
}
