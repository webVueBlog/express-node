```js
function Comp() {
 return <a>123</a>
}

<Comp id="div" key="key">
 <span>1</span>
 <span>1</span>
</Comp>
```

```js
"use strict";

function Comp() {
 return React.createElement("a", null, "123");
}

React.createElement(
 Comp,
 { id: "div", key: "key" },
 React.createElement("span", null, "1"),
 React.createElement("span", null, "1")
);
```