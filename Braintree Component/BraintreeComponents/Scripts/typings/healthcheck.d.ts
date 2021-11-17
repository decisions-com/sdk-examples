/// <reference path="typings/core/generated/supportservice.d.ts" />
declare namespace $DP.Common {
    interface IFileSystemData {
        Name: string;
        FreeSpaceMB: number;
        PercFree: number;
    }
    interface IDBDetails {
        RowCount: number;
        SizeInMB: number;
        TableName: string;
    }
    interface IMemoryDetails {
        AvailableMemory: number;
        ProcessDetails: Process[];
    }
    interface Process {
        Name: string;
        Memory: number;
    }
    interface HealthCheckOptions {
        root: JQuery;
        machineName: string;
        serviceHostStatus: string;
        applicationIdentity: any;
        applicationIdentityFullName: string;
        applicationIdentityCodeBase: string;
        applicationTrust: string;
        friendlyName: string;
        is64BitOperatingSystem: boolean;
        osVersion: string;
        dotNetVersion: string;
        authenticationMode: string;
        staticContentTestResult: JQuery;
        dynamicContentTestResult: string;
        healthCheckInSecure: boolean;
        userIsAuthenticated: boolean;
    }
    export class HealthCheck {
        private options;
        private view;
        constructor(options: HealthCheckOptions);
        render(): JQuery;
        private createBackendContentStatus;
        private createSHMStatus;
        private createDBDetails;
        private createFileSytemDetails;
        private createWebServerDetails;
        private createApplicationIdentityInfo;
        createMVCContentTypesTests(): string;
        private createSimulateOutageView;
        initialize(): void;
        cookiesTest(): void;
        attachEvents(): void;
        loadMemoryDetails(): void;
        loadDbDetails(): void;
        loadFSDetails(): void;
        appendMemoryDetails(data: IMemoryDetails): JQuery;
        appendDBDetails(data: IDBDetails[]): JQuery;
        appendFsDetails(data: IFileSystemData[]): JQuery;
    }
    export {};
}
