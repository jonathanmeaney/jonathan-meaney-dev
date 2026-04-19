---
title: Setting up a Virtual Machine using VirtualBox
pubDate: "2017-08-05 15:34:49"
updatedDate: "2017-08-07 09:52:05"
description:
  Installing VirtualBox Its nice to have a safe environment to play around
  with something new, do some testing or work on a project keeping without causing
draft: false
slug: setting-up-a-virtual-machine-using-virtualbox
author: jonathanmeaney
tags:
  - virtual box
  - ubuntu
  - Virtual Machine
---
### Installing VirtualBox

Its nice to have a safe environment to play around with something new, do some testing or work on a project keeping without causing conflicts with others. Using a Virtual Machine keeps everything separated from your host machine so it minimises any risk. A Virtual Machine is an emulation of a computer system, so its basically one operating system running on another.
There are a few Virtualisation applications available but the one I use is **VirtualBox\*\***.\*\*It can be downloaded [here](https://www.virtualbox.org/wiki/Downloads) for your platform of choice and is free. Download and install the application version. When you open it it will look something like this.
![Screen Shot 2017-08-05 at 13.33.36](./images/screen-shot-2017-08-05-at-13-33-36.png)

### Getting an Operating System to use

Now that **Virtual\*\***Box**is installed it wont do much until we download a operating system to run on it. There are many great free operating systems to choose. **Ubuntu** is a **Linux** operating system that is very popular and very free. New versions of **Ubuntu** are released regularly with the **LTS** (long-term support) versions receiving updates for a longer period of time. These versions are preferred. You can download the latest **LTS** version of **Ubuntu** from [here](https://www.ubuntu.com/download/desktop) it will be an **ISO**file format. These are compatible with **Virtual\***\*Box**.At the time of writing the latest **LTS** release is **16.04.3**.

### Installing Ubuntu in VirtualBox

Open **VirtualBox** and click on **New**. The images below will guide you through the setup process for our **Ubuntu** installation.
![Screen Shot 2017-08-05 at 13.53.33](./images/screen-shot-2017-08-05-at-13-53-33.png)

Give the name to the operating system you are setting up. Calling it Ubuntu will automatically change the Type and Version for you. You can call it what you want but make sure to update Type and Version accordingly. Click continue.

![Screen Shot 2017-08-05 at 13.53.53](./images/screen-shot-2017-08-05-at-13-53-53.png)

Next you'll be asked how much RAM should be allocated to the new Virtual Machine. Depending on your hardware you may want to specify a different value here. The coloured indicator strip gives you a good indication of a reasonable value to pick. My computer has 16gb of ram so I chose 2048mb (2gb). Click continue.

![Screen Shot 2017-08-05 at 13.53.57](./images/screen-shot-2017-08-05-at-13-53-57.png)

You'll now be asked to create a Virtual Hard Disk. This is where everything will be saved. Leave the radio button on the Create a virtual hard disk now and then click create.

![Screen Shot 2017-08-05 at 13.54.01](./images/screen-shot-2017-08-05-at-13-54-01.png)

There are different Hard Disk file types that can be used. Stick with the default VDI and click continue.

![Screen Shot 2017-08-05 at 13.54.05](./images/screen-shot-2017-08-05-at-13-54-05.png)

Use the default Dynamically allocated storage. The hard drive will grow to a maximum size instead of allocating a huge chunk straight away. Click continue.

![Screen Shot 2017-08-05 at 13.54.20](./images/screen-shot-2017-08-05-at-13-54-20.png)

Now you can give a name to the new Virtual Hard Disk. It'll default to the name you first entered. You can also change the maximum size of the Virtual Hard Disk. I've kept it set to 10gb. Click create and then you are done!

![Screen Shot 2017-08-05 at 13.54.31](./images/screen-shot-2017-08-05-at-13-54-31.png)

Your Virtual Machine is now configured but there is one final step before we can boot. Click on the VM Ubuntu 16.04 in the list on the left and then click the Settings cog in the menu above. Then select the Storage tab and you will see the below screen.

![Screen Shot 2017-08-05 at 15.01.23](./images/screen-shot-2017-08-05-at-15-01-23.png)

Under Controller: IDE click on Empty. This is the optical drive. We need to Virtually insert our downloaded Ubuntu ISO into the Virtual optical drive. Select the live CD/DVD checkbox and then click on the CD icon next to the Optical Drive dropdown. You will get a small list of options, click on Choose Virtual Optical Disk File. You will get a file picker popup where you can navigate to where you downloaded the Ubuntu ISO and select it.

![Screen Shot 2017-08-05 at 15.01.55](./images/screen-shot-2017-08-05-at-15-01-55.png)

Click ok to save these new settings.

We are now ready to boot the Virtual Machine and install Ubuntu from the ISO we inserted into the Virtual Optical Drive.
![Screen Shot 2017-08-05 at 13.54.31](./images/screen-shot-2017-08-05-at-13-54-31.png)

Select the Ubuntu Virtual Machine we setup from the list on the left and then click the Start button above.

### Installing Ubuntu

![Screen Shot 2017-08-05 at 15.12.18](./images/screen-shot-2017-08-05-at-15-12-18.png)

When you boot the VM for the first time you'll be asked to Try Ubuntu or Install it from the ISO we put into the Virtual Optical Drive. Click on Install Ubuntu.

![Screen Shot 2017-08-05 at 15.12.44](./images/screen-shot-2017-08-05-at-15-12-44.png)

Next you'll be asked if you want to download updates and third party drivers during the install process. Check both boxes and click continue.

![Screen Shot 2017-08-05 at 15.13.00](./images/screen-shot-2017-08-05-at-15-13-00.png)

Next you'll be asked about the installation type. We will stick with the Erase disk and install Ubuntu option. If you were installing Ubuntu not in a Virtual Environment, on a PC alongside a different Operating System we would do something different here. But for our Virtual installation we want to Erase disk and install Ubuntu. Click on install now to continue.

![Screen Shot 2017-08-05 at 15.13.14](./images/screen-shot-2017-08-05-at-15-13-14.png)

A prompt will popup asking you to confirm the continuation. Don't worry about this as its more a warning for the situation described in the previous step, installation alongside a different Operating System. Click on continue.

![Screen Shot 2017-08-05 at 15.13.22](./images/screen-shot-2017-08-05-at-15-13-22.png)

If you know where you are then select that now. Click continue.

![Screen Shot 2017-08-05 at 15.13.35](./images/screen-shot-2017-08-05-at-15-13-35.png)

Choose your keyboard layout. Click continue.

![Screen Shot 2017-08-06 at 16.16.16](./images/screen-shot-2017-08-06-at-16-16-16.png)

Enter standard username, password and other details. I’ve selected Log in automatically but you can chose require my password to log in if you like. Click continue.

![Screen Shot 2017-08-05 at 15.15.50](./images/screen-shot-2017-08-05-at-15-15-50.png)

The installation process will finally begin. It may take a few minutes. Depending on your computers specs.

![Screen Shot 2017-08-05 at 15.19.26](./images/screen-shot-2017-08-05-at-15-19-26.png)

When the installation completes you'll be asked to restart the Virtual Machine. Click on Restart Now.

![Screen Shot 2017-08-05 at 15.27.31](./images/screen-shot-2017-08-05-at-15-27-31.png)

You'll see this message asking you to remove the installation medium. This is the ISO we inserted into the Virtual Optical Drive.

![Screen Shot 2017-08-05 at 15.27.40](./images/screen-shot-2017-08-05-at-15-27-40.png)

Click the CD icon in the bottom row of the VirtualBox window and choose Remove disk from virtual drive. Then click in the centre of the window and press enter to continue.

![Screen Shot 2017-08-05 at 15.28.37](./images/screen-shot-2017-08-05-at-15-28-37.png)

After restarting you'll be logged in to the newly installed Ubuntu.

### Installing Guest Additions

Installing the Guest Additions enables extra features that are already built into VirtualBox. These include:

- automatic resizing
- seamless mode
- the bidirectional clipboard
- drag and drop
- better performance

With the Virtual Machine running select the VirtualBox Devices menu and select Insert Guest Additions CD Image.
![Screen Shot 2017-08-05 at 15.40.52](./images/screen-shot-2017-08-05-at-15-40-52.png)

A prompt will appear. Select run.

![Screen Shot 2017-08-05 at 15.41.01](./images/screen-shot-2017-08-05-at-15-41-01.png)

Enter the password you set for the username during the installation process and click on Authenticate.

![Screen Shot 2017-08-05 at 15.41.42](./images/screen-shot-2017-08-05-at-15-41-42.png)

The installation will complete in a terminal window. When it finishes press enter to complete.

At this point you have a fully operational Virtual Machine running **Ubuntu**. You can then begin the setup process for whatever development technologies you are going to be using. If you are not familiar with **Ubuntu** then take some time to use the OS and get used to where everything is.
If you want to get Rbenv, Ruby and Rails setup on your new Ubuntu VM I have a post that goes through the process.
[Setup Rbenv, Ruby and Rails on Ubuntu 16.04](http://jonathan-meaney.com/2017/08/06/setup-rbenv-ruby-and-rails-on-ubuntu-16-04/)
