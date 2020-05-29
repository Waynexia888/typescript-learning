interface Person {
    readonly id: number;
    name: string;
    age?: number;  // ? 代表可选属性，可有可无
}

let wayne: Person = {
    name: 'wayne',
    // age: 20
    id: 1234
}

// wayne.id = 8888     因为是read only， 因此不能被赋值