function timeoutFetch(url, timeout = 2000) {
    return new Promise((resolve, reject) => {
      // 设置一个超时，如果超过指定时间没有响应，则抛出一个错误
      const timer = setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeout);
  
      // 发起 fetch 请求
      fetch(url)
        .then(response => {
          clearTimeout(timer); // 请求成功，清除超时计时器
          resolve(response);   // 将成功的响应返回
        })
        .catch(error => {
          clearTimeout(timer); // 请求失败，清除超时计时器
          reject(error);        // 将错误信息返回
        });
    });
  }
  
  // 使用例子
  timeoutFetch('https://example.com', 2000)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  