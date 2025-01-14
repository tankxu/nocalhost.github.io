# Nocalhost - Redefine Cloud Native Dev Environment

## Preface

With the rapid development of business, the organizational structure of the technical department has been continuously expanded and adjusted horizontally and vertically. At the same time, the enterprise's production materials: application systems, have also become larger and larger. In order to adapt the application system to the adjustment of the enterprise organizational structure and sort out the boundaries of the organizational structure for application rights and responsibilities, most organizations will choose to use the "microservice" architecture to split the application system horizontally, so that the maintenance boundary of the application system is adapted The power and responsibility boundary of the organizational structure.

Generally speaking, the larger the organizational structure, the more detailed the application system will be, and the number of "microservices" will also increase. In the practice of splitting "microservices", it is easy to mark the authority and responsibility boundaries of the organizational structure into the splitting granularity of "microservices", which may lead to too fine granularity of "microservices". The problem of further sharp increase in number. In the end, the calling relationship between "microservices" is like cross-departmental collaboration, and it has become more and more complex. The problem is particularly prominent when you want to add new requirements.

While "microservices" bring convenience, it also brings additional challenges for developers: how to quickly start a complete development environment? The development requirements depend on how other colleagues can coordinate and debug? How to quickly debug these microservices?

For managers, it also brings a series of challenges: how to manage the development environment of developers? How to let new colleagues quickly develop?

Imagine what difficulties would you encounter when developing a cloud-native application consisting of 200 "microservices"?

## Localhost era

In the era of monolithic applications, it is extremely friendly to developers. Developers use the local machine to run the application, modify the code to take effect in real time, and visit Localhost through a browser to view the code effect in real time.

[ ![](../assets/images/blog/en/1-1.png) ](../assets/images/blog/en/1-1.png)

Monolithic applications are different from "microservices" applications. Monolithic applications are organized as "ALL-IN-ONE". All calling relationships are limited to their own classes and functions, and the hardware requirements of applications are generally not too high.

The development of "microservice" applications is quite different. Due to the mutual dependence, when a certain function or microservice needs to be developed, all dependent services have to be activated. With the increase in the number of microservices, more and more local resources are needed to develop applications, which ultimately leads to the local inability to meet the configuration requirements of development.

## Cloud Native liberates deployment and operation, What about development?

The popularity of cloud native and Kubernetes further shields the complexity of "microservice" applications, which is mainly reflected in the deployment and operation and maintenance stages.

In order to solve the problem of environmental consistency in the development, testing, and production stages of microservice applications, modern microservice application development will package each component into a Docker image and deploy it in the form of workload. Using continuous integration and continuous deployment in the DevOps pipeline, combined with Kubernetes probes, HPA, and application self-healing capabilities, completely liberated the deployment and operation and maintenance of microservice applications.

But we overlooked a key node: the development phase.

After microservice applications are packaged with Kubernetes workloads, the problem of rapid application startup in the development process is solved. Developers only need to install a single-node Kubernetes cluster locally, such as Minikube, Kind, etc., to quickly start microservice applications.

But for developers, the original monolithic application development experience no longer exists. Since the application is difficult to run outside of the Docker container, each code modification needs to go through the following steps:

* Execute docker build to build the image
* Execute docker tag to tag the image
* Execute docker push to push the image to the warehouse
* Modify the image version of the Kubernetes workload
* Wait for the mirror pull to end
* Wait for the Pod to rebuild
* View the modified code effect

This directly slows down the cyclic feedback process of development, and each modification requires several minutes or even ten minutes of waiting time.

[ ![](../assets/images/blog/en/1-2.png) ](../assets/images/blog/en/1-2.png)

## Redefine Cloud Native Dev Environment

> Nocalhost is a Cloud Native development environment, hoping to make developing cloud-native applications as primitive and simple as developing a single application.

Nocalhost reorganized the roles and resources involved in the development process:

* Team manager
* Developer
* Application
* Cluster
* Development Space

Through the reintegration of these roles and resources, Nocalhost redefines the cloud-native development environment and brings a new cloud-native development experience.

In order to quickly understand the cloud-native development environment redefined by Nocalhost, let us first stand in different roles and see what Nocalhost can bring to them.

Developer:

* Get rid of the need to rebuild a new image for each modification and long-term loop feedback, and the modified code will take effect immediately.
* One-click deployment of the development environment, get rid of the limitations of local environment construction and insufficient resources.
* Link between local IDE editor and development environment, support remote debugging.
* Graphical IDE plug-in, no need to be familiar with kubectl commands to complete development in cloud native environment.

Manager:

* Unified management of microservice application packages, reducing application maintenance costs.
* Unified management of the development environment and cluster, improve the utilization of cluster resources, and have isolation characteristics.
* Quickly allocate development environment for new employees, and application development can be carried out immediately after the allocation of the environment.
* Flexible development environment resources can be destroyed when used up, reducing development costs.

Taking Nocalhost's built-in Demo: Bookinfo as an example, the development of Productpage microservices has become the following simple steps:

1. One-click deployment development environment:

    [ ![](../assets/images/blog/en/1-3.png) ](../assets/images/blog/en/1-3.png)

2. Environment deployment is complete, select the component to be developed, click "hammer" to enter the development mode:

    [ ![](../assets/images/blog/en/1-4.png) ](../assets/images/blog/en/1-4.png)

3. Clone business code or select local code directory to open:

    [ ![](../assets/images/blog/en/1-5.png) ](../assets/images/blog/en/1-5.png)

4. Enter the development mode, modify the code locally and save it, no need to rebuild the mirror image, the remote development environment takes effect in real time, and supports remote debugging:

    [ ![](../assets/images/blog/en/1-6.png) ](../assets/images/blog/en/1-6.png)

    [ ![](../assets/images/blog/en/1-7.png) ](../assets/images/blog/en/1-7.png)

## Landing case

Currently, Tencent Cloud CODING DevOps (nearly 200 microservices) is using Nocalhost for development. Practice has verified that Nocalhost can greatly improve development efficiency and shorten feedback loops.

## Open source and community co-construction

Nocalhost is currently fully open source and has entered CNCF Landscape: https://landscape.cncf.io/

Github address: https://github.com/nocalhost/nocalhost.

Use Apache-2.0 open source agreement, can use unlimited free.

For more information about Nocalhost, please visit the official website: https://nocalhost.dev.