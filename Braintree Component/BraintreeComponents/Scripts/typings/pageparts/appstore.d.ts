/// <reference path="../typings/core/generated/appstoreservice.d.ts" />
declare namespace $DP.PageParts.AppStore {
    function onModuleDetailsClick(module: $D.Framework.ServiceLayer.Services.Module.ModuleInfo): Promise<boolean>;
    class AppStorePart {
        private options;
        private appStoreListenToken;
        private myAppsListenToken;
        get appsHolder(): JQuery;
        constructor(options: {
            host: JQuery;
        });
        private render;
        private loadAppStore;
    }
}
