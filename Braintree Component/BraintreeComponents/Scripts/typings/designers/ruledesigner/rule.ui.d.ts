/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="rule.layer.d.ts" />
/// <reference path="rule.builderitems.d.ts" />
/// <reference path="containers/rule.outputdatalist.d.ts" />
/// <reference path="containers/rule.outcomecontainer.d.ts" />
/// <reference path="containers/rule.textblock.d.ts" />
declare namespace $DP.Designers.Rules {
    abstract class RuleContainerBase<T extends RuleGroupModelBase> {
        Model: T;
        private itemRemovedSubj;
        private itemAddedSubj;
        private valueChangedSubj;
        constructor();
        Initialize(model: T): void;
        dispose(): void;
        abstract OnModelItemRemoved(item: RuleModelBase): void;
        abstract OnModelItemAdded(item: RuleModelBase): void;
        abstract ContainerValueChange(item: string): void;
    }
    class AnyRuleTextContainer extends $DP.Designers.Rules.RuleContainerBase<AnyGroupModel> {
        Container: JQuery;
        private TextContainer;
        private isEitherSetup;
        private EitherBlock;
        constructor();
        private createEmptyRow;
        private deleteAddRow;
        private createAddRow;
        OnModelItemAdded(ruleItem: RuleModelBase): void;
        OnModelItemRemoved(item: RuleModelBase): void;
        private RemoveAllGroup;
        Initialize(anyGroupModel: AnyGroupModel): void;
        createOrRow(allRuleTextContainer: AllRuleTextContainer): JQuery;
        setupEitherBlock(allRuleTextContainer: any): void;
        onInfoBlockClick(element: any, block: any): void;
        AddAllGroup(allRuleTextContainer: AllRuleTextContainer): void;
        ContainerValueChange(propertyName: string): void;
    }
    class AllRuleTextContainer extends RuleContainerBase<AllGroupModel> {
        PanelItemsContainer: JQuery;
        IsForEnumeratorGroup: boolean;
        Panel: JQuery;
        TextContainer: JQuery;
        ButtonItemContainer: JQuery;
        AllModelValueChanged: $DP.Common.Subject;
        OutcomeDataView: OutcomeRuleContainer;
        constructor(showLabelIf?: boolean);
        ShowMenuButtonClicked(elem: any): void;
        ContainerValueChange(p: any): void;
        OnModelItemAdded(ruleItem: RuleModelBase): void;
        OnModelItemRemoved(ruleItem: RuleModelBase): void;
        getAddLink(): JQuery;
        unload(): void;
        isForRootModel(): boolean;
        dispose(): void;
        Initialize(allGroupMod: AllGroupModel): void;
        private addRuleStep;
        private removeStep;
        private addAnyContainer;
        private IsMenuButtonVisible;
        private UpdateAddButtonVisibility;
        private removeFirstAnd;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
