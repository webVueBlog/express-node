## Context 两种方式

1. childContentType
2. createContext

```js
import React from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = React.createContext('default')

class Parent extends React.Component {
 state = {
  ChildContext: '123',
  newContext: '456',
 }

 getChildContext() {
  return { value: this.state.childContext }
 }

 render() {
  return (
   <>
  )
 }
}
```