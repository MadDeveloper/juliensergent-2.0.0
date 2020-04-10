import cs from "classnames"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ButtonIcon } from "../../../assets/icons/button.svg"
import { ReactComponent as CardsIcon } from "../../../assets/icons/cards.svg"
import { ReactComponent as ChatIcon } from "../../../assets/icons/info.svg"
import { ReactComponent as InputIcon } from "../../../assets/icons/input.svg"
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg"
import { ReactComponent as TypographyIcon } from "../../../assets/icons/typography.svg"
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

  function navigateToLinks() {
    navigate("links")
  }

  function navigateToMessages() {
    navigate("messages")
  }

  return (
    <div>
      <Typography.Title>Components</Typography.Title>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <div
            className={cs(styles.card, styles.buttons, styles.w33)}
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
            className={cs(styles.card, styles.messages, styles.w33)}
            onClick={navigateToMessages}
          >
            <ChatIcon className={styles.icon} />
            <div>
              <Typography.Subtitle className={styles.title}>
                Messages
              </Typography.Subtitle>
              <Typography.Text className={styles.description}>
                Having a feedback message after an action leads to a good UX.
              </Typography.Text>
            </div>
          </div>
          <div
            className={cs(styles.card, styles.inputs, styles.w33)}
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
          <div className={cs(styles.cards, styles.w50)}>
            <div className={cs(styles.card, styles.cardsCard)}>
              <CardsIcon className={styles.icon} />
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
          <div className={cs(styles.cards, styles.vertical, styles.w50)}>
            <div
              className={cs(styles.card, styles.typography)}
              onClick={navigateToTypography}
            >
              <TypographyIcon className={styles.icon} />
              <div>
                <Typography.Subtitle className={styles.title}>
                  Typography
                </Typography.Subtitle>
                <Typography.Text className={styles.description}>
                  Typography is the foundation of everything.
                </Typography.Text>
              </div>
            </div>
            <div
              className={cs(styles.card, styles.links)}
              onClick={navigateToLinks}
            >
              <LinkIcon className={styles.icon} />
              <div>
                <Typography.Subtitle className={styles.title}>
                  Links
                </Typography.Subtitle>
                <Typography.Text className={styles.description}>
                  Basis of the navigation, a good UI/UX is vital.
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
