import React, { Component } from 'react';
import styles from './index.scss';

export default class ListDetail extends Component {
  render() {
    console.log(this.props.match.params);
    return <div>我是list嵌套路由页面</div>;
  }
}
