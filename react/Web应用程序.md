## 第一个React Web应用程序

如果你使用的是Mac，最好直接从Node.js网站安装它，而不是通过其他软件包管理器（如Homebrew)。通过Homebrew 安装Node.js会导致一些问题。

Node应用程序包含一个package.json文件，用来指定项目的依赖项。运行npm install 时，npm会使用package.json来确定需要下载和安装的依赖项，并将其安装到 node_modules 文件夹中。

public 文件夹中的index.html是我们提供给请求网站的浏览器的文件。index.html是应用程序的核心部分，它负责加载应用程序中的其他资源。

public/js 是应用程序中存放JavaScript的位置。 app.js是编写React应用程序的地方。app-complete.js 是正在开发的应用程序的完整版本。

所有项目都包含实用的 README.md 文件，它将说明如何运行应用程序。

## 什么是组件

构建React应用程序的基础就是组件。可以将单独的React组件视为应用程序中的一个UI组件。

```js
class ProductList extends React.Component {
 render() {
  return (
   <div className='ui unstackable items'>
    Hello, friend!
   </div>
  );
 }
}
```

React组件是继承 React.Component类的ES6类。

ProductList类中有一个方法render(). render() 是React组件唯一必需的方法。React通过该方法的返回值来确定要渲染到页面的内容。

ES6 引入了类声明语法。ES6 类是JavaScript基于原型的继承模型的语法糖。

声明React组件有两种方法：

1. 作为ES6类
2. 导入并使用createReactClass()方法

使用ES6类

```js
class HelloWorld extends React.Component {
 render() {return (<p>Hello, world</p>)}
}
```

使用 create-response-class库中的createReactClass函数编写相同的组件。

```js
import createReactClass from 'create-react-class';

const HelloWorld = createReactClass({
 render() { return (<p>Hello, world!</p>) }
})
```

JavaScript扩展语法（JavaScript eXtension syntax, JSX)

## JSX

React组件最终渲染为浏览器中显示的HTML。React使用文档对象模型的虚拟表示来构建应用程序，并称之为虚拟DOM。

DOM 是指浏览器的HTML 树，它构成了一个Web页面。

创建 JSX 的目的是 使用表示 HTML 的JavaScript 看起来更像HTML。

```js
React.createElement('div', {className: 'ui items'},
 'Hello'
),
```

```js
<div className='ui items'>
 Hello, friend!
</div>
```

React负责在运行时把每个组件渲染成浏览器中实际的HTML。

JSX是标志JavaScript的扩展。

## Babel

Babel 是一个JavaScript转译器。 它会将ES6 代码转换为 ES5代码，这个过程被称为转译。

Babel把 JSX编译成 vanilla ES5 JS.

## ReactDOM.render() 方法

ReactDOM来自react-dom库， ReactDOM.render() 方法需要两个参数，第一个参数是需要渲染的组件(what), 第二个参数是渲染组件的位置(where)：

ReactDOM.render([what], [where]);

```js
class ProductList extends React.Component {
 render() {
  return (
   <div className='ui unstackable items'>
    Hello, friend! I am a basic React component.
   </div>
  );
 }
}

ReactDOM.render(
 <ProductList/>,
 document.getElementById('content')
);
```

在React中，原生 HTML 元素始终以小写字母开头，而React组件名称始终以大写字母开头。

JSX 组件实际上返回的是我们希望React去渲染到DOM 中的表示。

## 使用props

React 中数据从父组件流向子组件是通过 props 实现的。当父组件渲染子组件时，它可以给子组件发送其依赖的props.

```js
class ProductList extends React.Component {
 render() {
  const product = Seed.products[0];
  return (
   <div className='ui unstackable items'>
    <Product
     id={product.id}
     title={product.title}
     description={product.description}
     url={product.url}
     votes={product.votes}
     submitterAvatarUrl={product.submitterAvatarUrl}
     productImageUrl={product.productImageUrl}
    />
   </div>
  )
 }
}
```

在JSX 中，大括号 是一个分隔符，它向 JSX 发出信号，表明大括号之间的内容是 JavaScript表达式。

JSX 属性必须由大括号或引号分隔。

在React中，组件可以通过 this.props对象访问所有的 props。

