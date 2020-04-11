import cs from "classnames"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ButtonIcon } from "../../../assets/icons/button.svg"
import { ReactComponent as CardsIcon } from "../../../assets/icons/cards.svg"
import { ReactComponent as ChatIcon } from "../../../assets/icons/info.svg"
import { ReactComponent as InputIcon } from "../../../assets/icons/input.svg"
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg"
import { ReactComponent as TypographyIcon } from "../../../assets/icons/typography.svg"
import { Card } from "../../../components/Card"
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

  function navigateToCards() {
    navigate("cards")
  }

  return (
    <div>
      <Typography.Title>Components</Typography.Title>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <Card.Layout
            className={cs(styles.card, styles.buttons, styles.w33)}
            onClick={navigateToButtons}
          >
            <Card.Content className={styles.content}>
              <Card.Icon icon={ButtonIcon} className={styles.icon} />
              <div>
                <Card.Title className={styles.title}>Buttons</Card.Title>
                <Card.Description className={styles.description}>
                  For me, buttons are very important and a part of good design.
                </Card.Description>
              </div>
            </Card.Content>
          </Card.Layout>
          <Card.Layout
            className={cs(styles.card, styles.messages, styles.w33)}
            onClick={navigateToMessages}
          >
            <Card.Content className={styles.content}>
              <Card.Icon icon={ChatIcon} className={styles.icon} />
              <div>
                <Card.Title className={styles.title}>Messages</Card.Title>
                <Card.Description className={styles.description}>
                  Having a feedback message after an action leads to a good UX.
                </Card.Description>
              </div>
            </Card.Content>
          </Card.Layout>
          <Card.Layout
            className={cs(styles.card, styles.inputs, styles.w33)}
            onClick={navigateToInputs}
          >
            <Card.Content className={styles.content}>
              <Card.Icon icon={InputIcon} className={styles.icon} />
              <div>
                <Card.Title className={styles.title}>Inputs</Card.Title>
                <Card.Description className={styles.description}>
                  Inputs are used almost an each website, and their UX and UI
                  are often miserable.
                </Card.Description>
              </div>
            </Card.Content>
          </Card.Layout>
        </div>
        <div className={styles.cards}>
          <div className={cs(styles.cards, styles.w50)}>
            <Card.Layout
              className={cs(styles.card, styles.cardsCard)}
              onClick={navigateToCards}
            >
              <Card.Content className={styles.content}>
                <Card.Icon icon={CardsIcon} className={styles.icon} />
                <div>
                  <Card.Title className={styles.title}>Cards</Card.Title>
                  <Card.Description className={styles.description}>
                    Now used in many ways and almost every website.
                  </Card.Description>
                </div>
              </Card.Content>
            </Card.Layout>
          </div>
          <div className={cs(styles.cards, styles.vertical, styles.w50)}>
            <Card.Layout
              className={cs(styles.card, styles.typography)}
              onClick={navigateToTypography}
            >
              <Card.Content className={styles.content}>
                <Card.Icon icon={TypographyIcon} className={styles.icon} />
                <div>
                  <Card.Title className={styles.title}>Typography</Card.Title>
                  <Card.Description className={styles.description}>
                    Typography is the foundation of everything.
                  </Card.Description>
                </div>
              </Card.Content>
            </Card.Layout>
            <Card.Layout
              className={cs(styles.card, styles.links)}
              onClick={navigateToLinks}
            >
              <Card.Content className={styles.content}>
                <Card.Icon icon={LinkIcon} className={styles.icon} />
                <div>
                  <Card.Title className={styles.title}>Links</Card.Title>
                  <Card.Description className={styles.description}>
                    Basis of the navigation, a good UI/UX is vital.
                  </Card.Description>
                </div>
              </Card.Content>
            </Card.Layout>
          </div>
        </div>
      </div>
    </div>
  )
}
