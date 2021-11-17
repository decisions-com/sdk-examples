/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="case.step.d.ts" />
/// <reference path="case.utils.d.ts" />
/// <reference path="case.statesteps.d.ts" />
/// <reference path="case.addbutton.d.ts" />
/// <reference path="case.menuactions.d.ts" />
/// <reference path="case.addactionmenu.d.ts" />
/// <reference path="case.models.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../propertygrid/pg.validationEngine.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    interface StateListOptions {
        host?: JQuery;
        allowAddStep?: boolean;
        allowAddState?: boolean;
        stepIcon?: CaseStepIcon;
        showOrder?: boolean;
        stepListLabel?: string;
        noStepsText?: string;
        stepRootStyle?: $DP.Common.StyleProps;
        stepListRootStyle?: $DP.Common.StyleProps;
        extentionFolderId?: string;
        states: CaseStateModel[];
        getStepActions?: (event: {
            list: CaseStepList;
            component: CaseStep;
        }) => JQueryPromise<any[]>;
        getStateActions?: (event: {
            list: CaseStateList;
            component: CaseState;
        }) => JQueryPromise<any[]>;
        onStepClick?: (event: {
            list?: CaseStateList;
            component?: CaseStep;
        }) => void;
        onStateClick?: (event: {
            list?: CaseStateList;
            component?: CaseState;
        }) => void;
        /**
         * Event handler for click on Add Step link
         */
        onAddStep?: (event: {
            list?: CaseStateList;
            component?: CaseStateSteps;
        }) => void;
        /**
         * Event handler for click on Add state button
         */
        onAddState?: (event: {
            list?: CaseStateList;
            component?: CaseStateSteps;
        }) => void;
        onAddStateClick?: (event: {
            list?: CaseStateList;
        }) => void;
        onStateNameChanged?: (event: {
            list?: CaseStateList;
            component: CaseState;
            name: string;
        }) => void;
        onStepNameChanged?: (event: {
            list?: CaseStateList;
            component: CaseStep;
            name: string;
        }) => void;
        /**
         * Events is triggered after calling methods @method moveLeft and @method moveRight
         */
        onMoved?: (event: {
            list?: CaseStateList;
            left: CaseStateSteps;
            right: CaseStateSteps;
        }) => void;
        onStepsMoved?: (event: {
            list?: CaseStepList;
            up: CaseStep;
            down: CaseStep;
        }) => void;
    }
    class CaseStateList {
        private options;
        private view;
        constructor(options: StateListOptions);
        getView(): JQuery;
        addState(state: CaseStateModel): void;
        updateStates(states: CaseStateModel[]): void;
        updateState(state: CaseStateModel): void;
        hasState(stateId: string): boolean;
        removeState(id: string): void;
        removeStep(stepId: string): void;
        /**
         * Swaps state `component` with its left sibling
         */
        moveLeftItem(stateId: string): void;
        /**
         * Swaps state `component` with its right sibling
         */
        moveRightItem(stateId: string): void;
        private getState;
        private getNextStateFor;
        private getPrevStateFor;
        getMaxOrder(): number;
        getMinOrder(): number;
        private get stateSteps();
        protected render(): JQuery;
        private appendAddState;
        private appendBefore;
        private appendAfter;
        private appendToEnd;
        private onStepNameChanged;
        private createStateStepsComponent;
        private swapOrders;
        private onStateNameChanged;
        scrollToRight(): void;
    }
}
