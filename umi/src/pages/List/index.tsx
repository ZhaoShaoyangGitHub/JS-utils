import React, { Component } from 'react';
import styles from './index.scss';
import ChildClass from '@/components/ChildClass/index';
import ChildFunction from '@/components/childFunction/index';
import { history } from 'umi';

export default class List extends Component {
  static name1 = '静态属性：static name ->>>>>>> List.name'; // 静态属性，属于List类的
  name2 = '实例属性:  name ->>>>>>> this.name'; // 实例属性

  constructor(props: any) {
    super(props);
    console.log(List.name1);
    console.log(this.name2);
    console.log(props);
  }

  goDetail(id: number) {
    history.push(`/listDetail/${id}`);
  }

  combination(total: number) {
    let arr = [];
    for (let i = total; i > -1; i--) {
      let integer = Math.floor((total - i) / 2);
      let remainder = (total - i) % 2; //余数
      if (remainder === 1) {
      } else {
        // console.log(`1的个数：${i},2的个数${integer}`);
        arr.push([i, integer]);
      }
    }
    console.log(arr);
    arr = arr.map((item) => {
      let total = item[0] + item[1];
      let first = item[0];
      let value1 = 0;
      let value2 = 0;
      if (item[0] === 0 || item[1] === 0) {
        return 1;
      } else {
        while (total > item[0]) {
          value1 = total * (total - 1);
          console.log(value1);
          total--;
        }
        // while (first > 0) {
        //   value2 = first * (first - 1);
        //   console.log(`${total}*${total - 1}`);
        //   first--;
        // }
        return total / first;
      }
    });
    console.log(arr);
  }

  render() {
    this.combination(10);
    return (
      <div>
        <h1 className={styles.title}>{List.name1}</h1>
        <h1 className={styles.title}>{this.name2}</h1>
        <h2>
          <ChildClass />
        </h2>
        <h2>
          <ChildFunction title="我是Function子组件" />
        </h2>
        <ul className={styles.list}>
          {[1, 2, 3, 4].map((item: any, index: number) => {
            return (
              <li key={index} onClick={() => this.goDetail(item)}>
                <p>去到详情页{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
