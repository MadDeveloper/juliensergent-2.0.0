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
          <Card
            className={cs(styles.card, styles.buttons, styles.w33)}
            header={<ButtonIcon className={styles.icon} />}
            headerClassName={styles.header}
            title="Buttons"
            titleClassName={styles.title}
            description="For me, buttons are very important and a part of good design."
            descriptionClassName={styles.description}
            onClick={navigateToButtons}
          />
          <Card
            className={cs(styles.card, styles.messages, styles.w33)}
            header={<ChatIcon className={styles.icon} />}
            headerClassName={styles.header}
            title="Messages"
            titleClassName={styles.title}
            description="Having a feedback message after an action leads to a good UX."
            descriptionClassName={styles.description}
            onClick={navigateToMessages}
          />
          <Card
            className={cs(styles.card, styles.inputs, styles.w33)}
            header={<InputIcon className={styles.icon} />}
            headerClassName={styles.header}
            title="Inputs"
            titleClassName={styles.title}
            description="Inputs are used almost an each website, and their UX and UI are
            often miserable."
            descriptionClassName={styles.description}
            onClick={navigateToInputs}
          />
        </div>
        <div className={styles.cards}>
          <div className={cs(styles.cards, styles.w50)}>
            <Card
              className={cs(styles.card, styles.cardsCard)}
              header={<CardsIcon className={styles.icon} />}
              headerClassName={styles.header}
              title="Cards"
              titleClassName={styles.title}
              description="Now used in many ways and almost every website."
              descriptionClassName={styles.description}
              onClick={navigateToCards}
            ></Card>
          </div>
          <div className={cs(styles.cards, styles.vertical, styles.w50)}>
            <Card
              className={cs(styles.card, styles.typography)}
              header={<TypographyIcon className={styles.icon} />}
              headerClassName={styles.header}
              title="Typography"
              titleClassName={styles.title}
              description="Typography is the foundation of everything."
              descriptionClassName={styles.description}
              onClick={navigateToTypography}
            ></Card>
            <Card
              className={cs(styles.card, styles.links)}
              header={<LinkIcon className={styles.icon} />}
              headerClassName={styles.header}
              title="Links"
              titleClassName={styles.title}
              description="Basis of the navigation, a good UI/UX is vital."
              descriptionClassName={styles.description}
              onClick={navigateToLinks}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  )
}
