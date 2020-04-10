import cs from "classnames"
import React from "react"
import { Message } from ".."
import { Typography } from "../../Typography"
import styles from "./SuccessMessage.module.css"

export function SuccessMessage({ className, children, ...props }) {
  return (
    <Message className={cs(styles.root, className)} {...props}>
      <Typography.Text className={styles.label}>{children}</Typography.Text>
    </Message>
  )
}

SuccessMessage.propTypes = Message.propTypes
