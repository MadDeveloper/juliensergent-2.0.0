import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../components/Typography"
import { useImage } from "../../../lib/assets"
import styles from "./TechnologyIcon.module.css"

export function TechnologyIcon({ name = "", path = "" }) {
  const [image] = useImage(`technologies/${path}`)

  return (
    <div className={styles.root}>
      <img src={image} alt={name} className={styles.image} />
      <Typography.Text secondary>{name}</Typography.Text>
    </div>
  )
}

TechnologyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
