---
title: Automate Starting Terminal Processes with a Script on macOS/OSX
pubDate: '2017-08-07 18:56:24'
updatedDate: '2017-08-08 08:29:09'
description: In larger projects you may have 6 or seven processes running in different
  terminals. This can be such a pain to setup each time you boot up the system. I
  use a
draft: false
slug: automate-starting-processes-with-a-script-on-macososx
author: jonathanmeaney
tags:
- apple script
- bash
- process
- shell
- terminal
- configuration
- macos
---
In larger projects you may have 6 or seven processes running in different terminals. This can be such a pain to setup each time you boot up the system. I use a shell script containing AppleScript to open a new terminal window and then open a new tab and run a command in each.
I use this method to start the Rails server, the jobs server and any other process I need. The script below can be modified for your own needs.
The function **runCommandInNewTab** accepts a command and the path to change directories to and then execute the specified command. The function creates a new tab in the active new terminal window. The directory is changed to the one provided and then the supplied command is executed with some delays added in.
**runCommandInNewTab**is called in the main section of the script after a new window has been created. Simply repeat the **runCommandInNewTab**function with command and path for each process you wish to start.
This is all echoed to **osascript** to be run. You can include any other scripts to run before this by adding **source scriptName.sh** before the echo!
Save your script in a file with an **.sh** extension and ensure it has correct executable rights. You can run the script from the command line like so **./scriptName.sh**

```
#!/bin/sh

echo '
 on run argv
  tell application "Terminal"
   activate
   tell application "System Events"
    keystroke "n" using {command down}
   end tell
  end tell
  runCommandInNewTab("bundle exec rails s -p 3000","/Development/Rails/appname")
  runCommandInNewTab("bundle exec rake jobs:work","/Development/Rails/appname")
 end run

 on runCommandInNewTab(command,path)
  tell application "Terminal"
   activate
   set window_id to id of first window whose frontmost is true
   tell application "System Events"
    keystroke "t" using {command down}
   end tell
   set changeDir to "cd " & quoted form of (path as string)
   delay 1
   do script(changeDir) in window id window_id of application "Terminal"
   delay 2
   set newTab to do script command in window id window_id of application "Terminal"
   delay 2
  end tell
  return newTab
 end runCommandInNewTab

' | osascript - "$@" > /dev/null
```
