import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import avatarImage from '/static/img/avatar.png';

import styles from './index.module.scss';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} description="长念-前端开发工程师" noFooter>
      <div className={clsx(styles.main__home)}>
        <div
          className={clsx(styles.home__content, 'row')}
          style={{
            marginTop: '-6rem',
          }}
        >
          <div className="col col--1"></div>
          <aside
            className="col col--7"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span className={styles.slogan}>
              前端
              <br />
              不止步于前端
            </span>{' '}
            <br />
            <span style={{ color: 'grey', fontSize: 14 }}>
              包括前端基础技能 <code>HTML</code> <code>CSS</code> <code>JavaScript (ES6+)</code>{' '}
              以及 <code>TypeScript</code>
              ，构建工具 <code>Webpack</code> <code>Vite</code> <code>Rollup</code> 等，热门框架{' '}
              <code>React</code>
              {` `}
              <code>Vue</code>
              {` `}
              及其相关的状态管理库等，热门工具库如 <code>lodash</code> <code>axios</code>{' '}
              <code>dayjs</code> 等。
              <br />
              还包括代码管理工具 <code>Git</code>、前端语法校验工具 <code>ESLint</code>
              、格式化工具 <code>Prettier</code> 等等。
              <br />
              除此之外，还有其他语言如 <code>Python</code> 及其他相关教程。
            </span>
            <div style={{ marginTop: '2.5rem' }}>
              <Link className="button button--primary" to="/docs/Intro" style={{ marginRight: 16 }}>
                开始探索
              </Link>
              <Link class="button button--outline button--secondary" to="/docs/Author">
                关于
              </Link>
            </div>
          </aside>
          <main
            className="col col--3"
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className={styles.avatar}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img src={avatarImage} alt="长念" />
              <div className={styles.author}>ChangNian's Blog</div>
            </div>
          </main>
          <div className="col col--1"></div>
        </div>
      </div>
    </Layout>
  );
}
