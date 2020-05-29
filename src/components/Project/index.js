import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg"
import { ExternalLink } from "../ExternalLink"
import { Typography } from "../Typography"
import styles from "./Project.module.css"

export function Project({
  icon: Icon = null,
  name = "",
  description = "",
  stars,
  repositoryLink = "",
}) {
  return (
    <div className={styles.root}>
      {Icon && <Icon className={styles.icon} />}
      <div className={styles.content}>
        <Typography.Text className={styles.name} bold>
          {name}
        </Typography.Text>
        <div className={styles.metadata}>
          {Number.isFinite(stars) && (
            <div className={styles.item}>
              <StarIcon className={styles.icon} />
              <Typography.Text secondary>
                {stars.toLocaleString("en-US")}
              </Typography.Text>
            </div>
          )}
          {repositoryLink.length > 0 && (
            <div className={styles.item}>
              <ExternalLink to={repositoryLink}>View on GitHub</ExternalLink>
            </div>
          )}
        </div>
        <Typography.Paragraph className={styles.description} heading>
          <Typography.Text>{description}</Typography.Text>
        </Typography.Paragraph>
      </div>
    </div>
  )
}

Project.propTypes = {
  icon: PropTypes.object,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  stars: PropTypes.number,
  repositoryLink: PropTypes.string,
}
