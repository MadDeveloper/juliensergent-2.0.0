import PropTypes from "prop-types"
import React from "react"
import { Message } from "../../../../../components/Message"
import styles from "./MoreComing.module.css"

export function MoreComing({ children }) {
  return (
    <Message info className={styles.root}>
      {children}
    </Message>
  )
}

MoreComing.propTypes = {
  children: PropTypes.string,
}
