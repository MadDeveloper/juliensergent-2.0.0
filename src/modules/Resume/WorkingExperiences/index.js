import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Typography } from "../../../components/Typography"
import { config } from "../../../config"
import { TechnologyIcon } from "../TechnologyIcon"
import styles from "./WorkingExperiences.module.css"

export function WorkingExperiences() {
  const history = useHistory()

  function navigateToProjects() {
    history.push(config.routes.projects)
  }

  function openLink(link = "") {
    window.open(link, "_blank")
  }

  function openCarlipa() {
    openLink("https://carlipa.com")
  }

  function openLibertyRider() {
    openLink("https://liberty-rider.com")
  }

  function openCapgemini() {
    openLink("https://www.capgemini.com/")
  }

  return (
    <section>
      <Typography.Title>Jobs</Typography.Title>
      <article>
        <Typography.Subtitle>Software engineer</Typography.Subtitle>

        <div className={styles.infos}>
          <Button onClick={openCarlipa} compact>
            Carlipa
          </Button>
          <Typography.Text className={styles.date}>
            sep. 2018 - today
          </Typography.Text>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Development of applications integrated to the Carlipa's system.
            Application are built with the React library and others tools like
            Redux and Material-UI. Intensive usage of JavaScript.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <a
            href="https://carlipa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://carlipa.com
          </a>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.technicalEnvironment}>
          <div className={styles.technology}>
            <TechnologyIcon name="Javascript" path="javascript.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Node.js" path="node.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="React" path="react.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="MongoDB" path="mongodb.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Docker" path="docker.png" />
          </div>
        </div>
      </article>

      <article>
        <Typography.Subtitle>JavaScript software engineer</Typography.Subtitle>

        <div className={styles.infos}>
          <Button onClick={openLibertyRider} compact>
            Liberty Rider
          </Button>
          <Typography.Text className={styles.date}>
            oct. 2017 - juil. 2018
          </Typography.Text>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Participating to the development of the new accident detection
            version. The build of the version requires the reconstruction of new
            APIs as well as to adapt some visuals.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <a
            href="https://liberty-rider.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://liberty-rider.com
          </a>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.technicalEnvironment}>
          <div className={styles.technology}>
            <TechnologyIcon name="Javascript" path="javascript.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Node.js" path="node.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="TypeScript" path="typescript.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Angular" path="angular.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="GraphQL" path="graphql.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Amazon Web Services" path="aws.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Firebase" path="firebase.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="PostgreSQL" path="postgresql.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="RxJS" path="rxjs.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Docker" path="docker.png" />
          </div>
        </div>
      </article>

      <article>
        <div>
          <Typography.Subtitle>React developer</Typography.Subtitle>

          <div className={styles.infos}>
            <Button onClick={openCapgemini} compact>
              Capgemini
            </Button>
            <Typography.Text className={styles.date}>
              mar. 2017 - sep. 2017
            </Typography.Text>
          </div>

          <Typography.Paragraph>
            <Typography.Text>
              Developer on the project Services by Airbus.
              <br />
              My mission is to work with a team of consultants, discuss and
              propose the appropriate solutions for the wanted functionalities.
            </Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <a
              href="https://services.airbus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://services.airbus.com
            </a>
            .
          </Typography.Paragraph>

          <Typography.Paragraph>
            <Typography.Text bold>Technical environment</Typography.Text>
          </Typography.Paragraph>
          <div className={styles.technicalEnvironment}>
            <div className={styles.technology}>
              <TechnologyIcon name="React" path="react.png" />
            </div>
            <div className={styles.technology}>
              <TechnologyIcon name="Elastic Search" path="elasticsearch.png" />
            </div>
            <div className={styles.technology}>
              <TechnologyIcon name="Amazon Web Services" path="aws.png" />
            </div>
          </div>
        </div>
      </article>
      <article>
        <div>
          <Typography.Subtitle>JavaScript developer</Typography.Subtitle>

          <div className={styles.infos}>
            <Button onClick={openCapgemini} compact>
              Capgemini
            </Button>
            <Typography.Text className={styles.date}>
              nov. 2016 - fev. 2017
            </Typography.Text>
          </div>

          <Typography.Paragraph>
            <Typography.Text>
              My mission was to maintain and add new features to MyCFM web
              portal, collaborate with team around the world (India, U.S.,
              France) and provide solutions to customer requests.
            </Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph>
            <a
              href="https://mycfmportal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mycfmportal.com
            </a>
          </Typography.Paragraph>

          <Typography.Paragraph>
            <Typography.Text bold>Technical environment</Typography.Text>
          </Typography.Paragraph>
          <div className={styles.technicalEnvironment}>
            <div className={styles.technology}>
              <TechnologyIcon name="Javascript" path="javascript.png" />
            </div>
          </div>
        </div>
      </article>

      <article>
        <Typography.Subtitle>Angular developer</Typography.Subtitle>

        <div className={styles.infos}>
          <Button compact>Twinipix</Button>
          <Typography.Text className={styles.date}>
            juil. 2016 - sep. 2016
          </Typography.Text>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Development of a webapp with TypeScript, Angular, Firebase, and
            Facebook SDK.
          </Typography.Text>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.technicalEnvironment}>
          <div className={styles.technology}>
            <TechnologyIcon name="Angular" path="angular.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Typescript" path="typescript.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Firebase" path="firebase.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="Facebook API" path="facebook.png" />
          </div>
        </div>
      </article>

      <article>
        <Typography.Subtitle>Co-founder</Typography.Subtitle>

        <div className={styles.infos}>
          <Button compact>Prep'App</Button>
          <Typography.Text className={styles.date}>
            nov. 2014 - juin 2016
          </Typography.Text>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Co-founder of the societe Prep'App. I have to create the showcase,
            and develop our custom tool in order to be able to administrate all
            the database for mobile applications.
          </Typography.Text>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <div className={styles.technicalEnvironment}>
          <div className={styles.technology}>
            <TechnologyIcon name="PHP" path="php.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="JavaScript" path="javascript.png" />
          </div>
          <div className={styles.technology}>
            <TechnologyIcon name="MySQL" path="mysql.png" />
          </div>
        </div>
      </article>

      <article>
        <Typography.Title>Projects</Typography.Title>
        <Typography.Paragraph>
          <Typography.Text>
            You can go to the{" "}
            <Button onClick={navigateToProjects}>Projects</Button> menu if you
            want to see all my personal projects.
          </Typography.Text>
        </Typography.Paragraph>
      </article>

      <article>
        <Typography.Title>Education</Typography.Title>
        <Typography.Subtitle>
          Master project manager in software engineering
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2016 - 2018</Typography.Text>
        </Typography.Paragraph>
        <Typography.Subtitle>
          Bachelor of Science in Information Technology
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2013 - 2016</Typography.Text>
        </Typography.Paragraph>
        <Typography.Subtitle>
          High school diploma - Scientific Subjects
        </Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>2012 - 2013</Typography.Text>
        </Typography.Paragraph>
      </article>

      <article>
        <Typography.Title>Skills</Typography.Title>
      </article>
      <article>
        <Typography.Title>Languages</Typography.Title>
      </article>
    </section>
  )
}
