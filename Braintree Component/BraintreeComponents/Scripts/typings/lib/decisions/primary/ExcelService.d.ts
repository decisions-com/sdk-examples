/// <reference path="./datatypes._base.d.ts" />

interface ExcelServiceStatic {

	ExcelToCsv(input: number[], fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType, successCallback: (data: { ExcelToCsvResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ ExcelToCsvResult: string }>;

	ExcelToCsv(input: number[], fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType): { ExcelToCsvResult: string };

	ExcelToCsvPromise(input: number[], fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType): Promise<string>;

	CSVToExcel(data: string, fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType, successCallback: (data: { CSVToExcelResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ CSVToExcelResult: number[] }>;

	CSVToExcel(data: string, fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType): { CSVToExcelResult: number[] };

	CSVToExcelPromise(data: string, fileType: $D.Framework.ServiceLayer.Services.Excel.ExcelFileType): Promise<number[]>;

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
	ExcelService(): ExcelServiceStatic;
}
