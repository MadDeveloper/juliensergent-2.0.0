import cs from "classnames"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ButtonIcon } from "../../../assets/icons/button.svg"
import { ReactComponent as InputIcon } from "../../../assets/icons/input.svg"
import { Typography } from "../../../components/Typography"
import styles from "./Components.module.css"

export function Components() {
  const navigate = useNavigate()

  function navigateToButtons() {
    navigate("buttons")
  }

  function navigateToInputs() {
    navigate("inputs")
  }

  function navigateToTypography() {
    navigate("typography")
  }

  return (
    <div>
      <Typography.Title>Components</Typography.Title>
      <div className={styles.cards}>
        <div
          className={cs(styles.card, styles.buttons)}
          onClick={navigateToButtons}
        >
          <ButtonIcon className={styles.icon} />
          <div>
            <Typography.Subtitle className={styles.title}>
              Buttons
            </Typography.Subtitle>
            <Typography.Text className={styles.description}>
              For me, buttons are very important and a part of good design.
            </Typography.Text>
          </div>
        </div>
        <div
          className={cs(styles.card, styles.inputs)}
          onClick={navigateToInputs}
        >
          <InputIcon className={styles.icon} />
          <div>
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
      <div className={styles.cards}>
        <div
          className={cs(styles.card, styles.typography)}
          onClick={navigateToTypography}
        >
          <InputIcon className={styles.icon} />
          <div>
            <Typography.Subtitle className={styles.title}>
              Typography
            </Typography.Subtitle>
            <Typography.Text className={styles.description}>
              Typography is the foundation of everything.
            </Typography.Text>
          </div>
        </div>
        <div className={cs(styles.card, styles.cardsCard)}>
          <InputIcon className={styles.icon} />
          <div>
            <Typography.Subtitle className={styles.title}>
              Cards
            </Typography.Subtitle>
            <Typography.Text className={styles.description}>
              Now used in many ways and almost every website.
            </Typography.Text>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={cs(styles.card, styles.links)}>
          <InputIcon className={styles.icon} />
          <div>
            <Typography.Subtitle className={styles.title}>
              Links
            </Typography.Subtitle>
            <Typography.Text className={styles.description}>
              Basis of the navigation, a good UI/UX is vital.
            </Typography.Text>
          </div>
        </div>
        <div className={cs(styles.card, styles.messages)}>
          <InputIcon className={styles.icon} />
          <div>
            <Typography.Subtitle className={styles.title}>
              Message
            </Typography.Subtitle>
            <Typography.Text className={styles.description}>
              Displayed for informations, success or errors.
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  )
}
