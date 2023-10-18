# GRPC Server Client

This is an example of a simple gRPC server and client that can be tested locally or in a deployed environment, such as [Amazon ECS with Fargate instances](https://aws.amazon.com/blogs/opensource/containerize-and-deploy-a-grpc-application-on-aws-fargate/).

## Local Testing

1. `cd greeter_server`
2. Open up a terminal window.
3. Run `npm install`
4. Run `node greeter_server.js`
5. Open up a second terminal window.
6. `cd greeter_client`
7. Run `npm install`
8. Run `node greeter_client.js`

## Build and Push Images to Docker Hub

Make sure to:

-   Create a Docker Hub account (if you don't have one).
-   Create a repo for `greeter_server` and separate one for `greeter_client`.
-   cd into `/greeter_server` or `/greeter_client` before running the commands below for each service.

```sh
docker build -t <DOCKER_USERNAME>/<DOCKER_REPO>:latest .
```

```sh
docker push <DOCKER_USERNAME>/<DOCKER_REPO>:latest
```
