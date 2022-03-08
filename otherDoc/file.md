## POST-1

#### 接口URL
> post1

#### 请求方式
> POST

#### Content-Type
> form-data

## 验证文件是否存在(秒传)

#### 接口URL
> fileChunk/presence

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Content-Type     | application/json;charset=UTF-8 |  必填 | - |
| md5     | - |  必填 | 文件唯一标识 |
| fileName     | - |  必填 | 原文件名称 |

#### 成功响应示例
```javascript
{
	"code": 2000,
	"message": "操作成功",
	"data": {
        "md5":"123asdasdawqe", //文件唯一标识
		"presence ": true  //是否存在  true 存在，false 不存在  (存在则直接上传完成)
	}
}
```

## 上传切片--Form Data

#### 接口URL
> fileChunk

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Content-Type     | Form Data |  必填 | - |
| md5     | - |  必填 | 文件唯一标识 |
| file     | - |  必填 | 分片文件（名称必须数字递增，从0开始） |

#### 成功响应示例
```javascript
{
	"code": 2000,
	"message": "操作成功",
	"data": ""
}
```

## 合并切片

#### 接口URL
> fileChunk/merge

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Header参数

| 参数        | 示例值   | 是否必填   |  参数描述  |
| :--------   | :-----  | :-----  | :----  |
| Content-Type     | application/json;charset=UTF-8 |  必填 | - |
| md5     | - |  必填 | 文件唯一标识 |
| fileName     | - |  必填 | 文件名称 |
| fileChunkNum     | - |  必填 | 切片总数 |

#### 成功响应示例
```javascript
{
	"code": 2000,
	"message": "操作成功",
	"data": ""
}
```
