/**
 * Author:sachin.jadhav@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Navigation {
    class Helper {
        static navigationParameters: Object;
        static onNavigationParametersChanged(message: any, data: $D.Framework.ServiceLayer.Services.Folder.NavigationParametersChanged): void;
        static UpdateNavigationParameters(params: Object): Promise<void>;
        static updateUrlFromNavigationParams(params: Object): boolean;
        static clearNavigationParameters(): void;
        static GetUrlFromNavigationalParametrs(params: Object): string;
        static IsNavigationParameterSame(params: Object): boolean;
        static updateQueryString(key: string, value: any, url: string): string;
        static removeParam(key: any, sourceURL: any): any;
        static paramsToDataPairs(): DataPair[];
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
