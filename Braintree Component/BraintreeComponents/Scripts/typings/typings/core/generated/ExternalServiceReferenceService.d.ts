/// <reference path="./datatypes._base.d.ts" />

interface ExternalServiceReferenceServiceStatic {

	GetRequestStatus(requestId: string, successCallback: (data: { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatus(requestId: string): { GetRequestStatusResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusPromise(requestId: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string, successCallback: (data: { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus }>;

	GetRequestStatusWithTimeout(requestId: string, maxTime: string): { GetRequestStatusWithTimeoutResult: $D.Framework.ServiceLayer.RequestStatus };

	GetRequestStatusWithTimeoutPromise(requestId: string, maxTime: string): Promise<$D.Framework.ServiceLayer.RequestStatus>;

	GetRequestError(requestId: string, successCallback: (data: { GetRequestErrorResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRequestErrorResult: string }>;

	GetRequestError(requestId: string): { GetRequestErrorResult: string };

	GetRequestErrorPromise(requestId: string): Promise<string>;

	CreateExternalWebServiceReferenceFromUrl(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, agentId: string, successCallback: (data: { CreateExternalWebServiceReferenceFromUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateExternalWebServiceReferenceFromUrlResult: string }>;

	CreateExternalWebServiceReferenceFromUrl(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, agentId: string): { CreateExternalWebServiceReferenceFromUrlResult: string };

	CreateExternalWebServiceReferenceFromUrlPromise(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, agentId: string): Promise<string>;

	CreateExternalWebServiceReferenceFromUrlWithCreds(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, userName: string, password: string, agentId: string, successCallback: (data: { CreateExternalWebServiceReferenceFromUrlWithCredsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateExternalWebServiceReferenceFromUrlWithCredsResult: string }>;

	CreateExternalWebServiceReferenceFromUrlWithCreds(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, userName: string, password: string, agentId: string): { CreateExternalWebServiceReferenceFromUrlWithCredsResult: string };

	CreateExternalWebServiceReferenceFromUrlWithCredsPromise(folderId: string, name: string, wsdlUrl: string, url: string, shareSession: boolean, userName: string, password: string, agentId: string): Promise<string>;

	CreateExternalWebServiceReferenceFromFile(folderId: string, name: string, wsdlFile: number[], url: string, shareSession: boolean, agentId: string, successCallback: (data: { CreateExternalWebServiceReferenceFromFileResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateExternalWebServiceReferenceFromFileResult: string }>;

	CreateExternalWebServiceReferenceFromFile(folderId: string, name: string, wsdlFile: number[], url: string, shareSession: boolean, agentId: string): { CreateExternalWebServiceReferenceFromFileResult: string };

	CreateExternalWebServiceReferenceFromFilePromise(folderId: string, name: string, wsdlFile: number[], url: string, shareSession: boolean, agentId: string): Promise<string>;

	EditExternalWebServiceReference(service: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference, successCallback: (data: { EditExternalWebServiceReferenceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EditExternalWebServiceReferenceResult: void }>;

	EditExternalWebServiceReference(service: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference): { EditExternalWebServiceReferenceResult: void };

	EditExternalWebServiceReferencePromise(service: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference): Promise<void>;

	GetWebServiceReferences(successCallback: (data: { GetWebServiceReferencesResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceReferencesResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference[] }>;

	GetWebServiceReferences(): { GetWebServiceReferencesResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference[] };

	GetWebServiceReferencesPromise(): Promise<$D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference[]>;

	GetWebServiceReferenceByName(name: string, successCallback: (data: { GetWebServiceReferenceByNameResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceReferenceByNameResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference }>;

	GetWebServiceReferenceByName(name: string): { GetWebServiceReferenceByNameResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference };

	GetWebServiceReferenceByNamePromise(name: string): Promise<$D.Framework.ServiceLayer.Services.ExternalServiceReference.ExternalWebServiceReference>;

	GetWebServiceReferencesNames(successCallback: (data: { GetWebServiceReferencesNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceReferencesNamesResult: string[] }>;

	GetWebServiceReferencesNames(): { GetWebServiceReferencesNamesResult: string[] };

	GetWebServiceReferencesNamesPromise(): Promise<string[]>;

	RegenerateWebServiceReference(id: string, successCallback: (data: { RegenerateWebServiceReferenceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RegenerateWebServiceReferenceResult: void }>;

	RegenerateWebServiceReference(id: string): { RegenerateWebServiceReferenceResult: void };

	RegenerateWebServiceReferencePromise(id: string): Promise<void>;

	StartGetWebServiceWSDL(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string, successCallback: (data: { StartGetWebServiceWSDLResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartGetWebServiceWSDLResult: string }>;

	StartGetWebServiceWSDL(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): { StartGetWebServiceWSDLResult: string };

	StartGetWebServiceWSDLPromise(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): Promise<string>;

	StartGetWebServiceWSDLWithXmlSchemaAndImportedDescription(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string, successCallback: (data: { StartGetWebServiceWSDLWithXmlSchemaAndImportedDescriptionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartGetWebServiceWSDLWithXmlSchemaAndImportedDescriptionResult: string }>;

	StartGetWebServiceWSDLWithXmlSchemaAndImportedDescription(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): { StartGetWebServiceWSDLWithXmlSchemaAndImportedDescriptionResult: string };

	StartGetWebServiceWSDLWithXmlSchemaAndImportedDescriptionPromise(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): Promise<string>;

	GetWebServiceWSDLResult(requestId: string, successCallback: (data: { GetWebServiceWSDLResultResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceWSDLResultResult: string }>;

	GetWebServiceWSDLResult(requestId: string): { GetWebServiceWSDLResultResult: string };

	GetWebServiceWSDLResultPromise(requestId: string): Promise<string>;

	GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResult(requestId: string, successCallback: (data: { GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResultResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResultResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult }>;

	GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResult(requestId: string): { GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResultResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult };

	GetWebServiceWSDWithXmlSchemaAndImportedDescriptionResultPromise(requestId: string): Promise<$D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult>;

	StartInvokeWebServiceMethod(url: string, dllPath: string, className: string, methodName: string, messageName: string, inputs: any[], credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, shareSession: boolean, agentId: string, useWindowsCredentials: boolean, successCallback: (data: { StartInvokeWebServiceMethodResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartInvokeWebServiceMethodResult: string }>;

	StartInvokeWebServiceMethod(url: string, dllPath: string, className: string, methodName: string, messageName: string, inputs: any[], credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, shareSession: boolean, agentId: string, useWindowsCredentials: boolean): { StartInvokeWebServiceMethodResult: string };

	StartInvokeWebServiceMethodPromise(url: string, dllPath: string, className: string, methodName: string, messageName: string, inputs: any[], credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, shareSession: boolean, agentId: string, useWindowsCredentials: boolean): Promise<string>;

	GetInvokeWebServiceMethodResult(requestId: string, successCallback: (data: { GetInvokeWebServiceMethodResultResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetInvokeWebServiceMethodResultResult: any[] }>;

	GetInvokeWebServiceMethodResult(requestId: string): { GetInvokeWebServiceMethodResultResult: any[] };

	GetInvokeWebServiceMethodResultPromise(requestId: string): Promise<any[]>;

	GetWebServiceWSDLSync(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string, successCallback: (data: { GetWebServiceWSDLSyncResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceWSDLSyncResult: string }>;

	GetWebServiceWSDLSync(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): { GetWebServiceWSDLSyncResult: string };

	GetWebServiceWSDLSyncPromise(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): Promise<string>;

	GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSync(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string, successCallback: (data: { GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSyncResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSyncResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult }>;

	GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSync(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): { GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSyncResult: $D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult };

	GetWebServiceWSDLWithXmlSchemaAndImportedDescriptionSyncPromise(url: string, credentials: $D.Framework.ServiceLayer.Services.ExternalServiceReference.Credentials, agentId: string): Promise<$D.Framework.ServiceLayer.Services.ExternalServiceReference.WebServiceWSDLResult>;

	GetWebServiceWSDLFromFileSync(wsdlFile: number[], successCallback: (data: { GetWebServiceWSDLFromFileSyncResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetWebServiceWSDLFromFileSyncResult: string }>;

	GetWebServiceWSDLFromFileSync(wsdlFile: number[]): { GetWebServiceWSDLFromFileSyncResult: string };

	GetWebServiceWSDLFromFileSyncPromise(wsdlFile: number[]): Promise<string>;

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
	ExternalServiceReferenceService(): ExternalServiceReferenceServiceStatic;
}
