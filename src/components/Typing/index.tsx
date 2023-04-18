import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as React from 'react';
import Typing, { Backspace, Reset } from 'react-typing-animation';
import styles from './index.module.scss';

let index = 0;
const Typings = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { introduction } = customFields as { introduction: string[] };

  const [word, setWord] = React.useState(introduction[index]);

  const handleFinished = () => {
    console.log(index);
    if (index + 1 < introduction.length) {
      index++;
      setWord(introduction[index]);
    } else {
      index = 0;
      setWord(introduction[0]);
    }
  };

  React.useLayoutEffect(() => {
    return () => {
      index = 0;
    };
  }, []);

  return (
    <Typing
      loop
      startDelay={100}
      speed={100}
      className={styles.typing_wrapper}
      onFinishedTyping={handleFinished}
      cursorClassName={styles.cursor}
    >
      <span>{word}</span>
      <Backspace speed={50} delay={2000} count={word.length} />
      <Reset count={1} />
    </Typing>
  );
};

export default Typings;
