Node 9下import/export使用简单须知

Node 环境必须在 9.0以上

不加loader时候，
使用import/export的文件后缀名必须为`*.mjs`（下面会讲利用Loader Hooks兼容*.js后缀文件）

启动必须加上flag --experimental-modules

文件的import和export必须严格按照ECMAScript Modules语法

ECMAScript Modules和require()的cache机制不一样

Loader Hooks 使用步骤

自定义loader规则

启动的flag要加载loader规则文件

例如：`node --experimental-modules  --loader ./custom-loader.mjs ./index.js`

[Node.js v9.11.2 Documentation](https://nodejs.org/dist/latest-v9.x/docs/api/esm.html)