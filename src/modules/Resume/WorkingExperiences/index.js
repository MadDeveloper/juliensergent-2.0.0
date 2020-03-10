import React, { Fragment } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../../components/Button"
import { Typography } from "../../../components/Typography"
import { config } from "../../../config"
import { TechnologyIcon } from "./TechnologyIcon"

export function WorkingExperiences() {
  const history = useHistory()

  function navigateToProjects() {
    history.push(config.routes.projects)
  }

  return (
    <Fragment>
      <Typography.Title>Jobs</Typography.Title>
      <div>
        <Typography.Subtitle>Software engineer</Typography.Subtitle>
        <Typography.Paragraph heading>
          <Typography.Text secondary>sep. 2018 - today</Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            Development of applications integrated to the Carlipa's system.
            Application are built with the React library and others tools like
            Redux and Material-UI. Intensive usage of JavaScript.
          </Typography.Text>
        </Typography.Paragraph>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 20
          }}
        >
          <div>
            <TechnologyIcon name="Javascript" path="javascript.png" />
          </div>
          <div style={{ marginLeft: 40 }}>
            <TechnologyIcon name="React" path="react.png" />
          </div>
          <div style={{ marginLeft: 40 }}>
            <TechnologyIcon name="Docker" path="docker.png" />
          </div>
        </div>
      </div>

      <Typography.Subtitle>JavaScript software engineer</Typography.Subtitle>
      <Typography.Paragraph heading>
        <Typography.Text secondary>oct. 2017 - juil. 2018</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Participating to the development of the new accident detection
          version. The build of the version requires the reconstruction of new
          APIs as well as to adapt some visuals. For more details about Liberty
          Rider, you can visit{" "}
          <a
            href="https://liberty-rider.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://liberty-rider.com
          </a>
          .
        </Typography.Text>
      </Typography.Paragraph>

      <Typography.Subtitle>
        JavaScript &amp; React developer
      </Typography.Subtitle>
      <Typography.Paragraph heading>
        <Typography.Text secondary>mar. 2017 - sep. 2017</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Developer on the project Services by Airbus.
          <br />
          My mission is to work with a team of consultants, discuss and propose
          the appropriate solutions for the wanted functionalities.
          <br />
          For an overview of the project, please visit{" "}
          <a
            href="https://liberty-rider.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://services.airbus.com
          </a>
          .
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text secondary>nov. 2016 - fev. 2017</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          My mission was to maintain and add new features to MyCFM web portal,
          collaborate with team around the world (India, U.S., France) and
          provide solutions to customer requests.
          <br />
          For an overview of the project, please visit{" "}
          <a
            href="https://liberty-rider.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mycfmportal.com
          </a>
          .
        </Typography.Text>
      </Typography.Paragraph>

      <Typography.Subtitle>Angular developer</Typography.Subtitle>
      <Typography.Paragraph heading>
        <Typography.Text secondary>juil. 2016 - sep. 2016</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Development of a webapp with TypeScript, Angular, Firebase, and
          Facebook SDK.
        </Typography.Text>
      </Typography.Paragraph>

      <Typography.Subtitle>Co-founder</Typography.Subtitle>
      <Typography.Paragraph heading>
        <Typography.Text secondary>nov. 2014 - juin 2016</Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Co-founder of the societe Prep'App. I have to create the showcase, and
          develop our custom tool in order to be able to administrate all the
          database for mobile applications.
        </Typography.Text>
      </Typography.Paragraph>

      <Typography.Title>Projects</Typography.Title>
      <Typography.Paragraph>
        <Typography.Text>
          You can go to the{" "}
          <Button onClick={navigateToProjects}>Projects</Button> menu if you
          want to see all my personal projects.
        </Typography.Text>
      </Typography.Paragraph>

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

      <Typography.Title>Skills</Typography.Title>
      <Typography.Title>Languages</Typography.Title>
    </Fragment>
  )
}
