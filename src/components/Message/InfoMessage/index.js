import cs from "classnames"
import React from "react"
import { Message } from ".."
import { Typography } from "../../Typography"
import styles from "./InfoMessage.module.css"

export function InfoMessage({ className, children, ...props }) {
  return (
    <Message className={cs(styles.root, className)} {...props}>
      <Typography.Text className={styles.label}>{children}</Typography.Text>
    </Message>
  )
}

InfoMessage.propTypes = Message.propTypes
