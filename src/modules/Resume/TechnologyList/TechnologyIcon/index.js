import PropTypes from "prop-types"
import React from "react"
import { useIcon } from "../../../../lib/assets"
import styles from "./TechnologyIcon.module.css"

export function TechnologyIcon({ name = "", path = "" }) {
  const [image] = useIcon(`technologies/${path}`)

  return <img src={image} alt={name} className={styles.root} />
}

TechnologyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
