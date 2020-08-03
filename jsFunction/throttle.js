// 性能优化方案，节流用于减少函数请求次数，与防抖不同，节流是在一段时间执行一次

/**
 * @param {function} func - 执行函数
 * @param {number} delay - 延迟时间
 * @return {function}
 */
function throttle(func, delay) {
  let timer = null;
  return function (...arg) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arg);
        timer = null;
      }, delay);
    }
  };
}

let scrollHandler = throttle(function (e) {
  console.log(e);
}, 500);
window.onscroll = scrollHandler;
