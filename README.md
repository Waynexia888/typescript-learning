### typescript-learning
* 编程语言的类型
  * 动态类型语言（Dynamically Typed Language）， eg：javascript，ruby， python
  * 静态类型语言（Statically Typed Language），eg：Java， Typescript
* tsc hello.ts
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
* Interface 接口
  * 对对象的形状（shape）进行描述
  * 对类（class）进行抽象
  * Duck Typing （鸭子类型）
  * 接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。
  * https://www.runoob.com/typescript/ts-interface.html
* 函数 Function
  * 函数声明告诉编译器函数的名称、返回类型和参数。函数定义提供了函数的实际主体。
  * https://www.runoob.com/typescript/ts-function.html
* 类 Class
  * 类（Class）： 定义了一切事物的抽象特点
  * 对象（Object）：类的实例
  * 面向对象（OOP）三大特征：封装，继承，多态
  * https://www.runoob.com/typescript/ts-class.html
* ts-node
  * 为了更方便的运行ts文件，可以安装te-node
  * https://www.npmjs.com/package/ts-node
  * 然后cd 到文件夹， ts-node class.ts, 即可运行class.ts文件
