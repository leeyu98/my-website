// @ts-check
const getSites = () => {
  if (!process.env.DEPLOY_SITE) {
    return [];
  }
  const deploySites =
    /**@type {import('@docusaurus/theme-common').NavbarItem[]} */
    ([
      {
        label: 'Netlify',
        href: 'https://changnian.netlify.app/',
        position: 'right'
      },
      { label: 'Vercel', href: 'https://changnian.vercel.app/', position: 'right' }
    ]);
  return deploySites.filter((s) => s.label.toLocaleLowerCase() !== process.env.DEPLOY_SITE);
};

// 侧边导航配置
const navbar =
  /**@type {import('@docusaurus/theme-common').Navbar} */
  ({
    title: '长念的博客',
    hideOnScroll: true,
    logo: {
      alt: '长念的博客',
      src: 'img/logo.png'
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
      // 备用站点
      ...getSites()
    ]
  });

module.exports = navbar;
