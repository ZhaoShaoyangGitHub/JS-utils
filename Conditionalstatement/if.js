function testIf(fruit) {
  if (fruit == "apple" || fruit === "strawberry") {
    console.log("red");
  }
}

// 使用Array.includes来处理多重条件

function testArray(fruit) {
  const redFruit = ["apple", "strawberry", "cherry", "cranberries"];
  if (redFruit.includes(fruit)) {
    console.log("red");
  }
}

// 如果没有提供水果，抛出错误
// 如果该水果的数量大于10，将其打印出来

function test2(fruit, quantity) {
  const redFruit = ["apple", "strawberry", "cherry", "cranberries"];
  if (fruit) {
    if (redFruit.includes(fruit)) {
      console.log("red");
      if (quantity > 10) {
        console.log("big quantity");
      }
    }
  } else {
    throw new Error("No Fruit");
  }
}

//完善，尽早发现，尽早抛出
function test2_change() {
  const redFruit = ["apple", "strawberry", "cherry", "cranberries"];
  if (!fruit) throw new Error("No Fruit");
  if (fruit) {
    if (redFruit.includes(fruit)) {
      console.log("red");
      if (quantity > 10) {
        console.log("big quantity");
      }
    }
  }
}
