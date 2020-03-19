import React from "react"
import angularImage from "../../../../assets/images/technologies/angular.png"
import dockerImage from "../../../../assets/images/technologies/docker.png"
import graphqlImage from "../../../../assets/images/technologies/graphql.png"
import javascriptImage from "../../../../assets/images/technologies/javascript.png"
import mongodbImage from "../../../../assets/images/technologies/mongodb.png"
import nodejsImage from "../../../../assets/images/technologies/node.png"
import reactImage from "../../../../assets/images/technologies/react.png"
import rxjsImage from "../../../../assets/images/technologies/rxjs.png"
import typescriptImage from "../../../../assets/images/technologies/typescript.png"
import { Typography } from "../../../../components/Typography"
import styles from "./Tools.module.css"

export function Tools() {
  return (
    <article>
      <Typography.Subtitle>Tools</Typography.Subtitle>
      <div className={styles.list}>
        <div className={styles.item}>
          <img
            src={javascriptImage}
            alt="Visual Studio Code"
            className={styles.icon}
          />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Visual Studio Code</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Highly skilled, daily usage.
                <br />
                Preferred language.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={nodejsImage} alt="npm" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>npm</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Who can't love Node.js?
                <br />
                Favorite revolution.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={typescriptImage} alt="Prettier" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Prettier</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                I can not do without it.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={rxjsImage} alt="Eslint" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Eslint</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Some experiences with
                <br />I loved the philosophy behind reactive programming.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={reactImage} alt="Git" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Git</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                The best UI library.
                <br /> I love it, really.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={angularImage} alt="GitHub" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GitHub</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Was my first front framework.
                <br />
                Enjoyed it's environment and philosophy, but forgetting it for
                React.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={reactImage} alt="GitLab" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GitLab</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                React best friend, mine too.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img
            src={mongodbImage}
            alt="Amazon Web Services"
            className={styles.icon}
          />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Amazon Web Services</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Daily usage.
                <br />
                Match perfectly with JavaScript, and my opinion.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={graphqlImage} alt="Heroku" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Heroku</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                When I discovered it, I just stopped developing REST API.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={dockerImage} alt="Travis" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Travis</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={dockerImage} alt="CircleCI" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>CircleCI</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={dockerImage} alt="WebPack" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>WebPack</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </article>
  )
}
