// 方法一：使用 URLSearchParams
function getQueryParamsByUSP(url) {
    // 创建 URL 对象
    const params = new URL(url).searchParams;
    const result = {};
    
    // 使用 forEach 遍历参数
    params.forEach((value, key) => {
        result[key] = value;
    });
    
    return result;
}


// 方法二：使用split
function getQueryParams(url) {
    const result = {};
    const queryString = url.split('?')[1];
    
    if (queryString) {
        const pairs = queryString.split('&');
        
        for (let pair of pairs) {
            let [key, value] = pair.split('=');
            key = decodeURIComponent(key);   // 解码
            value = decodeURIComponent(value || '');
            result[key] = value;
        }
    }
    
    return result;
}





// 示例用法：
const url = 'https://example.com/page?name=JohnDoe&age=25';
const queryParams = getQueryParams(url);
console.log(queryParams); // 输出: { name: "JohnDoe", age: "25" }
