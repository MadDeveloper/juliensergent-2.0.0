import React from "react"
import { Experience } from "../../../components/Experience"
import { ExtraInfos } from "../../../components/Experience/ExtraInfos"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"

export function Jobs() {
  return (
    <Layout.Content>
      <Typography.Title>Jobs</Typography.Title>
      <Experience
        title="Software engineer"
        company="Carlipa"
        companyLink="https://carlipa.com"
        extraInfos={
          <ExtraInfos
            date="sep. 2018 - today"
            location="Toulouse"
            link="https://carlipa.com"
          />
        }
        description={
          <Typography.Text>
            Development of applications integrated to the Carlipa's system.
            Application are built with the React library and others tools like
            Redux and Material-UI. Intensive usage of JavaScript.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "JavaScript", path: "javascript" },
            { name: "Node.js", path: "node" },
            { name: "React", path: "react" },
            { name: "React Native", path: "react" },
            { name: "MongoDB", path: "mongodb" },
            { name: "Docker", path: "docker" }
          ]}
        /> */}

      <Experience
        title="Software engineer"
        company="Liberty Rider"
        companyLink="https://liberty-rider.com"
        extraInfos={
          <ExtraInfos
            date="oct. 2017 - jul. 2018"
            location="Toulouse"
            link="https://liberty-rider.com"
          />
        }
        description={
          <Typography.Text>
            Participating to the development of the new accident detection
            version. The build of the version requires the reconstruction of new
            APIs as well as to adapt some visuals.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "JavaScript", path: "javascript" },
            { name: "Node.js", path: "node" },
            { name: "TypeScript", path: "typescript" },
            { name: "Angular", path: "angular" },
            { name: "GraphQL", path: "graphql" },
            { name: "Amazon", path: "aws" },
            { name: "Firebase", path: "firebase" },
            { name: "PostgreSQL", path: "postgresql" },
            { name: "RxJS", path: "rxjs" },
            { name: "Docker", path: "docker" }
          ]}
        /> */}

      <Experience
        title="React developer"
        company="Capgemini"
        companyLink="https://www.capgemini.com"
        extraInfos={
          <ExtraInfos
            date="mar. 2017 - sep. 2017"
            location="Blagnac"
            link="https://services.airbus.com"
          />
        }
        description={
          <Typography.Text>
            Developer on the project Services by Airbus.
            <br />
            My mission is to work with a team of consultants, discuss and
            propose the appropriate solutions for the wanted functionalities.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "React", path: "react" },
            { name: "Elastic Search", path: "elasticsearch" },
            { name: "Amazon Web Services", path: "aws" }
          ]}
        /> */}

      <Experience
        title="JavaScript developer"
        company="Capgemini"
        companyLink="https://www.capgemini.com"
        extraInfos={
          <ExtraInfos
            date="nov. 2016 - feb. 2017"
            location="Toulouse"
            link="https://mycfmportal.com"
          />
        }
        description={
          <Typography.Text>
            My mission was to maintain and add new features to MyCFM web portal,
            collaborate with team around the world (India, U.S., France) and
            provide solutions to customer requests.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList list={[{ name: "JavaScript", path: "javascript" }]} /> */}

      <Experience
        title="Angular developer"
        company="Twinipix"
        extraInfos={
          <ExtraInfos date="jul. 2016 - sep. 2016" location="Toulouse" />
        }
        description={
          <Typography.Text>
            Development of a webapp with TypeScript, Angular, Firebase, and
            Facebook SDK.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "Angular", path: "angular" },
            { name: "TypeScript", path: "typescript" },
            { name: "Firebase", path: "firebase" },
            { name: "Facebook API", path: "facebook" }
          ]}
        /> */}

      <Experience
        title="Co-founder"
        company="Prep'App"
        extraInfos={
          <ExtraInfos date="nov. 2014 - jun. 2016" location="Toulouse" />
        }
        description={
          <Typography.Text>
            Co-founder of the societe Prep'App. I have to create the showcase,
            and develop our custom tool in order to be able to administrate all
            the database for mobile applications.
          </Typography.Text>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technical environment</Typography.Text>
        </Typography.Paragraph>
        <TechnologyList
          list={[
            { name: "PHP", path: "php" },
            { name: "JavaScript", path: "javascript" },
            { name: "MySQL", path: "mysql" }
          ]}
        /> */}
    </Layout.Content>
  )
}
