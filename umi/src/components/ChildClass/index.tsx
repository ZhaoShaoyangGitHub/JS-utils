import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

interface ChildComProps {
  title: String;
}

export default class ChildCom extends Component<ChildComProps> {
  static propTypes = {
    title: PropTypes.string,
  };
  static defaultProps = {
    title: '我是Class 子组件',
  };

  render() {
    return <div>{this.props.title}</div>;
  }
}
