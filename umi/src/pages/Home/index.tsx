import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { format } from 'prettier';

interface PropsType {
  title: string;
}
let generatorFun = (function*() {
  yield 'hello';
  yield 'generator';
  return 'end';
})();

let arr = [1, [[2, 3], 4], [5, 6]];

let flat: any = function*(a: Array<any>) {
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'number') {
      yield* flat(a[i]);
    } else {
      yield a[i];
    }
  }
};

let flatArr = flat(arr);

console.log('yield*:', flatArr.next());
console.log('yield*:', flatArr.next());
console.log('yield*:', flatArr.next());

// for (var i of flat(arr)) {
//   console.log(i);
// }

function* f() {
  for (let i = 0; true; i++) {
    let result = yield i;
    if (result) i -= 1;
  }
}

let fun2 = f();
console.log(fun2.next());
console.log(fun2.next());
console.log(fun2.next());
console.log(fun2.next(true));

function Home(props: PropsType) {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log(generatorFun.next());
    return () => {};
  }, [count]);
  return (
    <div>
      <h1 className={styles.title}>Home Page{count}</h1>
      <button onClick={() => setCount(++count)}>增加</button>
    </div>
  );
}

Home.title = 'Home Page';

export default Home;

//next 可以自带参数，表示上一个yield的返回值.

let generatorWrapper = (genFun: Function) => (...arg: any) => {
  let generatorObject = genFun(...arg);
  generatorObject.next();
  return generatorObject;
};

const wrapperfun = generatorWrapper(function*() {
  console.log(`input ${yield}`);
});

wrapperfun().next('zhao');

//实现斐波那契数列
function* fibonacci() {
  let [prev, current] = [0, 1];
  for (;;) {
    yield current;
    [prev, current] = [current, prev + current];
  }
}

// for (let i of fibonacci()) {
//   console.log(i);
//   if (i > 1000) break;
// }

//throw 方法
function* generatorThrow() {
  // yield console.log('内容异常以前1');
  // yield console.log('内容异常以前2');
  try {
    yield console.log('内容异常以前1');
  } catch (e) {
    console.log('内部异常', e);
  }
  yield console.log('内容异常以后1'); // 抛出异常以后自动执行一次next()
  yield console.log('内容异常以后2');
}

let throwFun = generatorThrow();

try {
  throwFun.next(); // 内部抛出异常必须至少执行一次next()
  throwFun.throw('a');
  throwFun.throw('b');
} catch (e) {
  console.log('外部异常', e);
}

// return 方法
function* returnNumber() {
  yield 1;
  try {
    yield 2;
    yield 3 + '100'.toString();
    yield 4;
  } finally {
    yield 5;
    yield 6;
    yield 7;
  }
  yield 8;
}

let returnNum = returnNumber();
console.log(returnNum.next());
console.log(returnNum.next());
console.log(returnNum.next());
console.log(returnNum.return('100'));
console.log(returnNum.next());
console.log(returnNum.next());
console.log(returnNum.next());

// generator ->> this

function* generatorThis() {
  this.a = 1;
  yield (this.b = 2);
  yield (this.c = 3);
}

// var obj: any = {};
// let thisfun = generatorThis.call(obj);
console.log(generatorThis.prototype);
let thisfun = generatorThis.call(generatorThis.prototype);

console.log('generator->this:', thisfun.next());
console.log(thisfun.a);

//clock

function* generatorClock() {
  while (true) {
    console.log('Tick!');
    yield true;
    console.log('Tock!');
    yield false;
  }
}
let clock = generatorClock();
console.log('generatorClock:', clock.next());
console.log('generatorClock:', clock.next());
console.log('generatorClock:', clock.next());
console.log('generatorClock:', clock.next());

function* gen() {
  yield 1;
  return 2;
}

let g = gen();

console.log(g.next().value, g.next().value);
