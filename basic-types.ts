let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111  // 二进制数字，前面+ 0b

let fisrtName: string = 'wayne'
let message: string = `Hello, ${fisrtName}, age is ${age}`

let u: undefined = undefined   // undefined 是所有类型的子类型

let n: null = null

let num: number = undefined   // undefined 是所有类型的子类型


// any类型，任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

notSure.myName
notSure.getName()

// 联合类型 union type
let numberOrString: number | string = 234
numberOrString = 'abc'
// numberOrString = true      会报错

// 数组array, 同种类型
let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)

function test() {
    console.log(arguments)
}

// 元祖Tuple
let user: [string, number] = ['wayne', 123]