import React, { Component } from 'react';
import styles from './index.scss';

export default class Login extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <button>登录</button>
      </div>
    );
  }
}
