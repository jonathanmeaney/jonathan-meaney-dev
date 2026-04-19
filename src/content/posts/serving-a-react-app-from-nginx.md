---
title: Serving a React app from Nginx
pubDate: '2021-01-16 14:21:12'
updatedDate: '2021-03-11 10:09:06'
description: I recently created a simple React app for running different tax calculations
  (still a work in progress) called Calc Mate and decided to deploy it on a Linode
draft: false
slug: serving-a-react-app-from-nginx
author: jonathanmeaney
tags:
- nginx
- configuration
- react
---
I recently created a simple React app for running different tax calculations (still a work in progress) called [Calc Mate](https://calc-mate.com) and decided to deploy it on a Linode instance I have running Nginx.

#### Create a new nginx site configuration file for the react app

Create a new configuration file for your application.

```
sudo vim /etc/nginx/sites-available/calc-mate
```

#### Add configuration

The contents of the file should be the following. Replace the **server\_name** as appropriate and update the **root** to point to the build directory of your app wherever it is located on your server. Don't forget to specify the **index** file, which for a React app will usually be **index.html**

Also another important thing to remember is that is you are using **react-router** you need to specify in the **location try\_files** to point to **index.html** because without this you will get an Nginx error when you refresh the browser on a routed resource as the request wont be routed back into the router.

```
server {
  server_name calc-mate.com www.calc-mate.com;

  root /path/to/calc-mate/build;
  index index.html;

  location / {
    try_files $uri /index.html;
  }
}
```

#### link config file to site-enabled

Now that you have created the configuration file for the app you need to link the configuration to the **sites-enabled** so that Nginx will import the server configuration.

```
sudo ln -s /etc/nginx/sites-available/calc-mate /etc/nginx/sites-enabled
```

#### restart

Now you just need to restart Nginx in order to get the changes ot take effect

```
sudo service nginx restart
```

#### Build/Rebuild

Now that the server is configured you need to build the app in production mode to serve it correctly. Every time you make changes to the app you will need to rebuild. I use yarn as my package manager. To build the app in production mode using yarn from the root of the application you just run:

```
yarn build
```

And then when you refresh the page in the browser your latest changes will have taken effect. No need to restart the server!
