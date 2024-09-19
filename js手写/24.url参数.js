// 方法一：使用 URL SearchParams
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


// 方法二进阶：多个相同参数则存到数组里
function getQueryParams(url) {
    const result = {};
    const queryString = url.split('?')[1];  // 从 URL 中获取查询字符串部分

    if (queryString) {
        const pairs = queryString.split('&');  // 将查询字符串分割为键值对数组
        
        for (let pair of pairs) {
            let [key, value] = pair.split('=');  // 分割每个键值对
            key = decodeURIComponent(key);  // 解码键
            value = decodeURIComponent(value || '');  // 解码值，如果没有值，则默认为空字符串
            
            // 检查 result 对象中是否已经存在这个键
            // 使用 result.hasOwnProperty(key) 防止 value 为0的情况
            if (result.hasOwnProperty(key)) {
                // 如果该键已存在，并且其值不是数组，则将其转换为数组
                if (!Array.isArray(result[key])) {
                    result[key] = [result[key]];
                }
                // 将新的值添加到数组中
                result[key].push(value);
            } else {
                // 如果该键不存在，直接添加到结果对象
                result[key] = value;
            }
        }
    }
    
    return result;  // 返回解析后的参数对象
}




// 示例用法：
const url = 'https://example.com/page?name=JohnDoe&age=25';
const queryParams = getQueryParams(url);
console.log(queryParams); // 输出: { name: "JohnDoe", age: "25" }
