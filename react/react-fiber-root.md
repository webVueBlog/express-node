## FiberRoot

整个应用的起点

包含应用挂载的目标节点

记录整个更新过程的各种信息

```js
export function createFiberRoot (
 containerInfo: any,
 isConcurrent: boolean,
 hydrate: boolean
): FiberRoot {
 const uninitializedFiber = createHostRootFiber(isConcurrent);
 let root;
}
```