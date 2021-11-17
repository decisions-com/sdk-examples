/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="case.statesteps.d.ts" />
/// <reference path="case.addbutton.d.ts" />
/// <reference path="case.utils.d.ts" />
/// <reference path="../../designers/designer.loaders.d.ts" />
/// <reference path="../../portal/portal.d.ts" />
/// <reference path="../../typings/core/decisions.d.ts" />
/// <reference path="../../common/styleprops.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    import StateStepDto = $D.Framework.Design.DataStructure.CaseEditor.StateStepDto;
    import StyleProps = $DP.Common.StyleProps;
    type StepChangedHandler = (newState?: StateStepDto, oldState?: StateStepDto) => void;
    type CaseStepIcon = JQuery | ((component?: CaseStep) => JQuery);
    interface CaseStepOptions extends BaseCaseOptions<CaseStep> {
        host?: JQuery;
        step?: StateStepDto;
        icon?: CaseStepIcon;
        rootStyle?: StyleProps;
        onStepChanged?: StepChangedHandler;
        onClick?: (component?: CaseStep) => void;
    }
    /**
     * Component for displaing step like flow attached to a state
     */
    class CaseStep extends CaseBaseLayout {
        protected options: CaseStepOptions;
        protected view: JQuery;
        protected menuPosition: ActionHelper.MenuPosition;
        static get DATA_KEY(): string;
        protected get name(): string;
        get entityId(): string;
        constructor(options: CaseStepOptions);
        getView(): JQuery;
        getStep(): StateStepDto;
        hasId(step?: StateStepDto): boolean;
        update(step: StateStepDto): void;
        protected render(): JQuery;
        private showIcon;
        private getIcon;
        private attachEvents;
    }
}
