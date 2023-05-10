import React, { Fragment } from "react"
import { Experience } from "../../../components/Experience"
import { ExtraInfos } from "../../../components/Experience/ExtraInfos"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { TechnologyList } from "../TechnologyList"

export function Jobs() {
  return (
    <Layout.Content>
      <Typography.Title>Jobs</Typography.Title>
      <Experience
        title="JavaScript software engineer"
        company="M-Cube Digital"
        companyLink="https://mcubedigital.com"
        extraInfos={
          <ExtraInfos
            date="sep. 2018 - today"
            location="Toulouse, France"
            link="https://mcubedigital.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Integration in a small tech team, with a fullstack role.
                Maintenance and evolution of the DXPOne web app, which is the
                main product sold by the company. In parallel, I develop client
                custom application, which can be any kind of application
                deployed in store (interactive table, kiosk, wall of screens,
                ...). I also develop the DXPOne platform as mobile app.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Collaborating with an international team: France, Belgium,
                Italy, Hong Kong.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "TypeScript", path: "typescript" },
                  { name: "JavaScript", path: "javascript" },
                  { name: "Node.js", path: "node" },
                  { name: "React", path: "react" },
                  { name: "React Native", path: "react" },
                  { name: "MongoDB", path: "mongodb" },
                  { name: "GraphQL", path: "graphql" },
                  { name: "Docker", path: "docker" },
                  { name: "Electron", path: "electron" },
                  { name: "Material UI", path: "mui" },
                  { name: "GitLab", path: "gitlab" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
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
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "TypeScript", path: "typescript" },
                  { name: "JavaScript", path: "javascript" },
                  { name: "Node.js", path: "node" },
                  { name: "React", path: "react" },
                  { name: "Angular", path: "angular" },
                  { name: "RxJS", path: "rxjs" },
                  { name: "Amazon Web Services", path: "aws" },
                  { name: "Docker", path: "docker" },
                  { name: "GitHub", path: "github" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
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
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "JavaScript", path: "javascript" },
                  { name: "Node.js", path: "node" },
                  { name: "React", path: "react" },
                  { name: "Amazon Web Services", path: "aws" },
                  { name: "ElasticSearch", path: "elasticsearch" },
                  { name: "GitHub", path: "github" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
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
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "JavaScript", path: "javascript" },
                  { name: "GitHub", path: "github" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
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
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "TypeScript", path: "typescript" },
                  { name: "Angular", path: "angular" },
                  { name: "Firebase", path: "firebase" },
                  { name: "Facebook SDK", path: "facebook" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
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
              <Typography.Text bold>Technologies</Typography.Text>
              <TechnologyList
                inlined
                small
                list={[
                  { name: "JavaScript", path: "javascript" },
                  { name: "PHP", path: "php" },
                  { name: "Git", path: "git" },
                ]}
              />
            </Typography.Paragraph>
          </Fragment>
        }
      />
    </Layout.Content>
  )
}
