
Node.js 是一个开源和跨平台的 JavaScript 运行时环境。 它几乎是任何类型项目的流行工具！

Node.js 在浏览器之外运行 V8 JavaScript 引擎（Google Chrome 的内核）。 这使得 Node.js 的性能非常好。

Node.js 应用程序在单个进程中运行，无需为每个请求创建新的线程。 Node.js 在其标准库中提供了一组异步的 I/O 原语，以防止 JavaScript 代码阻塞，通常，Node.js 中的库是使用非阻塞范式编写的，使得阻塞行为成为异常而不是常态。

当 Node.js 执行 I/O 操作时（比如从网络读取、访问数据库或文件系统），Node.js 将在响应返回时恢复操作（而不是阻塞线程和浪费 CPU 周期等待）。

这允许 Node.js 使用单个服务器处理数千个并发连接，而​​不会引入管理线程并发（这可能是错误的重要来源）的负担。

Node.js 具有独特的优势，因为数百万为浏览器编写 JavaScript 的前端开发者现在无需学习完全不同的语言，就可以编写除客户端代码之外的服务器端代码。

在 Node.js 中，可以毫无问题地使用新的 ECMAScript 标准，因为你不必等待所有用户更新他们的浏览器，你负责通过更改 Node.js 版本来决定使用哪个 ECMAScript 版本，你还可以通过运行带有标志的 Node.js 来启用特定的实验性功能。

## Node.js 应用程序的示例

Node.js 中最常见的 Hello World 示例是 Web 服务器：

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

## Node.js 框架和工具

许多随着时间的推移而成为流行的选择。 以下是值得学习的部分列表：

- AdonisJS：基于 TypeScript 的全功能框架，高度关注开发者的效率、稳定和信任。Adonis 是最快的 Node.js Web 框架之一。
- Egg.js：使用 Node.js 和 Koa 构建更好的企业级框架和应用程序的框架。
- Express：提供了最简单而强大的方式来创建 Web 服务器。它的极简主义方法、没有偏见、专注于服务器的核心功能，是其成功的关键。
- Fastify：高度专注于以最少的开销和强大的插件架构提供最佳开发者体验的 Web 框架。Fastify 是最快的 Node.js Web 之一 构架。
- FeatherJS：Feathers 是轻量级的网络框架，用于使用 JavaScript 或 TypeScript 创建实时应用程序和 REST API。在几分钟内构建原型，在几天内构建可用于生产的应用程序。
- Gatsby：基于 React、由 GraphQL 驱动的静态网站生成器，具有非常丰富的插件和启动器生态系统。
- hapi：用于构建应用程序和服务的富框架，使开发者能够专注于编写可重用的应用程序逻辑，而不是花时间搭建基础设施。
- koa：由 Express 背后的同一个团队构建，旨在更简单、更小，建立在多年知识的基础上。新项目的诞生是为了在不破坏现有社区的情况下创建不兼容的更改。
- Loopback.io：使构建需要复杂集成的现代应用程序变得容易。
- Meteor：非常强大的全栈框架，为您提供同构的方法来使用 JavaScript 构建应用程序，在客户端和服务器上共享代码。曾经是提供所有功能的现成工具，现在可以与前端库 React、Vue 和 Angular 集成。也可用于创建移动应用程序。
- Micro：提供了非常轻量级的服务器来创建异步的 HTTP 微服务。
- NestJS：基于 TypeScript 的渐进式 Node.js 框架，用于构建企业级的高效、可靠和可扩展的服务器端应用程序。
- Next.js：React 框架，为您提供最佳的开发者体验，包括生产所需的所有功能：混合静态和服务器渲染、TypeScript 支持、智能捆绑、路由预取等。
- Nx：使用 NestJS、Express、React、Angular 等进行全栈大仓开发的工具包！Nx 有助于将您的开发从构建单个应用程序的团队扩展到多个团队协作开发多个应用程序！
- Remix：Remix 是一个全栈 Web 框架，用于为 web 构建出色的用户体验。它开箱即用，提供构建现代 web 应用程序所需的一切（包括前端和后端）并将其部署到任何基于 JavaScript 的运行时环境（包括 Node.js）。
- Sapper：Sapper 是用于构建各种规模的 Web 应用程序的框架，具有优美的开发体验和灵活的基于文件系统的路由。提供 SSR 等等！
- Socket.io: 构建网络应用的实时通信引擎。
- Strapi：Strapi 是灵活开源的 Headless CMS，让开发者可以自由选择他们喜欢的工具和框架，同时还允许编辑人员轻松管理和分发他们的内容。通过插件系统使管理面板和 API 可扩展，Strapi 使世界上最大的公司能够在构建精美的数字体验的同时加速内容交付。
