

以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：

	UPDATE table_name SET field1=new-value1, field2=new-value2
	[WHERE Clause]

你可以同时更新一个或多个字段。

你可以在 WHERE 子句中指定任何条件。

你可以在一个单独表中同时更新数据。

	mysql> select * from myroot;
	+----+------+------+--------+------------+
	| id | name | age  | phone  | date       |
	+----+------+------+--------+------------+
	|  1 | kk   | 12   | 232434 | 2022-12-03 |
	|  2 | kkkk | 2234 | 2232   | 2033-02-01 |
	+----+------+------+--------+------------+
	2 rows in set (0.00 sec)

	mysql> update myroot set  age = 1;
	Query OK, 2 rows affected (0.02 sec)
	Rows matched: 2  Changed: 2  Warnings: 0

	mysql> slect * from myroot;
	ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'slect * from myroot' at line 1
	mysql> select * from myroot;
	+----+------+-----+--------+------------+
	| id | name | age | phone  | date       |
	+----+------+-----+--------+------------+
	|  1 | kk   | 1   | 232434 | 2022-12-03 |
	|  2 | kkkk | 1   | 2232   | 2033-02-01 |
	+----+------+-----+--------+------------+
	2 rows in set (0.01 sec)

	mysql> update myroot set age = 2 where phone = 232434;
	Query OK, 1 row affected (0.01 sec)
	Rows matched: 1  Changed: 1  Warnings: 0

	mysql> select * from myroot;
	+----+------+-----+--------+------------+
	| id | name | age | phone  | date       |
	+----+------+-----+--------+------------+
	|  1 | kk   | 2   | 232434 | 2022-12-03 |
	|  2 | kkkk | 1   | 2232   | 2033-02-01 |
	+----+------+-----+--------+------------+
	2 rows in set (0.00 sec)