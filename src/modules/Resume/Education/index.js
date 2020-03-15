import React from "react"
import { Layout } from "../../../components/Layout"
import { Typography } from "../../../components/Typography"
import { ExtraInfos } from "../ExtraInfos"

export default function Education() {
  return (
    <Layout.Content>
      <Typography.Title>Education</Typography.Title>
      <article>
        <Typography.Subtitle>
          Master's degree Project Leader in Software Engineering
        </Typography.Subtitle>
        <ExtraInfos
          date="2016 - 2018"
          location="Blagnac"
          link="https://www.ipi-ecoles.com"
        />
        <Typography.Paragraph>
          <Typography.Text>
            I was formed to manage and lead a project with the agile method
            (scrum or kanban), to create and manage a company, and some
            languages and tools like C#, .NET Core, Angular, and Robotics.
            <br />I was graduated with a Master in project leader and agile
            methodology specialist.
          </Typography.Text>
        </Typography.Paragraph>
      </article>
      <article>
        <Typography.Subtitle>
          Bachelor of Science in Information Technology
        </Typography.Subtitle>
        <ExtraInfos
          date="2013 - 2016"
          location="Toulouse"
          link="https://www.supinfo.com"
        />
        <Typography.Paragraph>
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
        </Typography.Paragraph>
      </article>
      <article>
        <Typography.Subtitle>
          High school diploma - Scientific Subjects
        </Typography.Subtitle>
        <ExtraInfos date="2012 - 2013" location="Cahors" />
        <Typography.Paragraph>
          <Typography.Text>
            I graduated highschool, where I enjoyed doing science, mathematics,
            biology, with a specialization in mathematics.
          </Typography.Text>
        </Typography.Paragraph>
      </article>
    </Layout.Content>
  )
}
