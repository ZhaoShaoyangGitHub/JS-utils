// 类型判断，判断核心使用Object.prototype.toString

/**
 * @param {any} target
 * @param {string} type
 * @return {boolean}
 */
function isType(target, type) {
  let targetType = Object.prototype.toString
    .call(target)
    .slice(8, -1)
    .toLowerCase();
  console.log(Object.prototype.toString.call(target));
  return targetType === type.toLowerCase();
}

// 对象属性移除
/**
 * @param {object} object
 * @param {string[]} props
 * @return {object}
 */
function omit(object, props = []) {
  if (!isType(object, "Object")) return;
  let res = {};
  Object.keys(object).forEach((key) => {
    if (props.includes(key) === false) {
      res[key] =
        typeof object[key] === "object" && object[key] !== null
          ? JSON.stringify(object[key])
          : object[key];
    }
  });
  return res;
}

let obj = {
  id: 1,
  title: "1",
};
// delete obj.id;
obj = omit(obj, ["title"]);
console.log(obj);

isType({ title: "test" }, "Object"); // true
isType([], "Array"); // true
isType(/\d/, "RegExp"); // true
isType(new Date(), "Date"); // true
isType(function () {}, "Function"); // true
isType(Symbol(1), "Symbol"); // true
