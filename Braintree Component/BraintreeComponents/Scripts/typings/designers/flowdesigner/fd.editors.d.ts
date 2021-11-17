/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="flowdesigner.d.ts" />
declare namespace $DP.Designers.Flows.Editors {
    abstract class BaseFlowObjectEditor extends $DP.Common.BaseObjectEditor {
        protected dialog: JQuery;
        constructor(information: $D.Framework.Design.Properties.EditorInformation, provider?: $DP.Common.IContextProvider, keepContextAlive?: boolean);
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
        protected abstract getActionName(): string;
        private startAction;
        protected abstract executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): any;
    }
    class ComponentEditor extends $DP.Common.BaseObjectEditor {
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class FlowStepDataViewer extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
    }
    class CreateFlowStepTemplateEditor extends $DP.Common.BaseObjectEditor {
        GetEditorAction(options: $DP.Common.EditorActionOptions): (e: JQueryEventObject) => any;
    }
    class DeleteStep extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
        static executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep): void;
    }
    class CopyStep extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
        static executeAction(designer: IFlowDesigner, step: FlowStep, callback?: () => Promise<void> | void): Promise<void>;
    }
    class CutStep extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
        static executeAction(designer: IFlowDesigner, step: FlowStep, callback?: () => void): Promise<void>;
    }
    class ShowHelpStep extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
    }
    class PickElementRegistrationEditor extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
    }
    class ShowElementRegistrationDesignerEditor extends BaseFlowObjectEditor {
        protected getActionName(): string;
        protected executeAction(container: JQuery, context: $DP.Common.MappingContext, designer: FlowDesigner, step: FlowStep, ev: JQueryEventObject): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
 */
