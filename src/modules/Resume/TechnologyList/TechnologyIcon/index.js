import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { useIcon } from "../../../../lib/assets"
import styles from "./TechnologyIcon.module.css"

export function TechnologyIcon({ name = "", path = "", small = false }) {
  const [image] = useIcon(`technologies/${path}`)

  return (
    <img
      src={image}
      title={name}
      alt={name}
      className={cs(styles.root, { [styles.small]: small })}
    />
  )
}

TechnologyIcon.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  small: PropTypes.bool,
}
