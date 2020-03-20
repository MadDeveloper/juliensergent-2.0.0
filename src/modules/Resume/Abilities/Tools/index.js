import React from "react"
import { Typography } from "../../../../components/Typography"
import { TechnologyList } from "../../TechnologyList"

export function Tools() {
  return (
    <article>
      <Typography.Subtitle>Tools</Typography.Subtitle>
      <TechnologyList
        list={[
          {
            name: "Visual Studio Code",
            path: "vscode",
            content: <span>Favorite text editor, daily usage.</span>
          },
          {
            name: "npm",
            path: "npm",
            content: <span>My loved package manager</span>
          },
          {
            name: "Prettier",
            path: "prettier",
            content: <span>Since discovered, used in all my projects.</span>
          },
          {
            name: "Eslint",
            path: "eslint",
            content: <span>An elder still present.</span>
          },
          {
            name: "Git",
            path: "git",
            content: <span>How else? The best.</span>
          },
          {
            name: "GitHub",
            path: "github",
            content: <span>It stores all my projects.</span>
          },
          {
            name: "GitLab",
            path: "gitlab",
            content: <span>Everyday professional usage.</span>
          },
          {
            name: "Amazon Web Services",
            path: "aws",
            content: (
              <span>
                Some experiences with. Really powerful and I really appreciate
                it.
              </span>
            )
          },
          {
            name: "Netlify",
            path: "netlify",
            content: (
              <span>
                A newcomer, and I really like the tool. Now using it for every
                personals projects.
              </span>
            )
          },
          {
            name: "Heroku",
            path: "heroku",
            content: (
              <span>
                Some experiences with. I like to use it for personal projects
              </span>
            )
          },
          {
            name: "Travis",
            path: "travis",
            content: (
              <span>
                Some personals experiences with. Simple to use and efficient.
              </span>
            )
          },
          {
            name: "CircleCI",
            path: "circleci",
            content: <span>Past profesionnals usage.</span>
          },
          {
            name: "WebPack",
            path: "webpack",
            content: <span>Daily usage.</span>
          }
        ]}
      />
    </article>
  )
}
