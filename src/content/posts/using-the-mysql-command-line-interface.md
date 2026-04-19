---
title: Using the MySQL Command Line Interface
pubDate: '2017-08-27 13:51:17'
updatedDate: '2017-08-27 13:51:41'
description: There are many graphical packages available to view MySQL data and perform
  database operations. You might not always have the ability to install a graphical
draft: false
slug: using-the-mysql-command-line-interface
author: jonathanmeaney
tags:
- commands
- mysql
- sql
- databases
---
There are many graphical packages available to view MySQL data and perform database operations. You might not always have the ability to install a graphical package to work with the database so when you don't you can use the command line interface which is just as powerful and must faster!

### Command Line Interface

You can login to the MySQL command line interface using the **mysql** command and using the **-u**and **-p**flags. The **-u**flag is followed by the user wishing to login. Adding the **-p** flag will cause a password prompt to appear after executing the command.

```
mysql -u  -p 

e.g.

mysql -u root -p
```

When the password is entered then you'll be successfully logged in and can start exploring the databases and execute queries.

### Basic Operations

| Command | Description |
| --- | --- |
| ``` show databases; ``` | Display a list of all the databases that have been created. |
| ``` use DATABASE_NAME; ``` | Select a database to use where DATABASE\_NAME is the name of the desired database. |
| ``` show tables; ``` | Display a list of tables that have been created. |

Now that you can select and use Databases you can start running your desired **SQL** queries and don't forget the semicolon at the end of each query!
