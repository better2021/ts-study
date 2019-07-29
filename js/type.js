"use strict";
// 类型注释
function greeter(person) {
    if (person) {
        return "hello " + person;
    }
    return "ts";
}
console.log(greeter("xiaoming"));
console.log(greeter());
var isDone = false; // 布尔值
var num01 = 100; // 数字
var str01 = "hello"; // 字符串
// 数组
var list = [1, 3, 4];
var list01 = [1, 23, 5];
var list02 = [1, "3", 5];
var list03 = [false, "5", 6];
// 元祖
var x = ["hi", 10];
console.log(x[1], "x");
// 类型保护和类型断言
function f(sn) {
    return sn || "default";
}
function Add(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log(Add(5));
console.log(Add(5, 6));
