/**
 * todo vscode保存时自动编译ts为js代码
 * 第一步 tsc --init 生成tsconfig.json 改outDir:'./js' (生成js文件的目录)
 * 第二步 vscode点击任务(Terminal) => 运行任务 => 选择监视tsconfig.json
 */

console.log("hello,ts")

let str: string = "hi,ts"
let num: number = 123
var arr: Array<number> = [12, 5]
var arr1: Array<string> = ["5", "12"]
var arr2: Array<any> = [12, "56", 13, "56"] // any 为任意类型
var arr3: number[] = [12, 66, 132]

let type: number | null | undefined // type 为number类型null或undefined
type = 123
console.log(type) // 123

// 元组类型
let array: [number, string] = [123, "125"]

// void类型:typescripy 中的void 表示没有任何类型，一般用于定义方法的时候没有返回值

function run(): void {
  // 方法没有返回任何类型
  console.log("run")
}
run()

// 接口扩展及继承
interface Amimal {
  eat(): void
}

interface Person {
  work(): void
}

class Web implements Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  eat() {
    console.log(this.name + "喜欢吃馒头")
  }

  work() {
    console.log(this.name + "写代码")
  }
}

let per = new Web("小明")

per.work()

// 通俗理解，泛型就是解决类，接口，方法的复用性，以及对不特定数据类型的支持

function getDate<T>(value: T): T {
  return value
}
// T表示泛型，具体什么类型是调用这个方法的时候决定的
getDate<number>(132)
getDate<string>("123")

class MinClass<T> {
  public list: T[] = []
  add(num: T) {
    this.list.push(num)
  }
  min(): T {
    var minNum = this.list[0]

    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }

    return minNum
  }
}

var m = new MinClass<number>()
m.add(12)
m.add(3)
m.add(15)
console.log(m.min())

// 泛型接口
interface ConfigFn<T> {
  (value: T): T
}

function setData<T>(value: T): T {
  console.log(value)
  return value
}
setData<string>("girls")

// 方法中定义传参
function getInfo(name: string = "xianghong", age?: number): string {
  // age? 表示age参数为可选参数(可以传也可以不传)
  // name: string = "xianghong"  默认参数
  return `${name}--${age}`
}
let info: string = getInfo("lili", 20)
let info1: string = getInfo()
console.log(info, info1)

// 三点运算符，接受参数传来的值(剩余参数)
function sum(...result: number[]): number {
  var num: number = 0
  for (var i = 0; i < result.length; i++) {
    num += result[i]
  }
  return num
}

console.log(sum(1, 2, 3, 4))

class People {
  name: string // 属性 前面省略了public关键词
  constructor(n: string) {
    // 构造函数 实例化类的时候触发的方法
    this.name = n
  }
  run(): void {
    console.log(this.name)
  }
  getName(): string {
    return `${this.name} is a gril`
  }
}

var pp = new People("张三")
pp.run()
console.log(pp.getName())

// tc封装ajax
interface Config {
  type: string
  url: string
  data?: string
  dataType: string
}

function ajax(config: Config) {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("haha")
      if (config.dataType == "json") {
        console.log(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr.responseText)
      }
    }
  }
}

ajax({
  type: "get",
  url: "http://localhost:5000/api/users/list",
  dataType: "json"
})

// 加密的函数类型接口

interface encrypt {
  (key: string, value: string): string
}

var md5: encrypt = function(key: string, value: string): string {
  return key + value
}

// ts定义数组的接口
interface UserArr {
  [index: number]: string // index表示为数组的索引值
}

var arrUser: UserArr[] = ["12366", "123154"]
console.log(arrUser[0])

// 类装饰器
function logClass(params: any) {
  console.log(params)
  // params就是当前类
  params.prototype.apiUrl = "xxx"
  params.prototype.run = function() {
    console.log("这是装饰器扩展的方法")
  }
}

@logClass // @logClass 表示调用类装饰器，可以扩展类的属性或方法
class HttpClient {
  public age: number | undefined
  constructor() {
    this.age = 18
  }
  getData() {
    console.log(this.age + "岁")
  }
}

var http: any = new HttpClient()
http.run()
http.getData()
console.log(http.apiUrl)
