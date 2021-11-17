/// <reference path="./datatypes._base.d.ts" />

interface ApprovalChainEntityServiceStatic {

	CreateLevelRule(dto: $D.Framework.ServiceLayer.Services.Approvals.CreateLevelRuleDto, successCallback: (data: { CreateLevelRuleResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateLevelRuleResult: string }>;

	CreateLevelRule(dto: $D.Framework.ServiceLayer.Services.Approvals.CreateLevelRuleDto): { CreateLevelRuleResult: string };

	CreateLevelRulePromise(dto: $D.Framework.ServiceLayer.Services.Approvals.CreateLevelRuleDto): Promise<string>;

	GetRuleAsText(ruleId: string, successCallback: (data: { GetRuleAsTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetRuleAsTextResult: string }>;

	GetRuleAsText(ruleId: string): { GetRuleAsTextResult: string };

	GetRuleAsTextPromise(ruleId: string): Promise<string>;

	CreateContextForDto(dto: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto, successCallback: (data: { CreateContextForDtoResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateContextForDtoResult: string }>;

	CreateContextForDto(dto: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto): { CreateContextForDtoResult: string };

	CreateContextForDtoPromise(dto: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto): Promise<string>;

	GetFromContext(editingContext: string, successCallback: (data: { GetFromContextResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto }) => any, errorCallback?: () => any): JQueryPromise<{ GetFromContextResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto }>;

	GetFromContext(editingContext: string): { GetFromContextResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto };

	GetFromContextPromise(editingContext: string): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntityDto>;

	GetSessionUserContext(userId: string, password: string, successCallback: (data: { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext }>;

	GetSessionUserContext(userId: string, password: string): { GetSessionUserContextResult: $D.Framework.ServiceLayer.Utilities.SessionUserContext };

	GetSessionUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.SessionUserContext>;

	GetPasswordUserContext(userId: string, password: string, successCallback: (data: { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext }>;

	GetPasswordUserContext(userId: string, password: string): { GetPasswordUserContextResult: $D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext };

	GetPasswordUserContextPromise(userId: string, password: string): Promise<$D.Framework.ServiceLayer.Utilities.PasswordCredentialsUserContext>;

	GetGuestUserContext(successCallback: (data: { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext }>;

	GetGuestUserContext(): { GetGuestUserContextResult: $D.Framework.ServiceLayer.Utilities.GuestUserContext };

	GetGuestUserContextPromise(): Promise<$D.Framework.ServiceLayer.Utilities.GuestUserContext>;

	Exists(id: string, successCallback: (data: { ExistsResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsResult: boolean }>;

	Exists(id: string): { ExistsResult: boolean };

	ExistsPromise(id: string): Promise<boolean>;

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]): Promise<$D.Framework.ServiceLayer.Services.Approvals.ApprovalChainEntity[]>;
}

interface ServicesStatic {
	ApprovalChainEntityService(): ApprovalChainEntityServiceStatic;
}
