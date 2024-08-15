function PromiseAll (promises){
    return new Promise((reslove,reject)=>{
        // 1、判断可迭代对象
        if(!Array.isArray(promises)){
            reject('must be an Array')
        }

        // 2、判断数组是否为空
        if(promises.length === 0){
            reslove(res)
        }

        const res = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    // 3、按序返回
                    res[index] = value;
                    count += 1

                    if(count === promises.length){
                        reslove(res);
                    }
                })
        });
    })
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one'));
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

PromiseAll([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });