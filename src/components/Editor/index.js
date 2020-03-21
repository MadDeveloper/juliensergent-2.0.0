import cs from "classnames"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Typography } from "../Typography"
import styles from "./Editor.module.css"

export function Editor({ code = "", files = [] }) {
  const [currentFile, setCurrentFile] = useState(files[0])

  return (
    <div className={styles.root}>
      <div className={styles.files}>
        {files.map(file => (
          <div
            key={file.name}
            className={cs(styles.file, {
              [styles.active]: currentFile.name === file.name
            })}
            onClick={() => setCurrentFile(file)}
          >
            <Typography.Text className={styles.name}>
              {file.name}
            </Typography.Text>
          </div>
        ))}
      </div>
      <pre className={styles.content}>
        <code className={styles.code}>{currentFile.code}</code>
      </pre>
    </div>
  )
}

Editor.propTypes = {
  code: PropTypes.string,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      language: PropTypes.string
    })
  )
}
