// 性能优化方案，防抖用于减少函数请求次数，对于频繁的请求，只执行这些请求的最后一次

// 基础版本1
function debounce_base(fn, wait = 300) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  };
}

/**
 * @param {function} func - 执行函数
 * @param {number} wait - 等待时间
 * @param {boolean} immediate - 是否立即执行
 * @return {function}
 */

// 改进版本
function debounce(func, wait = 300, immediate = false) {
  let timer, ctx;
  let later = (arg) =>
    setTimeout(() => {
      func.apply(ctx, arg);
      timer = ctx = null;
    }, wait);
  return function (...arg) {
    if (!timer) {
      timer = later(...arg);
      ctx = this;
      if (immediate) {
        func.apply(this, arg);
      } else {
        clearTimeout(timer);
      }
    }
  };
}
