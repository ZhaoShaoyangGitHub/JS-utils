//生成一周时间
// new Array 创建的数组只是添加了length属性，并没有实际的内容。通过扩展后，变成可用数组用于循环。

function getWeekTime() {
  return [...new Array(7)].map((j, i) =>
    new Date(Date.now() + i * 8.64e7).toLocaleDateString()
  );
}

const weekArray = getWeekTime();
console.log(weekArray);
