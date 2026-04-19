---
title: Using Rails for API-only Applications
pubDate: '2017-07-27 15:11:34'
updatedDate: '2017-07-28 11:46:25'
description: When Rails 5 released it included the option to create a stripped down
  Rails app that is configured for use as an API. This is very useful especially when
draft: true
slug: using-rails-for-api-only-applications
author: jonathanmeaney
---
When Rails 5 released it included the option to create a stripped down Rails app that is configured for use as an API. This is very useful especially when using something like React as the front end, you can use the Rails API app as the backend to supply React with data and handle all the other bits the UI doesn't care about. The RubyOnRails guide has a lot more info on [API-only applications](http://edgeguides.rubyonrails.org/api_app.html) and goes into more detail outside the scope of this post.
To demonstrate this we'll create a good old fashioned, done to death Post management application. Please contain your excitement. Lets begin.

## Before starting

We need to make sure we have a compatible version of Ruby and Rails 5 gem installed. Rails 5 requires Ruby version 2.2.2+
I recommend using **Rbenv** to handle your Ruby installation and management needs. It's a handy tool. I have a post on [setting it up on](http://jonathan-meaney.com/2017/07/28/setting-up-and-using-rbenv-on-macos/)[macOS](http://jonathan-meaney.com/2017/07/28/setting-up-and-using-rbenv-on-macos/). If you're using Windows then i'd recommend installing [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and downloading a distribution of **Linux** such as [Ubuntu](https://www.ubuntu.com/download) and installing it on **VirtualBox**. You'll then have a Virtual Machine that you can then use and install Ruby and Rails there and do your development work. Virtual Machines are nice because you can create snapshots at different points in case something goes wrong you can rollback to a previous version easily.
Check your version of Ruby and Rails using the following commands on the terminal.

```
ruby -v
rails -v
```

If your Ruby version isn't greater than 2.2.2 then use **Rbenv** to install a newer version of Ruby. Also install Bundler and then install the latest version of Rails.

```
gem install rails
```

If you were already on a sufficiently high version of Ruby and have Rails installed but it is not the latest version then run

```
gem update rails
```

## Creating the Post API Application

We're going to create a Rails API for a simple Post Management app. We'll be able to Create, Read, Update and Delete (CRUD) posts through API calls.
To create the API-only Rails app we can use the new **--api** flag when creating the app. We'll also use the **-T** flag to exclude the default Minitest framework. We're going to use RSpec instead.
We're going to call the app **post\_api**. Open your terminal or command line and navigate to where you want to create the app, location doesn't really matter, just make sure you know where it is! run the command below to create the API application.

```
rails new post_api --api -T
```

Now we have the **post\_api** app created. Crack open the Champagne! and then open the **post\_api** app folder in an editor of your choice. I prefer Sublime Text.
Some of the differences you might notice between the API-only app and a normal rails one are

- **ApplicationController** now inherits from **ActionController::API** instead of **ActionController::Base**
- No views generated, we don't need them as there is no UI!

## Adding RSpec

I like to add RSpec at the start of development before doing anything else. It saves on some manual work later on creating files and whatnot. I have another post going through how to get it setup and how to run your tests. I'd recommend doing this before proceeding, **its easy and will only take a few minutes... ;) ;)** This is the post [Using RSpec with Rails](http://jonathan-meaney.com/2017/07/27/using-rspec-with-rails/)
If you don't care about testing then please give the screen the finger now and scroll down.

## Creating the Posts resource

We have our application but its pretty useless right now. We need to create the **Posts** resource.

## Making requests to our API

## Conclusion

Like Hillary Clintons email server this application is terribly insecure. With an API thats exposed to everyone we need to make sure that each request is authenticated. This will be covered in a future post along with some React frontend that will use the post\_api backend.
Finally In the words of the great RuPaul:
> If you can't code for yourself, how in the hell are you gonna code for somebody else.
