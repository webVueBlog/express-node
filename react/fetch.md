fetch的出现就是为了解决XHR的问题：

使用XHR发送一个json请求一般是这样：

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
 console.log(xhr.response);
};

xhr.onerror = function() {
 console.log('eerror')
}

xhr.send();
```

fetch:

```js
fetch('').then(
 response => {
  console.log('联系服务器成功了');
  return response.json()
 },
 error => {console.log('联系服务器失败了', error)}
).then(
 response => {console.log('获取数据成功了', response)},
 error => {console.log('获取数据失败了', error)}
)
```

```js
try {
 const response = await fetch('')
 const data = await response.json()
 console.log(data)
} catch (error) {
 console.log('请求出错', error)
}
```

