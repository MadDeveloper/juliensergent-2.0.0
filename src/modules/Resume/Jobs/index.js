import React, { Fragment } from "react"
import { Experience } from "../../../components/Experience"
import { ExtraInfos } from "../../../components/Experience/ExtraInfos"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"

export function Jobs() {
  return (
    <Layout.Content>
      <Typography.Title>Jobs</Typography.Title>
      <Experience
        title="JavaScript software engineer"
        company="Carlipa"
        companyLink="https://carlipa.com"
        extraInfos={
          <ExtraInfos
            date="sep. 2018 - today"
            location="Toulouse, France"
            link="https://carlipa.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Integration in a small tech team, with a fullstack role.
                Maintenance and evolution of the Carlipa Online web app, which
                is the main product sold by the company. In parallel, I develop
                client custom application, which can be any kind of application
                deployed in store (interactive table, kiosk, wall of screens,
                ...). I also develop the Carlipa Online as mobile app.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Collaborating with an international team: France, Italy, Hong
                Kong.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: JavaScript, Node.js, React, React Native, Redux,
                Material UI, Electron, GraphQL, Gitlab CI, Docker, MongoDB, Git,
                GitLab.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      {/* <Typography.Paragraph>
          <Typography.Text bold>Technologies</Typography.Text>
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
        title="JavaScript software engineer"
        company="Liberty Rider"
        companyLink="https://liberty-rider.com"
        extraInfos={
          <ExtraInfos
            date="oct. 2017 - jul. 2018"
            location="Toulouse, France"
            link="https://liberty-rider.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Participating to the migration of the entire system, running
                with Firebase, to the new system, running on a entirely custom
                stack. This new stack is accompagnied by a new API, using
                GraphQL. Agile methodology (here, scrum) is used as the running
                framework. Discover of the startup company context.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: JavaScript, TypeScript, Node.js, React, Angular,
                RxJS, GraphQL, API REST, Amazon Web Services (Route 53, EC2,
                ECR), Docker, PostgreSQL, Git, GitHub.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
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
            location="Blagnac, France"
            link="https://services.airbus.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Developer and consultat on the new project started by Airbus:
                Services By Airbus. Integration in a team of experienced
                consultants from Capgemini, in an agile methodology (scrum)
                context leaded by a scrum master.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: JavaScript, Node.js, React, API REST, Amazon Web
                Services (S3, Lambda), ElasticSearch, Git, GitHub.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
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
            location="Toulouse, France"
            link="https://mycfmportal.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                My mission was to maintain and evolve MyCFM web portal,
                collaborate with a team around the world (India, USA, France)
                and provide solutions to customer requests.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: JavaScript, Backbase, Java, Git, GitHub, Jenkins.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
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
          <ExtraInfos
            date="jul. 2016 - sep. 2016"
            location="Toulouse, France"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Development of a Facebook application, to make match two persons
                as twins after a quiz. Ability to share your results on your
                Facebook profile or by message.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: TypeScript, Angular, Firebase, Facebook SDK.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
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
          <ExtraInfos
            date="nov. 2014 - jun. 2016"
            location="Toulouse, France"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Co-founder of the startup Prep'App. I was in charge to create
                the showcase, and develop the backend in order to be able to
                administrate all the database for applications. We were a team
                of five founders.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Technologies: JavaScript, PHP, API REST.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
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
