/**
 * Author:huzefa.ezzi@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="typings/decisions.components/decisions.components.d.ts" />
/// <reference path="typings/core/decisions.d.ts" />
/// <reference path="typings/core/generated/FlowExecutionService.d.ts" />
declare namespace $DP.Designers.Flows.Executioner {
    import DataDescription = $D.Framework.Design.Flow.Mapping.DataDescription;
    interface IFlowRunSilverPartOptions {
        instanceId: string;
        flowId: string;
        pageContextId: string;
        updateOnReportRowSelection: boolean;
        pageName?: string;
        folderId?: string;
        componentId: string;
    }
    class FlowRunSilverPart {
        options: IFlowRunSilverPartOptions;
        protected $formWrapper: JQuery;
        protected flowInputs: DataDescription[];
        private $controlLayout;
        private flowRunningContainer;
        private oldFlowInputs;
        constructor(options: IFlowRunSilverPartOptions);
        init(): void;
        attachEvents(): void;
        private loadWhenVisible;
        private updateData;
        updateFlow(): boolean;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
