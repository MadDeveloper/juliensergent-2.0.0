import cs from "classnames"
import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Typography } from "../../components/Typography"
import { config } from "../../config"
import styles from "./Home.module.css"

export function Home() {
  const history = useHistory()
  const [hidden, setHidden] = useState(true)
  const titleRef = useRef(null)
  const [showCursor, setShowCursor] = useState(true)

  function navigateToResume() {
    history.push(config.routes.resume)
  }

  useEffect(() => {
    // header & footer animation are lazy written. Should be refactored.
    const header = document.getElementsByTagName("header")[0]
    const footer = document.getElementsByTagName("footer")[0]

    header.style.opacity = 0
    footer.style.opacity = 0

    setTimeout(() => {
      header.style.transition = "opacity 1s"
      footer.style.transition = "opacity 1s"

      setTimeout(() => {
        header.style.transition = "none"
        footer.style.transition = "none"
      }, 2000)
    }, 100)

    function write(text = "") {
      $title.innerHTML = $title.innerHTML + text
    }

    function postAnimation() {
      setShowCursor(false)
      setHidden(false)
      header.style.opacity = 1
      footer.style.opacity = 1
    }

    const { current: $title } = titleRef
    const text = `Hi, I'm Julien.`
    const durations = [, , 200, , , , , , , , , , , , 800]
    const defaultDuration = 100

    text
      .split("")
      .reduce(
        (promise, letter, index) =>
          promise.then(() => {
            write(letter)

            return new Promise(resolve =>
              setTimeout(resolve, durations[index] || defaultDuration)
            )
          }),
        Promise.resolve()
      )
      .then(postAnimation)
  }, [])

  return (
    <div className={cs(styles.root, { [styles.hidden]: hidden })}>
      <div className={styles.presentation}>
        <div>
          <Typography.PageTitle
            className={cs(styles.name, { [styles.animated]: !hidden })}
            heading
          >
            <span ref={titleRef} />
            {showCursor && <span className={styles.cursor}>&nbsp;</span>}
          </Typography.PageTitle>
          <div className={styles.description}>
            <Typography.Subtitle className={styles.element}>
              I'm a <span className={styles.highlight}>software engineer</span>,
              <br />
              <span className={styles.highlight}>web artisan</span> and{" "}
              <span className={cs(styles.highlight, styles.design)}>
                design maniac
              </span>
              .
            </Typography.Subtitle>
          </div>
          <div>
            <Button className={styles.showMore} onClick={navigateToResume}>
              View my resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
