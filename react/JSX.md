1. 全称：JavaScript XML
2. react定义的一种类似于XML的
3. 本质是React.createElement(component, props, ...children) 方法的语法糖
4. 作用：用来简化创建虚拟DOM
5. 标签名任意：HTML标签或其它标签


## jsx语法规则：

1. 定义虚拟DOM时，不要写引号
2. 标签中混入JS表达式时要用{}
3. 样式的类名指定不要用class，要用className
4. 内联样式，要用`style={{key:value}}`的形式去写
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母：若小写字母开头，则将改标签为html中同名元素；若html中无同名元素，则报错。 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

## js表达式 与 js语句（代码）

1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
