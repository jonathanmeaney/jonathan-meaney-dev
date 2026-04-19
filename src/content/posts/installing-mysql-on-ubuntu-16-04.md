---
title: Installing MySQL on Ubuntu 16.04
pubDate: '2017-08-27 12:47:11'
updatedDate: '2017-08-27 13:53:59'
description: Installing MySQL on Ubuntu is very straight forward using the command
  line package manager Apt . The following steps should be executed from the terminal.
draft: false
slug: installing-mysql-on-ubuntu-16-04
author: jonathanmeaney
tags:
- mysql
- configuration
- databases
- ubuntu
---
Installing MySQL on Ubuntu is very straight forward using the command line package manager **Apt**. The following steps should be executed from the terminal.

### Installing MySQL

First of all make sure the apt package manager is up to date by running the following command.

```
sudo apt-get update
```

This should just take a few moments and when its complete we can move on to the next step which is installing MySQL using **apt-get**,to do this run

```
sudo apt-get install mysql-server
```

This is download and install MySQL server. During the installation process you will need to specify a root password. Make sure you choose a secure password that you can remember, something containing Egyptian hieroglyphics and morse code should suffice. The installation process should only take a few minutes. When its finished we can run the **secure\_installation**script which will improve the security of our MySQL instance.

### Configuring MySQL

The MySQL install includes a security script that will beef up the security for MySQL by changing some of the default options in the aims of improving security. Run the script using the following command.

```
sudo mysql_Secure_installation
```

You'll be asked for the root password you set during the MySQL installation so enter that and follow the prompts. It'll ask you if you want to change your root password but if you're happy with the one you set during the installation then you don't need to do this.

### Testing everything is working

Run the following command to check that the MySQL service is running. It should have started automatically after installation.

```
systemctl status mysql.service
```

You should see output similar to what is shown below.

```
mysql.service - MySQL Community Server
   Loaded: loaded (/lib/systemd/system/mysql.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2017-02-23 12:14:05 UTC; 6 months 2 days ago
 Main PID: 3550 (mysqld)
   CGroup: /system.slice/mysql.service
           └─3550 /usr/sbin/mysqld
```

If for some reason MySQL isn't running then you can start it using this command.

```
sudo systemctl start mysql
```

### Using the MySQL Command Line Interface

I've another blog post that goes through accessing and using the MySQL command line interface. [Using the MySQL Command Line Interface](http://jonathan-meaney.com/2017/08/27/using-the-mysql-command-line-interface/)
