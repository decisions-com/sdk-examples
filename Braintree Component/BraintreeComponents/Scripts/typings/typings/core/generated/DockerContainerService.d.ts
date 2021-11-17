/// <reference path="./datatypes._base.d.ts" />

interface DockerContainerServiceStatic {

	ContainerHealthUpdate(container: any, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[], successCallback: (data: { ContainerHealthUpdateResult: $D.Framework.ServiceLayer.Containers.ContainerHealthResponse }) => any, errorCallback?: () => any): JQueryPromise<{ ContainerHealthUpdateResult: $D.Framework.ServiceLayer.Containers.ContainerHealthResponse }>;

	ContainerHealthUpdate(container: any, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[]): { ContainerHealthUpdateResult: $D.Framework.ServiceLayer.Containers.ContainerHealthResponse };

	ContainerHealthUpdatePromise(container: any, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[]): Promise<$D.Framework.ServiceLayer.Containers.ContainerHealthResponse>;

	ContainerShutdown(containerId: string, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[], successCallback: (data: { ContainerShutdownResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ContainerShutdownResult: void }>;

	ContainerShutdown(containerId: string, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[]): { ContainerShutdownResult: void };

	ContainerShutdownPromise(containerId: string, errors: $D.Framework.ServiceLayer.Containers.ContainerErrors[]): Promise<void>;
}

interface ServicesStatic {
	DockerContainerService(): DockerContainerServiceStatic;
}
