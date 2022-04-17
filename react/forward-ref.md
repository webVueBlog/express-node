## forwardRef

```js
// 获取某个节点的实例
import React from 'react'

const TargetCompont = React.forwardRef((props, ref) => {
 <input type="text" ref={ref}/>
})

export default class Comp extends React.Component {
 constructor() {
  super()
  this.ref = React.createRef();
 }

 componentDidMount() {
  this.ref.current.value = 'ref get input'
 }

 render() {
  return <TargetCompont ref={this.ref} />
 }
}
```

```js
export default function forwardRef<Props, ElementType:>

return {
 $$typeof: REACT_FORWARD_REF_TYPE,
 render,
};
```