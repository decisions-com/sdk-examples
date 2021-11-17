/// <reference path="./datatypes._base.d.ts" />

interface CustomFormBaseServiceStatic {

	GetStepData(flowTrackingId: string, stepTrackingId: string, successCallback: (data: { GetStepDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetStepDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetStepData(flowTrackingId: string, stepTrackingId: string): { GetStepDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetStepDataPromise(flowTrackingId: string, stepTrackingId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	CancelFlow(flowTrackingId: string, successCallback: (data: { CancelFlowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CancelFlowResult: void }>;

	CancelFlow(flowTrackingId: string): { CancelFlowResult: void };

	CancelFlowPromise(flowTrackingId: string): Promise<void>;

	CompleteStep(flowTrackingId: string, stepTrackingId: string, outcomePath: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { CompleteStepResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteStepResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	CompleteStep(flowTrackingId: string, stepTrackingId: string, outcomePath: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { CompleteStepResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	CompleteStepPromise(flowTrackingId: string, stepTrackingId: string, outcomePath: string, resultData: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;
}

interface ServicesStatic {
	CustomFormBaseService(): CustomFormBaseServiceStatic;
}
