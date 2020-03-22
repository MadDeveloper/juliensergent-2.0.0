import cs from "classnames"
import Prism from "prismjs"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { ReactComponent as CopyIcon } from "../../assets/icons/editor/copy.svg"
import { IconButton } from "../IconButton"
import { Typography } from "../Typography"
import styles from "./Editor.module.css"

export function Editor({ files = [] }) {
  const codeRef = useRef(null)
  const [currentFile, setCurrentFile] = useState(files[0])

  function copyCodeToClipboard() {
    // @todo: add tooltips
    const { code } = currentFile
    const element = document.createElement("textarea")

    element.value = code
    element.setAttribute("readonly", "")
    element.style.position = "absolute"
    element.style.left = "-9999px"
    document.body.appendChild(element)

    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false

    element.select()
    document.execCommand("copy")
    document.body.removeChild(element)

    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
  }

  useEffect(() => {
    codeRef.current.innerHTML = Prism.highlight(
      currentFile.code,
      Prism.languages[currentFile.language],
      currentFile.language
    )
  }, [currentFile.language, currentFile.code])

  const showFiles = Array.isArray(files) && files.length > 0

  return (
    <div className={styles.root}>
      <div className={styles.actions}>
        <IconButton onClick={copyCodeToClipboard}>
          <CopyIcon />
        </IconButton>
      </div>
      <div className={styles.files}>
        {showFiles &&
          files.map((file) => (
            <div
              key={file.name}
              className={cs(styles.file, {
                [styles.active]: currentFile.name === file.name,
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
        <code
          ref={codeRef}
          className={cs(`language-${currentFile.language}`, styles.code)}
        ></code>
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
}
