import cs from "classnames"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Menu } from "../../components/Header/Menu"
import { Typography } from "../../components/Typography"
import { config } from "../../config"
import styles from "./Home.module.css"

const menuItemsHidden = [config.menu.resume]

export function Home() {
  const history = useHistory()
  const [hidden, setHidden] = useState(true)
  const titleRef = useRef(null)
  const [showCursor, setShowCursor] = useState(true)

  function navigateToResume() {
    history.push(config.routes.resume)
  }

  useEffect(() => {}, [])

  useLayoutEffect(() => {
    function write(text = "") {
      $title.innerHTML = $title.innerHTML + text
    }

    function postAnimation() {
      setShowCursor(false)
      setHidden(false)
    }

    const { current: $title } = titleRef
    const text = `Hi, I'm Julien.`
    const durations = [, , 600, , , , , , , , , , , , 1000]
    const defaultDuration = 120

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
              <span className={styles.highlight}>design maniac</span>.
            </Typography.Subtitle>
          </div>
          <div className={styles.showMore}>
            <Button onClick={navigateToResume} className={styles.button}>
              Show resume
            </Button>
          </div>
        </div>
        <div className={styles.photo} />
      </div>
      <div className={styles.menu}>
        <Menu itemsHidden={menuItemsHidden} />
      </div>
    </div>
  )
}
