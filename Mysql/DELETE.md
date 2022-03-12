
语法

以下是 SQL DELETE 语句从 MySQL 数据表中删除数据的通用语法：

	DELETE FROM table_name [WHERE Clause]

如果没有指定 WHERE 子句，MySQL 表中的所有记录将被删除。

你可以在 WHERE 子句中指定任何条件

您可以在单个表中一次性删除记录。

当你想删除数据表中指定的记录时 WHERE 子句是非常有用的。

	mysql> select * from myroot;
	+----+------+-----+--------+------------+
	| id | name | age | phone  | date       |
	+----+------+-----+--------+------------+
	|  1 | kk   | 2   | 232434 | 2022-12-03 |
	|  2 | kkkk | 1   | 2232   | 2033-02-01 |
	+----+------+-----+--------+------------+
	2 rows in set (0.00 sec)

	mysql> delete from myroot where age = 2;
	Query OK, 1 row affected (0.01 sec)

	mysql> select * from myroot;
	+----+------+-----+-------+------------+
	| id | name | age | phone | date       |
	+----+------+-----+-------+------------+
	|  2 | kkkk | 1   | 2232  | 2033-02-01 |
	+----+------+-----+-------+------------+
	1 row in set (0.01 sec)

	mysql> insert into myroot (name, age, phone, date) values ('jj', 23, 2343, 2000-2-2);
	ERROR 1292 (22007): Incorrect date value: '1996' for column 'date' at row 1
	mysql> insert into myroot (name, age, phone, date) values ('ss',223,2343,'2000-2-2');
	Query OK, 1 row affected (0.01 sec)

	mysql> select * from myroot;
	+----+------+-----+-------+------------+
	| id | name | age | phone | date       |
	+----+------+-----+-------+------------+
	|  2 | kkkk | 1   | 2232  | 2033-02-01 |
	|  3 | ss   | 223 | 2343  | 2000-02-02 |
	+----+------+-----+-------+------------+
	2 rows in set (0.01 sec)

	mysql> delete from myroot;
	Query OK, 2 rows affected (0.01 sec)

	mysql> select * from myroot;
	Empty set (0.00 sec)






