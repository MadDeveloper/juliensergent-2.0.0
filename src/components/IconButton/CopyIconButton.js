import PropTypes from "prop-types"
import React, { useState } from "react"
import { IconButton } from "."
import { ReactComponent as CopyIcon } from "../../assets/icons/editor/copy.svg"

export function CopyIconButton({ text = "Copy", contentToCopy }) {
  const [copied, setCopied] = useState(false)

  function copyCodeToClipboard() {
    const element = document.createElement("textarea")

    element.value = contentToCopy
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

    setCopied(true)

    const timeout = setTimeout(() => setCopied(false), 3000)

    return () => clearTimeout(timeout)
  }

  return (
    <IconButton
      onClick={copyCodeToClipboard}
      tooltip={copied ? "Copied!" : text}
    >
      <CopyIcon />
    </IconButton>
  )
}

CopyIconButton.propTypes = {
  text: PropTypes.string,
  contentToCopy: PropTypes.string.isRequired,
}
