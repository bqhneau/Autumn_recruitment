function customPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        for (let i = 0; i < promises.length; i++) {
            // 使用 Promise.resolve 来处理传入的非 Promise 值
            Promise.resolve(promises[i])
                .then(resolve)
                .catch(reject);
        }
    });
}

// 使用示例
// setTimeout 第三个参数为 resolve执行的参数
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one')); 
const promise2 = new Promise((resolve,reject) => setTimeout(resolve, 100, 'two'));

customPromiseRace([promise1, promise2])
    .then((result) => {
        console.log('success',result); // 输出: "two" (因为 promise2 先完成)
    })
    .catch((error) => {
        console.error('error',error);
    });
