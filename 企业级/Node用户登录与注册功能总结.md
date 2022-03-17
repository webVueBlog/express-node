
原理分析

用户注册

输入用户名和密码

检查是否存在此用户

存在则返回提示

不存在注册成功

mysql建表

```js
id: string
token: string
sex: number | null
name: string
avatar: string
introduction: string
roles: string[]
email: string
phone: string
password: string
themeType: string
createTime: string
lastTime: string
```

```js
// 创建数据表
create table `user` (
 `id` int(11) not null comment 'id',
 `name` varchar(255) collate utf8_unicode_ci not null comment '用户名',
 `password` varchar(255) collate utf8_unicode_ci not null comment '密码',
 `create_time` timestamp not null default current_timestamp comment '创建时间',
 `update_time` timestamp not null default current_timestamp on update current_timestamp comment '更新时间'
) engine = myisam default charset = utf8 collate=utf8_unicode_ci comment='用户表'

create table if not exists `user` (
 `id` int(11) unsigned not null auto_increment comment 'id',
 `token` varchar(255) not null comment 'token',
 `sex` varchar(5) not null comment '性别',
 `name` varchar(255) not null comment '用户名',
 `avatar` varchar(255) not null comment '头像',
 `introduction` varchar(255) not null comment '介绍',
 `roles` varchar(11) not null comment '角色',
 `email` varchar(25) not null comment '邮箱',
 `phone` varchar(25) not null comment '电话',
 `password` varchar(255) not null comment '密码',
 `themeType` varchar(255) not null comment '主题',
 `createTime` timestamp not null default current_timestamp comment '创建时间',
 `lastTime` timestamp not null default current_timestamp on update current_timestamp comment '更新时间',
 primary key (`id`)
) engine = InnoDB default charset = utf8 comment='用户表'
```

