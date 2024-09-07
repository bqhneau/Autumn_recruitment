function promiseRace (promises){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(promises)){
            reject('must be array')
        }

        promises.forEach((promise,index) => {
            Promise.resolve(promise)
                .then(value => {
                    resolve(value)
                })
                .catch(error => {
                    reject(error)
                })
        });
    })
    
}


// 使用示例
const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'one')); 
const promise2 = new Promise((resolve,reject) => setTimeout(reject, 100, 'two'));

promiseRace([promise1, promise2])
    .then((result) => {
        console.log('success',result); // 输出: "two" (因为 promise2 先完成)
    })
    .catch((error) => {
        console.error('error',error);
    });