/// <reference path="./datatypes._base.d.ts" />

interface ChatServiceStatic {

	CreateChat(title: string, type: $D.Framework.ServiceLayer.Services.Chat.ChatType, closingOptions: $D.Framework.ServiceLayer.Services.Chat.ChatClosingOptions, entityFolderId: string, period: string, successCallback: (data: { CreateChatResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateChatResult: string }>;

	CreateChat(title: string, type: $D.Framework.ServiceLayer.Services.Chat.ChatType, closingOptions: $D.Framework.ServiceLayer.Services.Chat.ChatClosingOptions, entityFolderId: string, period: string): { CreateChatResult: string };

	CreateChatPromise(title: string, type: $D.Framework.ServiceLayer.Services.Chat.ChatType, closingOptions: $D.Framework.ServiceLayer.Services.Chat.ChatClosingOptions, entityFolderId: string, period: string): Promise<string>;

	CurrentParticipants(chatID: string, successCallback: (data: { CurrentParticipantsResult: $D.Framework.ServiceLayer.Services.Chat.ChatParticipant[] }) => any, errorCallback?: () => any): JQueryPromise<{ CurrentParticipantsResult: $D.Framework.ServiceLayer.Services.Chat.ChatParticipant[] }>;

	CurrentParticipants(chatID: string): { CurrentParticipantsResult: $D.Framework.ServiceLayer.Services.Chat.ChatParticipant[] };

	CurrentParticipantsPromise(chatID: string): Promise<$D.Framework.ServiceLayer.Services.Chat.ChatParticipant[]>;

	InviteUsertoChat(chatId: string, user: string, successCallback: (data: { InviteUsertoChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InviteUsertoChatResult: void }>;

	InviteUsertoChat(chatId: string, user: string): { InviteUsertoChatResult: void };

	InviteUsertoChatPromise(chatId: string, user: string): Promise<void>;

	InviteGrouptoChat(chatId: string, groupId: string, successCallback: (data: { InviteGrouptoChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ InviteGrouptoChatResult: void }>;

	InviteGrouptoChat(chatId: string, groupId: string): { InviteGrouptoChatResult: void };

	InviteGrouptoChatPromise(chatId: string, groupId: string): Promise<void>;

	JoinChat(chatId: string, successCallback: (data: { JoinChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ JoinChatResult: void }>;

	JoinChat(chatId: string): { JoinChatResult: void };

	JoinChatPromise(chatId: string): Promise<void>;

	LeaveChat(chatId: string, successCallback: (data: { LeaveChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LeaveChatResult: void }>;

	LeaveChat(chatId: string): { LeaveChatResult: void };

	LeaveChatPromise(chatId: string): Promise<void>;

	PostMessage(chatId: string, message: string, successCallback: (data: { PostMessageResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PostMessageResult: void }>;

	PostMessage(chatId: string, message: string): { PostMessageResult: void };

	PostMessagePromise(chatId: string, message: string): Promise<void>;

	PostDocument(chatID: string, title: string, description: string, filedata: $D.Framework.Data.DataTypes.FileData, successCallback: (data: { PostDocumentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ PostDocumentResult: void }>;

	PostDocument(chatID: string, title: string, description: string, filedata: $D.Framework.Data.DataTypes.FileData): { PostDocumentResult: void };

	PostDocumentPromise(chatID: string, title: string, description: string, filedata: $D.Framework.Data.DataTypes.FileData): Promise<void>;

	CloseChat(chatId: string, successCallback: (data: { CloseChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CloseChatResult: void }>;

	CloseChat(chatId: string): { CloseChatResult: void };

	CloseChatPromise(chatId: string): Promise<void>;

	DeleteChat(chatId: string, successCallback: (data: { DeleteChatResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteChatResult: void }>;

	DeleteChat(chatId: string): { DeleteChatResult: void };

	DeleteChatPromise(chatId: string): Promise<void>;

	MoveSummaryToFolder(chatId: string, folderid: string, successCallback: (data: { MoveSummaryToFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveSummaryToFolderResult: void }>;

	MoveSummaryToFolder(chatId: string, folderid: string): { MoveSummaryToFolderResult: void };

	MoveSummaryToFolderPromise(chatId: string, folderid: string): Promise<void>;

	GetOldestMessageDate(chatID: string, successCallback: (data: { GetOldestMessageDateResult: Date }) => any, errorCallback?: () => any): JQueryPromise<{ GetOldestMessageDateResult: Date }>;

	GetOldestMessageDate(chatID: string): { GetOldestMessageDateResult: Date };

	GetOldestMessageDatePromise(chatID: string): Promise<Date>;

	GetMessageHistory(chatID: string, fromTime: Date, toTime: Date, successCallback: (data: { GetMessageHistoryResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessageHistoryResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }>;

	GetMessageHistory(chatID: string, fromTime: Date, toTime: Date): { GetMessageHistoryResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] };

	GetMessageHistoryPromise(chatID: string, fromTime: Date, toTime: Date): Promise<$D.Framework.ServiceLayer.Services.Chat.ChatMessage[]>;

	GetMessageHistoryFromBeginning(chatID: string, toTime: Date, successCallback: (data: { GetMessageHistoryFromBeginningResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessageHistoryFromBeginningResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }>;

	GetMessageHistoryFromBeginning(chatID: string, toTime: Date): { GetMessageHistoryFromBeginningResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] };

	GetMessageHistoryFromBeginningPromise(chatID: string, toTime: Date): Promise<$D.Framework.ServiceLayer.Services.Chat.ChatMessage[]>;

	GetMessageHistoryByCount(chatID: string, count: number, successCallback: (data: { GetMessageHistoryByCountResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMessageHistoryByCountResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] }>;

	GetMessageHistoryByCount(chatID: string, count: number): { GetMessageHistoryByCountResult: $D.Framework.ServiceLayer.Services.Chat.ChatMessage[] };

	GetMessageHistoryByCountPromise(chatID: string, count: number): Promise<$D.Framework.ServiceLayer.Services.Chat.ChatMessage[]>;

	GetCannedMessages(successCallback: (data: { GetCannedMessagesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCannedMessagesResult: string[] }>;

	GetCannedMessages(): { GetCannedMessagesResult: string[] };

	GetCannedMessagesPromise(): Promise<string[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.Folder, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Folder.Folder): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Folder.Folder): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.Folder[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Folder.Folder[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Folder.Folder[]): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetTaggedEntities(tagName: string, successCallback: (data: { GetTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetTaggedEntities(tagName: string): { GetTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetTaggedEntitiesPromise(tagName: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	SearchTaggedEntities(tagToSearch: string, successCallback: (data: { SearchTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	SearchTaggedEntities(tagToSearch: string): { SearchTaggedEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	SearchTaggedEntitiesPromise(tagToSearch: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	DeleteFolder(folderID: string, preserveSubFolders: boolean, successCallback: (data: { DeleteFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderResult: void }>;

	DeleteFolder(folderID: string, preserveSubFolders: boolean): { DeleteFolderResult: void };

	DeleteFolderPromise(folderID: string, preserveSubFolders: boolean): Promise<void>;

	DeleteFolderWithContent(folderID: string, successCallback: (data: { DeleteFolderWithContentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderWithContentResult: void }>;

	DeleteFolderWithContent(folderID: string): { DeleteFolderWithContentResult: void };

	DeleteFolderWithContentPromise(folderID: string): Promise<void>;

	DeleteFolderContent(folderID: string, successCallback: (data: { DeleteFolderContentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderContentResult: void }>;

	DeleteFolderContent(folderID: string): { DeleteFolderContentResult: void };

	DeleteFolderContentPromise(folderID: string): Promise<void>;

	DeleteFolderMoveChildFoldersToNewFolder(folderID: string, newParentFolderID: string, successCallback: (data: { DeleteFolderMoveChildFoldersToNewFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderMoveChildFoldersToNewFolderResult: void }>;

	DeleteFolderMoveChildFoldersToNewFolder(folderID: string, newParentFolderID: string): { DeleteFolderMoveChildFoldersToNewFolderResult: void };

	DeleteFolderMoveChildFoldersToNewFolderPromise(folderID: string, newParentFolderID: string): Promise<void>;

	EnsureFolderName(parentFolderId: string, name: string, isRootFolder: boolean, successCallback: (data: { EnsureFolderNameResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ EnsureFolderNameResult: boolean }>;

	EnsureFolderName(parentFolderId: string, name: string, isRootFolder: boolean): { EnsureFolderNameResult: boolean };

	EnsureFolderNamePromise(parentFolderId: string, name: string, isRootFolder: boolean): Promise<boolean>;

	MoveAsRootFolder(folderId: string, successCallback: (data: { MoveAsRootFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveAsRootFolderResult: void }>;

	MoveAsRootFolder(folderId: string): { MoveAsRootFolderResult: void };

	MoveAsRootFolderPromise(folderId: string): Promise<void>;

	SetFolderState(folderId: string, state: string, successCallback: (data: { SetFolderStateResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetFolderStateResult: void }>;

	SetFolderState(folderId: string, state: string): { SetFolderStateResult: void };

	SetFolderStatePromise(folderId: string, state: string): Promise<void>;

	GetFolderStateByProcessId(processId: string, successCallback: (data: { GetFolderStateByProcessIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderStateByProcessIdResult: string }>;

	GetFolderStateByProcessId(processId: string): { GetFolderStateByProcessIdResult: string };

	GetFolderStateByProcessIdPromise(processId: string): Promise<string>;

	GetFolderEntitySummaries(folderId: string, successCallback: (data: { GetFolderEntitySummariesResult: $D.Framework.ServiceLayer.Services.Folder.FolderEntitySummaryData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderEntitySummariesResult: $D.Framework.ServiceLayer.Services.Folder.FolderEntitySummaryData[] }>;

	GetFolderEntitySummaries(folderId: string): { GetFolderEntitySummariesResult: $D.Framework.ServiceLayer.Services.Folder.FolderEntitySummaryData[] };

	GetFolderEntitySummariesPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderEntitySummaryData[]>;

	AddRootNodeFolder(folderID: string, isEnabled: boolean, successCallback: (data: { AddRootNodeFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRootNodeFolderResult: void }>;

	AddRootNodeFolder(folderID: string, isEnabled: boolean): { AddRootNodeFolderResult: void };

	AddRootNodeFolderPromise(folderID: string, isEnabled: boolean): Promise<void>;

	AddRootNodeFolderObject(rootNodeFolder: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder, successCallback: (data: { AddRootNodeFolderObjectResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddRootNodeFolderObjectResult: void }>;

	AddRootNodeFolderObject(rootNodeFolder: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder): { AddRootNodeFolderObjectResult: void };

	AddRootNodeFolderObjectPromise(rootNodeFolder: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder): Promise<void>;

	GetRootNodeByFolderId(folderID: string, successCallback: (data: { GetRootNodeByFolderIdResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootNodeByFolderIdResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder }>;

	GetRootNodeByFolderId(folderID: string): { GetRootNodeByFolderIdResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder };

	GetRootNodeByFolderIdPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder>;

	GetAllEnabledRootNodeFolders(successCallback: (data: { GetAllEnabledRootNodeFoldersResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEnabledRootNodeFoldersResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder[] }>;

	GetAllEnabledRootNodeFolders(): { GetAllEnabledRootNodeFoldersResult: $D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder[] };

	GetAllEnabledRootNodeFoldersPromise(): Promise<$D.Framework.ServiceLayer.Services.RootNodes.RootNodeFolder[]>;

	GetSubFolderInfo(folderId: string, successCallback: (data: { GetSubFolderInfoResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderInfo[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFolderInfoResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderInfo[] }>;

	GetSubFolderInfo(folderId: string): { GetSubFolderInfoResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderInfo[] };

	GetSubFolderInfoPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.SubFolderInfo[]>;

	GetFolderPath(folderId: string, successCallback: (data: { GetFolderPathResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderPathResult: string }>;

	GetFolderPath(folderId: string): { GetFolderPathResult: string };

	GetFolderPathPromise(folderId: string): Promise<string>;

	GetFolderBehaviorEntityDescription(folderId: string, successCallback: (data: { GetFolderBehaviorEntityDescriptionResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderBehaviorEntityDescriptionResult: string }>;

	GetFolderBehaviorEntityDescription(folderId: string): { GetFolderBehaviorEntityDescriptionResult: string };

	GetFolderBehaviorEntityDescriptionPromise(folderId: string): Promise<string>;

	SearchEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[], successCallback: (data: { SearchEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	SearchEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[]): { SearchEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	SearchEntitiesWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, textToSearch: string, filterNames: string[]): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], successCallback: (data: { GetEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetEntitiesWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[]): { GetEntitiesWithFiltersResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetEntitiesWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[]): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetRootFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], successCallback: (data: { GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetRootFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): { GetRootFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetRootFoldersWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetSubFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[], successCallback: (data: { GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetSubFoldersWithFilters(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[]): { GetSubFoldersWithFiltersResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetSubFoldersWithFiltersPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], folderId: string, filterNames: string[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	FilterEntity(entityId: string, filterNames: string[], successCallback: (data: { FilterEntityResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FilterEntityResult: boolean }>;

	FilterEntity(entityId: string, filterNames: string[]): { FilterEntityResult: boolean };

	FilterEntityPromise(entityId: string, filterNames: string[]): Promise<boolean>;

	GetActionBySpecifiedGroupAction(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[], specifiedGroupAction: $D.Framework.Design.Report.SpecifiedGroupAction, successCallback: (data: { GetActionBySpecifiedGroupActionResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionBySpecifiedGroupActionResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction }>;

	GetActionBySpecifiedGroupAction(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[], specifiedGroupAction: $D.Framework.Design.Report.SpecifiedGroupAction): { GetActionBySpecifiedGroupActionResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction };

	GetActionBySpecifiedGroupActionPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[], specifiedGroupAction: $D.Framework.Design.Report.SpecifiedGroupAction): Promise<$D.Framework.ServiceLayer.Services.Folder.GroupAction>;

	GetFolderStates(folderId: string, successCallback: (data: { GetFolderStatesResult: $D.Framework.ServiceLayer.Services.Folder.FolderState[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderStatesResult: $D.Framework.ServiceLayer.Services.Folder.FolderState[] }>;

	GetFolderStates(folderId: string): { GetFolderStatesResult: $D.Framework.ServiceLayer.Services.Folder.FolderState[] };

	GetFolderStatesPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderState[]>;

	ShowFolderInSession(folderId: string, successCallback: (data: { ShowFolderInSessionResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ShowFolderInSessionResult: boolean }>;

	ShowFolderInSession(folderId: string): { ShowFolderInSessionResult: boolean };

	ShowFolderInSessionPromise(folderId: string): Promise<boolean>;

	GetLookAndFeel(folderId: string, successCallback: (data: { GetLookAndFeelResult: $D.Framework.ServiceLayer.Services.Folder.FolderLookAndFeelContext }) => any, errorCallback?: () => any): JQueryPromise<{ GetLookAndFeelResult: $D.Framework.ServiceLayer.Services.Folder.FolderLookAndFeelContext }>;

	GetLookAndFeel(folderId: string): { GetLookAndFeelResult: $D.Framework.ServiceLayer.Services.Folder.FolderLookAndFeelContext };

	GetLookAndFeelPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderLookAndFeelContext>;

	GetFolderForTreeByIdForMobile(folderId: string, successCallback: (data: { GetFolderForTreeByIdForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderForTreeByIdForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }>;

	GetFolderForTreeByIdForMobile(folderId: string): { GetFolderForTreeByIdForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree };

	GetFolderForTreeByIdForMobilePromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;

	GetFolderSummary(folderID: string, successCallback: (data: { GetFolderSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] }>;

	GetFolderSummary(folderID: string): { GetFolderSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] };

	GetFolderSummaryPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderSummary[]>;

	GetFolderStateSummary(folderID: string, successCallback: (data: { GetFolderStateSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderStateSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] }>;

	GetFolderStateSummary(folderID: string): { GetFolderStateSummaryResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] };

	GetFolderStateSummaryPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[]>;

	GetFolderSummaryByVisibility(folderID: string, includeHidden: boolean, successCallback: (data: { GetFolderSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] }>;

	GetFolderSummaryByVisibility(folderID: string, includeHidden: boolean): { GetFolderSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderSummary[] };

	GetFolderSummaryByVisibilityPromise(folderID: string, includeHidden: boolean): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderSummary[]>;

	GetFolderStateSummaryByVisibility(folderID: string, includeHidden: boolean, successCallback: (data: { GetFolderStateSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderStateSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] }>;

	GetFolderStateSummaryByVisibility(folderID: string, includeHidden: boolean): { GetFolderStateSummaryByVisibilityResult: $D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[] };

	GetFolderStateSummaryByVisibilityPromise(folderID: string, includeHidden: boolean): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderStateSummary[]>;

	GetAllMyFolders(successCallback: (data: { GetAllMyFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllMyFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetAllMyFolders(): { GetAllMyFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetAllMyFoldersPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetAllFoldersByAccountId(accountId: string, successCallback: (data: { GetAllFoldersByAccountIdResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllFoldersByAccountIdResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetAllFoldersByAccountId(accountId: string): { GetAllFoldersByAccountIdResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetAllFoldersByAccountIdPromise(accountId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetRootFolders(successCallback: (data: { GetRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetRootFolders(): { GetRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetRootFoldersPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetMyRootFolders(successCallback: (data: { GetMyRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetMyRootFolders(): { GetMyRootFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetMyRootFoldersPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetMyRootFoldersForTree(successCallback: (data: { GetMyRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetMyRootFoldersForTree(): { GetMyRootFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetMyRootFoldersForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetSubFolders(id: string, successCallback: (data: { GetSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetSubFolders(id: string): { GetSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetSubFoldersPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	SearchSubFolders(searchFor: string, rootfolderId: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	SearchSubFolders(searchFor: string, rootfolderId: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchSubFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	SearchSubFoldersPromise(searchFor: string, rootfolderId: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	SearchForSameFolderBehaviorType(searchFor: string, folderBehaviorType: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchForSameFolderBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchForSameFolderBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	SearchForSameFolderBehaviorType(searchFor: string, folderBehaviorType: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchForSameFolderBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	SearchForSameFolderBehaviorTypePromise(searchFor: string, folderBehaviorType: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetSubFoldersForTree(id: string, successCallback: (data: { GetSubFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetSubFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetSubFoldersForTree(id: string): { GetSubFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetSubFoldersForTreePromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetParentFolders(id: string, successCallback: (data: { GetParentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.ParentFolderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetParentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.ParentFolderData[] }>;

	GetParentFolders(id: string): { GetParentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.ParentFolderData[] };

	GetParentFoldersPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Folder.ParentFolderData[]>;

	GetAllEntities(id: string, successCallback: (data: { GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetAllEntities(id: string): { GetAllEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetAllEntitiesPromise(id: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetDescriptionForAnyEntity(typeName: string, entityID: string, successCallback: (data: { GetDescriptionForAnyEntityResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDescriptionForAnyEntityResult: string }>;

	GetDescriptionForAnyEntity(typeName: string, entityID: string): { GetDescriptionForAnyEntityResult: string };

	GetDescriptionForAnyEntityPromise(typeName: string, entityID: string): Promise<string>;

	GetImageForAnyEntity(typeName: string, entityID: string, imageType: $D.Framework.ServiceLayer.EntityImageType, successCallback: (data: { GetImageForAnyEntityResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo }) => any, errorCallback?: () => any): JQueryPromise<{ GetImageForAnyEntityResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo }>;

	GetImageForAnyEntity(typeName: string, entityID: string, imageType: $D.Framework.ServiceLayer.EntityImageType): { GetImageForAnyEntityResult: $D.Framework.ServiceLayer.Services.Image.ImageInfo };

	GetImageForAnyEntityPromise(typeName: string, entityID: string, imageType: $D.Framework.ServiceLayer.EntityImageType): Promise<$D.Framework.ServiceLayer.Services.Image.ImageInfo>;

	GetActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, successCallback: (data: { GetActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): { GetActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetActionsForAnyEntityPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetActionByClientActionId(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, clientActionId: string, successCallback: (data: { GetActionByClientActionIdResult: $D.Framework.ServiceLayer.Actions.BaseActionType }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionByClientActionIdResult: $D.Framework.ServiceLayer.Actions.BaseActionType }>;

	GetActionByClientActionId(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, clientActionId: string): { GetActionByClientActionIdResult: $D.Framework.ServiceLayer.Actions.BaseActionType };

	GetActionByClientActionIdPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, clientActionId: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType>;

	GetGroupActionsForEntities(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[], successCallback: (data: { GetGroupActionsForEntitiesResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupActionsForEntitiesResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction[] }>;

	GetGroupActionsForEntities(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[]): { GetGroupActionsForEntitiesResult: $D.Framework.ServiceLayer.Services.Folder.GroupAction[] };

	GetGroupActionsForEntitiesPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], entities: $D.Framework.ServiceLayer.Services.Folder.EntityTypeAndId[]): Promise<$D.Framework.ServiceLayer.Services.Folder.GroupAction[]>;

	GetGlobalActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetGlobalActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGlobalActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetGlobalActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetGlobalActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetGlobalActionsPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetGlobalActionHeaders(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] }>;

	GetGlobalActionHeaders(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetGlobalActionHeadersResult: $D.Framework.ServiceLayer.Actions.ActionHeader[] };

	GetGlobalActionHeadersPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Actions.ActionHeader[]>;

	AddSubFolder(parentFolderId: string, subFolderId: string, successCallback: (data: { AddSubFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSubFolderResult: void }>;

	AddSubFolder(parentFolderId: string, subFolderId: string): { AddSubFolderResult: void };

	AddSubFolderPromise(parentFolderId: string, subFolderId: string): Promise<void>;

	GetFolderByParentIDAndName(parentFolderId: string, folderName: string, successCallback: (data: { GetFolderByParentIDAndNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderByParentIDAndNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetFolderByParentIDAndName(parentFolderId: string, folderName: string): { GetFolderByParentIDAndNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetFolderByParentIDAndNamePromise(parentFolderId: string, folderName: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	ExistsFolderByParentIDAndName(parentFolderId: string, folderName: string, successCallback: (data: { ExistsFolderByParentIDAndNameResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ ExistsFolderByParentIDAndNameResult: boolean }>;

	ExistsFolderByParentIDAndName(parentFolderId: string, folderName: string): { ExistsFolderByParentIDAndNameResult: boolean };

	ExistsFolderByParentIDAndNamePromise(parentFolderId: string, folderName: string): Promise<boolean>;

	GetRootFolderByName(folderName: string, successCallback: (data: { GetRootFolderByNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetRootFolderByNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetRootFolderByName(folderName: string): { GetRootFolderByNameResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetRootFolderByNamePromise(folderName: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	GetFolderByPath(folderPath: string, successCallback: (data: { GetFolderByPathResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderByPathResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetFolderByPath(folderPath: string): { GetFolderByPathResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetFolderByPathPromise(folderPath: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	GetFolderForTreeByPath(folderPath: string, successCallback: (data: { GetFolderForTreeByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderForTreeByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }>;

	GetFolderForTreeByPath(folderPath: string): { GetFolderForTreeByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree };

	GetFolderForTreeByPathPromise(folderPath: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;

	GetFolderForTreeById(folderId: string, successCallback: (data: { GetFolderForTreeByIdResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderForTreeByIdResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree }>;

	GetFolderForTreeById(folderId: string): { GetFolderForTreeByIdResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree };

	GetFolderForTreeByIdPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree>;

	GetFolderByPathIfHaveAccess(folderPath: string, successCallback: (data: { GetFolderByPathIfHaveAccessResult: $D.Framework.ServiceLayer.Services.Folder.Folder }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderByPathIfHaveAccessResult: $D.Framework.ServiceLayer.Services.Folder.Folder }>;

	GetFolderByPathIfHaveAccess(folderPath: string): { GetFolderByPathIfHaveAccessResult: $D.Framework.ServiceLayer.Services.Folder.Folder };

	GetFolderByPathIfHaveAccessPromise(folderPath: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder>;

	VerifyFolderPathExistsAndHaveAccess(folderPath: string, successCallback: (data: { VerifyFolderPathExistsAndHaveAccessResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ VerifyFolderPathExistsAndHaveAccessResult: boolean }>;

	VerifyFolderPathExistsAndHaveAccess(folderPath: string): { VerifyFolderPathExistsAndHaveAccessResult: boolean };

	VerifyFolderPathExistsAndHaveAccessPromise(folderPath: string): Promise<boolean>;

	VerifyIHavePermissionToFolder(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { VerifyIHavePermissionToFolderResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ VerifyIHavePermissionToFolderResult: boolean }>;

	VerifyIHavePermissionToFolder(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { VerifyIHavePermissionToFolderResult: boolean };

	VerifyIHavePermissionToFolderPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<boolean>;

	GetFoldersByPath(path: string, successCallback: (data: { GetFoldersByPathResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFoldersByPathResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderData[] }>;

	GetFoldersByPath(path: string): { GetFoldersByPathResult: $D.Framework.ServiceLayer.Services.Folder.SubFolderData[] };

	GetFoldersByPathPromise(path: string): Promise<$D.Framework.ServiceLayer.Services.Folder.SubFolderData[]>;

	CreateRootFolder(folderId: string, name: string, folderBehaviorType: string, successCallback: (data: { CreateRootFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateRootFolderResult: string }>;

	CreateRootFolder(folderId: string, name: string, folderBehaviorType: string): { CreateRootFolderResult: string };

	CreateRootFolderPromise(folderId: string, name: string, folderBehaviorType: string): Promise<string>;

	CreateSubFolder(folderId: string, name: string, folderBehaviorType: string, parentFolderId: string, successCallback: (data: { CreateSubFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateSubFolderResult: string }>;

	CreateSubFolder(folderId: string, name: string, folderBehaviorType: string, parentFolderId: string): { CreateSubFolderResult: string };

	CreateSubFolderPromise(folderId: string, name: string, folderBehaviorType: string, parentFolderId: string): Promise<string>;

	AddAccountPermission(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { AddAccountPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAccountPermissionResult: void }>;

	AddAccountPermission(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { AddAccountPermissionResult: void };

	AddAccountPermissionPromise(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<void>;

	AddGroupPermission(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { AddGroupPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddGroupPermissionResult: void }>;

	AddGroupPermission(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { AddGroupPermissionResult: void };

	AddGroupPermissionPromise(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<void>;

	RevokeAccountPermission(folderId: string, accountId: string, successCallback: (data: { RevokeAccountPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RevokeAccountPermissionResult: void }>;

	RevokeAccountPermission(folderId: string, accountId: string): { RevokeAccountPermissionResult: void };

	RevokeAccountPermissionPromise(folderId: string, accountId: string): Promise<void>;

	RevokeGroupPermission(folderId: string, groupId: string, successCallback: (data: { RevokeGroupPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RevokeGroupPermissionResult: void }>;

	RevokeGroupPermission(folderId: string, groupId: string): { RevokeGroupPermissionResult: void };

	RevokeGroupPermissionPromise(folderId: string, groupId: string): Promise<void>;

	SetAccountPermission(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { SetAccountPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAccountPermissionResult: void }>;

	SetAccountPermission(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { SetAccountPermissionResult: void };

	SetAccountPermissionPromise(folderId: string, accountId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<void>;

	SetGroupPermission(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { SetGroupPermissionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetGroupPermissionResult: void }>;

	SetGroupPermission(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { SetGroupPermissionResult: void };

	SetGroupPermissionPromise(folderId: string, groupId: string, permissionType: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<void>;

	GetAccountPermission(folderId: string, accountId: string, successCallback: (data: { GetAccountPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetAccountPermission(folderId: string, accountId: string): { GetAccountPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetAccountPermissionPromise(folderId: string, accountId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetAccountEffectivePermission(folderId: string, accountId: string, successCallback: (data: { GetAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetAccountEffectivePermission(folderId: string, accountId: string): { GetAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetAccountEffectivePermissionPromise(folderId: string, accountId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetMyAccountEffectivePermission(folderId: string, successCallback: (data: { GetMyAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetMyAccountEffectivePermission(folderId: string): { GetMyAccountEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetMyAccountEffectivePermissionPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetGroupPermission(folderId: string, groupId: string, successCallback: (data: { GetGroupPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetGroupPermission(folderId: string, groupId: string): { GetGroupPermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetGroupPermissionPromise(folderId: string, groupId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetGroupEffectivePermission(folderId: string, groupId: string, successCallback: (data: { GetGroupEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetGroupEffectivePermission(folderId: string, groupId: string): { GetGroupEffectivePermissionResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetGroupEffectivePermissionPromise(folderId: string, groupId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetAllUsersWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllUsersWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllUsersWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllUsersIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllUsersIDsWithAccessResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersIDsWithAccessResult: string[] }>;

	GetAllUsersIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllUsersIDsWithAccessResult: string[] };

	GetAllUsersIDsWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllEffectiveUsersWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllEffectiveUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllEffectiveUsersWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllEffectiveUsersWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllEffectiveUsersWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllEffectiveUsersIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllEffectiveUsersIDsWithAccessResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersIDsWithAccessResult: string[] }>;

	GetAllEffectiveUsersIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllEffectiveUsersIDsWithAccessResult: string[] };

	GetAllEffectiveUsersIDsWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllEffectiveUsers(folderId: string, successCallback: (data: { GetAllEffectiveUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllEffectiveUsers(folderId: string): { GetAllEffectiveUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllEffectiveUsersPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllEffectiveUsersIDs(folderId: string, successCallback: (data: { GetAllEffectiveUsersIDsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersIDsResult: string[] }>;

	GetAllEffectiveUsersIDs(folderId: string): { GetAllEffectiveUsersIDsResult: string[] };

	GetAllEffectiveUsersIDsPromise(folderId: string): Promise<string[]>;

	GetAllGroupsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllGroupsWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAllGroupsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllGroupsWithAccessResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAllGroupsWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAllGroupsIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllGroupsIDsWithAccessResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsIDsWithAccessResult: string[] }>;

	GetAllGroupsIDsWithAccess(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllGroupsIDsWithAccessResult: string[] };

	GetAllGroupsIDsWithAccessPromise(folderId: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllGroups(folderId: string, successCallback: (data: { GetAllGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAllGroups(folderId: string): { GetAllGroupsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAllGroupsPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAllGroupsIDs(folderId: string, successCallback: (data: { GetAllGroupsIDsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsIDsResult: string[] }>;

	GetAllGroupsIDs(folderId: string): { GetAllGroupsIDsResult: string[] };

	GetAllGroupsIDsPromise(folderId: string): Promise<string[]>;

	GetAllUsers(folderId: string, successCallback: (data: { GetAllUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllUsers(folderId: string): { GetAllUsersResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllUsersPromise(folderId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllUsersIDs(folderId: string, successCallback: (data: { GetAllUsersIDsResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersIDsResult: string[] }>;

	GetAllUsersIDs(folderId: string): { GetAllUsersIDsResult: string[] };

	GetAllUsersIDsPromise(folderId: string): Promise<string[]>;

	GetAllFolderPermissions(successCallback: (data: { GetAllFolderPermissionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllFolderPermissionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetAllFolderPermissions(): { GetAllFolderPermissionsResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetAllFolderPermissionsPromise(): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetAccountPermissionByPath(path: string, accountId: string, successCallback: (data: { GetAccountPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetAccountPermissionByPath(path: string, accountId: string): { GetAccountPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetAccountPermissionByPathPromise(path: string, accountId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetAccountEffectivePermissionByPath(path: string, accountId: string, successCallback: (data: { GetAccountEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetAccountEffectivePermissionByPath(path: string, accountId: string): { GetAccountEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetAccountEffectivePermissionByPathPromise(path: string, accountId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetGroupPermissionByPath(path: string, groupId: string, successCallback: (data: { GetGroupPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetGroupPermissionByPath(path: string, groupId: string): { GetGroupPermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetGroupPermissionByPathPromise(path: string, groupId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetGroupEffectivePermissionByPath(path: string, groupId: string, successCallback: (data: { GetGroupEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission }>;

	GetGroupEffectivePermissionByPath(path: string, groupId: string): { GetGroupEffectivePermissionByPathResult: $D.Framework.ServiceLayer.Services.Folder.FolderPermission };

	GetGroupEffectivePermissionByPathPromise(path: string, groupId: string): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderPermission>;

	GetAllUsersWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllUsersWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllUsersWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllUsersIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllUsersIDsWithAccessByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersIDsWithAccessByPathResult: string[] }>;

	GetAllUsersIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllUsersIDsWithAccessByPathResult: string[] };

	GetAllUsersIDsWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllEffectiveUsersWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllEffectiveUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllEffectiveUsersWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllEffectiveUsersWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllEffectiveUsersWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllEffectiveUsersIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllEffectiveUsersIDsWithAccessByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersIDsWithAccessByPathResult: string[] }>;

	GetAllEffectiveUsersIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllEffectiveUsersIDsWithAccessByPathResult: string[] };

	GetAllEffectiveUsersIDsWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllEffectiveUsersByPath(path: string, successCallback: (data: { GetAllEffectiveUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllEffectiveUsersByPath(path: string): { GetAllEffectiveUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllEffectiveUsersByPathPromise(path: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllEffectiveUsersIDsByPath(path: string, successCallback: (data: { GetAllEffectiveUsersIDsByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllEffectiveUsersIDsByPathResult: string[] }>;

	GetAllEffectiveUsersIDsByPath(path: string): { GetAllEffectiveUsersIDsByPathResult: string[] };

	GetAllEffectiveUsersIDsByPathPromise(path: string): Promise<string[]>;

	GetAllGroupsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllGroupsWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAllGroupsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllGroupsWithAccessByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAllGroupsWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAllGroupsIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission, successCallback: (data: { GetAllGroupsIDsWithAccessByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsIDsWithAccessByPathResult: string[] }>;

	GetAllGroupsIDsWithAccessByPath(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): { GetAllGroupsIDsWithAccessByPathResult: string[] };

	GetAllGroupsIDsWithAccessByPathPromise(path: string, permission: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): Promise<string[]>;

	GetAllGroupsByPath(path: string, successCallback: (data: { GetAllGroupsByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetAllGroupsByPath(path: string): { GetAllGroupsByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetAllGroupsByPathPromise(path: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAllGroupsIDsByPath(path: string, successCallback: (data: { GetAllGroupsIDsByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllGroupsIDsByPathResult: string[] }>;

	GetAllGroupsIDsByPath(path: string): { GetAllGroupsIDsByPathResult: string[] };

	GetAllGroupsIDsByPathPromise(path: string): Promise<string[]>;

	GetAllUsersByPath(path: string, successCallback: (data: { GetAllUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAllUsersByPath(path: string): { GetAllUsersByPathResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAllUsersByPathPromise(path: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAllUsersIDsByPath(path: string, successCallback: (data: { GetAllUsersIDsByPathResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllUsersIDsByPathResult: string[] }>;

	GetAllUsersIDsByPath(path: string): { GetAllUsersIDsByPathResult: string[] };

	GetAllUsersIDsByPathPromise(path: string): Promise<string[]>;

	SearchEntities(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any, successCallback: (data: { SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	SearchEntities(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any): { SearchEntitiesResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	SearchEntitiesPromise(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	SearchPlatformEntity(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any, desiredResultCount: number, startFrom: number, successCallback: (data: { SearchPlatformEntityResult: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchPlatformEntityResult: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData[] }>;

	SearchPlatformEntity(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any, desiredResultCount: number, startFrom: number): { SearchPlatformEntityResult: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData[] };

	SearchPlatformEntityPromise(textToSearch: string, entityType: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], excludeHidden: boolean, searchDescription: boolean, createdBefore: any, createdAfter: any, createdByMe: boolean, lastUpdatedByMe: boolean, updatedAfter: any, notUpdatedAfter: any, tags: string[], rootFolderId: string, folderSearchType: any, desiredResultCount: number, startFrom: number): Promise<$D.Framework.ServiceLayer.Services.Folder.PlatformEntityData[]>;

	GetSystemFolderID(systemFolder: $D.Framework.ServiceLayer.Services.Folder.SystemFolder, successCallback: (data: { GetSystemFolderIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetSystemFolderIDResult: string }>;

	GetSystemFolderID(systemFolder: $D.Framework.ServiceLayer.Services.Folder.SystemFolder): { GetSystemFolderIDResult: string };

	GetSystemFolderIDPromise(systemFolder: $D.Framework.ServiceLayer.Services.Folder.SystemFolder): Promise<string>;

	GetFolderViewData(folderID: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }>;

	GetFolderViewData(folderID: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData };

	GetFolderViewDataPromise(folderID: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderViewData>;

	GetEntityByID(entityID: string, successCallback: (data: { GetEntityByIDResult: $D.Framework.Data.ORMapper.EntityHeaderData }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntityByIDResult: $D.Framework.Data.ORMapper.EntityHeaderData }>;

	GetEntityByID(entityID: string): { GetEntityByIDResult: $D.Framework.Data.ORMapper.EntityHeaderData };

	GetEntityByIDPromise(entityID: string): Promise<$D.Framework.Data.ORMapper.EntityHeaderData>;

	GetEntitiesEnsuringPermission(entityID: string[], successCallback: (data: { GetEntitiesEnsuringPermissionResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesEnsuringPermissionResult: $D.Framework.Data.ORMapper.EntityHeaderData[] }>;

	GetEntitiesEnsuringPermission(entityID: string[]): { GetEntitiesEnsuringPermissionResult: $D.Framework.Data.ORMapper.EntityHeaderData[] };

	GetEntitiesEnsuringPermissionPromise(entityID: string[]): Promise<$D.Framework.Data.ORMapper.EntityHeaderData[]>;

	GetEntitiesForFolder(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number, successCallback: (data: { GetEntitiesForFolderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetEntitiesForFolderResult: any }>;

	GetEntitiesForFolder(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number): { GetEntitiesForFolderResult: any };

	GetEntitiesForFolderPromise(folderid: string, typeNames: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], desiredCount: number): Promise<any>;

	GetElementRegistrationEntitiesForFolder(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number, successCallback: (data: { GetElementRegistrationEntitiesForFolderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetElementRegistrationEntitiesForFolderResult: any }>;

	GetElementRegistrationEntitiesForFolder(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number): { GetElementRegistrationEntitiesForFolderResult: any };

	GetElementRegistrationEntitiesForFolderPromise(folderid: string, types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], elementTypes: $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType[], desiredCount: number): Promise<any>;

	GetTypeEntities(typeName: string, successCallback: (data: { GetTypeEntitiesResult: any[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetTypeEntitiesResult: any[] }>;

	GetTypeEntities(typeName: string): { GetTypeEntitiesResult: any[] };

	GetTypeEntitiesPromise(typeName: string): Promise<any[]>;

	HasSubFoldersInTree(folderId: string, successCallback: (data: { HasSubFoldersInTreeResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasSubFoldersInTreeResult: boolean }>;

	HasSubFoldersInTree(folderId: string): { HasSubFoldersInTreeResult: boolean };

	HasSubFoldersInTreePromise(folderId: string): Promise<boolean>;

	GetActionByUniqueName(actionUniqueName: string, successCallback: (data: { GetActionByUniqueNameResult: $D.Framework.ServiceLayer.Actions.BaseActionType }) => any, errorCallback?: () => any): JQueryPromise<{ GetActionByUniqueNameResult: $D.Framework.ServiceLayer.Actions.BaseActionType }>;

	GetActionByUniqueName(actionUniqueName: string): { GetActionByUniqueNameResult: $D.Framework.ServiceLayer.Actions.BaseActionType };

	GetActionByUniqueNamePromise(actionUniqueName: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType>;

	GetMyRecentFolders(successCallback: (data: { GetMyRecentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetMyRecentFolders(): { GetMyRecentFoldersResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetMyRecentFoldersPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetMyRecentFoldersForTree(successCallback: (data: { GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetMyRecentFoldersForTree(): { GetMyRecentFoldersForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetMyRecentFoldersForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	AddFolderToFavorites(folderId: string, successCallback: (data: { AddFolderToFavoritesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddFolderToFavoritesResult: void }>;

	AddFolderToFavorites(folderId: string): { AddFolderToFavoritesResult: void };

	AddFolderToFavoritesPromise(folderId: string): Promise<void>;

	RemoveFolderFromFavorites(folderId: string, successCallback: (data: { RemoveFolderFromFavoritesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveFolderFromFavoritesResult: void }>;

	RemoveFolderFromFavorites(folderId: string): { RemoveFolderFromFavoritesResult: void };

	RemoveFolderFromFavoritesPromise(folderId: string): Promise<void>;

	FolderInFavorites(folderId: string, successCallback: (data: { FolderInFavoritesResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FolderInFavoritesResult: boolean }>;

	FolderInFavorites(folderId: string): { FolderInFavoritesResult: boolean };

	FolderInFavoritesPromise(folderId: string): Promise<boolean>;

	GetMyFavorites(successCallback: (data: { GetMyFavoritesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavoritesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetMyFavorites(): { GetMyFavoritesResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetMyFavoritesPromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetMyFavoritesForTree(successCallback: (data: { GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetMyFavoritesForTree(): { GetMyFavoritesForTreeResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetMyFavoritesForTreePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetFoldersForTreeForMobile(successCallback: (data: { GetFoldersForTreeForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFoldersForTreeForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] }>;

	GetFoldersForTreeForMobile(): { GetFoldersForTreeForMobileResult: $D.Framework.ServiceLayer.Services.Folder.FolderForTree[] };

	GetFoldersForTreeForMobilePromise(): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderForTree[]>;

	GetMyFavoriteEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[], successCallback: (data: { GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.FavoriteReturn[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.FavoriteReturn[] }>;

	GetMyFavoriteEntities(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): { GetMyFavoriteEntitiesResult: $D.Framework.ServiceLayer.Services.FavoriteReturn[] };

	GetMyFavoriteEntitiesPromise(types: $D.Framework.ServiceLayer.Services.Folder.EntityTypeInfo[], filterNames: string[]): Promise<$D.Framework.ServiceLayer.Services.FavoriteReturn[]>;

	RecentIsEmpty(successCallback: (data: { RecentIsEmptyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ RecentIsEmptyResult: boolean }>;

	RecentIsEmpty(): { RecentIsEmptyResult: boolean };

	RecentIsEmptyPromise(): Promise<boolean>;

	FavoritesIsEmpty(successCallback: (data: { FavoritesIsEmptyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ FavoritesIsEmptyResult: boolean }>;

	FavoritesIsEmpty(): { FavoritesIsEmptyResult: boolean };

	FavoritesIsEmptyPromise(): Promise<boolean>;

	MoveToFolder(entityTypeName: string, entityId: string, folderId: string, successCallback: (data: { MoveToFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ MoveToFolderResult: void }>;

	MoveToFolder(entityTypeName: string, entityId: string, folderId: string): { MoveToFolderResult: void };

	MoveToFolderPromise(entityTypeName: string, entityId: string, folderId: string): Promise<void>;

	EnablePermissionInheritance(folderId: string, successCallback: (data: { EnablePermissionInheritanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnablePermissionInheritanceResult: void }>;

	EnablePermissionInheritance(folderId: string): { EnablePermissionInheritanceResult: void };

	EnablePermissionInheritancePromise(folderId: string): Promise<void>;

	DisablePermissionInheritance(folderId: string, successCallback: (data: { DisablePermissionInheritanceResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisablePermissionInheritanceResult: void }>;

	DisablePermissionInheritance(folderId: string): { DisablePermissionInheritanceResult: void };

	DisablePermissionInheritancePromise(folderId: string): Promise<void>;

	GetDefaultFolderViewDataForAccount(accountId: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetDefaultFolderViewDataForAccountResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultFolderViewDataForAccountResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }>;

	GetDefaultFolderViewDataForAccount(accountId: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetDefaultFolderViewDataForAccountResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData };

	GetDefaultFolderViewDataForAccountPromise(accountId: string, actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderViewData>;

	GetMyDefaultFolderViewData(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetMyDefaultFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyDefaultFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData }>;

	GetMyDefaultFolderViewData(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetMyDefaultFolderViewDataResult: $D.Framework.ServiceLayer.Services.Folder.FolderViewData };

	GetMyDefaultFolderViewDataPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Services.Folder.FolderViewData>;

	GetDefaultFolderIDForAccount(accountId: string, successCallback: (data: { GetDefaultFolderIDForAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDefaultFolderIDForAccountResult: string }>;

	GetDefaultFolderIDForAccount(accountId: string): { GetDefaultFolderIDForAccountResult: string };

	GetDefaultFolderIDForAccountPromise(accountId: string): Promise<string>;

	GetMyDefaultFolderID(successCallback: (data: { GetMyDefaultFolderIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyDefaultFolderIDResult: string }>;

	GetMyDefaultFolderID(): { GetMyDefaultFolderIDResult: string };

	GetMyDefaultFolderIDPromise(): Promise<string>;

	GetHomeFolderIDForAccount(accountId: string, successCallback: (data: { GetHomeFolderIDForAccountResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHomeFolderIDForAccountResult: string }>;

	GetHomeFolderIDForAccount(accountId: string): { GetHomeFolderIDForAccountResult: string };

	GetHomeFolderIDForAccountPromise(accountId: string): Promise<string>;

	GetMyHomeFolderID(successCallback: (data: { GetMyHomeFolderIDResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyHomeFolderIDResult: string }>;

	GetMyHomeFolderID(): { GetMyHomeFolderIDResult: string };

	GetMyHomeFolderIDPromise(): Promise<string>;

	SetMyDefaultFolder(folderId: string, successCallback: (data: { SetMyDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetMyDefaultFolderResult: void }>;

	SetMyDefaultFolder(folderId: string): { SetMyDefaultFolderResult: void };

	SetMyDefaultFolderPromise(folderId: string): Promise<void>;

	SetAccountDefaultFolder(accountId: string, folderId: string, successCallback: (data: { SetAccountDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAccountDefaultFolderResult: void }>;

	SetAccountDefaultFolder(accountId: string, folderId: string): { SetAccountDefaultFolderResult: void };

	SetAccountDefaultFolderPromise(accountId: string, folderId: string): Promise<void>;

	SetGroupDefaultFolder(groupId: string, folderId: string, successCallback: (data: { SetGroupDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetGroupDefaultFolderResult: void }>;

	SetGroupDefaultFolder(groupId: string, folderId: string): { SetGroupDefaultFolderResult: void };

	SetGroupDefaultFolderPromise(groupId: string, folderId: string): Promise<void>;

	SetPortalDefaultFolder(folderId: string, successCallback: (data: { SetPortalDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetPortalDefaultFolderResult: void }>;

	SetPortalDefaultFolder(folderId: string): { SetPortalDefaultFolderResult: void };

	SetPortalDefaultFolderPromise(folderId: string): Promise<void>;

	ClearMyDefaultFolder(successCallback: (data: { ClearMyDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearMyDefaultFolderResult: void }>;

	ClearMyDefaultFolder(): { ClearMyDefaultFolderResult: void };

	ClearMyDefaultFolderPromise(): Promise<void>;

	ClearGroupDefaultFolder(groupId: string, successCallback: (data: { ClearGroupDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearGroupDefaultFolderResult: void }>;

	ClearGroupDefaultFolder(groupId: string): { ClearGroupDefaultFolderResult: void };

	ClearGroupDefaultFolderPromise(groupId: string): Promise<void>;

	ClearAccountDefaultFolder(accountId: string, successCallback: (data: { ClearAccountDefaultFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearAccountDefaultFolderResult: void }>;

	ClearAccountDefaultFolder(accountId: string): { ClearAccountDefaultFolderResult: void };

	ClearAccountDefaultFolderPromise(accountId: string): Promise<void>;

	SetNameAndDescription(folderId: string, name: string, description: string, successCallback: (data: { SetNameAndDescriptionResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetNameAndDescriptionResult: void }>;

	SetNameAndDescription(folderId: string, name: string, description: string): { SetNameAndDescriptionResult: void };

	SetNameAndDescriptionPromise(folderId: string, name: string, description: string): Promise<void>;

	SearchForActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, searchActionText: string[], searchType: $D.Framework.ServiceLayer.Actions.ActionSearchType, successCallback: (data: { SearchForActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchForActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	SearchForActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, searchActionText: string[], searchType: $D.Framework.ServiceLayer.Actions.ActionSearchType): { SearchForActionsForAnyEntityResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	SearchForActionsForAnyEntityPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, searchActionText: string[], searchType: $D.Framework.ServiceLayer.Actions.ActionSearchType): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetDescriptionAndActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string, successCallback: (data: { GetDescriptionAndActionsForAnyEntityResult: $D.Framework.ServiceLayer.Services.Folder.EntityDescriptionAndActions }) => any, errorCallback?: () => any): JQueryPromise<{ GetDescriptionAndActionsForAnyEntityResult: $D.Framework.ServiceLayer.Services.Folder.EntityDescriptionAndActions }>;

	GetDescriptionAndActionsForAnyEntity(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): { GetDescriptionAndActionsForAnyEntityResult: $D.Framework.ServiceLayer.Services.Folder.EntityDescriptionAndActions };

	GetDescriptionAndActionsForAnyEntityPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], typeName: string, entityID: string): Promise<$D.Framework.ServiceLayer.Services.Folder.EntityDescriptionAndActions>;

	GetFolderUrl(folderId: string, successCallback: (data: { GetFolderUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetFolderUrlResult: string }>;

	GetFolderUrl(folderId: string): { GetFolderUrlResult: string };

	GetFolderUrlPromise(folderId: string): Promise<string>;

	GetHistoryFolderId(entityId: string, entityTypeName: string, successCallback: (data: { GetHistoryFolderIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetHistoryFolderIdResult: string }>;

	GetHistoryFolderId(entityId: string, entityTypeName: string): { GetHistoryFolderIdResult: string };

	GetHistoryFolderIdPromise(entityId: string, entityTypeName: string): Promise<string>;

	HasHistoryFolder(entityId: string, entityTypeName: string, successCallback: (data: { HasHistoryFolderResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasHistoryFolderResult: boolean }>;

	HasHistoryFolder(entityId: string, entityTypeName: string): { HasHistoryFolderResult: boolean };

	HasHistoryFolderPromise(entityId: string, entityTypeName: string): Promise<boolean>;

	CreateHistoryFolder(entityId: string, entityTypeName: string, folderBehaviorType: string, successCallback: (data: { CreateHistoryFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateHistoryFolderResult: string }>;

	CreateHistoryFolder(entityId: string, entityTypeName: string, folderBehaviorType: string): { CreateHistoryFolderResult: string };

	CreateHistoryFolderPromise(entityId: string, entityTypeName: string, folderBehaviorType: string): Promise<string>;

	CreateDefaultHistoryFolder(entityId: string, entityTypeName: string, successCallback: (data: { CreateDefaultHistoryFolderResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateDefaultHistoryFolderResult: string }>;

	CreateDefaultHistoryFolder(entityId: string, entityTypeName: string): { CreateDefaultHistoryFolderResult: string };

	CreateDefaultHistoryFolderPromise(entityId: string, entityTypeName: string): Promise<string>;

	CreateHistoryFolderWithId(entityId: string, historyFolderId: string, entityTypeName: string, folderBehaviorType: string, successCallback: (data: { CreateHistoryFolderWithIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateHistoryFolderWithIdResult: string }>;

	CreateHistoryFolderWithId(entityId: string, historyFolderId: string, entityTypeName: string, folderBehaviorType: string): { CreateHistoryFolderWithIdResult: string };

	CreateHistoryFolderWithIdPromise(entityId: string, historyFolderId: string, entityTypeName: string, folderBehaviorType: string): Promise<string>;

	GetFoldersByBehaviorType(parentFolderId: string, folderBehaviorTypeName: string, successCallback: (data: { GetFoldersByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetFoldersByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] }>;

	GetFoldersByBehaviorType(parentFolderId: string, folderBehaviorTypeName: string): { GetFoldersByBehaviorTypeResult: $D.Framework.ServiceLayer.Services.Folder.Folder[] };

	GetFoldersByBehaviorTypePromise(parentFolderId: string, folderBehaviorTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Folder.Folder[]>;

	GetCreateRootFolderActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], successCallback: (data: { GetCreateRootFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCreateRootFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetCreateRootFolderActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): { GetCreateRootFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetCreateRootFolderActionsPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[]): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetCreateSubFolderActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], folderId: string, successCallback: (data: { GetCreateSubFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCreateSubFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetCreateSubFolderActions(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], folderId: string): { GetCreateSubFolderActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetCreateSubFolderActionsPromise(actionTypes: $D.Framework.ServiceLayer.Actions.EntityActionType[], folderId: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	CommitAdditionalFolderData(folderId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[], successCallback: (data: { CommitAdditionalFolderDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CommitAdditionalFolderDataResult: void }>;

	CommitAdditionalFolderData(folderId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): { CommitAdditionalFolderDataResult: void };

	CommitAdditionalFolderDataPromise(folderId: string, data: $D.Framework.ServiceLayer.Services.ContextData.DataPair[]): Promise<void>;

	Create(name: string, description: string, parentFolderID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData, successCallback: (data: { CreateResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ CreateResult: string }>;

	Create(name: string, description: string, parentFolderID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData): { CreateResult: string };

	CreatePromise(name: string, description: string, parentFolderID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData): Promise<string>;

	FetchData(folderEntityID: string, successCallback: (data: { FetchDataResult: $D.Framework.ServiceLayer.Services.Chat.ChatData }) => any, errorCallback?: () => any): JQueryPromise<{ FetchDataResult: $D.Framework.ServiceLayer.Services.Chat.ChatData }>;

	FetchData(folderEntityID: string): { FetchDataResult: $D.Framework.ServiceLayer.Services.Chat.ChatData };

	FetchDataPromise(folderEntityID: string): Promise<$D.Framework.ServiceLayer.Services.Chat.ChatData>;

	DeleteFolderWithData(folderEntityID: string, successCallback: (data: { DeleteFolderWithDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteFolderWithDataResult: void }>;

	DeleteFolderWithData(folderEntityID: string): { DeleteFolderWithDataResult: void };

	DeleteFolderWithDataPromise(folderEntityID: string): Promise<void>;

	SaveFolderWithData(folderEntityID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData, successCallback: (data: { SaveFolderWithDataResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveFolderWithDataResult: void }>;

	SaveFolderWithData(folderEntityID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData): { SaveFolderWithDataResult: void };

	SaveFolderWithDataPromise(folderEntityID: string, data: $D.Framework.ServiceLayer.Services.Chat.ChatData): Promise<void>;
}

interface ServicesStatic {
	ChatService(): ChatServiceStatic;
}
