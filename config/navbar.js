// @ts-check
const getSites = () => {
  if (!process.env.DEPLOY_SITE) {
    return [];
  }
  const deploySites =
    /**@type {import('@docusaurus/theme-common').NavbarItem[]} */
    ([
      {
        id: 'netlify',
        label: 'Netlify',
        title: '国内站点',
        href: 'https://changnian.netlify.app/',
        position: 'right',
      },
      {
        id: 'vercel',
        label: 'Vercel',
        title: '国外站点',
        href: 'https://changnian.vercel.app/',
        position: 'right',
      },
    ]);
  return deploySites.filter((s) => s?.id !== process.env.DEPLOY_SITE);
};

// 侧边导航配置
const navbar =
  /**@type {import('@docusaurus/theme-common').Navbar} */
  ({
    title: '长念的小站',
    hideOnScroll: true,
    logo: {
      alt: '长念的小站',
      src: 'img/logo.png',
    },
    items: [
      {
        label: '前端',
        type: 'doc',
        docId: 'front-end/intro',
        position: 'left',
      },
      {
        label: '猪齿鱼',
        type: 'doc',
        docId: 'c7n/intro',
        position: 'left',
      },
      {
        label: '教程',
        type: 'doc',
        docId: 'tutorial/intro',
        position: 'left',
      },
      {
        label: '其他',
        type: 'doc',
        docId: 'other/intro',
        position: 'left',
      },
      // { to: 'blog', label: '博客', position: 'left' },
      // 备用站点
      ...getSites(),
    ],
  });

module.exports = navbar;
