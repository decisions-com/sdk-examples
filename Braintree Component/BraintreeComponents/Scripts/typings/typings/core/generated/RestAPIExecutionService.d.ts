/// <reference path="./datatypes._base.d.ts" />

interface RestAPIExecutionServiceStatic {

	ExecuteServiceMethod(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contentType: string, serviceName: string, methodName: string, postData: string, queryStringData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { ExecuteServiceMethodResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ExecuteServiceMethodResult: string }>;

	ExecuteServiceMethod(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contentType: string, serviceName: string, methodName: string, postData: string, queryStringData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { ExecuteServiceMethodResult: string };

	ExecuteServiceMethodPromise(userContext: $D.Framework.ServiceLayer.Utilities.AbstractUserContext, contentType: string, serviceName: string, methodName: string, postData: string, queryStringData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<string>;
}

interface ServicesStatic {
	RestAPIExecutionService(): RestAPIExecutionServiceStatic;
}
