function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            // 确保每个项都是 Promise
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed += 1;

                    // 当所有 Promise 都完成时，resolve
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    // 一旦有任何一个 Promise 失败，立即 reject
                    reject(error);
                });
        });

        // 如果传入的数组是空的，立即 resolve
        if (promises.length === 0) {
            resolve(results);
        }
    });
}

// 使用示例
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

customPromiseAll([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // 输出: [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });
