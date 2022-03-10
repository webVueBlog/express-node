
当使用 npm 安装软件包时，可以执行两种安装类型：

本地安装

全局安装

npm install lodash

软件包会被安装到当前文件树中的 node_modules 子文件夹下。

在这种情况下，npm 还会在当前文件夹中存在的 package.json 文件的 dependencies 属性中添加 lodash 条目。

使用 -g 标志可以执行全局安装：

npm install -g lodash

在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。

全局的位置到底在哪里？

npm root -g 命令会告知其在计算机上的确切位置。

在 macOS 或 Linux 上，此位置可能是 /usr/local/lib/node_modules。 

在 Windows 上，可能是 C:\Users\YOU\AppData\Roaming\npm\node_modules。

但是，如果使用 nvm 管理 Node.js 版本，则该位置会有所不同。

例如，使用 nvm，则软件包的位置可能为 /Users/joe/.nvm/versions/node/v8.9.0/lib/node_modules。

