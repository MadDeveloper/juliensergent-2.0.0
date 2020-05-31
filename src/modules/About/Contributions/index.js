import React from "react"
import { ReactComponent as RamdaIcon } from "../../../assets/icons/technologies/ramda.svg"
import { Typography } from "../../../components/Typography"
import { useFetch } from "../../../lib/fetch"
import styles from "./Contributions.module.css"
import { Project } from "./Project"

export function Contributions() {
  const { response: ramdaRepositoryData } = useFetch(
    "https://api.github.com/repos/ramda/ramda",
    {
      withCredentials: false,
    }
  )

  return (
    <section>
      <Typography.Title>Contributions</Typography.Title>
      <div className={styles.projects}>
        <div className={styles.project}>
          <Project
            icon={RamdaIcon}
            name="Ramda"
            description="A practical functional library for JavaScript programmers."
            stars={ramdaRepositoryData?.stargazers_count}
            repositoryLink="https://github.com/ramda/ramda"
          />
        </div>
      </div>
    </section>
  )
}
