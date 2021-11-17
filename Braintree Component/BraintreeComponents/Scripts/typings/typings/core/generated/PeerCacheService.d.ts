/// <reference path="./datatypes._base.d.ts" />

interface PeerCacheServiceStatic {

	TestEncryptionKey(value: number[], key: string, successCallback: (data: { TestEncryptionKeyResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ TestEncryptionKeyResult: boolean }>;

	TestEncryptionKey(value: number[], key: string): { TestEncryptionKeyResult: boolean };

	TestEncryptionKeyPromise(value: number[], key: string): Promise<boolean>;

	GetObjectContents(source: string, cacheName: string, id: string, successCallback: (data: { GetObjectContentsResult: number[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetObjectContentsResult: number[] }>;

	GetObjectContents(source: string, cacheName: string, id: string): { GetObjectContentsResult: number[] };

	GetObjectContentsPromise(source: string, cacheName: string, id: string): Promise<number[]>;

	HasObjectInCache(source: string, cacheName: string, id: string, successCallback: (data: { HasObjectInCacheResult: boolean }) => any, errorCallback?: () => any): JQueryPromise<{ HasObjectInCacheResult: boolean }>;

	HasObjectInCache(source: string, cacheName: string, id: string): { HasObjectInCacheResult: boolean };

	HasObjectInCachePromise(source: string, cacheName: string, id: string): Promise<boolean>;

	InstallConfigurations(source: string, data: $D.Framework.Data.DataTypes.FileData, doCheckComparisonCheck: boolean, moduleNames: string[], versionNumber: number, successCallback: (data: { InstallConfigurationsResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ InstallConfigurationsResult: string }>;

	InstallConfigurations(source: string, data: $D.Framework.Data.DataTypes.FileData, doCheckComparisonCheck: boolean, moduleNames: string[], versionNumber: number): { InstallConfigurationsResult: string };

	InstallConfigurationsPromise(source: string, data: $D.Framework.Data.DataTypes.FileData, doCheckComparisonCheck: boolean, moduleNames: string[], versionNumber: number): Promise<string>;

	RemoveCacheItem(ipAddress: string, dictionaryName: string, key: string, successCallback: (data: { RemoveCacheItemResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RemoveCacheItemResult: void }>;

	RemoveCacheItem(ipAddress: string, dictionaryName: string, key: string): { RemoveCacheItemResult: void };

	RemoveCacheItemPromise(ipAddress: string, dictionaryName: string, key: string): Promise<void>;
}

interface ServicesStatic {
	PeerCacheService(): PeerCacheServiceStatic;
}
