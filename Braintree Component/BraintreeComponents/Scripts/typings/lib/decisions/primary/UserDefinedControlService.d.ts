/// <reference path="./datatypes._base.d.ts" />

interface UserDefinedControlServiceStatic {

	AddDataToDataRepeater(formSessionInfoId: string, componentId: string, successCallback: (data: { AddDataToDataRepeaterResult: $D.Framework.Design.Form.EventsAndDataReturn }) => any, errorCallback?: () => any): JQueryPromise<{ AddDataToDataRepeaterResult: $D.Framework.Design.Form.EventsAndDataReturn }>;

	AddDataToDataRepeater(formSessionInfoId: string, componentId: string): { AddDataToDataRepeaterResult: $D.Framework.Design.Form.EventsAndDataReturn };

	AddDataToDataRepeaterPromise(formSessionInfoId: string, componentId: string): Promise<$D.Framework.Design.Form.EventsAndDataReturn>;

	GetChildInfos(formSessionInfoId: string, controlId: string, successCallback: (data: { GetChildInfosResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper }) => any, errorCallback?: () => any): JQueryPromise<{ GetChildInfosResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper }>;

	GetChildInfos(formSessionInfoId: string, controlId: string): { GetChildInfosResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper };

	GetChildInfosPromise(formSessionInfoId: string, controlId: string): Promise<$D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper>;

	GetUserControlListContainerChildInfo(formSessionInfoId: string, controlId: string, successCallback: (data: { GetUserControlListContainerChildInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.UserControlListContainerChildInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUserControlListContainerChildInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.UserControlListContainerChildInfo[] }>;

	GetUserControlListContainerChildInfo(formSessionInfoId: string, controlId: string): { GetUserControlListContainerChildInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.UserControlListContainerChildInfo[] };

	GetUserControlListContainerChildInfoPromise(formSessionInfoId: string, controlId: string): Promise<$D.Framework.Design.Form.ComponentData.CompositeControls.UserControlListContainerChildInfo[]>;

	GetDataRepeaterRowInfo(formSessionInfoId: string, dataRepeaterControlId: string, rowid: string, successCallback: (data: { GetDataRepeaterRowInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataRepeaterRowInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper }>;

	GetDataRepeaterRowInfo(formSessionInfoId: string, dataRepeaterControlId: string, rowid: string): { GetDataRepeaterRowInfoResult: $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper };

	GetDataRepeaterRowInfoPromise(formSessionInfoId: string, dataRepeaterControlId: string, rowid: string): Promise<$D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper>;

	GetDataRepeaterRowsData(formSessionInfoId: string, dataRepeaterControlId: string, successCallback: (data: { GetDataRepeaterRowsDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetDataRepeaterRowsDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetDataRepeaterRowsData(formSessionInfoId: string, dataRepeaterControlId: string): { GetDataRepeaterRowsDataResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetDataRepeaterRowsDataPromise(formSessionInfoId: string, dataRepeaterControlId: string): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	RemoveDataForDataRepeater(formSessionInfoId: string, componentId: string, rowId: string, successCallback: (data: { RemoveDataForDataRepeaterResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveDataForDataRepeaterResult: void }>;

	RemoveDataForDataRepeater(formSessionInfoId: string, componentId: string, rowId: string): { RemoveDataForDataRepeaterResult: void };

	RemoveDataForDataRepeaterPromise(formSessionInfoId: string, componentId: string, rowId: string): Promise<void>;

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
	UserDefinedControlService(): UserDefinedControlServiceStatic;
}
