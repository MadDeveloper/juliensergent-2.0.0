import PropTypes from "prop-types"
import React from "react"
import { File } from "./File"
import styles from "./Files.module.css"

export function Files({ files = [], active = null, onSelectFile }) {
  return (
    <div className={styles.root}>
      {files.map((file) => (
        <File
          key={file.name}
          file={file}
          active={active?.name === file.name}
          onSelect={onSelectFile}
        />
      ))}
    </div>
  )
}

Files.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.object,
  onSelectFile: PropTypes.func.isRequired,
}
