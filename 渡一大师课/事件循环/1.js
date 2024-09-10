// 死循环指定的时间
function delay(duration) {
    var start = Date.now();
    while (Date.now() - start < duration) { }
}

setTimeout(() => {
    console.log(1)
}, 0)

delay(1000)

console.log(2)

// 同步代码先执行
// 等待一秒 2 1