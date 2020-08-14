import React from 'react';
import styles from './index.scss';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>
        Page User<span className={styles.txt}>Txt</span>
      </h1>
    </div>
  );
};
