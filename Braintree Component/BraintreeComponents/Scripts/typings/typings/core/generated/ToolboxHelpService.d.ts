/// <reference path="./datatypes._base.d.ts" />

interface ToolboxHelpServiceStatic {

	UpdateHelpText(id: string, helpText: string, successCallback: (data: { UpdateHelpTextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateHelpTextResult: void }>;

	UpdateHelpText(id: string, helpText: string): { UpdateHelpTextResult: void };

	UpdateHelpTextPromise(id: string, helpText: string): Promise<void>;

	GetByElementRegistrationId(id: string, successCallback: (data: { GetByElementRegistrationIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ GetByElementRegistrationIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData }>;

	GetByElementRegistrationId(id: string): { GetByElementRegistrationIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData };

	GetByElementRegistrationIdPromise(id: string): Promise<$D.Framework.Design.Properties.ToolboxHelpDisplayData>;

	GetByFlowStepId(flowSessionId: string, stepId: string, successCallback: (data: { GetByFlowStepIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFlowStepIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData }>;

	GetByFlowStepId(flowSessionId: string, stepId: string): { GetByFlowStepIdResult: $D.Framework.Design.Properties.ToolboxHelpDisplayData };

	GetByFlowStepIdPromise(flowSessionId: string, stepId: string): Promise<$D.Framework.Design.Properties.ToolboxHelpDisplayData>;

	FetchAllHelp(successCallback: (data: { FetchAllHelpResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ FetchAllHelpResult: void }>;

	FetchAllHelp(): { FetchAllHelpResult: void };

	FetchAllHelpPromise(): Promise<void>;
}

interface ServicesStatic {
	ToolboxHelpService(): ToolboxHelpServiceStatic;
}
