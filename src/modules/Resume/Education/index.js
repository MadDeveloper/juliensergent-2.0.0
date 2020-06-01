import React from "react"
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
            location="Blagnac"
            link="https://www.ipi-ecoles.com"
          />
        }
        description={
          <Typography.Text>
            I was formed to manage and lead a project with the agile method
            (scrum or kanban), to create and manage a company, and some
            languages and tools like C#, .NET Core, Angular, and Robotics.
            <br />I was graduated with a Master in project leader and agile
            methodology specialist.
          </Typography.Text>
        }
      />
      <Experience
        title="Bachelor of Science in Information Technology"
        extraInfos={
          <ExtraInfos
            date="2013 - 2016"
            location="Toulouse"
            link="https://www.supinfo.com"
          />
        }
        description={
          <Typography.Text>
            Education was mainly around programming and network. I have learned
            a lots of languages and tools, and I have learned to prepare,
            configure and deploy a complexe network system.
            <br />
            Some languages and tools used: C, C++, Python, PHP, JavaScript,
            Lisp, AngularJS, Cisco, Oracle.
            <br />I also learned all basics algorithms like binary tree,
            Dijkstra, and did a lot of mathematics.
            <br />I was graduated with a bachelor of science in IT.
          </Typography.Text>
        }
      />
      <Experience
        title="High school diploma - Scientific Subjects"
        extraInfos={<ExtraInfos date="2012 - 2013" location="Cahors" />}
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
