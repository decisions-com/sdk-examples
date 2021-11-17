/// <reference path="./datatypes._base.d.ts" />

interface PortalSettingsServiceStatic {

	GetPortalSetupInfo(successCallback: (data: { GetPortalSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetPortalSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo }>;

	GetPortalSetupInfo(): { GetPortalSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo };

	GetPortalSetupInfoPromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo>;

	GetPortalSetupInfoForRunFlow(successCallback: (data: { GetPortalSetupInfoForRunFlowResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetPortalSetupInfoForRunFlowResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo }>;

	GetPortalSetupInfoForRunFlow(): { GetPortalSetupInfoForRunFlowResult: $D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo };

	GetPortalSetupInfoForRunFlowPromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.UserPortalSetupInfo>;

	GetDesignerSettings(successCallback: (data: { GetDesignerSettingsResult: $D.Framework.Design.DesignerSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetDesignerSettingsResult: $D.Framework.Design.DesignerSettings }>;

	GetDesignerSettings(): { GetDesignerSettingsResult: $D.Framework.Design.DesignerSettings };

	GetDesignerSettingsPromise(): Promise<$D.Framework.Design.DesignerSettings>;

	SetDefaultEmailAddress(emailAddress: string, successCallback: (data: { SetDefaultEmailAddressResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetDefaultEmailAddressResult: void }>;

	SetDefaultEmailAddress(emailAddress: string): { SetDefaultEmailAddressResult: void };

	SetDefaultEmailAddressPromise(emailAddress: string): Promise<void>;

	GetDecisionsSettingInfo(successCallback: (data: { GetDecisionsSettingInfoResult: $D.Framework.ServiceLayer.Services.Portal.DecisionsSettingInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetDecisionsSettingInfoResult: $D.Framework.ServiceLayer.Services.Portal.DecisionsSettingInfo }>;

	GetDecisionsSettingInfo(): { GetDecisionsSettingInfoResult: $D.Framework.ServiceLayer.Services.Portal.DecisionsSettingInfo };

	GetDecisionsSettingInfoPromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.DecisionsSettingInfo>;

	CanRegisterUsers(successCallback: (data: { CanRegisterUsersResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanRegisterUsersResult: boolean }>;

	CanRegisterUsers(): { CanRegisterUsersResult: boolean };

	CanRegisterUsersPromise(): Promise<boolean>;

	GetDefaultTheme(successCallback: (data: { GetDefaultThemeResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultThemeResult: string }>;

	GetDefaultTheme(): { GetDefaultThemeResult: string };

	GetDefaultThemePromise(): Promise<string>;

	ShowRememberMe(successCallback: (data: { ShowRememberMeResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ShowRememberMeResult: boolean }>;

	ShowRememberMe(): { ShowRememberMeResult: boolean };

	ShowRememberMePromise(): Promise<boolean>;

	GetTitle(successCallback: (data: { GetTitleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetTitleResult: string }>;

	GetTitle(): { GetTitleResult: string };

	GetTitlePromise(): Promise<string>;

	GetTimeZoneList(successCallback: (data: { GetTimeZoneListResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTimeZoneListResult: string[] }>;

	GetTimeZoneList(): { GetTimeZoneListResult: string[] };

	GetTimeZoneListPromise(): Promise<string[]>;

	GetAllCulture(successCallback: (data: { GetAllCultureResult: $D.Framework.ServiceLayer.Services.Portal.UserCultureInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllCultureResult: $D.Framework.ServiceLayer.Services.Portal.UserCultureInfo[] }>;

	GetAllCulture(): { GetAllCultureResult: $D.Framework.ServiceLayer.Services.Portal.UserCultureInfo[] };

	GetAllCulturePromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.UserCultureInfo[]>;

	GetDefaultBrowserBehaviorFromUserOrGroup(successCallback: (data: { GetDefaultBrowserBehaviorFromUserOrGroupResult: $D.Framework.ServiceLayer.Services.Portal.GroupBrowserSilverlightBehavior }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultBrowserBehaviorFromUserOrGroupResult: $D.Framework.ServiceLayer.Services.Portal.GroupBrowserSilverlightBehavior }>;

	GetDefaultBrowserBehaviorFromUserOrGroup(): { GetDefaultBrowserBehaviorFromUserOrGroupResult: $D.Framework.ServiceLayer.Services.Portal.GroupBrowserSilverlightBehavior };

	GetDefaultBrowserBehaviorFromUserOrGroupPromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.GroupBrowserSilverlightBehavior>;

	GetLogoImage(successCallback: (data: { GetLogoImageResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetLogoImageResult: number[] }>;

	GetLogoImage(): { GetLogoImageResult: number[] };

	GetLogoImagePromise(): Promise<number[]>;

	GetBasicSetupInfo(successCallback: (data: { GetBasicSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetBasicSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo }>;

	GetBasicSetupInfo(): { GetBasicSetupInfoResult: $D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo };

	GetBasicSetupInfoPromise(): Promise<$D.Framework.ServiceLayer.Services.Portal.BasicPortalSetupInfo>;

	GetStartupInstruction(successCallback: (data: { GetStartupInstructionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }) => any, errorCallback?: () => any): JQueryPromise<{ GetStartupInstructionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction }>;

	GetStartupInstruction(): { GetStartupInstructionResult: $D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction };

	GetStartupInstructionPromise(): Promise<$D.Framework.Design.Flow.Service.Execution.FlowExecutionStateInstruction>;

	GetLoginUserUIFlowId(successCallback: (data: { GetLoginUserUIFlowIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetLoginUserUIFlowIdResult: string }>;

	GetLoginUserUIFlowId(): { GetLoginUserUIFlowIdResult: string };

	GetLoginUserUIFlowIdPromise(): Promise<string>;

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
	PortalSettingsService(): PortalSettingsServiceStatic;
}
