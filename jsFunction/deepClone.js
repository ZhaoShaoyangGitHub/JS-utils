function deepClone(obj, cache = new WeakMap()) {
	if (obj === null) return null;
	if (obj instanceof RegExp) return new RegExp(obj);
	if (obj instanceof Date) return new Date(obj);
	if (typeof obj !== 'object') return obj;
	if (cache.has(obj)) {
		return cache.get(obj);
	}
	let copyObj = new obj.constructor();
	cache.set(obj, copyObj);
	if (obj instanceof Map || obj instanceof WeakMap) {
		for (let item of obj.entries()) {
			copyObj.set(item[0], deepClone(item[1], cache));
		}
	} else if (obj instanceof Set || obj instanceof WeakSet) {
		for (let item of obj.values()) {
			copyObj.add(deepClone(item, cache));
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				copyObj[key] = deepClone(obj[key], cache);
			}
		}
	}
	return copyObj;
}

let map = new Map();
map.set(1, '12');

let set = new Set([1, 2, 3, 4, 5, 56, 6, 7, 6, 7]);

var obj = {
	number: 123,
	string: 'test',
	boolean: true,
	symbol: Symbol(),
	undefined: undefined,
	null: null,
	array: [1, 2, 3],
	obj: {
		a: 1,
	},
	map,
	set,
	function: function () {
		console.log(this);
	},
};

obj.a = obj;

let copyObj = deepClone(obj);
obj.array.push(1232);
obj.number = 313123;
obj.map.clear();