子组件不是其props的所有者。父组件拥有子组件的props。

## 事件传递

```js
class ProductList extends React.Component {
 handleProductUpVote(productId) {
  console.log(productId + ' ')
 }
}
```

```js
const productComponents = products.map((product) => {
 <Product
  onVote={this.handleProductUpVote}
 />
})
```

编写一个函数来调用这个新的属性函数。

```js
// Product组件内
handUpVote() {
 this.props.onVote(this.props.id)
}

<div>
 <a onClick={this.handUpVote}></a>
</div>
```

## 绑定自定义组件方法

在 JavaScript 中，特殊的this变量根据上下文具有不同的绑定。

对于 render() 函数，React 自动帮我们把 this 绑定到当前组件。对于每个特殊的React方法，React会自动将this变量绑定到组件。

当我们自定义组件方法时，就必须手动将this绑定到自己的组件。

```js
class Product extends React.Component {
 constructor(props) {
  super(props);
  this.handleUpdate = this.handleUpdate.bind(this);
 }
}
```

constructor() 函数是 JavaScript 类中的一个特殊函数。任何情况下通过类创建对象时，JavaScript就回调用 constructor() 函数。

```js
class MyReactComponent extends React.Component {
 constructor(props) {
  super(props); // 总是先调用这个方法

  // 自定义方法在这里绑定
  this.someFunction = this.someFunction.bind(this);
 }
}
```


```js
class MyReactComponent extends React.Component {
 constructor(props) {
  super(props); // 总是先调用这个方法

  // 自定义方法在这里绑定
  this.someFunction = this.someFunction.bind(this);
 }
}
```

当定义自己的React组件类方法时，必须在constructor()函数中执行绑定模式，以便this能引用组件。

## 在constructor()函数中绑定

在 constructor() 函数里做的第一件事就是调用 super(props) 函数。 Product 类继承了 React.Component 类并定义了自己的 constructor() 函数。通过调用 super(props) 函数，可以让父类的 constructor() 函数被优先调用。

重要的是， React.Component 类定义的 constructor() 函数会将我们的constructor() 函数内部的this绑定到组件。因此，每当你为组件声明 constructor() 函数时，始终优先调用super() 函数是一个好习惯。

在调用super() 函数之后，需要在自定义组件方法上调用bind()方法。

this.handleUpVote = this.handleUpVote.bind(this);

函数的bind()方法允许我们将函数体中的this变量指定到需要设置的地方。这是一种常见的JavaScript模式。我们重新定义了组件的handleUpVote()方法，并将其赋值到相同的函数，但绑定到this变量（组件）下。现在，每当handleUpVote()函数 执行时，this 将引用当前组件而不是null。

## 使用 state

state由组件拥有，this.state时组件私有的。

当组件的state或props更新时，组件会重新渲染。

每个React组件都是作为一个由this.props和this.state组成的函数来渲染的。这种渲染是确定性的。

在React组件中，state是一个对象。

```js
class ProductList extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   products: [],
  };
 }

 componentDidMount() {
  this.setState({ products: Seed.products })
 }
}
```

## 使用this.setState()设置state

在组件挂载到页面之后，React会调用componentDidMount() 声明周期方法。

constructor() 函数是唯一能以这种方式修改state的地方。 React为组件提供了this.setState() 方法，用于state初始化之后的所有修改操作。

## 更新state和不变性

setState()方法实际上是异步的？？？

## Babel插件重构transform-class-properties

Babel插件和预设

重构Product组件：

```js
class Product extends React.Component {
 constructor(props) {
  super(props);
  this.handleUpVote = this.handleUpVote.bind(this);
 }

 handleUpVote() {
  this.props.onVote(this.props.id);
 }

 render() {}
}
```

使用 transform-class-properties插件，我们可以将handleUpVote写为箭头函数。这会确保函数内部的this能绑定到当前组件。

```js
class Product extends React.Component {
 handleUpVote = () => {
  this.props.onVote(this.props.id)
 };
 render() {}
}
```


## 重构

使用属性初始化器为React组件进行两处重构：

1. 使用箭头函数来自定义组件方法；
2. 在constructor()函数之外定义初始状态


