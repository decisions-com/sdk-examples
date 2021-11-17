/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="case.statesteps.d.ts" />
/// <reference path="case.addbutton.d.ts" />
/// <reference path="../../designers/designer.loaders.d.ts" />
/// <reference path="../../portal/portal.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../common/styleprops.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import StateStepDto = $D.Framework.Design.DataStructure.CaseEditor.StateStepDto;
    import StyleProps = $DP.Common.StyleProps;
    class CaseStepListOptions {
        host?: JQuery;
        steps?: CaseStep[];
        label?: string;
        noStepsText?: string;
        rootStyle?: StyleProps;
        onMoved?: (event: {
            list?: CaseStepList;
            down: CaseStep;
            up: CaseStep;
        }) => void;
    }
    class CaseStepList {
        private options;
        private $view;
        static get DATA_KEY(): string;
        private get steps();
        constructor(options: CaseStepListOptions);
        getMaxOrder(): number;
        getMinOrder(): number;
        /**
         * Swaps state `component` with its up sibling
         */
        moveUpItem(stateId: string): void;
        /**
         * Swaps state `component` with its down sibling
         */
        moveDownItem(stepId: string): void;
        hasStep(stateId: string): boolean;
        setItems(items: CaseStep[]): void;
        addItem(step: CaseStep): void;
        updateItem(step: StateStepDto): void;
        removeItem(stepId: string): void;
        removeComponent(step: CaseStep): void;
        getView(): JQuery;
        isEmpty(): boolean;
        getPrevStepFor(stateId: string): CaseStep;
        getNextStepFor(stateId: string): CaseStep;
        protected render(): JQuery;
        private getStep;
        private swapOrders;
        private renderItems;
        private createNoActions;
        private get innerList();
    }
}
