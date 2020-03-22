import cs from "classnames"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import ReactTooltip from "react-tooltip"
import styles from "./IconButton.module.css"

export function IconButton({
  active = false,
  children,
  tooltipId = "",
  tooltipText = "",
  tooltipProps,
  ...props
}) {
  return (
    <Fragment>
      <div
        className={cs(styles.root, { [styles.active]: active })}
        data-tip={tooltipText}
        data-for={tooltipId}
        {...props}
      >
        {children}
      </div>
      {tooltipId.length > 0 && (
        <ReactTooltip
          id={tooltipId}
          effect="solid"
          place="top"
          type="dark"
          {...tooltipProps}
        />
      )}
    </Fragment>
  )
}

IconButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element.isRequired,
  tooltipId: PropTypes.string,
  tooltipText: PropTypes.string,
  tooltipProps: PropTypes.object,
  onClick: PropTypes.func,
}
