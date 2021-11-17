/// <reference path="./datatypes._base.d.ts" />

interface ProjectConversionServiceStatic {

	UploadConvertedProject(project: $D.Framework.ProjectConversion.ConvertedProject, successCallback: (data: { UploadConvertedProjectResult: $D.Framework.ProjectConversion.ConversionResult }) => any, errorCallback?: () => any): JQueryPromise<{ UploadConvertedProjectResult: $D.Framework.ProjectConversion.ConversionResult }>;

	UploadConvertedProject(project: $D.Framework.ProjectConversion.ConvertedProject): { UploadConvertedProjectResult: $D.Framework.ProjectConversion.ConversionResult };

	UploadConvertedProjectPromise(project: $D.Framework.ProjectConversion.ConvertedProject): Promise<$D.Framework.ProjectConversion.ConversionResult>;

	UploadBpmnProject(folderId: string, bpmnDiagramXml: string, includeDataSteps: boolean, successCallback: (data: { UploadBpmnProjectResult: $D.Framework.ProjectConversion.ConversionResult }) => any, errorCallback?: () => any): JQueryPromise<{ UploadBpmnProjectResult: $D.Framework.ProjectConversion.ConversionResult }>;

	UploadBpmnProject(folderId: string, bpmnDiagramXml: string, includeDataSteps: boolean): { UploadBpmnProjectResult: $D.Framework.ProjectConversion.ConversionResult };

	UploadBpmnProjectPromise(folderId: string, bpmnDiagramXml: string, includeDataSteps: boolean): Promise<$D.Framework.ProjectConversion.ConversionResult>;

	GenerateReportForFlow(flowId: string, successCallback: (data: { GenerateReportForFlowResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateReportForFlowResult: string }>;

	GenerateReportForFlow(flowId: string): { GenerateReportForFlowResult: string };

	GenerateReportForFlowPromise(flowId: string): Promise<string>;

	GenerateReportForRule(ruleId: string, successCallback: (data: { GenerateReportForRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateReportForRuleResult: string }>;

	GenerateReportForRule(ruleId: string): { GenerateReportForRuleResult: string };

	GenerateReportForRulePromise(ruleId: string): Promise<string>;

	GenerateReportForProject(folderId: string, successCallback: (data: { GenerateReportForProjectResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateReportForProjectResult: $D.Framework.Data.DataTypes.FileData }>;

	GenerateReportForProject(folderId: string): { GenerateReportForProjectResult: $D.Framework.Data.DataTypes.FileData };

	GenerateReportForProjectPromise(folderId: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	GenerateReportForModule(moduleName: string, successCallback: (data: { GenerateReportForModuleResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ GenerateReportForModuleResult: $D.Framework.Data.DataTypes.FileData }>;

	GenerateReportForModule(moduleName: string): { GenerateReportForModuleResult: $D.Framework.Data.DataTypes.FileData };

	GenerateReportForModulePromise(moduleName: string): Promise<$D.Framework.Data.DataTypes.FileData>;

	CreateRuleFromDefinition(ruleData: $D.Framework.ProjectConversion.ConvertedRule, successCallback: (data: { CreateRuleFromDefinitionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleFromDefinitionResult: string }>;

	CreateRuleFromDefinition(ruleData: $D.Framework.ProjectConversion.ConvertedRule): { CreateRuleFromDefinitionResult: string };

	CreateRuleFromDefinitionPromise(ruleData: $D.Framework.ProjectConversion.ConvertedRule): Promise<string>;

	CreateRuleTableFromDefinition(ruleData: $D.Framework.ProjectConversion.ConvertedRuleTable, successCallback: (data: { CreateRuleTableFromDefinitionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRuleTableFromDefinitionResult: string }>;

	CreateRuleTableFromDefinition(ruleData: $D.Framework.ProjectConversion.ConvertedRuleTable): { CreateRuleTableFromDefinitionResult: string };

	CreateRuleTableFromDefinitionPromise(ruleData: $D.Framework.ProjectConversion.ConvertedRuleTable): Promise<string>;

	ImportRuleTablesFromDmn(folderId: string, dmnDiagramXml: string, successCallback: (data: { ImportRuleTablesFromDmnResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ ImportRuleTablesFromDmnResult: string[] }>;

	ImportRuleTablesFromDmn(folderId: string, dmnDiagramXml: string): { ImportRuleTablesFromDmnResult: string[] };

	ImportRuleTablesFromDmnPromise(folderId: string, dmnDiagramXml: string): Promise<string[]>;

	ExportDmnRule(ruleTableId: string, successCallback: (data: { ExportDmnRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ExportDmnRuleResult: string }>;

	ExportDmnRule(ruleTableId: string): { ExportDmnRuleResult: string };

	ExportDmnRulePromise(ruleTableId: string): Promise<string>;

	ExportAsDmn(ruleTableId: string, successCallback: (data: { ExportAsDmnResult: $D.Framework.Data.DataTypes.FileData }) => any, errorCallback?: () => any): JQueryPromise<{ ExportAsDmnResult: $D.Framework.Data.DataTypes.FileData }>;

	ExportAsDmn(ruleTableId: string): { ExportAsDmnResult: $D.Framework.Data.DataTypes.FileData };

	ExportAsDmnPromise(ruleTableId: string): Promise<$D.Framework.Data.DataTypes.FileData>;
}

interface ServicesStatic {
	ProjectConversionService(): ProjectConversionServiceStatic;
}
