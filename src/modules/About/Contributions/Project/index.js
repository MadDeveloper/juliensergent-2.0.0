import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as StarIcon } from "../../../../assets/icons/star.svg"
import { Card } from "../../../../components/Card"
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
    <Card.Layout className={styles.root} clickable={false}>
      <Card.Content>
        <Card.Icon icon={Icon} />
        <Card.Title>{name}</Card.Title>
        <Card.Description>{description}</Card.Description>
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
            <ExternalLink to={repositoryLink}>View it on GitHub</ExternalLink>
          </div>
        </div>
      </Card.Content>
    </Card.Layout>
  )
}

Project.propTypes = {
  icon: PropTypes.object,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stars: PropTypes.number,
  repositoryLink: PropTypes.string.isRequired,
}
