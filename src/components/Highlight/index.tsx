import clsx from 'clsx';
import * as React from 'react';
import styles from './index.module.scss';

enum HighlightColor {
  green = 'green',
  red = 'red',
  yellow = 'yellow',
  gray = 'gray',
  'sky-blue' = 'sky-blue',
}

type IProps = React.PropsWithChildren<{
  color?: HighlightColor;
  className?: string;
  style?: React.CSSProperties;
}>;

const Highlight: React.FC<IProps> = ({ children, color = 'green', className, style }) => {
  return (
    <span className={clsx(styles[`highlight`], styles[color], className)} style={style}>
      {children}
    </span>
  );
};

export default Highlight;
