---
title: Setting up and using RBENV on macOS
pubDate: '2017-07-28 11:09:40'
updatedDate: '2017-09-10 16:07:43'
description: Rbenv is a great tool for setting up Ruby environments. Different applications
  could require different versions of Ruby and Rails so using Rbenv to manage this
draft: false
slug: setting-up-and-using-rbenv-on-macos
author: jonathanmeaney
tags:
- homebrew
- rbenv
- ruby
---
Rbenv is a great tool for setting up Ruby environments. Different applications could require different versions of Ruby and Rails so using Rbenv to manage this makes things a lot easier and ensures pulling your hair out remains at a minimum.

### Installing Homebrew

Homebrew is an excellent package manager for macOS that simplifies installing and managing applications and utilities. More info about Homebrew can be found on their site [here](https://brew.sh/). Running the following command from the terminal will install Homebrew.

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

This will then give you the **brew** command you can use in the terminal. Some useful commands for **brew**.

```
brew update #Fetch the newest version of Homebrew and its formulas
brew install <PACKAGE NAME> #Installs the specified package. If its not found try brew update first.
brew list #List installed packages
brew doctor #Checks for problems and possible solutions
```

You can see the full list of commands [here](https://docs.brew.sh/Manpage.html)

### Installing Rbenv using Homebrew

An important note from the Rbenv github page.
***Compatibility note**: rbenv is incompatible with RVM. Please make sure to fully uninstall RVM and remove any references to it from your shell initialization files before installing rbenv.*
So make sure you don't do what Donny Don't does!
First make sure that your Homebrew is up to date by running

```
brew update
```

Then you'll need to run the following command to install Rbenv

```
brew install rbenv
```

When this completes finally you'll need to run

```
rbenv init
```

which initialises **rbenv**. To be able to install difference versions of ruby we'll also need to install another package called **ruby-build**. This provides the **rbenv install**command. To install **ruby-build** run the following command in the terminal.

```
brew install ruby-build
```

#### Installing a Ruby version

Now we are ready to install a new version of Ruby using rbenv. To list the available versions for installation run the following command.

```
rbenv install -l
```

It will give you a long list of options that will look something like this

```
2.2.5
2.2.6
2.3.0-dev
2.3.0-preview1
2.3.0-preview2
2.3.0
2.3.1
2.3.2
2.3.3
2.4.0-dev
2.4.0-preview1
2.4.0-preview2
2.4.0-preview3
2.4.0-rc1
2.4.0
2.4.1
```

We'll install the latest stable version from this list which is **2.4.1** so to do that we'll run this command

```
rbenv install 2.4.1
```

This will then download and install that version of Ruby. The installation process will be the same for any version of Ruby that you choose. This may take a while so be patient. Maybe go out and fly a kite while you're waiting.

#### Installing gems

When the version of Ruby you selected is finished installed you'll need to install **bundler** to manage gems. To do this run the following command to install **bundler**. You'll more than likely need to do this for each version of Ruby you install.

```
gem install bundler
```

You can then install gems as you would normally.

#### Useful Rbenv commands

```
rbenv versions #Lists all the installed versions of Ruby
rbenv version #Lists the currently active Ruby version
rbenv global <RUBY VERSION> #Sets the version of Ruby to use globally. This can be overridden in specific applications by using a .ruby-version file containing the desired version to use instead.
```
