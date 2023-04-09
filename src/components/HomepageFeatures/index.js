import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '前端开发',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        涉及基础技能 <code>HTML</code> <code>CSS</code> <code>JavaScript (ES6+)</code> 以及 <code>TypeScript</code>
        ，打包工具 <code>Webpack</code> <code>Vite</code> 等，热门框架 <code>React</code>
        {` `}
        <code>Vue</code>
        {` `}
        及其相关的状态管理库等，热门工具库如 <code>lodash</code> <code>dayjs</code> 等。
      </>
    )
  },
  {
    title: '猪齿鱼',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        猪齿鱼是工作中需要用到的技术，其中 <code>DatSet</code> 为其关键特性。
      </>
    )
  },
  {
    title: '其他工具',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        包括代码管理工具 <code>Git</code>、前端语法校验工具 <code>ESLint</code>、格式化工具 <code>Prettier</code> 等等。
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
