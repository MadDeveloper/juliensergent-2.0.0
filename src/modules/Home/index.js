import cs from "classnames"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../components/Button"
import { Typography } from "../../components/Typography"
import { config } from "../../config"
import styles from "./Home.module.css"

export function Home() {
  const history = useHistory()
  const [animationPlayed, setAnimationPlayed] = useState(
    !!sessionStorage.getItem("homepage.animation.played")
  )
  const [hidden, setHidden] = useState(!animationPlayed)
  const titleRef = useRef(null)
  const [playingAnimation, setPlayingAnimation] = useState(false)
  const [showCursor, setShowCursor] = useState(!animationPlayed)
  const triggerPageAnimation = useCallback(() => {
    const header = document.getElementsByTagName("header")[0]
    const footer = document.getElementsByTagName("footer")[0]

    function initAnimation() {
      return new Promise(resolve => {
        setPlayingAnimation(true)
        setAnimationPlayed(false)
        setHidden(true)
        setShowCursor(true)

        header.style.transform = "translateY(-100px)"
        header.style.opacity = 0
        footer.style.transform = "translateY(100px)"
        footer.style.opacity = 0
        document.body.style.overflowY = "hidden"

        setTimeout(() => {
          header.style.transition = "transform 1s 1s, opacity 1s 1s"
          footer.style.transition = "transform 1s 1s, opacity 1s 1s"
        }, 100)

        if (animationPlayed) {
          setTimeout(resolve, 1000)
        } else {
          resolve()
        }
      })
    }

    initAnimation().then(() => {
      // header, footer & body animations are lazy written. Should be refactored.
      function write(text = "") {
        titleRef.current.innerHTML = titleRef.current.innerHTML + text
      }

      function postAnimation() {
        setShowCursor(false)
        setHidden(false)
        header.style.transform = "translateY(0)"
        header.style.opacity = 1
        footer.style.transform = "translateY(0)"
        footer.style.opacity = 1
        sessionStorage.setItem("homepage.animation.played", "true")
        setAnimationPlayed(true)
        setTimeout(() => {
          header.style.transition = "none"
          footer.style.transition = "none"
          document.body.style.overflowY = "auto"
        }, 2000)
      }

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
    })
  }, [animationPlayed])

  function navigateToResume() {
    history.push(config.routes.resume)
  }

  useEffect(() => {
    if (!animationPlayed && !playingAnimation) {
      triggerPageAnimation()
    }
  }, [animationPlayed, playingAnimation, triggerPageAnimation])

  return (
    <div className={cs(styles.root, { [styles.hidden]: hidden })}>
      <div className={styles.presentation}>
        <div>
          <Typography.PageTitle
            className={cs(styles.name, { [styles.animated]: !hidden })}
            heading
          >
            <span ref={titleRef}>{animationPlayed && `Hi, I'm Julien.`}</span>
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
          <div className={styles.showMore}>
            <Button className={styles.button} onClick={navigateToResume}>
              View my resume
            </Button>
          </div>
          <div className={styles.replay}>
            <Typography.Text
              className={styles.link}
              secondary
              onClick={triggerPageAnimation}
            >
              Replay page animation
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  )
}
