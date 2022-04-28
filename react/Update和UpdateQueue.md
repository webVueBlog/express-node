用于记录组件状态的改变

存放在与UpdateQueue中

多个Update可以同时存在

```js
export function createUpdate(expirationTime: ExpirationTime): Update<*> {
 return {
  expirationTime: expirationTime,
  tag: UpdateState,
  payload: null,
  callback: null,
  next: null,
  nextEffect: null,
 };
}
```



