import cs from "classnames"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { isHomeAnimationPlayed, setHomeAnimationAsPlayed } from "../../lib/app"
import styles from "./Home.module.css"

export function Home() {
  const navigation = useNavigate()
  const [animationPlayed, setAnimationPlayed] = useState(
    isHomeAnimationPlayed()
  )
  const [hidden, setHidden] = useState(!animationPlayed)
  const titleRef = useRef(null)
  const [playingAnimation, setPlayingAnimation] = useState(false)
  const [showCursor, setShowCursor] = useState(!animationPlayed)
  const triggerPageAnimation = useCallback(() => {
    const header = document.getElementsByTagName("header")[0]
    const footer = document.getElementsByTagName("footer")[0]

    function initAnimation() {
      return new Promise((resolve) => {
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
          header.style.transition = "transform 1s 0.2s, opacity 1s 0.2s"
          footer.style.transition = "transform 1s 0.2s, opacity 1s 0.2s"
        }, 100)

        if (animationPlayed) {
          setTimeout(resolve, 1200)
        } else {
          resolve()
        }
      })
    }

    // header, footer & footer animations are lazy written. Should be refactored.
    function write(text = "") {
      titleRef.current.innerHTML = titleRef.current.innerHTML + text
    }

    function postAnimation() {
      setAnimationPlayed(true)
      setShowCursor(false)
      setHidden(false)
      header.style.transform = "none"
      header.style.opacity = 1
      footer.style.transform = "none"
      footer.style.opacity = 1
      setHomeAnimationAsPlayed()
      setTimeout(() => {
        document.body.style.overflowY = "auto"
      }, 2000)
    }

    const text = `Hi, I'm Julien.`
    // eslint-disable-next-line no-sparse-arrays
    const durations = [, , 600, , , , , , , , , , , , 600]
    const defaultDuration = 100

    initAnimation()
      .then(() =>
        text.split("").reduce(
          (promise, letter, index) =>
            promise.then(() => {
              write(letter)

              return new Promise((resolve) =>
                setTimeout(resolve, durations[index] || defaultDuration)
              )
            }),
          Promise.resolve()
        )
      )
      .then(postAnimation)
  }, [animationPlayed])

  function navigateToAbout() {
    navigation("/about")
  }

  useEffect(() => {
    if (!animationPlayed && !playingAnimation) {
      triggerPageAnimation()
    }
  }, [animationPlayed, playingAnimation, triggerPageAnimation])

  return (
    <Layout.MainContent
      className={cs(styles.root, { [styles.hidden]: hidden })}
    >
      <div className={styles.presentation}>
        <div>
          <Typography.PageTitle
            className={cs(styles.name, { [styles.animated]: !hidden })}
            heading
          >
            <span ref={titleRef}>{animationPlayed && `Hi, I'm Julien.`}</span>
            <span
              className={cs(styles.cursor, { [styles.hidden]: !showCursor })}
            >
              &nbsp;
            </span>
          </Typography.PageTitle>
          <div className={styles.description}>
            <Typography.Subtitle className={cs(styles.element, styles.role)}>
              I'm a <span className={styles.highlight}>software engineer</span>
              <span>, </span>
              <br />
              <span className={styles.highlight}>web artisan</span>
              <span> and </span>
              <span className={cs(styles.highlight, styles.design)}>
                design maniac
              </span>
              .
            </Typography.Subtitle>
            <Typography.Subtitle className={styles.element}>
              Passionated about computer science since childhood, with a
              particular taste for the web.
              <br />I can talk about this everyday.
              <br />I talk about this everyday.
            </Typography.Subtitle>
          </div>
          <div className={styles.showMore}>
            <Button className={styles.button} onClick={navigateToAbout}>
              More about me
            </Button>
          </div>
        </div>
      </div>
    </Layout.MainContent>
  )
}
