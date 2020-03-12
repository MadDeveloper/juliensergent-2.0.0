import React from "react"
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg"
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg"
import { ReactComponent as PinIcon } from "../../../assets/icons/pin.svg"
import { Button } from "../../../components/Button"
import { ExternalLink } from "../../../components/ExternalLink"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { TechnologyIcon } from "../TechnologyIcon"
import styles from "./Jobs.module.css"

export function Jobs() {
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
    <Layout.Content>
      <Typography.Title>Jobs</Typography.Title>
      <article>
        <Typography.Subtitle>Software engineer</Typography.Subtitle>

        <div>
          <Button onClick={openCarlipa} compact>
            Carlipa
          </Button>
        </div>

        <div className={styles.metadata}>
          <div className={styles.item}>
            <CalendarIcon title="date" className={styles.icon} />
            <Typography.Text secondary>sep. 2018 - today</Typography.Text>
          </div>
          <div className={styles.item}>
            <PinIcon title="location" className={styles.icon} />
            <Typography.Text secondary>Toulouse</Typography.Text>
          </div>
          <div className={styles.item}>
            <ExternalLink
              to="https://carlipa.com"
              className={styles.companyUrl}
            >
              <LinkIcon title="company website" className={styles.icon} />
              https://carlipa.com
            </ExternalLink>
          </div>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Development of applications integrated to the Carlipa's system.
            Application are built with the React library and others tools like
            Redux and Material-UI. Intensive usage of JavaScript.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph></Typography.Paragraph>

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
        <Typography.Subtitle>Software engineer</Typography.Subtitle>

        <div>
          <Button onClick={openLibertyRider} compact>
            Liberty Rider
          </Button>
        </div>

        <div className={styles.metadata}>
          <div className={styles.item}>
            <CalendarIcon title="date" className={styles.icon} />
            <Typography.Text secondary>oct. 2017 - jul. 2018</Typography.Text>
          </div>
          <div className={styles.item}>
            <PinIcon title="location" className={styles.icon} />
            <Typography.Text secondary>Toulouse</Typography.Text>
          </div>
          <div className={styles.item}>
            <ExternalLink
              to="https://liberty-rider.com"
              className={styles.companyUrl}
            >
              <LinkIcon title="company website" className={styles.icon} />
              https://liberty-rider.com
            </ExternalLink>
          </div>
        </div>

        <Typography.Paragraph>
          <Typography.Text>
            Participating to the development of the new accident detection
            version. The build of the version requires the reconstruction of new
            APIs as well as to adapt some visuals.
          </Typography.Text>
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

          <div>
            <Button onClick={openCapgemini} compact>
              Capgemini
            </Button>
          </div>

          <div className={styles.metadata}>
            <div className={styles.item}>
              <CalendarIcon title="date" className={styles.icon} />
              <Typography.Text secondary>mar. 2017 - sep. 2017</Typography.Text>
            </div>
            <div className={styles.item}>
              <PinIcon title="location" className={styles.icon} />
              <Typography.Text secondary>Blagnac</Typography.Text>
            </div>
            <div className={styles.item}>
              <ExternalLink
                to="https://services.airbus.com"
                className={styles.companyUrl}
              >
                <LinkIcon title="company website" className={styles.icon} />
                https://services.airbus.com
              </ExternalLink>
            </div>
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

          <div>
            <Button onClick={openCapgemini} compact>
              Capgemini
            </Button>
          </div>

          <div className={styles.metadata}>
            <div className={styles.item}>
              <CalendarIcon title="date" className={styles.icon} />
              <Typography.Text secondary>nov. 2016 - feb. 2017</Typography.Text>
            </div>
            <div className={styles.item}>
              <PinIcon title="location" className={styles.icon} />
              <Typography.Text secondary>Toulouse</Typography.Text>
            </div>
            <div className={styles.item}>
              <ExternalLink
                to="https://mycfmportal.com"
                className={styles.companyUrl}
              >
                <LinkIcon title="company website" className={styles.icon} />
                https://mycfmportal.com
              </ExternalLink>
            </div>
          </div>

          <Typography.Paragraph>
            <Typography.Text>
              My mission was to maintain and add new features to MyCFM web
              portal, collaborate with team around the world (India, U.S.,
              France) and provide solutions to customer requests.
            </Typography.Text>
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

        <div>
          <Button compact>Twinipix</Button>
        </div>

        <div className={styles.metadata}>
          <div className={styles.item}>
            <CalendarIcon title="date" className={styles.icon} />
            <Typography.Text secondary>jul. 2016 - sep. 2016</Typography.Text>
          </div>
          <div className={styles.item}>
            <PinIcon title="location" className={styles.icon} />
            <Typography.Text secondary>Toulouse</Typography.Text>
          </div>
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

        <div>
          <Button compact>Prep'App</Button>
        </div>

        <div className={styles.metadata}>
          <div className={styles.item}>
            <CalendarIcon title="date" className={styles.icon} />
            <Typography.Text secondary>nov. 2014 - jun 2016</Typography.Text>
          </div>
          <div className={styles.item}>
            <PinIcon title="location" className={styles.icon} />
            <Typography.Text secondary>Toulouse</Typography.Text>
          </div>
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
    </Layout.Content>
  )
}
