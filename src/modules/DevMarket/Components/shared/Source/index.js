import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Editor } from "../../../../../components/Editor"
import styles from "./Source.module.css"

export function Source({ hidden = false, files = [] }) {
  return (
    <div className={cs(styles.root, { [styles.hidden]: hidden })}>
      <Editor files={files} />
    </div>
  )
}

Source.propTypes = {
  hidden: PropTypes.bool,
}
