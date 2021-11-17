/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="case.statecss.d.ts" />
/// <reference path="case.state.d.ts" />
/// <reference path="case.step.d.ts" />
/// <reference path="case.steplist.d.ts" />
/// <reference path="case.models.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import StateStepDto = $D.Framework.Design.DataStructure.CaseEditor.StateStepDto;
    import CaseStepModel = $DP.PageParts.CaseEditor.CaseStateModel;
    interface StateStepsOptions {
        host?: JQuery;
        state: CaseStepModel;
        allowAddStep?: boolean;
        allowAddState?: boolean;
        showOrder?: boolean;
        stepListLabel?: string;
        stepIcon?: CaseStepIcon;
        noStepsText?: string;
        stepRootStyle?: $DP.Common.StyleProps;
        stepListRootStyle?: $DP.Common.StyleProps;
        /**
         * Event handler for click on Add Step link
         */
        onAddStep?: (component?: CaseStateSteps) => void;
        /**
         * Event handler for click on Add state button
         */
        onAddState?: (component?: CaseStateSteps) => void;
        onStateNameChanged?: (stateName: string, component?: CaseState) => void;
        onStateClick?: (component?: CaseState) => void;
        onStepClick?: (component?: CaseStep) => void;
        onStepNameChanged?: (state: CaseStepModel, name: string, component: CaseStep) => void;
        /**
         * Provides action for context menu
         */
        getStepActions?: (event: {
            list: CaseStepList;
            component: CaseStep;
        }) => JQueryPromise<any[]>;
        /**
         * Provides action for context menu
         */
        getStateActions?: (component: CaseState) => JQueryPromise<any[]>;
        onStepsMoved?: (event: {
            list?: CaseStepList;
            up: CaseStep;
            down: CaseStep;
        }) => void;
    }
    /**
     * Component show state and steps attached to it
     */
    class CaseStateSteps {
        private options;
        private view;
        private state;
        private steplist;
        static get DATA_KEY(): string;
        constructor(options: StateStepsOptions);
        getState(): CaseStepModel;
        get addState(): JQuery;
        get addAction(): JQuery;
        updateState(newState: CaseStepModel): void;
        updateStep(step: StateStepDto): void;
        hasStep(stepId: string): boolean;
        remove(): void;
        removeStep(stepId: string): void;
        addStep(step: CaseStep): void;
        getView(): JQuery;
        beginEditName(): void;
        hasId(): boolean;
        private render;
        private renderState;
        private renderStepList;
        private hasActions;
        private appendActions;
        private removeActions;
        private appendAddStep;
        private appendAddState;
        private createStepComponent;
        /**
         * Creates @see CaseState component for @see CaseStepModel
         */
        private createStateComponent;
    }
}
