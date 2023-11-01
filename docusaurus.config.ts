import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import type { PluginOptions } from '@easyops-cn/docusaurus-search-local';

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: '长念的小站',
  tagline: '持续构建中...',
  favicon: 'img/favicon.ico',
  url: 'https://changnian.netlify.app/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Personal', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars'),
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        },
        blog: {
          blogTitle: '只言片语',
          blogDescription: '基于 Docusaurus 构建！',
          blogSidebarTitle: '最新发布',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        },
        pages: {
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        },
        theme: {
          customCss: [require.resolve('./src/global.scss')], // CSS 替换为 SCSS
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass', // 启用 scss
    [
      '@easyops-cn/docusaurus-search-local', // 本地搜索插件
      {
        hashed: true, // `hashed` is recommended as long-term-cache of index file is possible.
        language: ['en', 'zh'], // 支持搜索的语言
      } satisfies PluginOptions,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    navbar: require('./config/navbar'),
    footer: require('./config/footer'),
    docs: {
      sidebar: {
        hideable: true, // 可收起
        autoCollapseCategories: false, // 手风琴
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: 'javascript',
      additionalLanguages: [
        'bash',
        'css',
        'diff',
        'git',
        'jsdoc',
        'json',
        'less',
        'nginx',
        'python',
        'sass',
        'scss',
        'sql',
        'typescript',
      ],
    },
    colorMode: {
      disableSwitch: false, // 禁用主题切换
      respectPrefersColorScheme: true, // 自动适应系统主题
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    // announcementBar: {
    //   id: 'arc_invitation_code',
    //   content:
    //     '🌟 Arc 浏览器邀请码 <a style="color:var(--ifm-color-primary);" href="https://arc.net/gift/60b7a4b3"><b>戳我</b></a> ！每周 5 个名额，仅限 Mac 用户！',
    //   backgroundColor: 'var(--background-color)',
    //   textColor: 'var(--ifm-heading-color)',
    //   isCloseable: false,
    // },
  } satisfies Preset.ThemeConfig,
  customFields: {
    author: {
      name: '长念',
      readingSpeed: 500, // 阅读速度
    },
    introduction: ['欢迎来到长念的小站', '我是一名前端开发者'],
  },
  markdown: {
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
};

module.exports = config;
