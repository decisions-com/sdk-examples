/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../eventListener/clientlistener.d.ts" />
/// <reference path="../../typings/core/generated/BusinessMetricService.d.ts" />
/// <reference path="../../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/goJS/gojs.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../common/remote.contextprovider.d.ts" />
/// <reference path="../debugger/debugger.d.ts" />
/// <reference path="../sidebar.d.ts" />
/// <reference path="../sidebar.host.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="../settingscache.d.ts" />
/// <reference path="../utils.d.ts" />
/// <reference path="fd.diagram.d.ts" />
/// <reference path="fd.link.d.ts" />
/// <reference path="fd.quickadd.d.ts" />
/// <reference path="fd.step.d.ts" />
/// <reference path="fd.templates.d.ts" />
/// <reference path="fd.utils.d.ts" />
/// <reference path="fd.annotations.d.ts" />
/// <reference path="fd.toolbox.d.ts" />
/// <reference path="../../pageparts/tilepart.d.ts" />
declare namespace $DP.Designers.Flows {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    class BusinessModelSurface {
        options: ShowBusinessModelOptions;
        static create(options: ShowBusinessModelOptions): BusinessModelSurface;
        private diagram;
        protected constructor(options: ShowBusinessModelOptions);
        get flowDiagram(): Flows.FlowDiagram;
        private displayError;
        protected getBusinessModelData(): Promise<DataPair[]>;
        private setupFlow;
    }
    class FormBusinessModelSurface extends BusinessModelSurface {
        options: ShowFormBusinessModelOptions;
        constructor(options: ShowFormBusinessModelOptions);
        static create(options: ShowFormBusinessModelOptions): FormBusinessModelSurface;
        protected getBusinessModelData(): Promise<DataPair[]>;
    }
}
