/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
 */
/// <reference path="../models/rule.modelwrapper.d.ts" />
/// <reference path="../../matrixrule/matrixruledesigner.d.ts" />
/// <reference path="../../../typings/site/site.d.ts" />
/// <reference path="../../common/ContextEditor.d.ts" />
/// <reference path="../../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../rule.utils.d.ts" />
/// <reference path="tt.ruletable.d.ts" />
/// <reference path="../../../typings/core/generated/TruthTableEditService.d.ts" />
declare namespace $DP.Rules.Truthtable {
    import AllGroupModel = $DP.Designers.Rules.AllGroupModel;
    import AbstractRuleProgress = $D.Framework.Design.Flow.Service.Debugging.DebugData.AbstractRuleProgressData;
    import RuleDesignerSurface = $D.Framework.Design.Flow.Service.RuleDesignerSurface;
    import RuleTableHeaderDisplayData = $D.Framework.Design.Flow.RuleTable.RuleTableHeaderDisplayData;
    interface TruthTableContainerOptions {
        $host?: JQuery;
        ruleId: string;
        rootModel: AllGroupModel;
        externalDataSourceId?: string;
        ruleDesignerSurface: RuleDesignerSurface;
        isFilterApplied?: boolean;
        handleNotifications?: dpComponents.HandleNotificationsCallback;
        onHeadersChanged?: (headers: RuleTableHeaderDisplayData[]) => void;
    }
    class TruthtableContainer {
        private options;
        private readonly $view;
        private readonly $grid;
        private readonly $error;
        private readonly $executionDuration;
        private readonly $sampleSetHolder;
        private readonly rootModel;
        private model;
        private allProgressHistory;
        private currentProgress?;
        private _ruleTableHeaders;
        get ruleTableHeaders(): RuleTableHeaderDisplayData[];
        OnInitialized: () => void;
        constructor(options: TruthTableContainerOptions);
        getView(): JQuery;
        getGridView(): JQuery;
        initialize(): Promise<void>;
        get isExternalTruthTable(): boolean;
        get isRuleTable(): boolean;
        getRuleSessionId(): string;
        getSampleSetHolder(): JQuery;
        onStartSampleSet(): void;
        onStopSampleSet(): void;
        evaluate(allHistory: AbstractRuleProgress[], currentProgress?: AbstractRuleProgress): void;
        unEvaluate(): void;
        private load;
        unload(): void;
        resize(): void;
        private showReport;
        refreshGrid(): Promise<void>;
        private addOutput;
        private changeResult;
    }
    function showContextEditorLayer(event: {
        target: HTMLElement;
        getContext: () => Promise<string>;
        canIgnore?: boolean;
        onIgnore?: () => Promise<void>;
    }): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
