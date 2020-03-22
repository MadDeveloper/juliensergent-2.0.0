import cs from "classnames"
import React, { useState } from "react"
import { ReactComponent as SourceIcon } from "../../assets/icons/editor/source.svg"
import { Button } from "../../components/Button"
import { Editor } from "../../components/Editor"
import { IconButton } from "../../components/IconButton"
import { CopyIconButton } from "../../components/IconButton/CopyIconButton"
import { Layout } from "../../components/Layout"
import { InfoMessage } from "../../components/Message/InfoMessage"
import { Typography } from "../../components/Typography"
import styles from "./DevShop.module.css"

export function DevShop() {
  const [showCode, setShowCode] = useState(false)

  function toggleCode() {
    setShowCode(!showCode)
  }

  return (
    <Layout.MainContent>
      <Typography.PageTitle>Developers shop</Typography.PageTitle>
      <InfoMessage>Section in construction.</InfoMessage>
      <Typography.Paragraph>
        <Typography.Text>
          You will be able to found a list of open source components I will
          share with you, and unlicensed.
        </Typography.Text>
      </Typography.Paragraph>
      <div className={styles.component}>
        <Typography.Subtitle className={styles.title}>
          Button
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>
            For me, buttons are very important and a part of good design.
          </Typography.Text>
        </Typography.Paragraph>
        <div className={styles.live}>
          <Button>Button</Button>
        </div>
        <div className={styles.actions}>
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
        <div className={cs(styles.editor, { [styles.hidden]: !showCode })}>
          <Editor
            files={[
              {
                name: "Button.js",
                language: "js",
                code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Button.module.css"

export function Button({
  type = "button",
  className = "",
  secondary = false,
  compact = false,
  onClick,
  children,
}) {
  function handleClick(event) {
    if (typeof onClick === "function") {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      className={cs(styles.root, className, {
        [styles.secondary]: secondary,
        [styles.compact]: compact,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  secondary: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
}
`,
              },
              {
                name: "Button.module.css",
                code: `.root {
  font-family: "Roboto", sans-serif;
  font-size: var(--text-font-size);
  font-weight: 500;
  padding: var(--standard-padding-vertical) var(--standard-padding-horizontal);
  color: var(--button-color);
  outline: none;
  border: none;
  background-color: var(--button-background-color);
  border-radius: var(--default-border-radius);
  transition-property: border-color, background-color, color, transform;
  transition-duration: 0.2s;
}

.root:hover {
  color: var(--active-primary-color);
}

.root:active {
  transform: scale(0.95);
}

.root.secondary {
  background-color: transparent;
  color: var(--text-color-normal);
}

.root.compact {
  padding: 5px 10px;
}
`,
                language: "css",
              },
            ]}
          />
        </div>
      </div>
    </Layout.MainContent>
  )
}
