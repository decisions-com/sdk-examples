/// <reference path="./datatypes._base.d.ts" />

interface ServiceInformationServiceStatic {

	GetServiceInformation(serviceName: string, successCallback: (data: { GetServiceInformationResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceInformation }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceInformationResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceInformation }>;

	GetServiceInformation(serviceName: string): { GetServiceInformationResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceInformation };

	GetServiceInformationPromise(serviceName: string): Promise<$D.Framework.ServiceLayer.Services.ServiceInformation.ServiceInformation>;

	GetServiceUsedDataTypes(typeName: string, successCallback: (data: { GetServiceUsedDataTypesResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceUsedDataType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceUsedDataTypesResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceUsedDataType[] }>;

	GetServiceUsedDataTypes(typeName: string): { GetServiceUsedDataTypesResult: $D.Framework.ServiceLayer.Services.ServiceInformation.ServiceUsedDataType[] };

	GetServiceUsedDataTypesPromise(typeName: string): Promise<$D.Framework.ServiceLayer.Services.ServiceInformation.ServiceUsedDataType[]>;

	GetServiceRegistration(serviceName: string, successCallback: (data: { GetServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration }>;

	GetServiceRegistration(serviceName: string): { GetServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration };

	GetServiceRegistrationPromise(serviceName: string): Promise<$D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration>;

	GetAllServiceRegistration(successCallback: (data: { GetAllServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration[] }>;

	GetAllServiceRegistration(): { GetAllServiceRegistrationResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration[] };

	GetAllServiceRegistrationPromise(): Promise<$D.Framework.ServiceLayer.Services.ServiceManagement.ServiceRegistration[]>;

	GetServiceInfo(serviceName: string, successCallback: (data: { GetServiceInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.DecisionsServiceInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetServiceInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.DecisionsServiceInfo }>;

	GetServiceInfo(serviceName: string): { GetServiceInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.DecisionsServiceInfo };

	GetServiceInfoPromise(serviceName: string): Promise<$D.Framework.ServiceLayer.Services.ServiceManagement.DecisionsServiceInfo>;

	GetMethodInfo(serviceName: string, methodName: string, successCallback: (data: { GetMethodInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceMethodInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetMethodInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceMethodInfo }>;

	GetMethodInfo(serviceName: string, methodName: string): { GetMethodInfoResult: $D.Framework.ServiceLayer.Services.ServiceManagement.ServiceMethodInfo };

	GetMethodInfoPromise(serviceName: string, methodName: string): Promise<$D.Framework.ServiceLayer.Services.ServiceManagement.ServiceMethodInfo>;

	SearchTypes(typeName: string, count: number, successCallback: (data: { SearchTypesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchTypesResult: string[] }>;

	SearchTypes(typeName: string, count: number): { SearchTypesResult: string[] };

	SearchTypesPromise(typeName: string, count: number): Promise<string[]>;

	GetTypeIntegrationData(typeName: string, outputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType, successCallback: (data: { GetTypeIntegrationDataResult: $D.Framework.ServiceLayer.Services.ServiceInformation.TypeIntegrationStructure }) => any, errorCallback?: () => any): JQueryPromise<{ GetTypeIntegrationDataResult: $D.Framework.ServiceLayer.Services.ServiceInformation.TypeIntegrationStructure }>;

	GetTypeIntegrationData(typeName: string, outputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): { GetTypeIntegrationDataResult: $D.Framework.ServiceLayer.Services.ServiceInformation.TypeIntegrationStructure };

	GetTypeIntegrationDataPromise(typeName: string, outputType: $D.Framework.ServiceLayer.Services.ExternalServiceReference.RESTService.RestContentType): Promise<$D.Framework.ServiceLayer.Services.ServiceInformation.TypeIntegrationStructure>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;
}

interface ServicesStatic {
	ServiceInformationService(): ServiceInformationServiceStatic;
}
