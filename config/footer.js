// @ts-check
// 底部导航配置
const footer =
  /**@type {import('@docusaurus/theme-common').Footer} */
  ({
    style: 'light',
    links: [
      {
        label: 'Github',
        to: 'https://github.com/leeyu98/',
      },
      {
        label: 'CSDN',
        to: 'https://wentao.blog.csdn.net/',
      },
      {
        label: 'Docusaurus',
        to: 'https://docusaurus.io/zh-CN/',
      },
    ],
    // links: [
    //   {
    //     title: '文档',
    //     items: [
    //       {
    //         label: '介绍',
    //         to: '/docs/Intro',
    //       },
    //     ],
    //   },
    //   {
    //     title: '社交',
    //     items: [
    //       {
    //         label: 'CSDN',
    //         href: 'https://wentao.blog.csdn.net/',
    //       },
    //     ],
    //   },
    //   {
    //     title: '更多',
    //     items: [
    //       {
    //         label: 'Docusaurus',
    //         href: 'https://docusaurus.io/zh-CN/',
    //       },
    //       {
    //         label: 'GitHub',
    //         href: 'https://github.com/facebook/docusaurus',
    //       },
    //     ],
    //   },
    // ],
    copyright: `版权所有 © ${new Date().getFullYear()} 长念`,
  });
module.exports = footer;
