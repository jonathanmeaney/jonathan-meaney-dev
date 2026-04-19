---
title: Useful Unix Commands for macOS or Linux
pubDate: '2017-08-08 13:06:20'
updatedDate: '2017-08-08 13:58:51'
description: The following commands work on Unix based operating systems such as Linux
  and macOS and are executed in the terminal. Some of them will also work on the
draft: false
slug: useful-commands-for-unix-based-os-terminal
author: jonathanmeaney
tags:
- commands
- shell
- terminal
- unix
- configuration
- macos
- ubuntu
---
The following commands work on Unix based operating systems such as Linux and macOS and are executed in the terminal. Some of them will also work on the Windows command line but we're focusing on Unix based systems here.

| Command | Description |
| --- | --- |
| ``` ls ``` | Lists the contents of the current directory |
| ``` ls -l ``` | Long list including additional information about the contents |
| ``` ls -a ``` | List the contents of the current directory including hidden contents that are dot named e.g. .ruby\_version |
| ``` cd directoryName ``` | Changes directory to the specified one |
| ``` cd .. ``` | Changes directory up one level |
| ``` cd ``` | Returns to the home directory |
| ``` mkdir directoryName ``` | Makes a new directory with the specified name |
| ``` rmdir directoryName ``` | Removes a directory with the specified name if it is empty |
| ``` rm -rf directoryName ``` | Removes a specified directory that is not empty |
| ``` rm ``` | Remove a file or files. e.g.  ``` rm filename.extension rm *.extension ```  \* is the wildcard and will match anything so \*.extension matches all files with the extension. |
| ``` mv ``` | Move or rename a file. e.g.  ``` mv fileName.extension /path/to/move/to/ mv fileName.extension newFileName.extension ``` |
| ``` cp ``` | Copy a file. e.g.  ``` cp fileName.extension /path/to/copy/to/ ``` |
| ``` pwd ``` | Prints the current working directory path |
| ``` tail fileName ``` | Print the last 10 lines of a file |
| ``` tail -f fileName ``` | Prints the last 10 lines of a file but will continuously print new lines added to the file. Useful when monitoring log files. |
| ``` history ``` | Lists all the commands you have run. |
