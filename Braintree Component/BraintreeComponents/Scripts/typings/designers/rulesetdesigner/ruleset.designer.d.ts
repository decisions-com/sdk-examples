/**
 * Author: vlad@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="../../typings/core/generated/RuleSetEditService.d.ts" />
/// <reference path="../../typings/pubsub/pubsub.d.ts" />
/// <reference path="ruleset.rulesetdto.d.ts" />
/// <reference path="ruleset.list.d.ts" />
/// <reference path="ruleset.header.d.ts" />
/// <reference path="ruleset.infopanel.d.ts" />
/// <reference path="ruleset.samplehandler.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
/// <reference path="../common/inputs.prompt.d.ts" />
/// <reference path="../unittests/ut.sampletree.d.ts" />
/// <reference path="../unittests/ut.sidebar.d.ts" />
/// <reference path="../sidebar.d.ts" />
/// <reference path="../sidebar.host.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="../debugger/debugger.d.ts" />
declare namespace $DP.Designers.RuleSet {
    interface IRuleSetOptions {
        componentId: string;
        host: JQuery;
        extensionFolderId?: string;
    }
    class RuleSetDesigner {
        private options;
        private $view;
        private readonly $sampleSetHolder;
        private ruleSetDto;
        private header;
        private ruleSetList;
        private leftbar;
        private infoPanel;
        private samplePanel;
        private sampleHandler;
        private ruleSetEvaluate;
        private instanceId;
        private folderDataEditingContextId;
        private get extensionFolderId();
        private lastFolderId;
        private mappingContext;
        getMappingContext(): $DP.Common.MappingContext;
        constructor(options: IRuleSetOptions);
        private renderWarningMessage;
        private renderDesigner;
        private getUnitTestsApiConfig;
        private getApiConfig;
        private onInstanceChange;
        private initializeSampleHandler;
        private stopRuleSetEvaluate;
        private initializeLeftBar;
        private renderHeader;
        private renderRuleSetList;
        private onResize;
        protected subscribe(): void;
        protected unsubscribe(): void;
        private showInputDataDialog;
        private renderPrompt;
        private handleEvent;
        private handleFolderAddedRemoveEvent;
        private handleFolderChangedEvent;
        private updateSampleHandler;
        private handlePropertyChangedEvent;
    }
}
