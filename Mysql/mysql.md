mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| xxx         |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.01 sec)
 
mysql> select now();
+---------------------+
| now()               |
+---------------------+
| xxxx-xx-xx 22:29:01 |
+---------------------+
1 row in set (0.00 sec)
 
+---------------------+----------------+-----------+
| now()               | user()         | version() |
+---------------------+----------------+-----------+
| xxxx-xx-xx 22:30:18 | root@localhost | 8.0.28    |
+---------------------+----------------+-----------+
1 row in set (0.00 sec)
 
mysql> select now();select user();select version();
+---------------------+
| now()               |
+---------------------+
| xxxx-xx-xx 22:34:33 |
+---------------------+
1 row in set (0.00 sec)
 
+----------------+
| user()         |
+----------------+
| root@localhost |
+----------------+
1 row in set (0.00 sec)
 
+-----------+
| version() |
+-----------+
| 8.0.28    |
+-----------+
1 row in set (0.00 sec)


mysql> create database sampdb;
Query OK, 1 row affected (0.02 sec)
 
mysql> select database();
+------------+
| database() |
+------------+
| xxxxxxxxxx |
+------------+
1 row in set (0.00 sec)
 
mysql> use sampdb;
Database changed

mysql> select database();
+------------+
| database() |
+------------+
| sampdb     |
+------------+
1 row in set (0.00 sec)

mysql> create table president (last_name varchar(15) not null, first_name varchar(15) not null, suffix varchar(5) null, city varchar(20) not null, state varchar(2) not null, birth date not null, death date null);
Query OK, 0 rows affected (0.04 sec)

mysql> describe president;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
| suffix     | varchar(5)  | YES  |     | NULL    |       |
| city       | varchar(20) | NO   |     | NULL    |       |
| state      | varchar(2)  | NO   |     | NULL    |       |
| birth      | date        | NO   |     | NULL    |       |
| death      | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
7 rows in set (0.01 sec)


mysql> create table member (
    -> member_id int unsigned not null auto_increment,primary key (member_id), last_name varchar(20) not null, first_name varchar(20) not null, suffix varchar(5) null, expiration date null, email varchar(100) null, street varchar(50) null, city varchar(50) null, state varchar(2) null, zip varchar(10) null, phone varchar(20) null, interests varchar(255) null);
Query OK, 0 rows affected (0.03 sec)

mysql> show tables;
+------------------+
| Tables_in_sampdb |
+------------------+
| member           |
| president        |
+------------------+
2 rows in set (0.01 sec)
 
mysql> describe member;
+------------+--------------+------+-----+---------+----------------+
| Field      | Type         | Null | Key | Default | Extra          |
+------------+--------------+------+-----+---------+----------------+
| member_id  | int unsigned | NO   | PRI | NULL    | auto_increment |
| last_name  | varchar(20)  | NO   |     | NULL    |                |
| first_name | varchar(20)  | NO   |     | NULL    |                |
| suffix     | varchar(5)   | YES  |     | NULL    |                |
| expiration | date         | YES  |     | NULL    |                |
| email      | varchar(100) | YES  |     | NULL    |                |
| street     | varchar(50)  | YES  |     | NULL    |                |
| city       | varchar(50)  | YES  |     | NULL    |                |
| state      | varchar(2)   | YES  |     | NULL    |                |
| zip        | varchar(10)  | YES  |     | NULL    |                |
| phone      | varchar(20)  | YES  |     | NULL    |                |
| interests  | varchar(255) | YES  |     | NULL    |                |
+------------+--------------+------+-----+---------+----------------+
12 rows in set (0.01 sec)

mysql> describe president;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
| suffix     | varchar(5)  | YES  |     | NULL    |       |
| city       | varchar(20) | NO   |     | NULL    |       |
| state      | varchar(2)  | NO   |     | NULL    |       |
| birth      | date        | NO   |     | NULL    |       |
| death      | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

mysql> explain president;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
| suffix     | varchar(5)  | YES  |     | NULL    |       |
| city       | varchar(20) | NO   |     | NULL    |       |
| state      | varchar(2)  | NO   |     | NULL    |       |
| birth      | date        | NO   |     | NULL    |       |
| death      | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
7 rows in set (0.01 sec)
 
mysql> show columns from president;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
| suffix     | varchar(5)  | YES  |     | NULL    |       |
| city       | varchar(20) | NO   |     | NULL    |       |
| state      | varchar(2)  | NO   |     | NULL    |       |
| birth      | date        | NO   |     | NULL    |       |
| death      | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
7 rows in set (0.01 sec)
 
mysql> show fields from president;
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
| suffix     | varchar(5)  | YES  |     | NULL    |       |
| city       | varchar(20) | NO   |     | NULL    |       |
| state      | varchar(2)  | NO   |     | NULL    |       |
| birth      | date        | NO   |     | NULL    |       |
| death      | date        | YES  |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
7 rows in set (0.01 sec)

mysql> show columns from president like '%name';
+------------+-------------+------+-----+---------+-------+
| Field      | Type        | Null | Key | Default | Extra |
+------------+-------------+------+-----+---------+-------+
| last_name  | varchar(15) | NO   |     | NULL    |       |
| first_name | varchar(15) | NO   |     | NULL    |       |
+------------+-------------+------+-----+---------+-------+
2 rows in set (0.01 sec)


