
二进制数据流

数据库通信，操作图像，视频 上传文件

Buffer类，用于在 TCP 流，文件系统操作 和 其他上下文中与八位字节流 进行交互

TypedArray 对象描述了基础二进制数据缓冲区的类数组视图。

## Buffer 类

Buffer 类是基于 Uint8Array 的。

创建缓冲区

方式通过Buffer的构造函数来创建实例。

## 切分缓冲区

Node.js 提供了切分缓冲区的方法 buf.slice([start[,end]])

- start<integer> 指定新缓冲区开始的索引。
- end<integer> 指定缓冲区结束的索引（不包含），默认值buf.length

连接 Buffer.concat()

比较缓冲区 Buffer.compare()




