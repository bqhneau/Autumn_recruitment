const obj = {
    dev: 'bfe',
    a: function () {
        return this.dev
    },
    b() {
        return this.dev
    },
    c: () => {
        return this.dev
    },
    d: function () {
        return (() => {
            return this.dev
        })()
    },
    e: function () {
        return this.b();
    },
    f: function () {
        return this.b
    },
    g: function () {
        return this.c()
    },
    h: function () {
        return this.c
    },
    i: function () {
        return () => {
            return this.dev
        }
    }
}


console.log(obj.a());  // 普通函数 obj调用 指向 obj
console.log(obj.b());  // 普通函数 obj调用 指向 obj【只不过函数定义方式不同】
console.log(obj.c());  // 箭头函数 上一层无func 指向 window

console.log(obj.d());  // 立即执行函数对输出没有影响，主要还是看上一层，上一层为d，d指向obj

console.log(obj.e());  // 相当于 obj.b() 指向 obj
console.log(obj.f()()); // () 留在打印的位置 全局调用 指向 window
console.log(obj.g());  // 相当于 obj.c() 指向 obj
console.log(obj.h()());  // () 留在打印的位置 全局调用 指向 window

console.log(obj.i()());  // 箭头函数 看上一层 上一层为i，i指向obj