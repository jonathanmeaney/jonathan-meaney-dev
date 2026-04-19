---
title: Show Git Branch in Terminal
pubDate: '2017-07-28 14:34:05'
updatedDate: '2017-08-07 19:42:17'
description: PS1 stands for Prompt String 1 . It is the one of the prompts available
  in the Linux/UNIX shell. When you open your terminal, it will display the content
draft: false
slug: show-git-branch-in-terminal
author: jonathanmeaney
tags:
- git
- shell
- terminal
- configuration
---
PS1 stands for **Prompt String 1**. It is the one of the prompts available in the Linux/UNIX shell. When you open your terminal, it will display the content defined in the PS1 variable in your bash prompt. We can use this to display the name of the current Git branch in our prompt.
The parse\_git\_branch function does some regex parsing magic to the branch name. The output of this will be set in the PS1 variable.
**\u \h** and **\W** stand for the user, hostname and the working directory. **[\033[32m\]**and **[\033[00m\]**is the colour the branch will be displayed.

```
# Git branch in prompt.
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```

Open your **bash\_profile** and add the above code to it. Using a basic terminal based text editor like **vim**you can open the **bash\_profile** by running the following command

```
vim ~/.bash_profile
```

Then press **i**to allow for text input and paste the above code in. Then press **esc**to exit text input mode and type **:wq** to save the file and quit. When you have done this you will need to reload the **bash\_profile** for the system to reflect your changes.

```
source ~/.bash_profile
```

You should now see the Git branch name displayed when you are in a directory that has Git initialised!
