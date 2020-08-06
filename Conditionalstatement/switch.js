function test1(color) {
  switch (color) {
    case "red":
      return ["apple", "strawberry"];
    case "yellow":
      return ["banana", "pineapple"];
    case "purple":
      return ["grape", "plum"];
    default:
      return [];
  }
}

//使用对象字面量来招待对应颜色的水果
const fruitColor = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};
function test2(color) {
  return fruitColor[color] || [];
}

// 使用Map
const fruitColorMap = new Map()
  .set("red", ["apple", "strawberry"])
  .set("yellow", ["banana", "pineapple"])
  .set("purple", ["grape", "plum"]);
function test3(color) {
  return fruitColorMap.get(color);
}

const fruits = [
  {
    name: "apple",
    color: "red",
  },
  {
    name: "strawberry",
    color: "red",
  },
  {
    name: "banana",
    color: "yellow",
  },
  {
    name: "pineapple",
    color: "yellow",
  },
  {
    name: "grape",
    color: "purple",
  },
  {
    name: "plum",
    color: "purple",
  },
];
// Array.filter
function test4(color) {
  return fruits.filter((fruit) => fruit.color === color);
}
//Array.some
function test_some(color) {
  let isHasColor = fruits.some((fruit) => fruit.color === color);
  return isHasColor;
}
console.log(test_some("red"));
//Array.every
function test_every(color) {
  let isAllColor = fruits.every((fruit) => fruit.color === color);
  return isAllColor;
}
console.log(test_every("red"));
