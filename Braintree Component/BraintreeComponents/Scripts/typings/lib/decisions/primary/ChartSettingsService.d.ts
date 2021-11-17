/// <reference path="./datatypes._base.d.ts" />

interface ChartSettingsServiceStatic {

	GetChartSettings(successCallback: (data: { GetChartSettingsResult: any }) => any, errorCallback?: () => any): JQueryPromise<{ GetChartSettingsResult: any }>;

	GetChartSettings(): { GetChartSettingsResult: any };

	GetChartSettingsPromise(): Promise<any>;
}

interface ServicesStatic {
	ChartSettingsService(): ChartSettingsServiceStatic;
}
