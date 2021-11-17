/// <reference path="./datatypes._base.d.ts" />

interface EntityDetailsServiceStatic {

	GetDetailsForEntity(entityId: string, typeName: string, successCallback: (data: { GetDetailsForEntityResult: $D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails }) => any, errorCallback?: () => any): JQueryPromise<{ GetDetailsForEntityResult: $D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails }>;

	GetDetailsForEntity(entityId: string, typeName: string): { GetDetailsForEntityResult: $D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails };

	GetDetailsForEntityPromise(entityId: string, typeName: string): Promise<$D.Framework.ServiceLayer.Services.EntityDetails.PlatformEntityDetails>;

	GetValidationIssuesForEntity(entityId: string, typeName: string, successCallback: (data: { GetValidationIssuesForEntityResult: $D.Framework.ValidationIssue[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetValidationIssuesForEntityResult: $D.Framework.ValidationIssue[] }>;

	GetValidationIssuesForEntity(entityId: string, typeName: string): { GetValidationIssuesForEntityResult: $D.Framework.ValidationIssue[] };

	GetValidationIssuesForEntityPromise(entityId: string, typeName: string): Promise<$D.Framework.ValidationIssue[]>;

	GetEntityProperties(entityId: string, typeName: string, successCallback: (data: { GetEntityPropertiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityPropertiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetEntityProperties(entityId: string, typeName: string): { GetEntityPropertiesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetEntityPropertiesPromise(entityId: string, typeName: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetEntityDetailsDto(entityId: string, typeName: string, successCallback: (data: { GetEntityDetailsDtoResult: $D.Framework.ServiceLayer.Services.EntityDetails.EntityDetailsDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityDetailsDtoResult: $D.Framework.ServiceLayer.Services.EntityDetails.EntityDetailsDto }>;

	GetEntityDetailsDto(entityId: string, typeName: string): { GetEntityDetailsDtoResult: $D.Framework.ServiceLayer.Services.EntityDetails.EntityDetailsDto };

	GetEntityDetailsDtoPromise(entityId: string, typeName: string): Promise<$D.Framework.ServiceLayer.Services.EntityDetails.EntityDetailsDto>;
}

interface ServicesStatic {
	EntityDetailsService(): EntityDetailsServiceStatic;
}
