
描述

MySQL UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据。

语法

MySQL UNION 操作符语法格式：

	SELECT expression1, expression2, ... expression_n
	FROM tables
	[WHERE conditions]
	UNION [ALL | DISTINCT]
	SELECT expression1, expression2, ... expression_n
	FROM tables
	[WHERE conditions];

参数

expression1, expression2, ... expression_n: 要检索的列。

tables: 要检索的数据表。

WHERE conditions: 可选， 检索条件。

DISTINCT: 可选，删除结果集中重复的数据。默认情况下 UNION 操作符已经删除了重复数据，所以 DISTINCT 修饰符对结果没啥影响。

ALL: 可选，返回所有结果集，包含重复数据。


distinct

	mysql> select * from myroot;
	+----+-------+-------+-------+------------+
	| id | name  | age   | phone | date       |
	+----+-------+-------+-------+------------+
	|  4 | kk    | 23    | 234   | 2033-02-02 |
	|  5 | kkaa  | 2345  | 12234 | 2034-02-01 |
	|  6 | akkka | 23456 | 1223  | 2012-02-01 |
	|  7 | 1231a | 2334  | 12323 | 2010-02-02 |
	|  8 | sll   | 232   | 122   | 2010-08-23 |
	|  9 | sk    | 23    | 45    | 2030-09-23 |
	| 10 | kvk   | 23421 | 2324  | 2021-02-10 |
	| 11 | uue   | 23    | 234   | 1990-02-03 |
	+----+-------+-------+-------+------------+
	8 rows in set (0.00 sec)

	mysql> create table mydoot (`id` int auto_increment, `name` varchar(100) not null, `age` varchar(11) not null, `phone` varchar(11) not null, `date` date, primary key(`id`)) engine = InnoDB default charset = utf8;
	Query OK, 0 rows affected, 1 warning (0.04 sec)

	mysql> select * from mydoot;
	Empty set (0.01 sec)

	mysql> insert into mydoot (name, age, phone, date) values ('kk', 23, 234, '2332-2-2'), ('kow', 2324, 12324, '1234-2-4'),('sqqsaa', 23343, 2434, '2030-2-3'), ('kkk', 2324, 23434, '2230-4-23'), ('siikkk', 2343, w333434, '2050-2-4'), ('aakkke',2323,434, '2302-2-2');
	ERROR 1054 (42S22): Unknown column 'w333434' in 'field list'
	mysql> insert into mydoot (name, age, phone, date) values ('kk', 23, 234, '2332-2-2'), ('kow', 2324, 12324, '1234-2-4'),('sqqsaa', 23343, 2434, '2030-2-3'), ('kkk', 2324, 23434, '2230-4-23'), ('siikkk', 2343, 333434, '2050-2-4'), ('aakkke',2323,434, '2302-2-2');;
	Query OK, 6 rows affected (0.01 sec)
	Records: 6  Duplicates: 0  Warnings: 0

	ERROR:
	No query specified

	mysql> select * from mydoot;
	+----+--------+-------+--------+------------+
	| id | name   | age   | phone  | date       |
	+----+--------+-------+--------+------------+
	|  1 | kk     | 23    | 234    | 2332-02-02 |
	|  2 | kow    | 2324  | 12324  | 1234-02-04 |
	|  3 | sqqsaa | 23343 | 2434   | 2030-02-03 |
	|  4 | kkk    | 2324  | 23434  | 2230-04-23 |
	|  5 | siikkk | 2343  | 333434 | 2050-02-04 |
	|  6 | aakkke | 2323  | 434    | 2302-02-02 |
	+----+--------+-------+--------+------------+
	6 rows in set (0.01 sec)

	mysql> select * from myroot;
	+----+-------+-------+-------+------------+
	| id | name  | age   | phone | date       |
	+----+-------+-------+-------+------------+
	|  4 | kk    | 23    | 234   | 2033-02-02 |
	|  5 | kkaa  | 2345  | 12234 | 2034-02-01 |
	|  6 | akkka | 23456 | 1223  | 2012-02-01 |
	|  7 | 1231a | 2334  | 12323 | 2010-02-02 |
	|  8 | sll   | 232   | 122   | 2010-08-23 |
	|  9 | sk    | 23    | 45    | 2030-09-23 |
	| 10 | kvk   | 23421 | 2324  | 2021-02-10 |
	| 11 | uue   | 23    | 234   | 1990-02-03 |
	+----+-------+-------+-------+------------+
	8 rows in set (0.00 sec)

	mysql> select name, age, phone, date from mydoot where name = kk or name = kow or name = kkk;
	ERROR 1054 (42S22): Unknown column 'kk' in 'where clause'
	mysql> select name, age, phone, date from mydoot where name = 'kk' or name = 'kow';
	+------+------+-------+------------+
	| name | age  | phone | date       |
	+------+------+-------+------------+
	| kk   | 23   | 234   | 2332-02-02 |
	| kow  | 2324 | 12324 | 1234-02-04 |
	+------+------+-------+------------+
	2 rows in set (0.00 sec)

	mysql> select name, age, phone, date from mydoot where name = 'kk' or name = 'kow' union select name,  age, phone from myroot where name = 'kk' or name = 'kkaa' or name = 'sk';
	ERROR 1222 (21000): The used SELECT statements have a different number of columns
	mysql> select name,  age, phone from myroot where name = 'kk' or name = 'kkaa' or name = 'sk';
	+------+------+-------+
	| name | age  | phone |
	+------+------+-------+
	| kk   | 23   | 234   |
	| kkaa | 2345 | 12234 |
	| sk   | 23   | 45    |
	+------+------+-------+
	3 rows in set (0.00 sec)

	mysql> select name,  age, phone, date from myroot where name = 'kk' or name = 'kkaa' or name = 'sk' union distinct select name, age, phone, date from mydoot where name = 'kk' or name = 'kow';
	+------+------+-------+------------+
	| name | age  | phone | date       |
	+------+------+-------+------------+
	| kk   | 23   | 234   | 2033-02-02 |
	| kkaa | 2345 | 12234 | 2034-02-01 |
	| sk   | 23   | 45    | 2030-09-23 |
	| kk   | 23   | 234   | 2332-02-02 |
	| kow  | 2324 | 12324 | 1234-02-04 |
	+------+------+-------+------------+
	5 rows in set (0.01 sec)

	mysql>




