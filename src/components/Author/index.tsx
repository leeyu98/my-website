import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import dayjs from 'dayjs';
import zhCN from 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import styles from './index.module.scss';
import avatarImage from '/static/img/avatar.jpg';

dayjs.locale(zhCN); // 中文
dayjs.extend(relativeTime); // 相对时间

interface IProps {
  /**
   * @description 文章字数
   */
  count?: number;
  /**
   * @description 发布时间
   */
  publish: string;
  /**
   * @description 最后修改时间
   */
  edit: string;
}

const Author: React.FC<IProps> = ({ count, publish, edit }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { author } = customFields as { author: any };
  const { name, readingSpeed } = author;

  const time = count ? `阅读约 ${Math.ceil(count / readingSpeed)} 分钟` : '';
  const _publish = publish ? `${dayjs(publish).fromNow()}发布` : '';
  const _edit = edit ? `${dayjs(edit).fromNow()}编辑` : '';

  return (
    <div className={styles.header}>
      <section className={styles.avatar}>
        <Link className={styles.avatar__link} to={'/blog/2023/04/07/about-the-author'}>
          <img className={styles.avatar__image} src={avatarImage} alt={name} />
        </Link>
        <section>
          <Link to="/blog/2023/04/07/about-the-author" className={styles['author']}>
            {name}
          </Link>
          <div className={styles['costing']}>
            {[time, _publish, _edit].filter(Boolean).map((i) => (
              <span className={styles.item}>{i}</span>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Author;
