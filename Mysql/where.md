语法

以下是 SQL SELECT 语句使用 WHERE 子句从数据表中读取数据的通用语法：

	SELECT field1, field2,...fieldN FROM table_name1, table_name2...
	[WHERE condition1 [AND [OR]] condition2.....

查询语句中你可以使用一个或者多个表，表之间使用逗号, 分割，并使用WHERE语句来设定查询条件。

你可以在 WHERE 子句中指定任何条件。

你可以使用 AND 或者 OR 指定一个或多个条件。

WHERE 子句也可以运用于 SQL 的 DELETE 或者 UPDATE 命令。

WHERE 子句类似于程序语言中的 if 条件，根据 MySQL 表中的字段值来读取指定的数据。

	mysql> select * from myroot;
	+----+------+-----+--------+------------+
	| id | name | age | phone  | date       |
	+----+------+-----+--------+------------+
	|  1 | kk   | 12  | 232434 | 2022-12-03 |
	+----+------+-----+--------+------------+
	1 row in set (0.01 sec)

	mysql> select id, name from myroot;
	+----+------+
	| id | name |
	+----+------+
	|  1 | kk   |
	+----+------+
	1 row in set (0.00 sec)

	mysql> select phone, date from myroot;
	+--------+------------+
	| phone  | date       |
	+--------+------------+
	| 232434 | 2022-12-03 |
	+--------+------------+
	1 row in set (0.00 sec)

	mysql> insert into myroot (name,age, phone, date) values ('kkkk', 2234, 2232, '2033-2-32');
	ERROR 1292 (22007): Incorrect date value: '2033-2-32' for column 'date' at row 1
	mysql> insert into myroot (name,age, phone, date) values ('kkkk', 2234, 2232, '2033-2-01');
	Query OK, 1 row affected (0.01 sec)

	mysql> select * from myroot;
	+----+------+------+--------+------------+
	| id | name | age  | phone  | date       |
	+----+------+------+--------+------------+
	|  1 | kk   | 12   | 232434 | 2022-12-03 |
	|  2 | kkkk | 2234 | 2232   | 2033-02-01 |
	+----+------+------+--------+------------+
	2 rows in set (0.00 sec)

	mysql> select * from myroot where age = 2234;
	+----+------+------+-------+------------+
	| id | name | age  | phone | date       |
	+----+------+------+-------+------------+
	|  2 | kkkk | 2234 | 2232  | 2033-02-01 |
	+----+------+------+-------+------------+
	1 row in set (0.01 sec)

	mysql> select age from myroot;
	+------+
	| age  |
	+------+
	| 12   |
	| 2234 |
	+------+
	2 rows in set (0.00 sec)

	mysql> select age = 2234 from myroot;
	+------------+
	| age = 2234 |
	+------------+
	|          0 |
	|          1 |
	+------------+
	2 rows in set (0.00 sec)

	mysql> select * from myroot;
	+----+------+------+--------+------------+
	| id | name | age  | phone  | date       |
	+----+------+------+--------+------------+
	|  1 | kk   | 12   | 232434 | 2022-12-03 |
	|  2 | kkkk | 2234 | 2232   | 2033-02-01 |
	+----+------+------+--------+------------+
	2 rows in set (0.00 sec)

	mysql> select * from myroot where age > 12;
	+----+------+------+-------+------------+
	| id | name | age  | phone | date       |
	+----+------+------+-------+------------+
	|  2 | kkkk | 2234 | 2232  | 2033-02-01 |
	+----+------+------+-------+------------+
	1 row in set (0.01 sec)