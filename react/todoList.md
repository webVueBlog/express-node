1. 拆分组件，实现静态组件，注意：className，style 的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中？

某个组件使用：放在其自身的state中

某些组件使用：放在他们共同的父组件state中

3. 关于父子之间通信

【父组件】给【子组件】传递数据：通过props传递

【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数

4. 注意defaultChecked 和 checked 的区别，类似的还有： defaultValue 和 value

5. 状态在哪里，操作状态的方法就在哪里

设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。

ES6小知识点： 解构赋值+重命名

```js
let obj = {a: {b:1} }
const {a} = obj; // 传统解构赋值
const {a:{b}} = obj; // 连续解构赋值
const {a:{b:value}} = obj; // 连续解构赋值+重命名
```

消息订阅与发布机制

1. 先订阅，再发布
2. 适用于任意组件通信
3. 要在组件的componentWillUnmount中取消订阅

fetch发送请求

```js
try {

}catch(error) {

}
```