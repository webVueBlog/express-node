
```js
// 字符串形式的ref

// 组件内的标签可以定义ref属性来标识自己
<input ref="input1" type="text"/>

class Demo extends React.Component {
 showData = () => {
  const { input1 } = this.refs
  alert(input1.value)
 }
}

// 回调
<input ref={c => this.input1 = c } type="text" placeholder=""/>
```