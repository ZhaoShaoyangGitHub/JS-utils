// 1:数组去重
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
let uniqueFruits = Array.from(new Set(fruits))
console.log(uniqueFruits)
var uniqueFruits2 =  [...new Set(fruits)];
console.log(uniqueFruits2)

//2:学习替换
fruits.splice(0,3, 'potato','tomato')
console.log(fruits)

//3:遍历数组
var friends = [
    { name: "John", age: 22 },
    { name: "Peter", age: 23 },
    { name: "Mark", age: 24 },
    { name: "Maria", age: 22 },
    { name: "Monica", age: 21 },
    { name: "Martha", age: 19 },
]
var friendsNames = Array.from(friends, ({name})=>name)
console.log(friendsNames)

//4:清空数组
fruits.length = 0;

//5:数组转化成对象,对象的key就是数组的索引
var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
var fruitsObj = {...fruits}
console.log(fruitsObj)

//6:填充数组
var newArray = new Array(3).fill("1")
console.log(newArray)

//7:合并数组
var fruits = ["apple", "banana", "orange"];
var meat = ["poultry", "beef", "fish"];
var vegetables = ["potato", "tomato", "cucumber"];
var food = [...fruits, ...meat, ...vegetables];
console.log(fruits.concat(meat, vegetables));

//8:数组交际
var numOne = [0, 2, 4, 6, 8, 8];
var numTwo = [1, 2, 3, 4, 5, 6];
var duplicatedValues=[...new Set(numOne)].filter(item=>numTwo.includes(item))
console.log(duplicatedValues)

//去除假值
// js假值：false,0,'',null,NaN,undefined
var mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];
var tureArr = mixedArr.filter(Boolean)
console.log(tureArr)

//取数组里面的随机一个值
var colors = ["blue", "white", "green", "navy", "pink", "purple", "orange", "yellow", "black", "brown"];
var randomArrayValue = mixedArr[Math.floor(Math.random() * (mixedArr.length))]
console.log(Math.floor(Math.random() * (mixedArr.length)))

//倒序
var reversedColors = colors.slice().reverse() //未改变的原来的数组colors
// var reversedColors = colors.reverse() // 改变的原来的数组colors

//lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

var nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
var lastIndex1 = nums.lastIndexOf(5);
var lastIndex2 = nums.lastIndexOf(5,8);
console.log(lastIndex1,lastIndex2);


//求和reduce()
var nums = [1, 5, 2, 6];
var sum = nums.reduce(((x, y) => x + y),10);
console.log(sum);