	mysql> show columns from mydoot;
	+-------+--------------+------+-----+---------+----------------+
	| Field | Type         | Null | Key | Default | Extra          |
	+-------+--------------+------+-----+---------+----------------+
	| id    | int          | NO   | PRI | NULL    | auto_increment |
	| name  | varchar(100) | NO   |     | NULL    |                |
	| age   | varchar(11)  | NO   |     | NULL    |                |
	| phone | varchar(11)  | NO   |     | NULL    |                |
	| date  | date         | YES  |     | NULL    |                |
	+-------+--------------+------+-----+---------+----------------+
	5 rows in set (0.01 sec)
	
	mysql>

当我们需要修改数据表名或者修改数据表字段时，就需要使用到MySQL ALTER命令。

	mysql> alter table mydoot add nameId int;
	Query OK, 0 rows affected (0.03 sec)
	Records: 0  Duplicates: 0  Warnings: 0
	
	mysql> show columns from mydoot;
	+--------+--------------+------+-----+---------+----------------+
	| Field  | Type         | Null | Key | Default | Extra          |
	+--------+--------------+------+-----+---------+----------------+
	| id     | int          | NO   | PRI | NULL    | auto_increment |
	| name   | varchar(100) | NO   |     | NULL    |                |
	| age    | varchar(11)  | NO   |     | NULL    |                |
	| phone  | varchar(11)  | NO   |     | NULL    |                |
	| nameId | int          | YES  |     | NULL    |                |
	+--------+--------------+------+-----+---------+----------------+
	5 rows in set (0.00 sec)
	
	mysql> alter table mydoot add ii int first;
	Query OK, 0 rows affected (0.08 sec)
	Records: 0  Duplicates: 0  Warnings: 0
	
	mysql> show columns from mydoot;
	+--------+--------------+------+-----+---------+----------------+
	| Field  | Type         | Null | Key | Default | Extra          |
	+--------+--------------+------+-----+---------+----------------+
	| ii     | int          | YES  |     | NULL    |                |
	| id     | int          | NO   | PRI | NULL    | auto_increment |
	| name   | varchar(100) | NO   |     | NULL    |                |
	| age    | varchar(11)  | NO   |     | NULL    |                |
	| phone  | varchar(11)  | NO   |     | NULL    |                |
	| nameId | int          | YES  |     | NULL    |                |
	+--------+--------------+------+-----+---------+----------------+
	6 rows in set (0.01 sec)

## 修改字段类型及名称

如果需要修改字段类型及名称, 你可以在ALTER命令中使用 MODIFY 或 CHANGE 子句 。

