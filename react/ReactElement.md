```js

const hasOwnProperty = Object.prototype.hasOwnProperty;

const RESERVED_PROPS = {
 key: true,
 ref: true,
 __self: true,
 __source: true
};

export function createElement(type, config, children) {
 let propName;
 const props = {};

 let key = null;
 let ref = null;
 let self = null;
 let source = null;

 if (config !== null) {
  if(hasValidRef(config)) {
   ref = config.ref
  }
  if(hasValidKey(config)) {
   key = '' + config.key;
  }

  self = config.__self === undefined ? null : config.__self;
  source = config.__source === undefined ? null : config.__self;

  if(propName in config) {
   if(
    hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)
   ) {
    props[propName] =  config[propName];
   }
  }
 }

 const childrenLength = argument.length - 2;

 if(childrenLength === 1) {
  props.children = children;
 } else if(childrenLength > 1) {
  const childArray = Array(childrenLength);
  for(let i = 0; i<childrenLength; i++) {
   childArray[1] = arguments[i+2];
  }
  if(__DEV__) {
   if(Object.freeze) {
    Object.freeze(childArray);
   }
  }
  props.children = childArray;
 }

}
```