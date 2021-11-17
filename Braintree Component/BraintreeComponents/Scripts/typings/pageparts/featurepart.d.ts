/// <reference path="../typings/core/generated/moduleinstallationservice.d.ts" />
declare namespace $DP.PageParts.Features {
    class FeaturesPart {
        private options;
        private featureListenToken;
        get appsHolder(): JQuery;
        constructor(options: {
            host: JQuery;
        });
        private loadFeaturesList;
    }
}
