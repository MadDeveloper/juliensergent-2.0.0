import cs from "classnames"
import React from "react"
import { Message } from ".."
import { Typography } from "../../Typography"
import styles from "./InfoMessage.module.css"

export function InfoMessage({ className, ...props }) {
  return (
    <Message
      {...props}
      icon="information"
      className={cs(styles.root, className)}
    >
      <Typography.Text className={styles.label}>
        {props.children}
      </Typography.Text>
    </Message>
  )
}

InfoMessage.propTypes = Message.propTypes
