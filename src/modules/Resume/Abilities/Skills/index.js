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
import styles from "./Skills.module.css"

export function Skills() {
  return (
    <article>
      <Typography.Subtitle>Skills</Typography.Subtitle>
      <div className={styles.list}>
        <div className={styles.item}>
          <img src={javascriptImage} alt="JavaScript" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>JavaScript</Typography.Text>
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
          <img src={nodejsImage} alt="Node.js" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Node.js</Typography.Text>
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
          <img src={reactImage} alt="React" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>React</Typography.Text>
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
          <img src={reactImage} alt="React Native" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>React Native</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                React best friend, mine too.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={typescriptImage} alt="TypeScript" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>TypeScript</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                I can not do without it.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={rxjsImage} alt="RxJS" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>RxJS</Typography.Text>
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
          <img src={angularImage} alt="Angular" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Angular</Typography.Text>
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
          <img src={mongodbImage} alt="MongoDB" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>MongoDB</Typography.Text>
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
          <img src={graphqlImage} alt="GraphQL" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GraphQL</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                When I discovered it, I just stopped developing REST API.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <img src={dockerImage} alt="Docker" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Docker</Typography.Text>
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
