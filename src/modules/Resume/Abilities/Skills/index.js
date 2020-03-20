import React from "react"
import { Typography } from "../../../../components/Typography"
import { TechnologyList } from "../../TechnologyList"

export function Skills() {
  return (
    <article>
      <Typography.Subtitle>Skills</Typography.Subtitle>
      <TechnologyList
        list={[
          {
            name: "JavaScript",
            path: "javascript",
            content: (
              <span>Highly skilled, daily usage. Preferred language.</span>
            )
          },
          {
            name: "Node.js",
            path: "node",
            content: <span>Who can't love Node.js? Favorite revolution.</span>
          },
          {
            name: "React",
            path: "react",
            content: <span>The best UI library. I love it, really.</span>
          },
          {
            name: "React Native",
            path: "react",
            content: <span>React best friend, mine too.</span>
          },
          {
            name: "TypeScript",
            path: "typescript",
            content: <span>I can not do without it.</span>
          },
          {
            name: "RxJS",
            path: "rxjs",
            content: (
              <span>
                Some experiences with I loved the philosophy behind reactive
                programming.
              </span>
            )
          },
          {
            name: "Angular",
            path: "angular",
            content: (
              <span>
                Was my first front framework. Enjoyed it's environment and
                philosophy, but forgetting it for React.
              </span>
            )
          },
          {
            name: "MongoDB",
            path: "mongodb",
            content: (
              <span>
                Daily usage. Match perfectly with JavaScript, and my opinion.
              </span>
            )
          },
          {
            name: "GraphQL",
            path: "graphql",
            content: (
              <span>
                When I discovered it, I just stopped developing REST API.
              </span>
            )
          },
          {
            name: "Docker",
            path: "docker",
            content: (
              <span>
                Regular usage. I really like the concept and simplicity.
              </span>
            )
          }
        ]}
      />
    </article>
  )
}
