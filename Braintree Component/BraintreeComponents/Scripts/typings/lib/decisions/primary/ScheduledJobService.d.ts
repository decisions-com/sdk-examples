/// <reference path="./datatypes._base.d.ts" />

interface ScheduledJobServiceStatic {

	GetPendingJobs(successCallback: (data: { GetPendingJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetPendingJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetPendingJobs(): { GetPendingJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetPendingJobsPromise(): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	AddJobSchedule(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { AddJobScheduleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddJobScheduleResult: void }>;

	AddJobSchedule(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { AddJobScheduleResult: void };

	AddJobSchedulePromise(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	RemoveJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { RemoveJobResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveJobResult: void }>;

	RemoveJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { RemoveJobResult: void };

	RemoveJobPromise(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	UpdateJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { UpdateJobResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateJobResult: void }>;

	UpdateJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { UpdateJobResult: void };

	UpdateJobPromise(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	GetJobs(successCallback: (data: { GetJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetJobs(): { GetJobsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetJobsPromise(): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	GetJobsByScheduledItemShortTypeName(shortTypeName: string, successCallback: (data: { GetJobsByScheduledItemShortTypeNameResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetJobsByScheduledItemShortTypeNameResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetJobsByScheduledItemShortTypeName(shortTypeName: string): { GetJobsByScheduledItemShortTypeNameResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetJobsByScheduledItemShortTypeNamePromise(shortTypeName: string): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	DisableJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { DisableJobResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DisableJobResult: void }>;

	DisableJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { DisableJobResult: void };

	DisableJobPromise(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	EnableJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { EnableJobResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ EnableJobResult: void }>;

	EnableJob(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { EnableJobResult: void };

	EnableJobPromise(jobSchedule: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	RunJobNow(jobEntityId: string, successCallback: (data: { RunJobNowResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunJobNowResult: void }>;

	RunJobNow(jobEntityId: string): { RunJobNowResult: void };

	RunJobNowPromise(jobEntityId: string): Promise<void>;

	GetScheduleJobContextId(shortTypeName: string, successCallback: (data: { GetScheduleJobContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetScheduleJobContextIdResult: string }>;

	GetScheduleJobContextId(shortTypeName: string): { GetScheduleJobContextIdResult: string };

	GetScheduleJobContextIdPromise(shortTypeName: string): Promise<string>;

	GetScheduleJobsNames(successCallback: (data: { GetScheduleJobsNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetScheduleJobsNamesResult: string[] }>;

	GetScheduleJobsNames(): { GetScheduleJobsNamesResult: string[] };

	GetScheduleJobsNamesPromise(): Promise<string[]>;

	GetEditingScheduleJobContextId(jobScheduleId: string, successCallback: (data: { GetEditingScheduleJobContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditingScheduleJobContextIdResult: string }>;

	GetEditingScheduleJobContextId(jobScheduleId: string): { GetEditingScheduleJobContextIdResult: string };

	GetEditingScheduleJobContextIdPromise(jobScheduleId: string): Promise<string>;

	GetCalendarContextId(calendarType: string, successCallback: (data: { GetCalendarContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalendarContextIdResult: string }>;

	GetCalendarContextId(calendarType: string): { GetCalendarContextIdResult: string };

	GetCalendarContextIdPromise(calendarType: string): Promise<string>;

	GetEdittingCalendarContextId(jobScheduleId: string, calendarType: string, successCallback: (data: { GetEdittingCalendarContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEdittingCalendarContextIdResult: string }>;

	GetEdittingCalendarContextId(jobScheduleId: string, calendarType: string): { GetEdittingCalendarContextIdResult: string };

	GetEdittingCalendarContextIdPromise(jobScheduleId: string, calendarType: string): Promise<string>;

	SaveScheduleJobFromContextId(jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string, successCallback: (data: { SaveScheduleJobFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveScheduleJobFromContextIdResult: void }>;

	SaveScheduleJobFromContextId(jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): { SaveScheduleJobFromContextIdResult: void };

	SaveScheduleJobFromContextIdPromise(jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): Promise<void>;

	SaveScheduleJobRespectJobEditable(jobContextId: string, jobEditable: boolean, calendarContextId: string, jobName: string, jobDescription: string, successCallback: (data: { SaveScheduleJobRespectJobEditableResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ SaveScheduleJobRespectJobEditableResult: string }>;

	SaveScheduleJobRespectJobEditable(jobContextId: string, jobEditable: boolean, calendarContextId: string, jobName: string, jobDescription: string): { SaveScheduleJobRespectJobEditableResult: string };

	SaveScheduleJobRespectJobEditablePromise(jobContextId: string, jobEditable: boolean, calendarContextId: string, jobName: string, jobDescription: string): Promise<string>;

	UpdateScheduleJobFromContextId(jobScheduleId: string, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string, successCallback: (data: { UpdateScheduleJobFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateScheduleJobFromContextIdResult: void }>;

	UpdateScheduleJobFromContextId(jobScheduleId: string, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): { UpdateScheduleJobFromContextIdResult: void };

	UpdateScheduleJobFromContextIdPromise(jobScheduleId: string, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): Promise<void>;

	UpdateScheduleJobRespectJobEditable(jobScheduleId: string, jobEditable: boolean, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string, successCallback: (data: { UpdateScheduleJobRespectJobEditableResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateScheduleJobRespectJobEditableResult: void }>;

	UpdateScheduleJobRespectJobEditable(jobScheduleId: string, jobEditable: boolean, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): { UpdateScheduleJobRespectJobEditableResult: void };

	UpdateScheduleJobRespectJobEditablePromise(jobScheduleId: string, jobEditable: boolean, jobContextId: string, calendarContextId: string, jobName: string, jobDescription: string): Promise<void>;

	GetCalendarText(jobScheduleId: string, successCallback: (data: { GetCalendarTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCalendarTextResult: string }>;

	GetCalendarText(jobScheduleId: string): { GetCalendarTextResult: string };

	GetCalendarTextPromise(jobScheduleId: string): Promise<string>;

	IsScheduleJobContextEditable(contextId: string, successCallback: (data: { IsScheduleJobContextEditableResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsScheduleJobContextEditableResult: boolean }>;

	IsScheduleJobContextEditable(contextId: string): { IsScheduleJobContextEditableResult: boolean };

	IsScheduleJobContextEditablePromise(contextId: string): Promise<boolean>;

	AddEventSchedule(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule, successCallback: (data: { AddEventScheduleResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddEventScheduleResult: void }>;

	AddEventSchedule(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule): { AddEventScheduleResult: void };

	AddEventSchedulePromise(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule): Promise<void>;

	GetScheduleEventsNames(successCallback: (data: { GetScheduleEventsNamesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetScheduleEventsNamesResult: string[] }>;

	GetScheduleEventsNames(): { GetScheduleEventsNamesResult: string[] };

	GetScheduleEventsNamesPromise(): Promise<string[]>;

	GetScheduleEventContextId(shortTypeName: string, successCallback: (data: { GetScheduleEventContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetScheduleEventContextIdResult: string }>;

	GetScheduleEventContextId(shortTypeName: string): { GetScheduleEventContextIdResult: string };

	GetScheduleEventContextIdPromise(shortTypeName: string): Promise<string>;

	GetEditingScheduleEventContextId(eventScheduleId: string, successCallback: (data: { GetEditingScheduleEventContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEditingScheduleEventContextIdResult: string }>;

	GetEditingScheduleEventContextId(eventScheduleId: string): { GetEditingScheduleEventContextIdResult: string };

	GetEditingScheduleEventContextIdPromise(eventScheduleId: string): Promise<string>;

	SaveScheduleEventFromContextId(eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean, successCallback: (data: { SaveScheduleEventFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveScheduleEventFromContextIdResult: void }>;

	SaveScheduleEventFromContextId(eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean): { SaveScheduleEventFromContextIdResult: void };

	SaveScheduleEventFromContextIdPromise(eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean): Promise<void>;

	UpdateScheduleEventFromContextId(eventScheduleId: string, eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean, successCallback: (data: { UpdateScheduleEventFromContextIdResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateScheduleEventFromContextIdResult: void }>;

	UpdateScheduleEventFromContextId(eventScheduleId: string, eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean): { UpdateScheduleEventFromContextIdResult: void };

	UpdateScheduleEventFromContextIdPromise(eventScheduleId: string, eventContextId: string, calendarContextId: string, entityName: string, description: string, requeueFailedAction: boolean, createTaskOnJobFailure: boolean): Promise<void>;

	GetEventCalendarText(eventScheduleId: string, successCallback: (data: { GetEventCalendarTextResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEventCalendarTextResult: string }>;

	GetEventCalendarText(eventScheduleId: string): { GetEventCalendarTextResult: string };

	GetEventCalendarTextPromise(eventScheduleId: string): Promise<string>;

	GetEdittingEventCalendarContextId(eventScheduleId: string, calendarType: string, successCallback: (data: { GetEdittingEventCalendarContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetEdittingEventCalendarContextIdResult: string }>;

	GetEdittingEventCalendarContextId(eventScheduleId: string, calendarType: string): { GetEdittingEventCalendarContextIdResult: string };

	GetEdittingEventCalendarContextIdPromise(eventScheduleId: string, calendarType: string): Promise<string>;

	RunEvent(eventEntityId: string, successCallback: (data: { RunEventResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunEventResult: void }>;

	RunEvent(eventEntityId: string): { RunEventResult: void };

	RunEventPromise(eventEntityId: string): Promise<void>;

	UpdateEvent(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule, successCallback: (data: { UpdateEventResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ UpdateEventResult: void }>;

	UpdateEvent(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule): { UpdateEventResult: void };

	UpdateEventPromise(eventSchedule: $D.Framework.ServiceLayer.Services.Events.EventSchedule): Promise<void>;

	GetEventScheduleById(eventScheduleId: string, successCallback: (data: { GetEventScheduleByIdResult: $D.Framework.ServiceLayer.Services.Events.EventSchedule }) => any, errorCallback?: () => any): JQueryPromise<{ GetEventScheduleByIdResult: $D.Framework.ServiceLayer.Services.Events.EventSchedule }>;

	GetEventScheduleById(eventScheduleId: string): { GetEventScheduleByIdResult: $D.Framework.ServiceLayer.Services.Events.EventSchedule };

	GetEventScheduleByIdPromise(eventScheduleId: string): Promise<$D.Framework.ServiceLayer.Services.Events.EventSchedule>;

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

	GetByFolderID(folderID: string, successCallback: (data: { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetByFolderID(folderID: string): { GetByFolderIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetByFolderIDPromise(folderID: string): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	GetByIDs(ids: string[], successCallback: (data: { GetByIDsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetByIDs(ids: string[]): { GetByIDsResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetByIDsPromise(ids: string[]): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	GetByID(id: string, successCallback: (data: { GetByIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule }) => any, errorCallback?: () => any): JQueryPromise<{ GetByIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule }>;

	GetByID(id: string): { GetByIDResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule };

	GetByIDPromise(id: string): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule>;

	GetAll(successCallback: (data: { GetAllResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	GetAll(): { GetAllResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	GetAllPromise(): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	Save(entity: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule, successCallback: (data: { SaveResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ SaveResult: void }>;

	Save(entity: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): { SaveResult: void };

	SavePromise(entity: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule): Promise<void>;

	Delete(id: string, successCallback: (data: { DeleteResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ DeleteResult: void }>;

	Delete(id: string): { DeleteResult: void };

	DeletePromise(id: string): Promise<void>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType, successCallback: (data: { SearchResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ SearchResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	Search(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): { SearchResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	SearchPromise(searchFor: string, matchType: $D.Framework.Data.ORMapper.QueryMatchType): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[], successCallback: (data: { SaveListResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }) => any, errorCallback?: () => any): JQueryPromise<{ SaveListResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] }>;

	SaveList(entities: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]): { SaveListResult: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[] };

	SaveListPromise(entities: $D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]): Promise<$D.Framework.ServiceLayer.Services.ScheduledJob.JobSchedule[]>;
}

interface ServicesStatic {
	ScheduledJobService(): ScheduledJobServiceStatic;
}
