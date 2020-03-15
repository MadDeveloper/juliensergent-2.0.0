import React from "react"
import { Button } from "../../../components/Button"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { ExtraInfos } from "../ExtraInfos"
import { TechnologyList } from "../TechnologyList"
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

        <div className={styles.company}>
          <Button onClick={openCarlipa} compact>
            Carlipa
          </Button>
        </div>

        <ExtraInfos
          date="sep. 2018 - today"
          location="Toulouse"
          link="https://carlipa.com"
        />

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
        <TechnologyList
          list={[
            { name: "JavaScript", path: "javascript.png" },
            { name: "Node.js", path: "node.png" },
            { name: "React", path: "react.png" },
            { name: "React Native", path: "react.png" },
            { name: "Mongodb", path: "mongodb.png" },
            { name: "Docker", path: "docker.png" }
          ]}
        />
      </article>

      <article>
        <Typography.Subtitle>Software engineer</Typography.Subtitle>

        <div className={styles.company}>
          <Button onClick={openLibertyRider} compact>
            Liberty Rider
          </Button>
        </div>

        <ExtraInfos
          date="oct. 2017 - jul. 2018"
          location="Toulouse"
          link="https://liberty-rider.com"
        />

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
        <TechnologyList
          list={[
            { name: "JavaScript", path: "javascript.png" },
            { name: "Node.js", path: "node.png" },
            { name: "TypeScript", path: "typescript.png" },
            { name: "Angular", path: "angular.png" },
            { name: "GraphQL", path: "graphql.png" },
            { name: "Amazon", path: "aws.png" },
            { name: "Firebase", path: "firebase.png" },
            { name: "PostgreSQL", path: "postgresql.png" },
            { name: "RxJS", path: "rxjs.png" },
            { name: "Docker", path: "docker.png" }
          ]}
        />
      </article>

      <article>
        <Typography.Subtitle>React developer</Typography.Subtitle>

        <div className={styles.company}>
          <Button onClick={openCapgemini} compact>
            Capgemini
          </Button>
        </div>

        <ExtraInfos
          date="mar. 2017 - sep. 2017"
          location="Blagnac"
          link="https://services.airbus.com"
        />

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
        <TechnologyList
          list={[
            { name: "React", path: "react.png" },
            { name: "Elastic Search", path: "elasticsearch.png" },
            { name: "Amazon Web Services", path: "aws.png" }
          ]}
        />
      </article>
      <article>
        <Typography.Subtitle>JavaScript developer</Typography.Subtitle>

        <div className={styles.company}>
          <Button onClick={openCapgemini} compact>
            Capgemini
          </Button>
        </div>

        <ExtraInfos
          date="nov. 2016 - feb. 2017"
          location="Toulouse"
          link="https://mycfmportal.com"
        />

        <Typography.Paragraph>
          <Typography.Text>
            My mission was to maintain and add new features to MyCFM web portal,
            collaborate with team around the world (India, U.S., France) and
            provide solutions to customer requests.
          </Typography.Text>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[{ name: "JavaScript", path: "javascript.png" }]}
        />
      </article>

      <article>
        <Typography.Subtitle>Angular developer</Typography.Subtitle>

        <div className={styles.company}>
          <Button compact>Twinipix</Button>
        </div>

        <ExtraInfos date="jul. 2016 - sep. 2016" location="Toulouse" />

        <Typography.Paragraph>
          <Typography.Text>
            Development of a webapp with TypeScript, Angular, Firebase, and
            Facebook SDK.
          </Typography.Text>
        </Typography.Paragraph>

        <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "Angular", path: "angular.png" },
            { name: "TypeScript", path: "typescript.png" },
            { name: "Firebase", path: "firebase.png" },
            { name: "Facebook API", path: "facebook.png" }
          ]}
        />
      </article>

      <article>
        <Typography.Subtitle>Co-founder</Typography.Subtitle>

        <div className={styles.company}>
          <Button compact>Prep'App</Button>
        </div>

        <ExtraInfos date="nov. 2014 - jun. 2016" location="Toulouse" />

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
        <TechnologyList
          list={[
            { name: "PHP", path: "php.png" },
            { name: "JavaScript", path: "javascript.png" },
            { name: "MySQL", path: "mysql.png" }
          ]}
        />
      </article>
    </Layout.Content>
  )
}
