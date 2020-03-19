import cs from "classnames"
import React from "react"
import { Message } from "../"
import { Typography } from "../../Typography"
import styles from "./ErrorMessage.module.css"

export function ErrorMessage({ className, ...props }) {
  return (
    <Message
      {...props}
      icon="alert_circle"
      className={cs(styles.root, className)}
    >
      <Typography.Text className={styles.label}>
        {props.children}
      </Typography.Text>
    </Message>
  )
}

ErrorMessage.propTypes = Message.propTypes
