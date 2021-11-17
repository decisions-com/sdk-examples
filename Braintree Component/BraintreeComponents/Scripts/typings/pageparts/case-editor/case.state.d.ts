/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
/// <reference path="case.statecss.d.ts" />
/// <reference path="case.baselayout.d.ts" />
/// <reference path="case.statesteps.d.ts" />
/// <reference path="../../common/svg.icons.d.ts" />
/// <reference path="../../ColorEditor/ColorStyleHelpers.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    type StateChangedHandler = (options: {
        component?: CaseState;
        newState?: CaseStateModel;
        oldState?: CaseStateModel;
    }) => void;
    interface CaseStateOptions extends BaseCaseOptions<CaseState> {
        host?: JQuery;
        state: CaseStateModel;
        showOrder?: boolean;
        onStateChanged?: StateChangedHandler;
        onClick?: (component?: CaseState) => void;
    }
    class CaseState extends CaseBaseLayout {
        protected options: CaseStateOptions;
        protected view: JQuery;
        get entityId(): string;
        private static get DATA_KEY();
        protected get name(): string;
        constructor(options: CaseStateOptions);
        get stateSteps(): CaseStateSteps;
        getView(): JQuery;
        protected render(): JQuery;
        hasId(): boolean;
        getState(): CaseStateModel;
        /**
         * Sets state for component
         */
        update(state: CaseStateModel, triggerEvent?: boolean): void;
        private updateOrder;
        private setColor;
    }
}
