## ConcurrentMode

```js
componentDidMount() {
 this.interval = setInterval(() => {
  this.updateNum()
 },200)
}
componentWillUnmount() {
 if(this.interval) {
  clearInterval(this.interval)
 }
}
updateNum() {
 const newNum = this.state.num === 3 ? 0 : this.state.num + 1
 if(this.state.async) {
  this.setState({
   num: newNum,
  })
 } else {
  flushSync(() => {
   this.setState({
    num: newNum,
   })
  })
 }
}

export default()=>(
 <ConcurrentMode>
  <Parent/>
 </ConcurrentMode>
)
```