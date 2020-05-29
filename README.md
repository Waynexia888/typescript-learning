### typescript-learning
* 编程语言的类型
  * 动态类型语言（Dynamically Typed Language）， eg：javascript，ruby， python
  * 静态类型语言（Statically Typed Language），eg：Java， Typescript
* tsc hello.ts -> 会生成一个编译好的hello.js文件
* 官方文档： https://www.tslang.cn/docs/handbook/basic-types.html
* 基本类型
  * boolean
  * number
  * string
  * undefined
  * null
  * array
  * tuple
  * never
  * void
  * enum
  * any
  * https://www.runoob.com/typescript/ts-type.html
  * https://www.tslang.cn/docs/handbook/basic-types.html
* Interface 接口
  * 对对象的形状（shape）进行描述
  * 对类（class）进行抽象
  * Duck Typing （鸭子类型）
  * 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
  * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
  * https://www.runoob.com/typescript/ts-interface.html
  * https://www.tslang.cn/docs/handbook/interfaces.html
* 函数 Function
  * 函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。
  * https://www.runoob.com/typescript/ts-function.html
  * https://www.tslang.cn/docs/handbook/functions.html
* 类 Class
  * 类（Class）： 定义了一切事物的抽象特点
  * 对象（Object）：类的实例
  * 面向对象（OOP）三大特征：封装，继承，多态
  * 访问修饰符：public, private, protected, readonly
  * static 静态的， 不需要实例话，就可以访问一个类的静态方法和静态属性
  * https://www.runoob.com/typescript/ts-class.html
  * https://www.tslang.cn/docs/handbook/classes.html
* ts-node
  * 为了更方便的运行ts文件，可以安装te-node
  * https://www.npmjs.com/package/ts-node
  * 然后cd 到文件夹， ts-node class.ts, 即可运行class.ts文件
* 类和接口
  * 当几个类里有相同的方法的时候， 可以考虑写一个通用的接口，里面写入方法， 然后类implements 接口即可
* 枚举 Enum
  * 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
  * https://www.tslang.cn/docs/handbook/enums.html
* 泛型（Generics）
  * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
  * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。
  * 1. 泛型变量，它是一种特殊的变量，只用于表示类型而不是值。
  * 2. 泛型约束， 我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实现约束
  * 3. 类和接口: 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
  * https://www.tslang.cn/docs/handbook/generics.html
* 类型别名 和 类型断言
  * 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
  * https://www.tslang.cn/docs/handbook/advanced-types.html
* 声明文件
  * 官方介绍: https://www.tslang.cn/docs/handbook/declaration-files/introduction.html
  * 文件以d.ts 为后缀， eg： jQuery.d.ts
  * 使用第三方：@types/jquery， https://www.npmjs.com/package/@types/jquery
