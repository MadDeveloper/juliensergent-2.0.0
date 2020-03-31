import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../Typography"
import styles from "./File.module.css"

export function File({ file = {}, active = false, onSelect }) {
  function handleSelect() {
    onSelect(file)
  }

  return (
    <div
      className={cs(styles.root, {
        [styles.active]: active,
      })}
      onClick={handleSelect}
    >
      <Typography.Text className={styles.name}>{file.name}</Typography.Text>
    </div>
  )
}

File.propTypes = {
  files: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
}
