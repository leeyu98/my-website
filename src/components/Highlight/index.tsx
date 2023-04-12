import clsx from 'clsx';
import * as React from 'react';
import styles from './index.module.scss';

enum HighlightColor {
  green = 'green',
  yellow = 'yellow'
}

type IProps = React.PropsWithChildren<{
  color?: HighlightColor;
}>;

const Highlight: React.FC<IProps> = ({ children, color = 'green' }) => {
  return <span className={clsx(styles[`highlight`], styles[color])}>{children}</span>;
};

export default Highlight;
