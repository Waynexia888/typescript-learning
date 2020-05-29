class Animal {
    public name: string;
    // static 静态的， 不需要实例话，就可以访问一个类的静态方法和静态属性
    static categories: string[] = ['mammal', 'bird']

    static isAnimal(a) {
        return a instanceof Animal
    }

    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is  running`
    }
}

console.log(Animal.categories)
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake))
// console.log(snake.run())
// snake.name = 'lucy'
// console.log(snake.name)

// 继承
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const xiaobao = new Dog('xiaobao')
// console.log(xiaobao.run())
// console.log(xiaobao.bark())

class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    run() {
        return 'Meow, ' + super.run()
    }
}

const maomao = new Cat('maomao')
console.log(maomao.run())