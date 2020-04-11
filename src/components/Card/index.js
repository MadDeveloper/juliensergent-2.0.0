import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../Typography"
import styles from "./Card.module.css"

export function Card({
  header = null,
  headerClassName = "",
  title = "",
  titleClassName = "",
  description = "",
  descriptionClassName = "",
  className = "",
  ...props
}) {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {header && (
        <div className={cs(styles.header, headerClassName)}>{header}</div>
      )}
      <div>
        {title && title.length > 0 && (
          <Typography.Subtitle className={cs(styles.title, titleClassName)}>
            {title}
          </Typography.Subtitle>
        )}
        {description && description.length > 0 && (
          <Typography.Text
            className={cs(styles.description, descriptionClassName)}
            secondary
          >
            {description}
          </Typography.Text>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.any,
  headerClassName: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  description: PropTypes.string,
  descriptionClassName: PropTypes.string,
  className: PropTypes.string,
}
