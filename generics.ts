// 泛型变量
function echo<T>(arg: T): T {
    return arg
}

const result = echo('str')
// const result = echo(123)
// const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123])

//  约束泛型
/////////////////////////////////////////////////
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1, 2, 3])

////////////////////////////////////////////////
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])
// echoWithLength(13) // 报错， 因为13里面没有length这个属性

///////////////////////////////////////////////////////////////

// 类和接口