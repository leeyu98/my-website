import clsx from 'clsx';
import * as React from 'react';
import styles from './index.module.scss';

enum EmphasisColor {
  green = 'green',
}

type IProps = React.PropsWithChildren<{
  /** @description 样式 */
  color?: EmphasisColor;

  /** @description 是否粗体 */
  bold: boolean;
}>;

const Emphasis: React.FC<IProps> = ({ children, color = 'green', bold = true }) => {
  return (
    <span
      className={clsx(styles[`emphasis`], styles[color], {
        [styles['bold']]: bold,
      })}
    >
      {children}
    </span>
  );
};

export default Emphasis;
