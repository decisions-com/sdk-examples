/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="profiler.d.ts" />
/// <reference path="flowdesigner/flowdesigner.d.ts" />
/// <reference path="formdesigner/formdesigner.d.ts" />
/// <reference path="matrixrule/matrixruledesigner.d.ts" />
/// <reference path="../common/scriptloader.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../Helpers/Decisions.ControlDispose.d.ts" />
/// <reference path="dbrowser.d.ts" />
/// <reference path="flowdesigner/bm.surface.d.ts" />
/// <reference path="flowdesigner/historycomparer.d.ts" />
/// <reference path="../lockingObject/lockingObject.d.ts" />
interface Window {
    __$DP_DesignerScripts: string[];
}
declare module $DP.Designers {
    class DesignerHeaderButtonEvents {
        static OnSaveLickClick: string;
        static OnCloseAndSaveLinkClick: string;
        static OnDebugLinkClick: string;
        static OnViewIntegrationLinkClick: string;
        static OnViewApiLinkClick: string;
        static OnDebugClick: string;
        static OnPreviewClick: string;
        static OnRunClick: string;
    }
    class DesignerEvents {
        static Resized: string;
    }
    interface ShowDesignerDialogOptions {
        designerName: string;
        instanceId: string;
        url?: string;
        data?: any;
        scriptsUrl?: string;
        designerElementName?: string;
        designerElementId?: string;
        leftMargin: number;
        topMargin: number;
        keepTitleBar?: boolean;
        keepPortalUrl?: boolean;
        showSpinner?: boolean;
        title?: string;
    }
    interface ShowBusinessModelOptions {
        folderid: string;
        businessflowid: string;
        inputflowid: string;
        instanceid: string;
        host?: JQuery;
        isindesignmode?: boolean;
        componentid?: string;
        additionalData?: DataPair[];
    }
    interface ShowFormBusinessModelOptions extends ShowBusinessModelOptions {
        formSessionInfoId: string;
        componentId: string;
    }
    function setPortalLocation(location: string): void;
    function buildPortalUrl(elementName: string, elementValue: string): string;
    function removeParamIfPresent(...names: string[]): void;
    function showTextMergeDesigner(textMergeId: string, openInLayer: boolean): void;
    function loadScriptsBundle(scriptsUrl: string): Promise<void>;
    interface ShowDesignerOptions {
        designerType: string;
        entityId: string;
        openInLayer?: boolean;
        sampleId?: string;
        flowSessionId?: string;
        flowStepId?: string;
        onClosed?: () => void;
        onOpened?: () => void;
    }
    function showDesigner(options: ShowDesignerOptions): void;
    function showFlowDesigner(flowId: string, openInLayer: boolean, sampleId?: string, onClosed?: () => void): void;
    function showFormDesigner(formId: string, openInLayer: boolean, folderId?: string, isPage?: boolean, flowSessionId?: string, flowStepId?: string, onClosed?: () => void): void;
    function showReportDesigner(reportId: string, openInLayer: boolean, onClosed?: () => void): void;
    function showRuleDesigner(ruleId: string, openInLayer: boolean, sampleId?: string, options?: {
        onClosed?: () => void;
        onOpened?: (host?: JQuery) => void;
    }, openTableAsStatementRule?: boolean): void;
    function showDependencyBrowser(entityId: string, action: $D.Framework.ServiceLayer.Services.Module.BrowseDependenciesAction): Promise<void>;
    function showDebugger(entityId: string, options?: Debugger.DebuggerOptions, onClosed?: () => void): Promise<void>;
    function showBusinessModel(options: ShowBusinessModelOptions): void;
    function showFormBusinessModel(options: ShowFormBusinessModelOptions): void;
    function showMatrixRuleDesigner(matrixRuleId: string, openInLayer: boolean): void;
    function showFlowComparer(flowId: string, action: $D.Framework.ServiceLayer.Services.ConfigurationStorage.CompareFlowsHistoryAction, flowSessionId?: string | undefined): Promise<void>;
    function executeElementRegistrationAction(registrationId: string, filter: (a: BaseActionType) => boolean): Promise<void>;
    function registerDesignerHeaderClickEvent(instanceId: string): void;
}
declare namespace $DP.Designers.Debugger {
    enum DebugInputDataSource {
        Inputs = 0,
        Sample = 1,
        UnitTest = 2
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
