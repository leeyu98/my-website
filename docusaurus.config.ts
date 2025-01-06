import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { MDX1CompatOptions } from '@docusaurus/types/src/config';
import type { PluginOptions } from '@easyops-cn/docusaurus-search-local';
import { themes } from 'prism-react-renderer';
import footer from './config/footer';
import navbar from './config/navbar';

const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
  title: '长念的小站',
  tagline: '知识分享',
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
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
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
          onUntruncatedBlogPosts: 'ignore',
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
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-Z2BW9NFG3H',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    navbar,
    // footer: {},
    docs: {
      sidebar: {
        hideable: true, // 可收起
        autoCollapseCategories: false, // 手风琴
      },
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      defaultLanguage: 'javascript',
      additionalLanguages: [
        'bash',
        'css',
        'diff',
        'git',
        'http',
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
      magicComments: [
        // default highlight
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code__error',
          line: 'code-error-next-line',
          block: {
            start: 'code-error-start',
            end: 'code-error-end',
          },
        },
      ],
    },
    colorMode: {
      disableSwitch: false, // 禁用主题切换
      respectPrefersColorScheme: true, // 自动适应系统主题
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    metadata: [{ name: 'keywords', content: 'blog,front-end,changnian' }],
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
    } satisfies MDX1CompatOptions,
  },
  // new future config
  future: {
    experimental_faster: {
      swcJsLoader: false, // 由于 svg 问题，暂不启用
      swcJsMinimizer: true, // 启用 SWC JS 压缩
      swcHtmlMinimizer: true, // 启用 SWC HTML 压缩
      lightningCssMinimizer: true, // 使用 Lightning CSS 压缩
      rspackBundler: true, // 启用 Rspack 构建
      mdxCrossCompilerCache: true, // 浏览器/NodeJS 环境仅编译一次
    },
  },
};

module.exports = config;
