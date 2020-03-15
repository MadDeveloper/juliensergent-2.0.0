import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { TechnologyIcon } from "./TechnologyIcon"
import styles from "./TechnologyList.module.css"

export function TechnologyList({ list = [], className = "" }) {
  return (
    <div className={cs(styles.root, className)}>
      {list.map(technology => (
        <div key={technology.name} className={styles.technology}>
          <TechnologyIcon name={technology.name} path={technology.path} />
        </div>
      ))}
    </div>
  )
}

TechnologyList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
}
