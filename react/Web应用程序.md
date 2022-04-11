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




