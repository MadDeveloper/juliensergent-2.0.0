import PropTypes from "prop-types"
import React from "react"
import { InfoMessage } from "../../../../../components/Message/InfoMessage"
import styles from "./MoreComing.module.css"

export function MoreComing({ children }) {
  return <InfoMessage className={styles.root}>{children}</InfoMessage>
}

MoreComing.propTypes = {
  children: PropTypes.string,
}
