import type { NavbarItem, Navbar } from '@docusaurus/theme-common';
const getSites = () => {
  if (!process.env.DEPLOY_SITE) {
    return [];
  }
  const deploySites: NavbarItem[] = [
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
  ];
  return deploySites.filter((s) => s?.id !== process.env.DEPLOY_SITE);
};

// 侧边导航配置
const navbar: Navbar = {
  title: '长念的小站',
  hideOnScroll: false,
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
      label: '后端',
      type: 'doc',
      docId: 'back-end/intro',
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
    { to: 'blog', label: '博客', position: 'left' },
    {
      label: '关于',
      items: [
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
      position: 'right',
    },
    // 备用站点
    ...getSites(),
  ],
};

export default navbar;
