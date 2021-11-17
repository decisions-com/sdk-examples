/// <reference path="./datatypes._base.d.ts" />

interface AssignmentServiceStatic {

	AddAssignmentForUser(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, successCallback: (data: { AddAssignmentForUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssignmentForUserResult: void }>;

	AddAssignmentForUser(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): { AddAssignmentForUserResult: void };

	AddAssignmentForUserPromise(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): Promise<void>;

	AddAssignmentForGroup(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, successCallback: (data: { AddAssignmentForGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssignmentForGroupResult: void }>;

	AddAssignmentForGroup(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): { AddAssignmentForGroupResult: void };

	AddAssignmentForGroupPromise(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): Promise<void>;

	AddAssignmentForFolderRights(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights, successCallback: (data: { AddAssignmentForFolderRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssignmentForFolderRightsResult: void }>;

	AddAssignmentForFolderRights(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): { AddAssignmentForFolderRightsResult: void };

	AddAssignmentForFolderRightsPromise(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): Promise<void>;

	AddSimpleAssignmentForUser(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, successCallback: (data: { AddSimpleAssignmentForUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleAssignmentForUserResult: void }>;

	AddSimpleAssignmentForUser(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): { AddSimpleAssignmentForUserResult: void };

	AddSimpleAssignmentForUserPromise(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): Promise<void>;

	AddAssignmentForRole(assignmentID: string, roleTypeId: string, successCallback: (data: { AddAssignmentForRoleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddAssignmentForRoleResult: void }>;

	AddAssignmentForRole(assignmentID: string, roleTypeId: string): { AddAssignmentForRoleResult: void };

	AddAssignmentForRolePromise(assignmentID: string, roleTypeId: string): Promise<void>;

	AddSimpleAssignmentForGroup(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, successCallback: (data: { AddSimpleAssignmentForGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleAssignmentForGroupResult: void }>;

	AddSimpleAssignmentForGroup(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): { AddSimpleAssignmentForGroupResult: void };

	AddSimpleAssignmentForGroupPromise(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): Promise<void>;

	AddSimpleAssignmentForFolderRights(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights, successCallback: (data: { AddSimpleAssignmentForFolderRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleAssignmentForFolderRightsResult: void }>;

	AddSimpleAssignmentForFolderRights(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): { AddSimpleAssignmentForFolderRightsResult: void };

	AddSimpleAssignmentForFolderRightsPromise(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): Promise<void>;

	AddSimpleAssignment(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, successCallback: (data: { AddSimpleAssignmentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleAssignmentResult: void }>;

	AddSimpleAssignment(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): { AddSimpleAssignmentResult: void };

	AddSimpleAssignmentPromise(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription): Promise<void>;

	AddSimpleAssignmentForRole(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, roleTypeId: string, successCallback: (data: { AddSimpleAssignmentForRoleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddSimpleAssignmentForRoleResult: void }>;

	AddSimpleAssignmentForRole(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, roleTypeId: string): { AddSimpleAssignmentForRoleResult: void };

	AddSimpleAssignmentForRolePromise(entityID: string, toDo: $D.Framework.ServiceLayer.Actions.Common.TitleAndDescription, roleTypeId: string): Promise<void>;

	SendReminderforAssignment(assignmentId: string, successCallback: (data: { SendReminderforAssignmentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SendReminderforAssignmentResult: void }>;

	SendReminderforAssignment(assignmentId: string): { SendReminderforAssignmentResult: void };

	SendReminderforAssignmentPromise(assignmentId: string): Promise<void>;

	RemoveAssignmentForUser(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType, successCallback: (data: { RemoveAssignmentForUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAssignmentForUserResult: void }>;

	RemoveAssignmentForUser(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): { RemoveAssignmentForUserResult: void };

	RemoveAssignmentForUserPromise(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.UserIdentifierType): Promise<void>;

	RemoveAssignmentForGroup(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType, successCallback: (data: { RemoveAssignmentForGroupResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAssignmentForGroupResult: void }>;

	RemoveAssignmentForGroup(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): { RemoveAssignmentForGroupResult: void };

	RemoveAssignmentForGroupPromise(assignmentID: string, identifier: string, identifierType: $D.Framework.ServiceLayer.Utilities.GroupIdentifierType): Promise<void>;

	RemoveAssignmentForFolderRights(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights, successCallback: (data: { RemoveAssignmentForFolderRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAssignmentForFolderRightsResult: void }>;

	RemoveAssignmentForFolderRights(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): { RemoveAssignmentForFolderRightsResult: void };

	RemoveAssignmentForFolderRightsPromise(assignmentID: string, right: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights): Promise<void>;

	RemoveAssignmentForRole(assignmentID: string, roleName: string, successCallback: (data: { RemoveAssignmentForRoleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveAssignmentForRoleResult: void }>;

	RemoveAssignmentForRole(assignmentID: string, roleName: string): { RemoveAssignmentForRoleResult: void };

	RemoveAssignmentForRolePromise(assignmentID: string, roleName: string): Promise<void>;

	CompleteAssignment(assignmentID: string, successCallback: (data: { CompleteAssignmentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteAssignmentResult: void }>;

	CompleteAssignment(assignmentID: string): { CompleteAssignmentResult: void };

	CompleteAssignmentPromise(assignmentID: string): Promise<void>;

	CompleteAssignmentWithNotes(assignmentID: string, notes: string, resultPath: string, successCallback: (data: { CompleteAssignmentWithNotesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ CompleteAssignmentWithNotesResult: void }>;

	CompleteAssignmentWithNotes(assignmentID: string, notes: string, resultPath: string): { CompleteAssignmentWithNotesResult: void };

	CompleteAssignmentWithNotesPromise(assignmentID: string, notes: string, resultPath: string): Promise<void>;

	GetAccountsWithAssignment(assignmentID: string, successCallback: (data: { GetAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAccountsWithAssignment(assignmentID: string): { GetAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAccountsWithAssignmentPromise(assignmentID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	AccountRightForAssignment(accountId: string, assignmentId: string, successCallback: (data: { AccountRightForAssignmentResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ AccountRightForAssignmentResult: boolean }>;

	AccountRightForAssignment(accountId: string, assignmentId: string): { AccountRightForAssignmentResult: boolean };

	AccountRightForAssignmentPromise(accountId: string, assignmentId: string): Promise<boolean>;

	GetNonEffectiveAccountsWithAssignment(assignmentID: string, successCallback: (data: { GetNonEffectiveAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetNonEffectiveAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetNonEffectiveAccountsWithAssignment(assignmentID: string): { GetNonEffectiveAccountsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetNonEffectiveAccountsWithAssignmentPromise(assignmentID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetAssignmentsForFolder(taskFolderID: string, successCallback: (data: { GetAssignmentsForFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsForFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsForFolder(taskFolderID: string): { GetAssignmentsForFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsForFolderPromise(taskFolderID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsForFolderValidForState(taskFolderID: string, stateName: string, successCallback: (data: { GetAssignmentsForFolderValidForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsForFolderValidForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsForFolderValidForState(taskFolderID: string, stateName: string): { GetAssignmentsForFolderValidForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsForFolderValidForStatePromise(taskFolderID: string, stateName: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsInFolderByAssignmentState(taskFolderID: string, stateName: string, successCallback: (data: { GetAssignmentsInFolderByAssignmentStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsInFolderByAssignmentStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsInFolderByAssignmentState(taskFolderID: string, stateName: string): { GetAssignmentsInFolderByAssignmentStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsInFolderByAssignmentStatePromise(taskFolderID: string, stateName: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsInFolderByFolderState(taskFolderID: string, stateName: string, successCallback: (data: { GetAssignmentsInFolderByFolderStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsInFolderByFolderStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsInFolderByFolderState(taskFolderID: string, stateName: string): { GetAssignmentsInFolderByFolderStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsInFolderByFolderStatePromise(taskFolderID: string, stateName: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAccountsWithAssignments(taskFolderID: string, successCallback: (data: { GetAccountsWithAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsWithAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAccountsWithAssignments(taskFolderID: string): { GetAccountsWithAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAccountsWithAssignmentsPromise(taskFolderID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	GetGroupAssignments(taskFolderID: string, successCallback: (data: { GetGroupAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetGroupAssignments(taskFolderID: string): { GetGroupAssignmentsResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetGroupAssignmentsPromise(taskFolderID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAssignmentSettings(successCallback: (data: { GetAssignmentSettingsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentSettings }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentSettingsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentSettings }>;

	GetAssignmentSettings(): { GetAssignmentSettingsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentSettings };

	GetAssignmentSettingsPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentSettings>;

	GetGroupsWithAssignment(assignmentID: string, successCallback: (data: { GetGroupsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetGroupsWithAssignment(assignmentID: string): { GetGroupsWithAssignmentResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetGroupsWithAssignmentPromise(assignmentID: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAssignedFolderRightsForAssignment(assignmentID: string, successCallback: (data: { GetAssignedFolderRightsForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignedFolderRightsForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[] }>;

	GetAssignedFolderRightsForAssignment(assignmentID: string): { GetAssignedFolderRightsForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[] };

	GetAssignedFolderRightsForAssignmentPromise(assignmentID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[]>;

	GetAllRoles(successCallback: (data: { GetAllRolesResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllRolesResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }>;

	GetAllRoles(): { GetAllRolesResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] };

	GetAllRolesPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[]>;

	GetAllRolesByIDs(ids: string[], successCallback: (data: { GetAllRolesByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllRolesByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }>;

	GetAllRolesByIDs(ids: string[]): { GetAllRolesByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] };

	GetAllRolesByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[]>;

	GetAllFolderRightsWithNames(successCallback: (data: { GetAllFolderRightsWithNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllFolderRightsWithNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] }>;

	GetAllFolderRightsWithNames(): { GetAllFolderRightsWithNamesResult: $D.Framework.ServiceLayer.Services.ContextData.DataPair[] };

	GetAllFolderRightsWithNamesPromise(): Promise<$D.Framework.ServiceLayer.Services.ContextData.DataPair[]>;

	GetRolesForAssignment(assignmentID: string, successCallback: (data: { GetRolesForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetRolesForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] }>;

	GetRolesForAssignment(assignmentID: string): { GetRolesForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[] };

	GetRolesForAssignmentPromise(assignmentID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType[]>;

	GetAssignmentRolesForAssignment(assignmentID: string, successCallback: (data: { GetAssignmentRolesForAssignmentResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentRolesForAssignmentResult: string[] }>;

	GetAssignmentRolesForAssignment(assignmentID: string): { GetAssignmentRolesForAssignmentResult: string[] };

	GetAssignmentRolesForAssignmentPromise(assignmentID: string): Promise<string[]>;

	IsAccountEffectivelyAssignedTo(accountId: string, assignmentId: string, successCallback: (data: { IsAccountEffectivelyAssignedToResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsAccountEffectivelyAssignedToResult: boolean }>;

	IsAccountEffectivelyAssignedTo(accountId: string, assignmentId: string): { IsAccountEffectivelyAssignedToResult: boolean };

	IsAccountEffectivelyAssignedToPromise(accountId: string, assignmentId: string): Promise<boolean>;

	IsAccountEffectivelyAssignedToImporsonatedUsers(assignmentId: string, imporsonatedUsersId: string[], successCallback: (data: { IsAccountEffectivelyAssignedToImporsonatedUsersResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsAccountEffectivelyAssignedToImporsonatedUsersResult: boolean }>;

	IsAccountEffectivelyAssignedToImporsonatedUsers(assignmentId: string, imporsonatedUsersId: string[]): { IsAccountEffectivelyAssignedToImporsonatedUsersResult: boolean };

	IsAccountEffectivelyAssignedToImporsonatedUsersPromise(assignmentId: string, imporsonatedUsersId: string[]): Promise<boolean>;

	GetMyCurrentAssignments(successCallback: (data: { GetMyCurrentAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyCurrentAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyCurrentAssignments(): { GetMyCurrentAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyCurrentAssignmentsPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignments(successCallback: (data: { GetMyAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignments(): { GetMyAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyStartupAssignments(successCallback: (data: { GetMyStartupAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyStartupAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyStartupAssignments(): { GetMyStartupAssignmentsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyStartupAssignmentsPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsTypes(successCallback: (data: { GetMyAssignmentsTypesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsTypesResult: string[] }>;

	GetMyAssignmentsTypes(): { GetMyAssignmentsTypesResult: string[] };

	GetMyAssignmentsTypesPromise(): Promise<string[]>;

	GetMyAssignmentsByType(type: string, successCallback: (data: { GetMyAssignmentsByTypeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsByTypeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsByType(type: string): { GetMyAssignmentsByTypeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsByTypePromise(type: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsInFolder(folderID: string, successCallback: (data: { GetMyAssignmentsInFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsInFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsInFolder(folderID: string): { GetMyAssignmentsInFolderResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsInFolderPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsByState(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState, successCallback: (data: { GetMyAssignmentsByStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsByStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsByState(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState): { GetMyAssignmentsByStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsByStatePromise(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsByPriority(priority: string, successCallback: (data: { GetMyAssignmentsByPriorityResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsByPriorityResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsByPriority(priority: string): { GetMyAssignmentsByPriorityResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsByPriorityPromise(priority: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsByAge(days: number, hours: number, mins: number, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentAgeParms, successCallback: (data: { GetMyAssignmentsByAgeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsByAgeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsByAge(days: number, hours: number, mins: number, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentAgeParms): { GetMyAssignmentsByAgeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsByAgePromise(days: number, hours: number, mins: number, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentAgeParms): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetMyAssignmentsByDate(firstDate: Date, secondDate: Date, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentDateParms, successCallback: (data: { GetMyAssignmentsByDateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetMyAssignmentsByDateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetMyAssignmentsByDate(firstDate: Date, secondDate: Date, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentDateParms): { GetMyAssignmentsByDateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetMyAssignmentsByDatePromise(firstDate: Date, secondDate: Date, assignmentDateParms: $D.Framework.ServiceLayer.Services.Assignments.AssignmentDateParms): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsWithStateChangedByMe(successCallback: (data: { GetAssignmentsWithStateChangedByMeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsWithStateChangedByMeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsWithStateChangedByMe(): { GetAssignmentsWithStateChangedByMeResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsWithStateChangedByMePromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsWithStateChangedByMeSince(sinceDate: Date, successCallback: (data: { GetAssignmentsWithStateChangedByMeSinceResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsWithStateChangedByMeSinceResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsWithStateChangedByMeSince(sinceDate: Date): { GetAssignmentsWithStateChangedByMeSinceResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsWithStateChangedByMeSincePromise(sinceDate: Date): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsWithStateChangedByMeForState(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState, successCallback: (data: { GetAssignmentsWithStateChangedByMeForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsWithStateChangedByMeForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsWithStateChangedByMeForState(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState): { GetAssignmentsWithStateChangedByMeForStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsWithStateChangedByMeForStatePromise(state: $D.Framework.ServiceLayer.Services.Assignments.AssignmentState): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsOfState(state: string, successCallback: (data: { GetAssignmentsOfStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsOfStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsOfState(state: string): { GetAssignmentsOfStateResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsOfStatePromise(state: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAllAssignmentsWithExtensionData(extensionDataTypeName: string, successCallback: (data: { GetAllAssignmentsWithExtensionDataResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllAssignmentsWithExtensionDataResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAllAssignmentsWithExtensionData(extensionDataTypeName: string): { GetAllAssignmentsWithExtensionDataResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAllAssignmentsWithExtensionDataPromise(extensionDataTypeName: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetCurrentAssignmentByTaskFolderId(taskFolderID: string, successCallback: (data: { GetCurrentAssignmentByTaskFolderIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAssignmentByTaskFolderIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment }>;

	GetCurrentAssignmentByTaskFolderId(taskFolderID: string): { GetCurrentAssignmentByTaskFolderIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment };

	GetCurrentAssignmentByTaskFolderIdPromise(taskFolderID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment>;

	GetAssignmentsByAccountId(accountId: string, successCallback: (data: { GetAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsByAccountId(accountId: string): { GetAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsByAccountIdPromise(accountId: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetAssignmentsByUserEmail(emailAddress: string, successCallback: (data: { GetAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAssignmentsByUserEmail(emailAddress: string): { GetAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAssignmentsByUserEmailPromise(emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetCurrentAssignmentsByAccountId(accountId: string, successCallback: (data: { GetCurrentAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetCurrentAssignmentsByAccountId(accountId: string): { GetCurrentAssignmentsByAccountIdResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetCurrentAssignmentsByAccountIdPromise(accountId: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetCurrentAssignmentsByUserEmail(emailAddress: string, successCallback: (data: { GetCurrentAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetCurrentAssignmentsByUserEmail(emailAddress: string): { GetCurrentAssignmentsByUserEmailResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetCurrentAssignmentsByUserEmailPromise(emailAddress: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetCurrentAssignmentCountByAccountId(emailAddress: string, successCallback: (data: { GetCurrentAssignmentCountByAccountIdResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentAssignmentCountByAccountIdResult: number }>;

	GetCurrentAssignmentCountByAccountId(emailAddress: string): { GetCurrentAssignmentCountByAccountIdResult: number };

	GetCurrentAssignmentCountByAccountIdPromise(emailAddress: string): Promise<number>;

	GetAssignmentActions(assignmentId: string, successCallback: (data: { GetAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetAssignmentActions(assignmentId: string): { GetAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetAssignmentActionsPromise(assignmentId: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetPrimaryAssignmentActions(assignmentId: string, successCallback: (data: { GetPrimaryAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPrimaryAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] }>;

	GetPrimaryAssignmentActions(assignmentId: string): { GetPrimaryAssignmentActionsResult: $D.Framework.ServiceLayer.Actions.BaseActionType[] };

	GetPrimaryAssignmentActionsPromise(assignmentId: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType[]>;

	GetAssignmentAction(assignmentId: string, actionName: string, successCallback: (data: { GetAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType }>;

	GetAssignmentAction(assignmentId: string, actionName: string): { GetAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType };

	GetAssignmentActionPromise(assignmentId: string, actionName: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType>;

	GetViewOnlyAssignmentAction(assignmentId: string, successCallback: (data: { GetViewOnlyAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType }) => any, errorCallback?: () => any): JQueryPromise<{ GetViewOnlyAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType }>;

	GetViewOnlyAssignmentAction(assignmentId: string): { GetViewOnlyAssignmentActionResult: $D.Framework.ServiceLayer.Actions.BaseActionType };

	GetViewOnlyAssignmentActionPromise(assignmentId: string): Promise<$D.Framework.ServiceLayer.Actions.BaseActionType>;

	GetDoAssignmentUrl(assignmentId: string, successCallback: (data: { GetDoAssignmentUrlResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDoAssignmentUrlResult: string }>;

	GetDoAssignmentUrl(assignmentId: string): { GetDoAssignmentUrlResult: string };

	GetDoAssignmentUrlPromise(assignmentId: string): Promise<string>;

	GetDoAssignmentUrlByActionName(assignmentId: string, actionName: string, successCallback: (data: { GetDoAssignmentUrlByActionNameResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetDoAssignmentUrlByActionNameResult: string }>;

	GetDoAssignmentUrlByActionName(assignmentId: string, actionName: string): { GetDoAssignmentUrlByActionNameResult: string };

	GetDoAssignmentUrlByActionNamePromise(assignmentId: string, actionName: string): Promise<string>;

	GetAllPriorities(successCallback: (data: { GetAllPrioritiesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllPrioritiesResult: string[] }>;

	GetAllPriorities(): { GetAllPrioritiesResult: string[] };

	GetAllPrioritiesPromise(): Promise<string[]>;

	DeletePriority(priorityName: string, successCallback: (data: { DeletePriorityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeletePriorityResult: void }>;

	DeletePriority(priorityName: string): { DeletePriorityResult: void };

	DeletePriorityPromise(priorityName: string): Promise<void>;

	AddPriority(priorityName: string, order: number, successCallback: (data: { AddPriorityResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddPriorityResult: void }>;

	AddPriority(priorityName: string, order: number): { AddPriorityResult: void };

	AddPriorityPromise(priorityName: string, order: number): Promise<void>;

	ChangePriorityOrder(priorityName: string, order: number, successCallback: (data: { ChangePriorityOrderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangePriorityOrderResult: void }>;

	ChangePriorityOrder(priorityName: string, order: number): { ChangePriorityOrderResult: void };

	ChangePriorityOrderPromise(priorityName: string, order: number): Promise<void>;

	ReplaceAllCurrentAssignmentsForUser(oldUserAccountId: string, newUserAccountId: string, successCallback: (data: { ReplaceAllCurrentAssignmentsForUserResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceAllCurrentAssignmentsForUserResult: number }>;

	ReplaceAllCurrentAssignmentsForUser(oldUserAccountId: string, newUserAccountId: string): { ReplaceAllCurrentAssignmentsForUserResult: number };

	ReplaceAllCurrentAssignmentsForUserPromise(oldUserAccountId: string, newUserAccountId: string): Promise<number>;

	ReplaceAllCurrentAssignmentsForGroup(oldGroupId: string, newGroupId: string, successCallback: (data: { ReplaceAllCurrentAssignmentsForGroupResult: number }) => any, errorCallback?: () => any): JQueryPromise<{ ReplaceAllCurrentAssignmentsForGroupResult: number }>;

	ReplaceAllCurrentAssignmentsForGroup(oldGroupId: string, newGroupId: string): { ReplaceAllCurrentAssignmentsForGroupResult: number };

	ReplaceAllCurrentAssignmentsForGroupPromise(oldGroupId: string, newGroupId: string): Promise<number>;

	ProcessFormAssignmentResponse(assignmentId: string, response: string, comment: string, files: $D.Framework.Data.DataTypes.FileData[], successCallback: (data: { ProcessFormAssignmentResponseResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ProcessFormAssignmentResponseResult: void }>;

	ProcessFormAssignmentResponse(assignmentId: string, response: string, comment: string, files: $D.Framework.Data.DataTypes.FileData[]): { ProcessFormAssignmentResponseResult: void };

	ProcessFormAssignmentResponsePromise(assignmentId: string, response: string, comment: string, files: $D.Framework.Data.DataTypes.FileData[]): Promise<void>;

	SetAssignmentRoleForGroups(folderId: string, assignmentRoleNameOrId: string, groupIdsOrNames: string[], replaceExisting: boolean, successCallback: (data: { SetAssignmentRoleForGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentRoleForGroupsResult: void }>;

	SetAssignmentRoleForGroups(folderId: string, assignmentRoleNameOrId: string, groupIdsOrNames: string[], replaceExisting: boolean): { SetAssignmentRoleForGroupsResult: void };

	SetAssignmentRoleForGroupsPromise(folderId: string, assignmentRoleNameOrId: string, groupIdsOrNames: string[], replaceExisting: boolean): Promise<void>;

	SetAssignmentRoleForUsers(folderId: string, assignmentRoleNameOrId: string, useridsOrEmails: string[], replaceExisting: boolean, successCallback: (data: { SetAssignmentRoleForUsersResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentRoleForUsersResult: void }>;

	SetAssignmentRoleForUsers(folderId: string, assignmentRoleNameOrId: string, useridsOrEmails: string[], replaceExisting: boolean): { SetAssignmentRoleForUsersResult: void };

	SetAssignmentRoleForUsersPromise(folderId: string, assignmentRoleNameOrId: string, useridsOrEmails: string[], replaceExisting: boolean): Promise<void>;

	ClearAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string, successCallback: (data: { ClearAssignmentRoleForFolderResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ClearAssignmentRoleForFolderResult: void }>;

	ClearAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string): { ClearAssignmentRoleForFolderResult: void };

	ClearAssignmentRoleForFolderPromise(folderId: string, assignmentRoleNameOrId: string): Promise<void>;

	GetGroupsForAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string, successCallback: (data: { GetGroupsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetGroupsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] }>;

	GetGroupsForAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string): { GetGroupsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Group[] };

	GetGroupsForAssignmentRoleForFolderPromise(folderId: string, assignmentRoleNameOrId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Group[]>;

	GetAccountsForAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string, successCallback: (data: { GetAccountsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAccountsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] }>;

	GetAccountsForAssignmentRoleForFolder(folderId: string, assignmentRoleNameOrId: string): { GetAccountsForAssignmentRoleForFolderResult: $D.Framework.ServiceLayer.Services.Accounts.Account[] };

	GetAccountsForAssignmentRoleForFolderPromise(folderId: string, assignmentRoleNameOrId: string): Promise<$D.Framework.ServiceLayer.Services.Accounts.Account[]>;

	IsFolderAssigned(folderID: string, successCallback: (data: { IsFolderAssignedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsFolderAssignedResult: boolean }>;

	IsFolderAssigned(folderID: string): { IsFolderAssignedResult: boolean };

	IsFolderAssignedPromise(folderID: string): Promise<boolean>;

	SetAssignmentForAccounts(assignmentID: string, accountIds: string[], successCallback: (data: { SetAssignmentForAccountsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForAccountsResult: void }>;

	SetAssignmentForAccounts(assignmentID: string, accountIds: string[]): { SetAssignmentForAccountsResult: void };

	SetAssignmentForAccountsPromise(assignmentID: string, accountIds: string[]): Promise<void>;

	SetAssignmentForAccountsWithoutNotification(assignmentID: string, accountIds: string[], successCallback: (data: { SetAssignmentForAccountsWithoutNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForAccountsWithoutNotificationResult: void }>;

	SetAssignmentForAccountsWithoutNotification(assignmentID: string, accountIds: string[]): { SetAssignmentForAccountsWithoutNotificationResult: void };

	SetAssignmentForAccountsWithoutNotificationPromise(assignmentID: string, accountIds: string[]): Promise<void>;

	SetAssignmentForGroups(assignmentID: string, groupsIds: string[], successCallback: (data: { SetAssignmentForGroupsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForGroupsResult: void }>;

	SetAssignmentForGroups(assignmentID: string, groupsIds: string[]): { SetAssignmentForGroupsResult: void };

	SetAssignmentForGroupsPromise(assignmentID: string, groupsIds: string[]): Promise<void>;

	SetAssignmentForGroupsWithoutNotification(assignmentID: string, groupsIds: string[], successCallback: (data: { SetAssignmentForGroupsWithoutNotificationResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForGroupsWithoutNotificationResult: void }>;

	SetAssignmentForGroupsWithoutNotification(assignmentID: string, groupsIds: string[]): { SetAssignmentForGroupsWithoutNotificationResult: void };

	SetAssignmentForGroupsWithoutNotificationPromise(assignmentID: string, groupsIds: string[]): Promise<void>;

	SetAssignmentForFolderRights(assignmentID: string, rights: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[], successCallback: (data: { SetAssignmentForFolderRightsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForFolderRightsResult: void }>;

	SetAssignmentForFolderRights(assignmentID: string, rights: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[]): { SetAssignmentForFolderRightsResult: void };

	SetAssignmentForFolderRightsPromise(assignmentID: string, rights: $D.Framework.ServiceLayer.Services.Assignments.AssignmentFolderRights[]): Promise<void>;

	SetAssignmentForRole(assignmentID: string, roleTypeID: string, successCallback: (data: { SetAssignmentForRoleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForRoleResult: void }>;

	SetAssignmentForRole(assignmentID: string, roleTypeID: string): { SetAssignmentForRoleResult: void };

	SetAssignmentForRolePromise(assignmentID: string, roleTypeID: string): Promise<void>;

	SetAssignmentForRoles(assignmentId: string, roles: string[], successCallback: (data: { SetAssignmentForRolesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentForRolesResult: void }>;

	SetAssignmentForRoles(assignmentId: string, roles: string[]): { SetAssignmentForRolesResult: void };

	SetAssignmentForRolesPromise(assignmentId: string, roles: string[]): Promise<void>;

	SetAssignmentRoleForAssignment(taskFolderId: string, assignmentRoleTypeNameOrId: string, successCallback: (data: { SetAssignmentRoleForAssignmentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SetAssignmentRoleForAssignmentResult: void }>;

	SetAssignmentRoleForAssignment(taskFolderId: string, assignmentRoleTypeNameOrId: string): { SetAssignmentRoleForAssignmentResult: void };

	SetAssignmentRoleForAssignmentPromise(taskFolderId: string, assignmentRoleTypeNameOrId: string): Promise<void>;

	GetAssignmentRoleInFolder(folderId: string, roleTypeId: string, successCallback: (data: { GetAssignmentRoleInFolderResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentRoleInFolderResult: any }>;

	GetAssignmentRoleInFolder(folderId: string, roleTypeId: string): { GetAssignmentRoleInFolderResult: any };

	GetAssignmentRoleInFolderPromise(folderId: string, roleTypeId: string): Promise<any>;

	GetAssignmentRoleTypeByNameOrId(assignmentRoleTypeNameOrId: string, successCallback: (data: { GetAssignmentRoleTypeByNameOrIdResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType }) => any, errorCallback?: () => any): JQueryPromise<{ GetAssignmentRoleTypeByNameOrIdResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType }>;

	GetAssignmentRoleTypeByNameOrId(assignmentRoleTypeNameOrId: string): { GetAssignmentRoleTypeByNameOrIdResult: $D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType };

	GetAssignmentRoleTypeByNameOrIdPromise(assignmentRoleTypeNameOrId: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssignmentRoleType>;

	ChangeAssignment(assignmentId: string, changeDto: $D.Framework.ServiceLayer.Services.Assignments.ChangeAssignmentDto, successCallback: (data: { ChangeAssignmentResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ChangeAssignmentResult: void }>;

	ChangeAssignment(assignmentId: string, changeDto: $D.Framework.ServiceLayer.Services.Assignments.ChangeAssignmentDto): { ChangeAssignmentResult: void };

	ChangeAssignmentPromise(assignmentId: string, changeDto: $D.Framework.ServiceLayer.Services.Assignments.ChangeAssignmentDto): Promise<void>;

	SearchForAssignment(assignmentId: string, textToSearch: string, skipCount: number, desiredResultCount: number, successCallback: (data: { SearchForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }>;

	SearchForAssignment(assignmentId: string, textToSearch: string, skipCount: number, desiredResultCount: number): { SearchForAssignmentResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] };

	SearchForAssignmentPromise(assignmentId: string, textToSearch: string, skipCount: number, desiredResultCount: number): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[]>;

	SearchAssignees(assigneeType: $D.Framework.ServiceLayer.Services.Assignments.AssigneeType, textToSearch: string, skipCount: number, desiredResultCount: number, successCallback: (data: { SearchAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }>;

	SearchAssignees(assigneeType: $D.Framework.ServiceLayer.Services.Assignments.AssigneeType, textToSearch: string, skipCount: number, desiredResultCount: number): { SearchAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] };

	SearchAssigneesPromise(assigneeType: $D.Framework.ServiceLayer.Services.Assignments.AssigneeType, textToSearch: string, skipCount: number, desiredResultCount: number): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[]>;

	GetAllAssignees(assignmentId: string, successCallback: (data: { GetAllAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] }>;

	GetAllAssignees(assignmentId: string): { GetAllAssigneesResult: $D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[] };

	GetAllAssigneesPromise(assignmentId: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.AssigneeDto[]>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.Assignments.Assignment, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.Assignments.Assignment): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.Assignments.Assignment): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Assignments.Assignment[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.Assignments.Assignment[]): { SaveListResult: $D.Framework.ServiceLayer.Services.Assignments.Assignment[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.Assignments.Assignment[]): Promise<$D.Framework.ServiceLayer.Services.Assignments.Assignment[]>;
}

interface ServicesStatic {
	AssignmentService(): AssignmentServiceStatic;
}