alter modify change

	mysql> show columns from mydoot;
	+-------+--------------+------+-----+---------+----------------+
	| Field | Type         | Null | Key | Default | Extra          |
	+-------+--------------+------+-----+---------+----------------+
	| id    | int          | NO   | PRI | NULL    | auto_increment |
	| name  | varchar(100) | NO   |     | NULL    |                |
	| age   | varchar(11)  | NO   |     | NULL    |                |
	| phone | varchar(11)  | NO   |     | NULL    |                |
	+-------+--------------+------+-----+---------+----------------+
	4 rows in set (0.00 sec)

	mysql> alter table mydoot modify age varchar(10);
	Query OK, 6 rows affected (0.06 sec)
	Records: 6  Duplicates: 0  Warnings: 0

	mysql> show columns from mydoot;
	+-------+--------------+------+-----+---------+----------------+
	| Field | Type         | Null | Key | Default | Extra          |
	+-------+--------------+------+-----+---------+----------------+
	| id    | int          | NO   | PRI | NULL    | auto_increment |
	| name  | varchar(100) | NO   |     | NULL    |                |
	| age   | varchar(10)  | YES  |     | NULL    |                |
	| phone | varchar(11)  | NO   |     | NULL    |                |
	+-------+--------------+------+-----+---------+----------------+
	4 rows in set (0.00 sec)

	mysql> alter table mydoot change age ageNew int;
	Query OK, 6 rows affected (0.06 sec)
	Records: 6  Duplicates: 0  Warnings: 0

	mysql> show columns from mydoot;
	+--------+--------------+------+-----+---------+----------------+
	| Field  | Type         | Null | Key | Default | Extra          |
	+--------+--------------+------+-----+---------+----------------+
	| id     | int          | NO   | PRI | NULL    | auto_increment |
	| name   | varchar(100) | NO   |     | NULL    |                |
	| ageNew | int          | YES  |     | NULL    |                |
	| phone  | varchar(11)  | NO   |     | NULL    |                |
	+--------+--------------+------+-----+---------+----------------+
	4 rows in set (0.00 sec)

	mysql> show columns from mydoot;
	+--------+--------------+------+-----+---------+----------------+
	| Field  | Type         | Null | Key | Default | Extra          |
	+--------+--------------+------+-----+---------+----------------+
	| id     | int          | NO   | PRI | NULL    | auto_increment |
	| name   | varchar(100) | NO   |     | NULL    |                |
	| ageNew | int          | YES  |     | NULL    |                |
	| phone  | varchar(11)  | NO   |     | NULL    |                |
	+--------+--------------+------+-----+---------+----------------+
	4 rows in set (0.00 sec)
	
	mysql> select * from mydoot;
	+----+--------+--------+--------+
	| id | name   | ageNew | phone  |
	+----+--------+--------+--------+
	|  1 | kk     |     23 | 234    |
	|  2 | kow    |   2324 | 12324  |
	|  3 | sqqsaa |  23343 | 2434   |
	|  4 | kkk    |   2324 | 23434  |
	|  5 | siikkk |   2343 | 333434 |
	|  6 | aakkke |   2323 | 434    |
	+----+--------+--------+--------+
	6 rows in set (0.00 sec)
	
	mysql> alter table mydoot modify phone  varchar(11) not null default 100;
	Query OK, 0 rows affected (0.02 sec)
	Records: 0  Duplicates: 0  Warnings: 0
	
	mysql> insert into mydoot (name, ageNew) values ('11', 1233);
	Query OK, 1 row affected (0.01 sec)
	
	mysql> select * from mydoot;
	+----+--------+--------+--------+
	| id | name   | ageNew | phone  |
	+----+--------+--------+--------+
	|  1 | kk     |     23 | 234    |
	|  2 | kow    |   2324 | 12324  |
	|  3 | sqqsaa |  23343 | 2434   |
	|  4 | kkk    |   2324 | 23434  |
	|  5 | siikkk |   2343 | 333434 |
	|  6 | aakkke |   2323 | 434    |
	|  7 | 11     |   1233 | 100    |
	+----+--------+--------+--------+
	7 rows in set (0.00 sec)

## 修改字段默认值

你可以使用 ALTER 来修改字段的默认值，尝试以下实例：

	mysql> ALTER TABLE testalter_tbl ALTER i SET DEFAULT 1000;
	mysql> SHOW COLUMNS FROM testalter_tbl;
	+-------+---------+------+-----+---------+-------+
	| Field | Type    | Null | Key | Default | Extra |
	+-------+---------+------+-----+---------+-------+
	| c     | char(1) | YES  |     | NULL    |       |
	| i     | int(11) | YES  |     | 1000    |       |
	+-------+---------+------+-----+---------+-------+
	2 rows in set (0.00 sec)

你也可以使用 ALTER 命令及 DROP子句来删除字段的默认值，如下实例：

	mysql> ALTER TABLE testalter_tbl ALTER i DROP DEFAULT;
	mysql> SHOW COLUMNS FROM testalter_tbl;
	+-------+---------+------+-----+---------+-------+
	| Field | Type    | Null | Key | Default | Extra |
	+-------+---------+------+-----+---------+-------+
	| c     | char(1) | YES  |     | NULL    |       |
	| i     | int(11) | YES  |     | NULL    |       |
	+-------+---------+------+-----+---------+-------+
	2 rows in set (0.00 sec)
	Changing a Table Type:

修改表名

如果需要修改数据表的名称，可以在 ALTER TABLE 语句中使用 RENAME 子句来实现。

	尝试以下实例将数据表 testalter_tbl 重命名为 alter_tbl：

	mysql> ALTER TABLE testalter_tbl RENAME TO alter_tbl;




