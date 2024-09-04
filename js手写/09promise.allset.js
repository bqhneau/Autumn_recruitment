function allSettled(promises) {
    return new Promise((resolve) => {
        let settledPromises = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    settledPromises[index] = { status: "fulfilled", value: value };
                })
                .catch((reason) => {
                    settledPromises[index] = { status: "rejected", reason: reason };
                })
                .finally(() => {
                    count++;
                    if (count === promises.length) {
                        resolve(settledPromises);
                    }
                });
        });
    });
}

// 使用示例
const promises = [
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3),
];

allSettled(promises).then((results) => {
    console.log(results);
    // 输出:
    // [
    //   { status: 'fulfilled', value: 1 },
    //   { status: 'rejected', reason: 'error' },
    //   { status: 'fulfilled', value: 3 }
    // ]
});
