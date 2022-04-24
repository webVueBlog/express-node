## 相关js库

1. react.js
2. react-dom.js 提供操作DOM的react扩展库
3. babel.min.js 解析JSX语法代码转为JS代码的库

## babel

1. es6->es5
2. jsx->js

## 虚拟DOM的两种创建方式

1. 使用JSX创建虚拟DOM
2. 使用js创建虚拟DOM

```js
const VDOM = React.createElement('h1', { id: 'title' }, 'hello')
```

## 虚拟DOM与真实DOM

虚拟DOM ，一般对象

真实DOM

## 关于虚拟DOM

1. 本质是Object类型的对象（一般对象）
2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。


