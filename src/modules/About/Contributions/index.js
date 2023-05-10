import React from "react"
import { Typography } from "../../../components/Typography"
import { useFetch } from "../../../lib/fetch"
import styles from "./Contributions.module.css"
import { Project } from "./Project"

const fetchOptions = {
  withCredentials: false,
}

export function Contributions() {
  const { response: ramdaRepositoryData } = useFetch(
    "https://api.github.com/repos/ramda/ramda",
    fetchOptions
  )

  const { response: rskRepositoryData } = useFetch(
    "https://api.github.com/repos/hodgef/react-simple-keyboard",
    fetchOptions
  )

  const { response: rctRepositoryData } = useFetch(
    "https://api.github.com/repos/namespace-ee/react-calendar-timeline",
    fetchOptions
  )

  const { response: dtRepositoryData } = useFetch(
    "https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped",
    fetchOptions
  )

  const { response: nwRepositoryData } = useFetch(
    "https://api.github.com/repos/maximegris/node-websockify",
    fetchOptions
  )

  const { response: ccRepositoryData } = useFetch(
    "https://api.github.com/repos/ekryski/caress-client",
    fetchOptions
  )

  const { response: csRepositoryData } = useFetch(
    "https://api.github.com/repos/ekryski/caress-server",
    fetchOptions
  )

  return (
    <section>
      <Typography.Title>Contributions</Typography.Title>
      <Typography.Paragraph heading>
        <Typography.Text>
          Here is the list of open source projects which I contributed on.
        </Typography.Text>
      </Typography.Paragraph>
      <div className={styles.projects}>
        <div className={styles.project}>
          <Project
            name="Ramda"
            description="A practical functional library for JavaScript programmers."
            stars={ramdaRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/ramda/ramda"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="DefinitelyTyped"
            description="The repository for high quality TypeScript type definitions."
            stars={dtRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/DefinitelyTyped/DefinitelyTyped"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="react-simple-keyboard"
            description="Virtual Keyboard for React. Customizable, responsive and lightweight."
            stars={rskRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/hodgef/react-simple-keyboard"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="react-calendar-timeline"
            description="A modern and responsive React timeline component."
            stars={rctRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/namespace-ee/react-calendar-timeline"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="node-websockify"
            description="WebSocket-to-TCP proxy/bridge you can use in a NodeJS program."
            stars={nwRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/maximegris/node-websockify"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="caress-client"
            description="avaScript library that converts TUIO events to native browser touches as proposed by the W3C Touch Events version 2."
            stars={ccRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/ekryski/caress-client"
          />
        </div>
        <div className={styles.project}>
          <Project
            name="caress-server"
            description="NodeJS + Socket.io backed Javascript implementation of the TUIO protocol bringing true cross platform TUIO support."
            stars={csRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/ekryski/caress-server"
          />
        </div>
      </div>
    </section>
  )
}
