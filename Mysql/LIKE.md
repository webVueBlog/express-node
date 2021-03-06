
语法

以下是 SQL SELECT 语句使用 LIKE 子句从数据表中读取数据的通用语法：

	SELECT field1, field2,...fieldN 
	FROM table_name
	WHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'

你可以在 WHERE 子句中指定任何条件。

你可以在 WHERE 子句中使用LIKE子句。

你可以使用LIKE子句代替等号 =。

LIKE 通常与 % 一同使用，类似于一个元字符的搜索。

你可以使用 AND 或者 OR 指定一个或多个条件。

你可以在 DELETE 或 UPDATE 命令中使用 WHERE...LIKE 子句来指定条件。

	mysql> select * from myroot;
	+----+------+-----+-------+------------+
	| id | name | age | phone | date       |
	+----+------+-----+-------+------------+
	|  4 | kk   | 23  | 234   | 2033-02-02 |
	+----+------+-----+-------+------------+
	1 row in set (0.01 sec)

	mysql> insert into myroot (name,age,phone,date) values ('kkaa', 2345, 12234, '2034-2-1');
	Query OK, 1 row affected (0.01 sec)

	mysql> insert into myroot (name,age,phone,date) values ('akkka', 23456, 1223, '2012-2-1') ('1231a', 2334, 12323, '2010-2-2') ('sll', 232, 122, '2010-8-23') ('sk', 23, 45, '2030-9-23') ('kvk', 23421, 2324, '2021-2-10') ('uue', 23, 234, '1990-2-3');
	ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '('1231a', 2334, 12323, '2010-2-2') ('sll', 232, 122, '2010-8-23') ('sk', 23, 45,' at line 1
	mysql> insert into myroot (name,age,phone,date) values ('akkka', 23456, 1223, '2012-2-1'), ('1231a', 2334, 12323, '2010-2-2'), ('sll', 232, 122, '2010-8-23'), ('sk', 23, 45, '2030-9-23'), ('kvk', 23421, 2324, '2021-2-10'), ('uue', 23, 234, '1990-2-3');
	Query OK, 6 rows affected (0.01 sec)
	Records: 6  Duplicates: 0  Warnings: 0

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
	8 rows in set (0.01 sec)

	mysql> select * from myroot where name like 'kk%';
	+----+------+------+-------+------------+
	| id | name | age  | phone | date       |
	+----+------+------+-------+------------+
	|  4 | kk   | 23   | 234   | 2033-02-02 |
	|  5 | kkaa | 2345 | 12234 | 2034-02-01 |
	+----+------+------+-------+------------+
	2 rows in set (0.01 sec)

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

	mysql> select * from myroot where age < 23456;
	+----+-------+-------+-------+------------+
	| id | name  | age   | phone | date       |
	+----+-------+-------+-------+------------+
	|  4 | kk    | 23    | 234   | 2033-02-02 |
	|  5 | kkaa  | 2345  | 12234 | 2034-02-01 |
	|  7 | 1231a | 2334  | 12323 | 2010-02-02 |
	|  8 | sll   | 232   | 122   | 2010-08-23 |
	|  9 | sk    | 23    | 45    | 2030-09-23 |
	| 10 | kvk   | 23421 | 2324  | 2021-02-10 |
	| 11 | uue   | 23    | 234   | 1990-02-03 |
	+----+-------+-------+-------+------------+
	7 rows in set (0.00 sec)

	mysql> select * from myroot where age < 23456 and name like '%a';
	+----+-------+------+-------+------------+
	| id | name  | age  | phone | date       |
	+----+-------+------+-------+------------+
	|  5 | kkaa  | 2345 | 12234 | 2034-02-01 |
	|  7 | 1231a | 2334 | 12323 | 2010-02-02 |
	+----+-------+------+-------+------------+
	2 rows in set (0.00 sec)

	mysql> select * from myroot where age < 23456 and name like '%a' limit 1;
	+----+------+------+-------+------------+
	| id | name | age  | phone | date       |
	+----+------+------+-------+------------+
	|  5 | kkaa | 2345 | 12234 | 2034-02-01 |
	+----+------+------+-------+------------+
	1 row in set (0.00 sec)
