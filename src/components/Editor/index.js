import cs from "classnames"
import Prism from "prismjs"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { CopyIconButton } from "../IconButton/CopyIconButton"
import styles from "./Editor.module.css"
import { Files } from "./Files"

export function Editor({ files = [], plugins = [] }) {
  const codeRef = useRef(null)
  const [currentFile, setCurrentFile] = useState(files[0])

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [currentFile.language, currentFile.code])

  const showFiles = Array.isArray(files) && files.length > 0

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <CopyIconButton contentToCopy={currentFile.code} />
      </div>
      {showFiles && (
        <Files
          files={files}
          active={currentFile}
          onSelectFile={setCurrentFile}
        />
      )}
      <pre className={cs(styles.content, plugins.join(" "))}>
        <code
          ref={codeRef}
          className={cs(`language-${currentFile.language}`, styles.code)}
        >
          {currentFile.code}
        </code>
      </pre>
    </div>
  )
}

Editor.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      language: PropTypes.string,
    })
  ),
  plugins: PropTypes.arrayOf(PropTypes.string),
}
