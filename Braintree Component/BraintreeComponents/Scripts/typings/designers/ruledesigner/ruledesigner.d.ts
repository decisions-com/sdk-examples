/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="rule.panels.d.ts" />
/// <reference path="../common/inputs.prompt.d.ts" />
/// <reference path="rule.layer.d.ts" />
/// <reference path="rule.builderitems.d.ts" />
/// <reference path="../validation/validationgroup.d.ts" />
/// <reference path="../validation/validationdisplay.d.ts" />
/// <reference path="../common/messages.d.ts" />
/// <reference path="../../dialog/dialog.save.d.ts" />
/// <reference path="../designer.header.d.ts" />
/// <reference path="../sidebar.d.ts" />
/// <reference path="../sidebar.host.d.ts" />
/// <reference path="../sidebar.panels.d.ts" />
/// <reference path="../unittests/ut.samples.d.ts" />
/// <reference path="models/rule.stepmodel.d.ts" />
/// <reference path="models/rule.actionmodel.d.ts" />
/// <reference path="truthtable/tt.container.d.ts" />
/// <reference path="rule.sampleset.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleActionTypeInfo = $D.Framework.Design.Flow.RuleAction.RuleActionTypeInfo;
    interface RuleDesignerOptions {
        readonly ruleId: string;
        readonly instanceId: string;
        readonly sampleId: string;
        readonly openTableAsStatementRule: boolean;
    }
    class RuleDesigner {
        private rootUI;
        private options;
        private clientId;
        private client;
        private sampleService;
        private session;
        private $ruleDesigner;
        private headerHolder;
        private promptHolder;
        private surface;
        private $ruleRoom;
        private $leftSplitter;
        private $rightSplitter;
        private noConditionsMessage;
        private userMessage;
        private inputMismatchMessage;
        private leftbar;
        private infoPanel;
        private samplePanel;
        private sampleHandler;
        private rightbar;
        private propertiesPanel;
        private isBusy;
        private rootModel;
        private textView;
        private truthtableContainer;
        private layer;
        private actionTypes;
        private currentEditInputsType;
        private canLoadSampleSet;
        private headerProps;
        private readonly ruleStepViewClass;
        private readonly removeActionClass;
        private editingContextId;
        private sessionActions;
        static create(options: RuleDesignerOptions): RuleDesigner;
        static getInstanceById(id: string): RuleDesigner;
        static getInstance(element: JQuery): RuleDesigner;
        constructor(rootUI: JQuery, options: RuleDesignerOptions);
        private addDesignerMessages;
        private addMismatchMessage;
        get isSampleStarted(): boolean;
        get ClientId(): string;
        getActionTypes(): RuleActionTypeInfo[];
        get RuleId(): string;
        get mappingContext(): Common.MappingContext;
        get useTableContainer(): boolean;
        initialize(onInitialized?: () => void): void;
        getMappingContext(): $DP.Common.MappingContext;
        private refreshProperties;
        private isFeatureVisible;
        private initializeLayer;
        private buildHeaderProps;
        private initializeTopBar;
        private refreshHeader;
        private showInputDataDialog;
        private renderPrompt;
        private getApiConfig;
        private initializeSampleHandler;
        private handleBeyondThePathHint;
        private initializeSampling;
        private initializeLeftBar;
        private initializeRightBar;
        private reload;
        private loadRule;
        private updateRootModel;
        private updateSurface;
        private updateRuleSurface;
        private updateTruthTableSurface;
        private unloadRule;
        private isRuleEmpty;
        private onRootModelChanged;
        private updateNoConditionsLabel;
        private updateUserMessage;
        private doSave;
        private doDebug;
        private stopSampling;
        private disposeAndCloseDialog;
        private doClose;
        private onResize;
        private getRuleServiceNotificationTypeName;
        private getPreviewElement;
        private save;
        private layerStepModel;
        private valueChanged;
        private lastRuleLayerOptions;
        private layerSize;
        showRuleStepLayer(stepModel: RuleStepModel, options: RuleLayerOptions, listenForCommandsChange?: boolean): void;
        /**
         * When rule is empty need to show fake phrase which exists only on client, but his behavior like real phrase, because:
         *  - when user click on it fake phrase will be deleted and real phrase will be created;
         *  - when user click on menu item for '(Add)' link fake phrase will be deleted and two real phrase will be added.
         */
        private addFakePhrase;
        private createFakeDisplayData;
        private callFakeStepClickHandler;
        /**
         * restore default click handler on (Add) link
       */
        private setDefaultHandlerForAddLink;
        private layerStickTo;
        showRuleLayer(options: RuleLayerOptions): void;
        showTruthTableLayer(options: TruthTableLayerOptions): void;
        closeLayer(): void;
        /*******************************
         *    Notification handling    *
         *******************************/
        private handleNotifications;
        private handleStepNotifications;
        private updateSurfaceForNotification;
        private updateModelsFromNotifications;
        private handleDesignerNotification;
        private handleRuleNotification;
        private updateSampleHandler;
        private updateMismatchMessage;
        private refreshValidation;
        /**
         * Forbids to user to interact with UI because some work is in progress.
         */
        private makeBusy;
        /**
         * Allows to user to interact with UI again because work has been finished.
         */
        private makeFree;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
