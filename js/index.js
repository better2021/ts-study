"use strict";
/**
 * todo vscode保存时自动编译ts为js代码
 * 第一步 tsc --init 生成tsconfig.json 改outDir:'./js' (生成js文件的目录)
 * 第二步 vscode点击任务(Terminal) => 运行任务 => 选择监视tsconfig.json
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("hello,ts");
var str = "hi,ts";
var num = 123;
var arr = [12, 5];
var arr1 = ["5", "12"];
var arr2 = [12, "56", 13, "56"]; // any 为任意类型
var arr3 = [12, 66, 132];
var type; // type 为number类型null或undefined
type = 123;
console.log(type); // 123
// 元组类型
var array = [123, "125"];
// void类型:typescripy 中的void 表示没有任何类型，一般用于定义方法的时候没有返回值
function run() {
    // 方法没有返回任何类型
    console.log("run");
}
run();
var Web = /** @class */ (function () {
    function Web(name) {
        this.name = name;
    }
    Web.prototype.eat = function () {
        console.log(this.name + "喜欢吃馒头");
    };
    Web.prototype.work = function () {
        console.log(this.name + "写代码");
    };
    return Web;
}());
var per = new Web("小明");
per.work();
// 通俗理解，泛型就是解决类，接口，方法的复用性，以及对不特定数据类型的支持
function getDate(value) {
    return value;
}
// T表示泛型，具体什么类型是调用这个方法的时候决定的
getDate(132);
getDate("123");
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(12);
m.add(3);
m.add(15);
console.log(m.min());
function setData(value) {
    console.log(value);
    return value;
}
setData("girls");
// 方法中定义传参
function getInfo(name, age) {
    if (name === void 0) { name = "xianghong"; }
    // age? 表示age参数为可选参数(可以传也可以不传)
    // name: string = "xianghong"  默认参数
    return name + "--" + age;
}
var info = getInfo("lili", 20);
var info1 = getInfo();
console.log(info, info1);
// 三点运算符，接受参数传来的值(剩余参数)
function sum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var num = 0;
    for (var i = 0; i < result.length; i++) {
        num += result[i];
    }
    return num;
}
console.log(sum(1, 2, 3, 4));
var People = /** @class */ (function () {
    function People(n) {
        // 构造函数 实例化类的时候触发的方法
        this.name = n;
    }
    People.prototype.run = function () {
        console.log(this.name);
    };
    People.prototype.getName = function () {
        return this.name + " is a gril";
    };
    return People;
}());
var pp = new People("张三");
pp.run();
console.log(pp.getName());
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("haha");
            if (config.dataType == "json") {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "get",
    url: "http://localhost:5000/api/users/list",
    dataType: "json"
});
var md5 = function (key, value) {
    return key + value;
};
var arrUser = ["12366", "123154"];
console.log(arrUser[0]);
// 类装饰器
function logClass(params) {
    console.log(params);
    // params就是当前类
    params.prototype.apiUrl = "xxx";
    params.prototype.run = function () {
        console.log("这是装饰器扩展的方法");
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.age = 18;
    }
    HttpClient.prototype.getData = function () {
        console.log(this.age + "岁");
    };
    HttpClient = __decorate([
        logClass // @logClass 表示调用类装饰器，可以扩展类的属性或方法
        ,
        __metadata("design:paramtypes", [])
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
http.run();
http.getData();
console.log(http.apiUrl);
