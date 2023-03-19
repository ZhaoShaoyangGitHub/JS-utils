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
	let timer;
	return function (...arg) {
		if (!timer) {
			timer = setTimeout(() => {
				clearTimeout(timer);
				func.apply(this, arg);
				timer = null;
			}, wait);
		}
		if (immediate) {
			func.apply(this, arg);
		} else {
			clearTimeout(timer);
		}
	};
}

document.getElementById('test').addEventListener(
	'click',
	debounce(
		function (event) {
			console.log(this, event);
		},
		3000,
		true
	)
);

async function async1() {
	console.log('async1 start');
	await async2();
	console.log('async1 end');
}
async function async2() {
	console.log('async2');
}
console.log('script start');
setTimeout(() => {
	console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
	console.log('promise1');
	resolve();
}).then(function () {
	console.log('promise2');
});
console.log('script end');
// 打印结果
// "script start"
// "async1 start"
// "async2"
// "promise1"
// "script end"
// "async1 end"
// "promise2"
// "setTimeout"
