// 类型注释
function greeter(person?: string) {
  if (person) {
    return "hello " + person
  }
  return "ts"
}

console.log(greeter("xiaoming"))
console.log(greeter())

let isDone: boolean = false // 布尔值
let num01: number = 100 // 数字
let str01: string = "hello" // 字符串

// 数组
let list: number[] = [1, 3, 4]
let list01: Array<number> = [1, 23, 5]
let list02: any[] = [1, "3", 5]
let list03: Array<any> = [false, "5", 6]

// 元祖
let x: [string, number] = ["hi", 10]
console.log(x[1], "x")

// 类型保护和类型断言
function f(sn: string | null): string {
  return sn || "default"
}

function Add(a: number, b = 10): number {
  return a + b
}

console.log(Add(5))
console.log(Add(5, 6))
