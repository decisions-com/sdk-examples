/// <reference path="./datatypes._base.d.ts" />

interface RuleSetEditServiceStatic {

	GetRuleSet(rulesetFolderId: string, throwErrorWhenRuleSetNotFound: boolean, successCallback: (data: { GetRuleSetResult: $D.FlowSets.RuleSetDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleSetResult: $D.FlowSets.RuleSetDto }>;

	GetRuleSet(rulesetFolderId: string, throwErrorWhenRuleSetNotFound: boolean): { GetRuleSetResult: $D.FlowSets.RuleSetDto };

	GetRuleSetPromise(rulesetFolderId: string, throwErrorWhenRuleSetNotFound: boolean): Promise<$D.FlowSets.RuleSetDto>;

	GetRuleSetInfo(rulesetFolderId: string, successCallback: (data: { GetRuleSetInfoResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleSetInfoResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }>;

	GetRuleSetInfo(rulesetFolderId: string): { GetRuleSetInfoResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData };

	GetRuleSetInfoPromise(rulesetFolderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderViewData>;

	RunWithSamplingData(rulesetFolderId: string, instanceId: string, parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters, successCallback: (data: { RunWithSamplingDataResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }) => any, errorCallback?: () => any): JQueryPromise<{ RunWithSamplingDataResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo }>;

	RunWithSamplingData(rulesetFolderId: string, instanceId: string, parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): { RunWithSamplingDataResult: $D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo };

	RunWithSamplingDataPromise(rulesetFolderId: string, instanceId: string, parameters: $D.Framework.Design.Flow.Service.Debugging.DebugParameters): Promise<$D.Framework.Design.Flow.Service.Debugging.DebugData.DebugDataInfo>;

	GetEditContextForFolderData(rulesetFolderId: string, successCallback: (data: { GetEditContextForFolderDataResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditContextForFolderDataResult: string }>;

	GetEditContextForFolderData(rulesetFolderId: string): { GetEditContextForFolderDataResult: string };

	GetEditContextForFolderDataPromise(rulesetFolderId: string): Promise<string>;

	UnregisterEditContext(rulesetFolderId: string, successCallback: (data: { UnregisterEditContextResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UnregisterEditContextResult: void }>;

	UnregisterEditContext(rulesetFolderId: string): { UnregisterEditContextResult: void };

	UnregisterEditContextPromise(rulesetFolderId: string): Promise<void>;

	StartSamplingSet(rulesetFolderId: string, sampleSetId: string, instanceId: string, successCallback: (data: { StartSamplingSetResult: $D.FlowSets.RuleSetSampleSetEvaluation }) => any, errorCallback?: () => any): JQueryPromise<{ StartSamplingSetResult: $D.FlowSets.RuleSetSampleSetEvaluation }>;

	StartSamplingSet(rulesetFolderId: string, sampleSetId: string, instanceId: string): { StartSamplingSetResult: $D.FlowSets.RuleSetSampleSetEvaluation };

	StartSamplingSetPromise(rulesetFolderId: string, sampleSetId: string, instanceId: string): Promise<$D.FlowSets.RuleSetSampleSetEvaluation>;

	IsRuleSet(folderId: string, successCallback: (data: { IsRuleSetResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsRuleSetResult: boolean }>;

	IsRuleSet(folderId: string): { IsRuleSetResult: boolean };

	IsRuleSetPromise(folderId: string): Promise<boolean>;
}

interface ServicesStatic {
	RuleSetEditService(): RuleSetEditServiceStatic;
}
