```js
const emptyObject = {};
if (__DEV__) {
 Object.freeze(emptyObject);
}

function Component(props, context, updater) {
 this.props = props;
 this.context = context;
 this.refs = emptyObject;
 this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

Component.prototype.forceUpdate = function(callback) {
 this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

function PureComponent(props, context, updater) {
 this.props = props;
 this.context = context;
 this.refs = emptyObject;
 this.updater = updater || ReactNoopUpdateQueue;
}

const pureComponentPrototype = ();
pureComponentPrototype.constructor = PureComponent;
Object.assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

export {Component, PureComponent};
```