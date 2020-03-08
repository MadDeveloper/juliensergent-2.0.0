import PropTypes from "prop-types"
import React from "react"
import { Content } from "../Content"
import { Main } from "../Main"
import styles from "./MainContent.module.css"

export function MainContent({ children }) {
  return (
    <Main>
      <Content className={styles.root}>{children}</Content>
    </Main>
  )
}

MainContent.propTypes = {
  children: PropTypes.any
}