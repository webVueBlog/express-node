1. 没有环境配置的情况：

首先使用shift + command + .快捷键显示隐藏文件夹找到/usr文件夹，进入cd /usr/local/mysql/bin/路径下，终端输入进入cd /usr/local/mysql/bin/路径下；

终端输入mysql -u root -p登录即可。

2. 配置环境变量的方法：

终端输入open .bash_profile

然后在末尾添加：

export PATH=${PATH}:/usr/local/mysql/bin

关闭保存配置文件；

终端输入：source .bash_profile

在终端可以直接使用mysql -u root -p进行登录。
