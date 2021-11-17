/// <reference path="./datatypes._base.d.ts" />

interface FrameworkUnitTestServiceStatic {

	AddToken(contextId: string, name: string, value: string, successCallback: (data: { AddTokenResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ AddTokenResult: void }>;

	AddToken(contextId: string, name: string, value: string): { AddTokenResult: void };

	AddTokenPromise(contextId: string, name: string, value: string): Promise<void>;

	GetCurrentContextId(successCallback: (data: { GetCurrentContextIdResult: string }) => any, errorCallback?: () => any): JQueryPromise<{ GetCurrentContextIdResult: string }>;

	GetCurrentContextId(): { GetCurrentContextIdResult: string };

	GetCurrentContextIdPromise(): Promise<string>;

	GetUnitTestCategories(successCallback: (data: { GetUnitTestCategoriesResult: string[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetUnitTestCategoriesResult: string[] }>;

	GetUnitTestCategories(): { GetUnitTestCategoriesResult: string[] };

	GetUnitTestCategoriesPromise(): Promise<string[]>;

	RunAllTestsForCategories(onlyRunNonDataChange: boolean, categories: string[], successCallback: (data: { RunAllTestsForCategoriesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunAllTestsForCategoriesResult: void }>;

	RunAllTestsForCategories(onlyRunNonDataChange: boolean, categories: string[]): { RunAllTestsForCategoriesResult: void };

	RunAllTestsForCategoriesPromise(onlyRunNonDataChange: boolean, categories: string[]): Promise<void>;

	RunTestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string, categories: string[], successCallback: (data: { RunTestsWithStatusDBForCategoriesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunTestsWithStatusDBForCategoriesResult: void }>;

	RunTestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string, categories: string[]): { RunTestsWithStatusDBForCategoriesResult: void };

	RunTestsWithStatusDBForCategoriesPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string, categories: string[]): Promise<void>;

	RunBackEndTestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[], successCallback: (data: { RunBackEndTestsWithStatusDBForCategoriesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunBackEndTestsWithStatusDBForCategoriesResult: void }>;

	RunBackEndTestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[]): { RunBackEndTestsWithStatusDBForCategoriesResult: void };

	RunBackEndTestsWithStatusDBForCategoriesPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[]): Promise<void>;

	RunUITestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[], successCallback: (data: { RunUITestsWithStatusDBForCategoriesResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunUITestsWithStatusDBForCategoriesResult: void }>;

	RunUITestsWithStatusDBForCategories(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[]): { RunUITestsWithStatusDBForCategoriesResult: void };

	RunUITestsWithStatusDBForCategoriesPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, categories: string[]): Promise<void>;

	RunAllTests(onlyRunNonDataChange: boolean, successCallback: (data: { RunAllTestsResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunAllTestsResult: void }>;

	RunAllTests(onlyRunNonDataChange: boolean): { RunAllTestsResult: void };

	RunAllTestsPromise(onlyRunNonDataChange: boolean): Promise<void>;

	RunTestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string, successCallback: (data: { RunTestsWithStatusDBResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunTestsWithStatusDBResult: void }>;

	RunTestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string): { RunTestsWithStatusDBResult: void };

	RunTestsWithStatusDBPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, runBackEndTests: boolean, runFrontEndTests: boolean, testEnvironmentName: string): Promise<void>;

	RunBackEndTestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, successCallback: (data: { RunBackEndTestsWithStatusDBResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunBackEndTestsWithStatusDBResult: void }>;

	RunBackEndTestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string): { RunBackEndTestsWithStatusDBResult: void };

	RunBackEndTestsWithStatusDBPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string): Promise<void>;

	RunUITestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string, successCallback: (data: { RunUITestsWithStatusDBResult: void }) => any, errorCallback?: () => any): JQueryPromise<{ RunUITestsWithStatusDBResult: void }>;

	RunUITestsWithStatusDB(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string): { RunUITestsWithStatusDBResult: void };

	RunUITestsWithStatusDBPromise(onlyRunNonDataChange: boolean, reportingDBConnection: string, testRunId: number, testEnvironmentName: string): Promise<void>;

	AreUnitTestsRunning(successCallback: (data: { AreUnitTestsRunningResult: $D.Framework.Utilities.FrameworkUnitTests.RunningTestsInfo }) => any, errorCallback?: () => any): JQueryPromise<{ AreUnitTestsRunningResult: $D.Framework.Utilities.FrameworkUnitTests.RunningTestsInfo }>;

	AreUnitTestsRunning(): { AreUnitTestsRunningResult: $D.Framework.Utilities.FrameworkUnitTests.RunningTestsInfo };

	AreUnitTestsRunningPromise(): Promise<$D.Framework.Utilities.FrameworkUnitTests.RunningTestsInfo>;

	GetAllTestResults(successCallback: (data: { GetAllTestResultsResult: $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestResult[] }) => any, errorCallback?: () => any): JQueryPromise<{ GetAllTestResultsResult: $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestResult[] }>;

	GetAllTestResults(): { GetAllTestResultsResult: $D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestResult[] };

	GetAllTestResultsPromise(): Promise<$D.Framework.Utilities.FrameworkUnitTests.FrameworkUnitTestResult[]>;
}

interface ServicesStatic {
	FrameworkUnitTestService(): FrameworkUnitTestServiceStatic;
}
