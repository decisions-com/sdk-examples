/// <reference path="./datatypes._base.d.ts" />

interface ObjectLockServiceStatic {

	LockPlatformObjectForSpecifiedUser(userId: string, emailAddress: string, data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string, successCallback: (data: { LockPlatformObjectForSpecifiedUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LockPlatformObjectForSpecifiedUserResult: void }>;

	LockPlatformObjectForSpecifiedUser(userId: string, emailAddress: string, data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string): { LockPlatformObjectForSpecifiedUserResult: void };

	LockPlatformObjectForSpecifiedUserPromise(userId: string, emailAddress: string, data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string): Promise<void>;

	LockPlatformObject(data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string, successCallback: (data: { LockPlatformObjectResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LockPlatformObjectResult: void }>;

	LockPlatformObject(data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string): { LockPlatformObjectResult: void };

	LockPlatformObjectPromise(data: $D.Framework.ServiceLayer.Services.Folder.PlatformEntityData, lockForTime: string): Promise<void>;

	LockObject(objectId: string, lockForTime: string, successCallback: (data: { LockObjectResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LockObjectResult: void }>;

	LockObject(objectId: string, lockForTime: string): { LockObjectResult: void };

	LockObjectPromise(objectId: string, lockForTime: string): Promise<void>;

	LockObjectForSpecifiedUser(userId: string, emailAddress: string, objectId: string, lockForTime: string, successCallback: (data: { LockObjectForSpecifiedUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ LockObjectForSpecifiedUserResult: void }>;

	LockObjectForSpecifiedUser(userId: string, emailAddress: string, objectId: string, lockForTime: string): { LockObjectForSpecifiedUserResult: void };

	LockObjectForSpecifiedUserPromise(userId: string, emailAddress: string, objectId: string, lockForTime: string): Promise<void>;

	ExtendLockObjectForSpecifiedUser(userId: string, emailAddress: string, objectId: string, lockForTime: string, successCallback: (data: { ExtendLockObjectForSpecifiedUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ExtendLockObjectForSpecifiedUserResult: void }>;

	ExtendLockObjectForSpecifiedUser(userId: string, emailAddress: string, objectId: string, lockForTime: string): { ExtendLockObjectForSpecifiedUserResult: void };

	ExtendLockObjectForSpecifiedUserPromise(userId: string, emailAddress: string, objectId: string, lockForTime: string): Promise<void>;

	ReleaseLock(objectId: string, successCallback: (data: { ReleaseLockResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseLockResult: void }>;

	ReleaseLock(objectId: string): { ReleaseLockResult: void };

	ReleaseLockPromise(objectId: string): Promise<void>;

	ReleaseLockForSpecifiedUser(userId: string, emailAddress: string, objectId: string, successCallback: (data: { ReleaseLockForSpecifiedUserResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ ReleaseLockForSpecifiedUserResult: void }>;

	ReleaseLockForSpecifiedUser(userId: string, emailAddress: string, objectId: string): { ReleaseLockForSpecifiedUserResult: void };

	ReleaseLockForSpecifiedUserPromise(userId: string, emailAddress: string, objectId: string): Promise<void>;

	IsLocked(objectId: string, successCallback: (data: { IsLockedResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsLockedResult: boolean }>;

	IsLocked(objectId: string): { IsLockedResult: boolean };

	IsLockedPromise(objectId: string): Promise<boolean>;

	IsLockedForSpecifiedUser(userId: string, emailAddress: string, objectId: string, successCallback: (data: { IsLockedForSpecifiedUserResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsLockedForSpecifiedUserResult: boolean }>;

	IsLockedForSpecifiedUser(userId: string, emailAddress: string, objectId: string): { IsLockedForSpecifiedUserResult: boolean };

	IsLockedForSpecifiedUserPromise(userId: string, emailAddress: string, objectId: string): Promise<boolean>;

	IsLockedByMe(objectId: string, successCallback: (data: { IsLockedByMeResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ IsLockedByMeResult: boolean }>;

	IsLockedByMe(objectId: string): { IsLockedByMeResult: boolean };

	IsLockedByMePromise(objectId: string): Promise<boolean>;

	CanBeLockedByMe(objectId: string, successCallback: (data: { CanBeLockedByMeResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanBeLockedByMeResult: boolean }>;

	CanBeLockedByMe(objectId: string): { CanBeLockedByMeResult: boolean };

	CanBeLockedByMePromise(objectId: string): Promise<boolean>;

	CanBeLockedForSpecifiedUser(userId: string, emailAddress: string, objectId: string, successCallback: (data: { CanBeLockedForSpecifiedUserResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ CanBeLockedForSpecifiedUserResult: boolean }>;

	CanBeLockedForSpecifiedUser(userId: string, emailAddress: string, objectId: string): { CanBeLockedForSpecifiedUserResult: boolean };

	CanBeLockedForSpecifiedUserPromise(userId: string, emailAddress: string, objectId: string): Promise<boolean>;

	BreakLock(objectId: string, successCallback: (data: { BreakLockResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ BreakLockResult: void }>;

	BreakLock(objectId: string): { BreakLockResult: void };

	BreakLockPromise(objectId: string): Promise<void>;

	GetLockInfo(objectId: string, successCallback: (data: { GetLockInfoResult: $D.Framework.ServiceLayer.Services.ObjectLockService.LockDetails }) => any, errorCallback?: () => any): JQueryPromise<{ GetLockInfoResult: $D.Framework.ServiceLayer.Services.ObjectLockService.LockDetails }>;

	GetLockInfo(objectId: string): { GetLockInfoResult: $D.Framework.ServiceLayer.Services.ObjectLockService.LockDetails };

	GetLockInfoPromise(objectId: string): Promise<$D.Framework.ServiceLayer.Services.ObjectLockService.LockDetails>;

	LockedUntil(objectId: string, successCallback: (data: { LockedUntilResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ LockedUntilResult: any }>;

	LockedUntil(objectId: string): { LockedUntilResult: any };

	LockedUntilPromise(objectId: string): Promise<any>;

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
	ObjectLockService(): ObjectLockServiceStatic;
}
