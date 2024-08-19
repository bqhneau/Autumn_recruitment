/*
    1、处理NaN的情况：
        因为NaN !== NaN总是true，所以用x !== x && y !== y来判断x和y是否都是NaN。
    2、处理+0和-0的情况：
        虽然+0 === -0为true，但我们通过比较1 / x和1 / y来区分它们。
        如果x或y是+0或-0，1 / +0是Infinity，1 / -0是-Infinity，因此它们不相等。
    3、其他情况：对于其他值，直接使用===比较即可
*/ 

function is(x, y) {
    // 先处理NaN的情况
    if (x !== x && y !== y) {
        return true; // NaN和NaN相等
    }

    // 处理+0和-0的情况
    if (x === 0 && y === 0) {
        return 1 / x === 1 / y;
    }

    // 其他情况下用===比较
    return x === y;
}

// 测试用例
console.log(is(NaN, NaN));    // true
console.log(is(+0, -0));      // false
console.log(is(0, 0));        // true
console.log(is(1, 1));        // true
console.log(is('a', 'a'));    // true
console.log(is({}, {}));      // false
console.log(is([], []));      // false
