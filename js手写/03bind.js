/**
 * 手写bind方法 
 * bind 返回一个可以改变this指向的新函数 待执行
 *  1. 定义myBind方法
 *  2. 返回绑定this的新函数 【唯一区别】
 *  3. 合并绑定和新传入的参数
 * */
//  1. 定义myBind方法
Function.prototype.myBind = function (thisArg, ...args) {
    // console.log('myBind调用了')
    // 2. 返回绑定this的新函数
    return (...reArgs) => {
        // this:原函数(原函数.myBind)
        return this.call(thisArg, ...args, ...reArgs)
    }
}