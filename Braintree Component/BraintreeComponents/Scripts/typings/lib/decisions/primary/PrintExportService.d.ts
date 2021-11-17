/// <reference path="./datatypes._base.d.ts" />

interface PrintExportServiceStatic {

	StartExportJobEx(printContextId: string, runtimeData: any, successCallback: (data: { StartExportJobExResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ StartExportJobExResult: string }>;

	StartExportJobEx(printContextId: string, runtimeData: any): { StartExportJobExResult: string };

	StartExportJobExPromise(printContextId: string, runtimeData: any): Promise<string>;

	BuildRuntimePrintContext(printContext: $D.Framework.Design.Page.PrintContextEx, successCallback: (data: { BuildRuntimePrintContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ BuildRuntimePrintContextResult: string }>;

	BuildRuntimePrintContext(printContext: $D.Framework.Design.Page.PrintContextEx): { BuildRuntimePrintContextResult: string };

	BuildRuntimePrintContextPromise(printContext: $D.Framework.Design.Page.PrintContextEx): Promise<string>;

	BuildReprotPrintContext(folderId: string, reportContextId: string, defaultExcelTemplateId: string, selectedReportViews: string[], successCallback: (data: { BuildReprotPrintContextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ BuildReprotPrintContextResult: string }>;

	BuildReprotPrintContext(folderId: string, reportContextId: string, defaultExcelTemplateId: string, selectedReportViews: string[]): { BuildReprotPrintContextResult: string };

	BuildReprotPrintContextPromise(folderId: string, reportContextId: string, defaultExcelTemplateId: string, selectedReportViews: string[]): Promise<string>;

	IsJobCompleted(exportJobId: string, successCallback: (data: { IsJobCompletedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsJobCompletedResult: boolean }>;

	IsJobCompleted(exportJobId: string): { IsJobCompletedResult: boolean };

	IsJobCompletedPromise(exportJobId: string): Promise<boolean>;

	GetJobResult(exportJobId: string, successCallback: (data: { GetJobResultResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetJobResultResult: string }>;

	GetJobResult(exportJobId: string): { GetJobResultResult: string };

	GetJobResultPromise(exportJobId: string): Promise<string>;

	GetJobResultEx(exportJobId: string, forDownload: boolean, successCallback: (data: { GetJobResultExResult: $D.Framework.Design.Page.PrintExportJobResult }) => any, errorCallback?: () => any): JQueryPromise<{ GetJobResultExResult: $D.Framework.Design.Page.PrintExportJobResult }>;

	GetJobResultEx(exportJobId: string, forDownload: boolean): { GetJobResultExResult: $D.Framework.Design.Page.PrintExportJobResult };

	GetJobResultExPromise(exportJobId: string, forDownload: boolean): Promise<$D.Framework.Design.Page.PrintExportJobResult>;

	GetExportedFileSize(exportFolderId: string, successCallback: (data: { GetExportedFileSizeResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetExportedFileSizeResult: number }>;

	GetExportedFileSize(exportFolderId: string): { GetExportedFileSizeResult: number };

	GetExportedFileSizePromise(exportFolderId: string): Promise<number>;

	SendExportedFileInEmail(exportedFolderId: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail, successCallback: (data: { SendExportedFileInEmailResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendExportedFileInEmailResult: void }>;

	SendExportedFileInEmail(exportedFolderId: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): { SendExportedFileInEmailResult: void };

	SendExportedFileInEmailPromise(exportedFolderId: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): Promise<void>;

	SendPrintContextOutputFileInEmail(folderId: string, fileName: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail, successCallback: (data: { SendPrintContextOutputFileInEmailResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPrintContextOutputFileInEmailResult: void }>;

	SendPrintContextOutputFileInEmail(folderId: string, fileName: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): { SendPrintContextOutputFileInEmailResult: void };

	SendPrintContextOutputFileInEmailPromise(folderId: string, fileName: string, emailInfo: $D.Framework.ServiceLayer.Actions.Common.SimpleEmail): Promise<void>;

	SendPrintNotification(url: string, printContext: $D.Framework.Design.Page.PrintContext, successCallback: (data: { SendPrintNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPrintNotificationResult: void }>;

	SendPrintNotification(url: string, printContext: $D.Framework.Design.Page.PrintContext): { SendPrintNotificationResult: void };

	SendPrintNotificationPromise(url: string, printContext: $D.Framework.Design.Page.PrintContext): Promise<void>;

	SendPrintCompletedNotification(url: string, registrationId: string, successCallback: (data: { SendPrintCompletedNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendPrintCompletedNotificationResult: void }>;

	SendPrintCompletedNotification(url: string, registrationId: string): { SendPrintCompletedNotificationResult: void };

	SendPrintCompletedNotificationPromise(url: string, registrationId: string): Promise<void>;

	SendExportCompletedNotification(url: string, successCallback: (data: { SendExportCompletedNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendExportCompletedNotificationResult: void }>;

	SendExportCompletedNotification(url: string): { SendExportCompletedNotificationResult: void };

	SendExportCompletedNotificationPromise(url: string): Promise<void>;

	GetPrintContextEx(printContextId: string, successCallback: (data: { GetPrintContextExResult: $D.Framework.Design.Page.PrintContextEx }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrintContextExResult: $D.Framework.Design.Page.PrintContextEx }>;

	GetPrintContextEx(printContextId: string): { GetPrintContextExResult: $D.Framework.Design.Page.PrintContextEx };

	GetPrintContextExPromise(printContextId: string): Promise<$D.Framework.Design.Page.PrintContextEx>;

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
	PrintExportService(): PrintExportServiceStatic;
}
