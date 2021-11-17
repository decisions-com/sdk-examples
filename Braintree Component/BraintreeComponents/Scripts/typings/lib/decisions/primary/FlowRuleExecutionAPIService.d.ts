/// <reference path="./datatypes._base.d.ts" />

interface FlowRuleExecutionAPIServiceStatic {

	RunFlowRuleAndGetResult(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, successCallback: (data: { RunFlowRuleAndGetResultResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ RunFlowRuleAndGetResultResult: string }>;

	RunFlowRuleAndGetResult(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType): { RunFlowRuleAndGetResultResult: string };

	RunFlowRuleAndGetResultPromise(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType): Promise<string>;

	GetRunApiResult(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string, successCallback: (data: { GetRunApiResultResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunApiResultResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult }>;

	GetRunApiResult(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string): { GetRunApiResultResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult };

	GetRunApiResultPromise(componentRegistrationID: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string): Promise<$D.Framework.ServiceLayer.Services.APIService.RunApiResult>;

	GetRunApiResultWithMethod(componentRegistrationId: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string, httpMethod: string, successCallback: (data: { GetRunApiResultWithMethodResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetRunApiResultWithMethodResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult }>;

	GetRunApiResultWithMethod(componentRegistrationId: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string, httpMethod: string): { GetRunApiResultWithMethodResult: $D.Framework.ServiceLayer.Services.APIService.RunApiResult };

	GetRunApiResultWithMethodPromise(componentRegistrationId: string, postInputData: string, getInputData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], outputType: $D.Framework.ServiceLayer.Services.APIService.OutputType, requestType: $D.Framework.ServiceLayer.Services.APIService.RequestType, queryString: string, httpMethod: string): Promise<$D.Framework.ServiceLayer.Services.APIService.RunApiResult>;
}

interface ServicesStatic {
	FlowRuleExecutionAPIService(): FlowRuleExecutionAPIServiceStatic;
}
