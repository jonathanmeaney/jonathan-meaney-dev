---
title: Docker Commands
pubDate: '2018-02-24 11:23:49'
updatedDate: '2018-02-24 11:26:35'
description: Command Description docker attach Attach the shell's input/output/error
  stream to the container docker build Build a Docker image based on a provided
draft: false
slug: docker-commands
author: jonathanmeaney
tags:
- bash
- commands
- configuration
- docker
---
| Command | Description |
| --- | --- |
| ``` docker attach ``` | Attach the shell's input/output/error stream to the container |
| ``` docker build ``` | Build a Docker image based on a provided Dockerfile |
| ``` docker cp ``` | Copy files between container and host |
| ``` docker exec ``` | Execute a command in a running container |
| ``` docker images ``` | List image available to your installation of docker |
| ``` docker info ``` | Display information about the system |
| ``` docker inspect ``` | Display information about Docker layers, containers, images, etc |
| ``` docker kill ``` | Forcefully terminate a container |
| ``` docker logs ``` | Display logs from a container since it last started |
| ``` docker pause ``` | Pause all processes within a container |
| ``` docker ps ``` | List information about containers and their resource usage |
| ``` docker pull ``` | Pull an image from a remote repository into the local registry |
| ``` docker push ``` | Push an image from the local registry into a remote repository |
| ``` docker rm ``` | Remove a container |
| ``` docker rmi ``` | Remove an image from the local repository |
| ``` docker run ``` | Start a new container and run it |
| ``` docker search ``` | Search DockerHub for images |
| ``` docker start ``` | Start a stopped container |
| ``` docker stop ``` | Stop a running container nicely (wait for container to shut down) |
| ``` docker tag ``` | Create a tag for an image |
| ``` docker top ``` | Show running processes of a container |
| ``` docker unpause ``` | Resume all processes in a paused container |
| ``` docker version ``` | Show the Docker version |

## Useful Examples

### Starting a container

```
docker start CONTAINER_NAME
```

### Stopping a running container

```
docker container stop CONTAINER_NAME
```

### List running containers

```
docker ps
```

### List all containers

Containers that aren't running will not show with the **ps** command so use **-a** to list them all.

```
docker ps -a
```

### Stop and remove a container

```
docker container rm -f CONTAINER_NAME
```

### List local images

Displays useful information about images including size. Docker can quickly eat up your free space so keep an eye on this!

```
docker image ls
```

### Remove a local image

If you have noticed a few images you no longer need when running **docker image ls** then you can remove them using this command and free up some space.

```
docker image rm IMAGE_NAME
```

### Getting bash on a running container

This will give you a command line to work with inside the container.

```
docker exec -it CONTAINER_NAME bash
```

### Getting logs of a running container

```
docker container logs CONTAINER_NAME
```
