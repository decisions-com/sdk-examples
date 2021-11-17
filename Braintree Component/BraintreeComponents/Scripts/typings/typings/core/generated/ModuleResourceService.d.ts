/// <reference path="./datatypes._base.d.ts" />

interface ModuleResourceServiceStatic {

	GetDependencies(entityType: string, entityId: string, successCallback: (data: { GetDependenciesResult: $D.Framework.ServiceLayer.Services.Module.ModuleResourceNode }) => any, errorCallback?: () => any): JQueryPromise<{ GetDependenciesResult: $D.Framework.ServiceLayer.Services.Module.ModuleResourceNode }>;

	GetDependencies(entityType: string, entityId: string): { GetDependenciesResult: $D.Framework.ServiceLayer.Services.Module.ModuleResourceNode };

	GetDependenciesPromise(entityType: string, entityId: string): Promise<$D.Framework.ServiceLayer.Services.Module.ModuleResourceNode>;
}

interface ServicesStatic {
	ModuleResourceService(): ModuleResourceServiceStatic;
}
