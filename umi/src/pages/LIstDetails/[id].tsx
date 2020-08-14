import React, { Component } from 'react';
import styles from './index.scss';

export default class ListDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    return <div>我是详情页{id}</div>;
  }
}
