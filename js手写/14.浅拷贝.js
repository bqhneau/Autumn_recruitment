const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "cycling"],
};

const shallowCopy = Object.assign({}, original);
// 或者使用扩展运算符
// const shallowCopy = { ...original };

shallowCopy.name = "Bob"; 
shallowCopy.hobbies.push("swimming");

console.log(original.name); // 输出: Alice (不同)
console.log(original.hobbies); // 输出: ["reading", "cycling", "swimming"] (相同)

console.log(original === shallowCopy);  // 【false】