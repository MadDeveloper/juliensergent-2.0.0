import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as StarIcon } from "../../../../assets/icons/star.svg"
import { ExternalLink } from "../../../../components/ExternalLink"
import { Typography } from "../../../../components/Typography"
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
        <Typography.Paragraph heading>
          <Typography.Text secondary>{description}</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.metadata}>
          {Number.isFinite(stars) && (
            <div className={styles.item}>
              <StarIcon className={styles.icon} />
              <Typography.Text secondary>
                {stars.toLocaleString("en-US")}
              </Typography.Text>
            </div>
          )}
          <div className={styles.item}>
            <ExternalLink to={repositoryLink}>View on GitHub</ExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  icon: PropTypes.object,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number,
  repositoryLink: PropTypes.string.isRequired,
}
