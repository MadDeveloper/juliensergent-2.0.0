import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Content } from "../Content"
import { Main } from "../Main"
import styles from "./MainContent.module.css"

export function MainContent({ className = "", children }) {
  return (
    <Main className={cs(styles.root, className)}>
      <Content>{children}</Content>
    </Main>
  )
}

MainContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
