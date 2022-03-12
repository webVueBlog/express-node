
为了处理这种情况，MySQL提供了三大运算符:

IS NULL: 当列的值是 NULL,此运算符返回 true。

IS NOT NULL: 当列的值不为 NULL, 运算符返回 true。

<=>: 比较操作符（不同于 = 运算符），当比较的的两个值相等或者都为 NULL 时返回 true。

关于 NULL 的条件比较运算是比较特殊的。你不能使用 = NULL 或 != NULL 在列中查找 NULL 值 。

在 MySQL 中，NULL 值与任何其它值的比较（即使是 NULL）永远返回 NULL，即 NULL = NULL 返回 NULL 。

MySQL 中处理 NULL 使用 IS NULL 和 IS NOT NULL 运算符。

	mysql> create table mycoot ( author varchar(40) not null, count int );
	Query OK, 0 rows affected (0.04 sec)
	
	mysql> insert into mycoot ( author, count ) values ( 'jj', 20 ), ('kkk', null), ('2ll', null), ('2ll', 23);
	Query OK, 4 rows affected (0.02 sec)
	Records: 4  Duplicates: 0  Warnings: 0
	
	mysql> select * from mycoot;
	+--------+-------+
	| author | count |
	+--------+-------+
	| jj     |    20 |
	| kkk    |  NULL |
	| 2ll    |  NULL |
	| 2ll    |    23 |
	+--------+-------+
	4 rows in set (0.00 sec)


	mysql> select * from mycoot where count is null;
	+--------+-------+
	| author | count |
	+--------+-------+
	| kkk    |  NULL |
	| 2ll    |  NULL |
	+--------+-------+
	2 rows in set (0.00 sec)
	
	mysql> select * from mycoot where count is not null;
	+--------+-------+
	| author | count |
	+--------+-------+
	| jj     |    20 |
	| 2ll    |    23 |
	+--------+-------+
	2 rows in set (0.00 sec)
