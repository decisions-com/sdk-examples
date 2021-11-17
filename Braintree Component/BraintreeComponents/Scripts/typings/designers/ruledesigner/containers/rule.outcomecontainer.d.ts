/// <reference path="../../../actions/actionExecuter.d.ts" />
/// <reference path="../../../typings/core/decisions.d.ts" />
/// <reference path="../../../actions/actionsmenu/menu.helpers.d.ts" />
/// <reference path="../../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/linq/linq.d.ts" />
/// <reference path="../../../common/checkbox.d.ts" />
/// <reference path="../../../common/svg.icons.d.ts" />
/// <reference path="../../common/ContextEditor.d.ts" />
/// <reference path="../../common/mappingcontext.d.ts" />
/// <reference path="../../common/observer.d.ts" />
/// <reference path="../../../dialog/dialog.d.ts" />
/// <reference path="../ruledesigner.d.ts" />
/// <reference path="../rule.mappinginline.d.ts" />
/// <reference path="../../matrixrule/mrd.inlineediting.d.ts" />
/// <reference path="rule.bracketscontainer.d.ts" />
/// <reference path="rule.outputdatalist.d.ts" />
/// <reference path="rule.actionlist.d.ts" />
declare namespace $DP.Designers.Rules {
    class OutcomeRuleContainer {
        model: $DP.Designers.Rules.AllGroupModel;
        private $view;
        private service;
        private $falseSection;
        private $trueSection;
        private $missingSection;
        private $outcomeTrueLabel;
        private $outcomeFalseLabel;
        private $outcomeMissingLabel;
        constructor();
        getView(): JQuery;
        initialize(model: $DP.Designers.Rules.AllGroupModel): void;
        containerValueChange(propertyName: any): void;
        highlightResult(): void;
        get sessionId(): string;
        private get isElseVisible();
        private get isMissingDataVisible();
        private render;
        private createOutcomeTemplate;
        private needToShowAddLink;
        private createAddLink;
        private refresh;
        private updateOutputVisibility;
        private updateVisibilityAddLink;
        private createTrueOutput;
        private createFalseOutput;
        private createMissingDataOutput;
        private createOutputActionsView;
        private createOutputList;
        private setTextColoring;
    }
}
