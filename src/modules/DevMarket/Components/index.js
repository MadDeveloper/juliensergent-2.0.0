import cs from "classnames"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Typography } from "../../../components/Typography"
import styles from "./List.module.css"

export function Components() {
  const navigate = useNavigate()

  function navigateToButtons() {
    navigate("buttons")
  }

  function navigateToInputs() {
    navigate("inputs")
  }

  return (
    <div>
      <Typography.Title>Components</Typography.Title>
      <div className={styles.cards}>
        <div
          className={cs(styles.card, styles.buttons)}
          onClick={navigateToButtons}
        >
          <Typography.Subtitle className={styles.title}>
            Buttons
          </Typography.Subtitle>
          <Typography.Text className={styles.description}>
            For me, buttons are very important and a part of good design.
          </Typography.Text>
        </div>
        <div
          className={cs(styles.card, styles.inputs)}
          onClick={navigateToInputs}
        >
          <Typography.Subtitle className={styles.title}>
            Inputs
          </Typography.Subtitle>
          <Typography.Text className={styles.description}>
            Inputs are used almost an each website, and their UX and UI are
            often miserable.
          </Typography.Text>
        </div>
      </div>
    </div>
  )
}
