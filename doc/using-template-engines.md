## 在 Express 中使用模板引擎

模板引擎使您能够在应用程序中使用静态模板文件。在运行时，模板引擎将模板文件中的变量替换为实际值，并将模板转换为发送给客户端的 HTML 文件。这种方法使设计 HTML 页面变得更加容易。

与 Express 一起使用的一些流行模板引擎是Pug、 Mustache和EJS。Express 应用程序生成器默认使用Jade，但它也支持其他几个。

- views，模板文件所在的目录。例如：app.set('views', './views')。这默认为views应用程序根目录中的目录。
- view engine，要使用的模板引擎。例如，要使用 Pug 模板引擎：app.set('view engine', 'pug').

然后安装对应的模板引擎npm包；

```js
$ npm install pug --save
```

设置好视图引擎后，您无需在应用中指定引擎或加载模板引擎模块；Express 在内部加载模块，如下所示（对于上面的示例）。

```js
app.set('view engine', 'pug')
```

index.pug在目录下创建一个名为 Pug 的模板文件views，内容如下：

```js
html
  head
    title= title
  body
    h1= message
```

然后创建一个渲染index.pug文件的路由。如果view engine未设置该属性，则必须指定view文件的扩展名。否则，您可以省略它。

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
```

当您向主页发出请求时，该index.pug文件将呈现为 HTML。

注意：视图引擎缓存不缓存模板输出的内容，只缓存底层模板本身。
即使缓存打开，视图仍会随每个请求重新呈现。




