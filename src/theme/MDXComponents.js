import MDXComponents from '@docusaurus/theme-classic/lib/theme/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Emphasis from '@site/src/components/Emphasis';

// 注册 mdx 全局组件
export default {
  ...MDXComponents,
  Highlight,
  Emphasis
};
