import React from 'react';
import styles from './index.less';
import { IRouteComponentProps } from 'umi';

export default function About(props: IRouteComponentProps) {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>Page about</h1>
    </div>
  );
}
