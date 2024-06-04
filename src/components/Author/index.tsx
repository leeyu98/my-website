import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import dayjs from 'dayjs';
import zhCN from 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as React from 'react';
import styles from './index.module.scss';
import avatarImage from '/static/img/avatar.png';

dayjs.locale(zhCN); // 中文
dayjs.extend(relativeTime); // 相对时间

interface IProps {
  /**
   * @description 阅读预估时长
   */
  cost?: number;
  /**
   * @description 文章字数
   * @deprecated 目前并没有较好的字数统计方式
   */
  count?: number;
  /**
   * @description 发布时间
   */
  publish: string;
  /**
   * @description 最后修改时间
   */
  update: string;
}

const Author: React.FC<IProps> = ({ cost, count, publish, update }) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { author } = customFields as { author: any };
  const { name, readingSpeed } = author;

  const time = cost || count ? `阅读约 ${cost || Math.ceil(count / readingSpeed)} 分钟` : '';
  const _publish = publish ? `${dayjs(publish).fromNow()}发布` : '';
  const _update = update ? `${dayjs(update).fromNow()}编辑` : '';

  return (
    <div className={styles.header}>
      <section className={styles.avatar}>
        <Link className={styles.avatar__link} to={'/blog/author'}>
          <img className={styles.avatar__image} src={avatarImage} alt={name} />
        </Link>
        <section>
          <section style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/blog/author" className={styles['author']}>
              {name}
            </Link>
            <span className={styles['costing']}>
              {[time, _publish, _update].filter(Boolean).map((i, index) => (
                <span key={index} className={styles.item}>
                  {i}
                </span>
              ))}
            </span>
          </section>
          <div className={styles.copyright}>
            © 转载需要保留原始链接，未经明确许可，禁止商业使用。支持原创{' '}
            <Link to="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">
              CC BY-NC-SA 4.0
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Author;
