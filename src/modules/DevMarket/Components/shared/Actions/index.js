import PropTypes from "prop-types"
import React, { useState } from "react"
import { ReactComponent as SourceIcon } from "../../../../../assets/icons/editor/source.svg"
import { IconButton } from "../../../../../components/IconButton"
import { CopyIconButton } from "../../../../../components/IconButton/CopyIconButton"
import styles from "./Actions.module.css"

export function Actions({ onToggleCode }) {
  const [showCode, setShowCode] = useState(false)

  function toggleCode() {
    setShowCode(!showCode)

    if (typeof onToggleCode === "function") {
      onToggleCode(!showCode)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.action}>
        <IconButton
          active={showCode}
          tooltip="Toggle source"
          onClick={toggleCode}
        >
          <SourceIcon />
        </IconButton>
      </div>
      <div className={styles.action}>
        <CopyIconButton text="Copy full source" contentToCopy="" />
      </div>
    </div>
  )
}

Actions.propTypes = {
  onToggleCode: PropTypes.func,
}
