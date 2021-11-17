/// <reference path="./datatypes._base.d.ts" />

interface SchedulingServiceStatic {

	ComputeSchedule(folderId: string, fromDate: Date, toDate: Date, successCallback: (data: { ComputeScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ ComputeScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }>;

	ComputeSchedule(folderId: string, fromDate: Date, toDate: Date): { ComputeScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] };

	ComputeSchedulePromise(folderId: string, fromDate: Date, toDate: Date): Promise<$D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[]>;

	IntersectSchedules(firstFolderId: string, secondFolderId: string, fromDate: Date, toDate: Date, successCallback: (data: { IntersectSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ IntersectSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }>;

	IntersectSchedules(firstFolderId: string, secondFolderId: string, fromDate: Date, toDate: Date): { IntersectSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] };

	IntersectSchedulesPromise(firstFolderId: string, secondFolderId: string, fromDate: Date, toDate: Date): Promise<$D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[]>;

	UnionSchedules(folderIds: string[], fromDate: Date, toDate: Date, successCallback: (data: { UnionSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ UnionSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }>;

	UnionSchedules(folderIds: string[], fromDate: Date, toDate: Date): { UnionSchedulesResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] };

	UnionSchedulesPromise(folderIds: string[], fromDate: Date, toDate: Date): Promise<$D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[]>;

	FindNextStartTime(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean, successCallback: (data: { FindNextStartTimeResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ FindNextStartTimeResult: any }>;

	FindNextStartTime(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean): { FindNextStartTimeResult: any };

	FindNextStartTimePromise(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean): Promise<any>;

	FindNextStartTimeByTimespan(folderId: string, fromDate: Date, maxDays: number, targetTimespan: string, successCallback: (data: { FindNextStartTimeByTimespanResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ FindNextStartTimeByTimespanResult: any }>;

	FindNextStartTimeByTimespan(folderId: string, fromDate: Date, maxDays: number, targetTimespan: string): { FindNextStartTimeByTimespanResult: any };

	FindNextStartTimeByTimespanPromise(folderId: string, fromDate: Date, maxDays: number, targetTimespan: string): Promise<any>;

	FindNextDayInSchedule(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean, successCallback: (data: { FindNextDayInScheduleResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ FindNextDayInScheduleResult: any }>;

	FindNextDayInSchedule(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean): { FindNextDayInScheduleResult: any };

	FindNextDayInSchedulePromise(folderId: string, fromDate: Date, maxDays: number, excludeCurrentTimeSlot: boolean): Promise<any>;

	FindAllDaysInSchedule(folderId: string, fromDate: Date, maxDays: number, successCallback: (data: { FindAllDaysInScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ FindAllDaysInScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] }>;

	FindAllDaysInSchedule(folderId: string, fromDate: Date, maxDays: number): { FindAllDaysInScheduleResult: $D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[] };

	FindAllDaysInSchedulePromise(folderId: string, fromDate: Date, maxDays: number): Promise<$D.Framework.ServiceLayer.Services.Scheduling.CalculationResult[]>;

	IsInSchedule(folderId: string, date: Date, successCallback: (data: { IsInScheduleResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsInScheduleResult: boolean }>;

	IsInSchedule(folderId: string, date: Date): { IsInScheduleResult: boolean };

	IsInSchedulePromise(folderId: string, date: Date): Promise<boolean>;

	ReturnNextValidSlotInSchedule(folderId: string, proposedDate: Date, successCallback: (data: { ReturnNextValidSlotInScheduleResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ ReturnNextValidSlotInScheduleResult: any }>;

	ReturnNextValidSlotInSchedule(folderId: string, proposedDate: Date): { ReturnNextValidSlotInScheduleResult: any };

	ReturnNextValidSlotInSchedulePromise(folderId: string, proposedDate: Date): Promise<any>;
}

interface ServicesStatic {
	SchedulingService(): SchedulingServiceStatic;
}
