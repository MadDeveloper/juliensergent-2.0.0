import React from "react"
import { ReactComponent as RamdaIcon } from "../../../assets/icons/technologies/ramda.svg"
import { Project } from "../../../components/Project"
import { Typography } from "../../../components/Typography"
import { useFetch } from "../../../lib/fetch"
import styles from "./Contributions.module.css"

export function Contributions() {
  const { response: ramdaRepositoryData } = useFetch(
    "https://api.github.com/repos/ramda/ramda",
    {
      withCredentials: false,
    }
  )

  return (
    <section>
      <Typography.Subtitle>Contributions</Typography.Subtitle>
      <div className={styles.project}>
        <Project
          icon={RamdaIcon}
          name="Ramda"
          description="A practical functional library for JavaScript programmers."
          stars={ramdaRepositoryData?.stargazers_count}
          repositoryLink="https://github.com/ramda/ramda"
        />
      </div>
    </section>
  )
}
