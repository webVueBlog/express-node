一个http请求访问web服务静态资源，一般响应结果有三种情况

访问文本，例如js，css，png，jpg，gif

访问静态目录

找不到资源，抛出404错误

代码目录

```js
├── static # 静态资源目录
│   ├── css/
│   ├── image/
│   ├── js/
│   └── index.html
├── util # 工具代码
│   ├── content.js # 读取请求内容
│   ├── dir.js # 读取目录内容
│   ├── file.js # 读取文件内容
│   ├── mimes.js # 文件类型列表
│   └── walk.js # 遍历目录内容
└── index.js # 启动入口文件
```
