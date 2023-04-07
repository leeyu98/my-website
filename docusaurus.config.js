// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '爬上神坛的猫',
  tagline: 'Cat on',
  favicon: 'img/favicon.ico',

  url: 'https://changnian.netlify.app/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Personal', // Usually your GitHub org/user name.
  projectName: 'Jerry House', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh']
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          blogTitle: 'Docusaurus 博客！',
          blogDescription: '这是个用 Docusaurus 搭建的博客！',
          postsPerPage: 'ALL'
        }, // 禁用博客
        theme: {
          customCss: [require.resolve('./src/global.scss')] // CSS 替换为 SCSS
        }
      })
    ]
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      // 本地搜索插件
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        language: ['en', 'zh']
      }
    ]
  ], // enable scss
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '长念的博客',
        logo: {
          alt: '长念的博客',
          src: 'img/logo.svg'
        },
        items: [
          {
            label: '前端',
            type: 'doc',
            docId: 'FrontEnd/Intro',
            position: 'left'
          },
          {
            label: '猪齿鱼',
            type: 'doc',
            docId: 'C7N/Intro',
            position: 'left'
          },
          {
            label: '教程',
            type: 'doc',
            docId: 'Tutorial/Intro',
            position: 'left'
          },
          {
            label: '其他',
            type: 'doc',
            docId: 'Other/Intro',
            position: 'left'
          },
          { to: 'blog', label: '博客', position: 'left' },
          // display at right
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right'
          },
          {
            href: 'https://gitee.com/leewentao98',
            label: 'Gitee',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jerry's Blog, Inc. Built with Docusaurus.`
      },
      docs: {
        sidebar: {
          hideable: true, // 可收起
          autoCollapseCategories: true // 手风琴
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'javascript'
      },
      colorMode: {
        disableSwitch: false, // 禁用主题切换
        respectPrefersColorScheme: true // 自动适应系统主题
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5
      }
    })
};

module.exports = config;
