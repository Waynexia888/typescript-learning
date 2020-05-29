// 函数声明
// function add(x: number, y: number, z?: number, d: number = 10): number {
//     if (typeof z === 'number') {
//         return x + y + z
//     } else {
//         return x + y
//     }
// }

// let result = add(2, 3, 5, 8)


// 函数表达式
const add = function(x: number, y: number, z?: number, d: number = 10): number {
    if (typeof z === 'number') {
        return x + y + z
    } else {
        return x + y
    }
}
// => 不是ES6里的箭头函数， 而是返回类型
const add2: (x: number, y: number, z?: number) => number = add
