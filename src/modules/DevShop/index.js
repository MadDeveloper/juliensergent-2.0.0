import cs from "classnames"
import React, { useState } from "react"
import { ReactComponent as CopyIcon } from "../../assets/icons/editor/copy.svg"
import { ReactComponent as SourceIcon } from "../../assets/icons/editor/source.svg"
import { Button } from "../../components/Button"
import { Editor } from "../../components/Editor"
import { IconButton } from "../../components/IconButton"
import { Layout } from "../../components/Layout"
import { InfoMessage } from "../../components/Message/InfoMessage"
import { Typography } from "../../components/Typography"
import styles from "./DevShop.module.css"

export function DevShop() {
  const [code, setCode] = useState(`function Button {
  return (
    <button>Button</button>
  )
}`)
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
            <IconButton active={showCode} onClick={toggleCode}>
              <SourceIcon title="source" />
            </IconButton>
          </div>
          <div className={styles.action}>
            <IconButton>
              <CopyIcon title="copy" />
            </IconButton>
          </div>
        </div>
        <div className={cs(styles.editor, { [styles.hidden]: !showCode })}>
          <Editor
            files={[
              { name: "Button.js", code },
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
}`,
              },
            ]}
          />
        </div>
      </div>
    </Layout.MainContent>
  )
}
