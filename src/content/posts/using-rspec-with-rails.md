---
title: Using RSpec with Rails
pubDate: '2017-07-27 13:47:04'
updatedDate: '2017-07-28 14:35:56'
description: I like using RSpec for testing. And adding it to the application at the
  beginning will make sure new spec files are created when we use the Rails generator
  to
draft: false
slug: using-rspec-with-rails
author: jonathanmeaney
tags:
- rails
- rspec
- ruby
- ruby on rails
- testing
---
I like using RSpec for testing. And adding it to the application at the beginning will make sure new spec files are created when we use the Rails generator to create resources. Its a pain to manually create these files if we wait until later to think about adding in some tests.
Test Driven Development is good practice but many find it very boring and don't see the point, we usually just want to get our hands dirty making something cool and not worry about if it works properly or not! That might be ok when you're just working on something for yourself but when you work on a development team and the product has thousands of customers, you really need to make sure that adding new features doesn't break any existing feature and that customers hit bugs rarely.
Thats why writing proper tests and keeping on top of things is really important. After a while it will become second nature to you and eventually you'll get used to the torture and start to like it. Its like developers Stockholm syndrome.
So we're going to add the **rspec-rails** gem to our gemfile inside the development and test group. We only need the gem in these environments.

```
group :development, :test do
  gem 'rspec-rails', '~> 3.5'
end
```

Then don't forget we need to actually install the gem so on the terminal run

```
bundle install
```

When that is done installing we'll run rspec:install generator which will add some new files and directories to our app

```
bundle exec rails generate rspec:install
```

This adds the following files that are used for configuration

```
.rspec
spec/spec_helper.rb
spec/rails_helper.rb
```

Our tests will go inside the **spec** directory when they get created. We don't have any right now but to run all the specs we runt the following command

```
bundle exec rspec
```

But if you just want to run one spec (you'll usually be doing this when developing a feature) you would run

```
bundle exec rspec ./spec/<LOCATION OF SPEC FILE>/<SPEC FILE NAME>
```

e.g.

```
bundle exec rspec ./spec/controllers/posts_controller_spec.rb
```

you can also append a line number to the end of the file name to just run a single test or single block of tests in a file. Can be useful if there are a lot of tests and you are only focused on one area.

```
bundle exec rspec ./spec/controllers/posts_controller_spec.rb:123
```
