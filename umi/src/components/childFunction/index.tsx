import React from 'react';
import styles from './index.scss';

interface ChildFunctionProps {
  title: String;
  desc?: String;
}

export default function ChildFunction(props: ChildFunctionProps) {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.desc}</div>
    </div>
  );
}
