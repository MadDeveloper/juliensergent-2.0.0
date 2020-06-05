import React, { Fragment } from "react"
import { Experience } from "../../../components/Experience"
import { ExtraInfos } from "../../../components/Experience/ExtraInfos"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"

export function Education() {
  return (
    <Layout.Content>
      <Typography.Title>Education</Typography.Title>
      <Experience
        title="Master's degree Project Leader in Software Engineering"
        extraInfos={
          <ExtraInfos
            date="2016 - 2018"
            location="Blagnac, France"
            link="https://www.ipi-ecoles.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                I was formed to manage and lead a project with the agile method
                (scrum or kanban), to create and manage a company, and some
                languages and tools like C#, .NET Core, Angular, and Robotics.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                I was graduated with a Master in project leader and agile
                methodology specialist.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="Bachelor of Science in Information Technology"
        extraInfos={
          <ExtraInfos
            date="2013 - 2016"
            location="Toulouse, France"
            link="https://www.supinfo.com"
          />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Education was mainly around programming and network. I have
                learned a lots of languages and tools, and I have learned to
                prepare, configure and deploy a complex network system.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                Some languages and tools used: C, C++, C#, Python, PHP, Symfony,
                JavaScript, AngularJS, Lisp, AngularJS, Java, Cisco, Oracle.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                I also learned all basics algorithms like binary tree, Dijkstra,
                and a lot of mathematics.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                I was graduated with a bachelor of science in IT.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="High school diploma - Scientific Subjects"
        extraInfos={<ExtraInfos date="2012 - 2013" location="Cahors, France" />}
        description={
          <Typography.Text>
            I graduated highschool, where I enjoyed doing science, mathematics,
            biology, with a specialization in mathematics.
          </Typography.Text>
        }
      />
    </Layout.Content>
  )
}
