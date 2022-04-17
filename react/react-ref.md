## createRef 和 ref

> ref的三种使用方式

string ref

function

createRef

```js

constructor() {
 super()
 this.objRef = React.createRef()

 // {current: null}
}

componentDidMount() {
 setTimeout(() => {
  // {this.refs.ref1.textContent}
  // {this.ref2.textContent}
  // {this.ref3.textContent}
  this.refs.stringRef.textContent = 'striing ref got'
  this.methodRef.textContent = 'method ref got'
  this.objRef.current.textContent = 'obj ref got'
 }, 1000)
}

render() {
 return (
  <>
   <p ref="stringRef">span1</p>
   <p ref={ele => (this.methodReef = ele)}>span3</p>
   <p ref={this.objRef}>span3</p>

  </>
 )
}
```


```js
import type {RefObject} from 'shared/ReactTypes';

export function createRef(): RefObject {
 const crfObject = {
  current: null,
 };
 if(__DEV__) {
  Object.seal(refObject);
 }
 return refObject;
}
```

