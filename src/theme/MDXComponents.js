import MDXComponents from '@docusaurus/theme-classic/lib/theme/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import * as MyComponents from '@site/src/components';

// 注册 mdx 全局组件
export default {
  ...MDXComponents,
  Tabs,
  TabItem,
  ...MyComponents,
};
