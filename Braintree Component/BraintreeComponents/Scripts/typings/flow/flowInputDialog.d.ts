/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/core/generated/inputdataservice.d.ts" />
/// <reference path="../actions/actionExecuter.d.ts" />
declare namespace $DP.Controls.Flow {
    interface IFlowInputDialogOptions {
        instanceId?: string;
        flowId?: string;
        editingContextId?: string;
        flowTrackingId?: string;
        topFlowInstanceID?: string;
        isMobileRequest?: boolean;
        oKButtonId?: string;
        cancelButtonId?: string;
        forProfiler?: boolean;
    }
    class FlowInputDialog {
        private options;
        editFlowInputDialogHolder: JQuery;
        flowInputDataDialog: JQuery;
        propertyGrid: $DP.PropertyGrid.PropertyGrid;
        constructor(options: IFlowInputDialogOptions);
        static InputDataTreeNodeSelection(eventData: any, instanceId: string, editingContext: string): void;
        initializePropertyGrid(): void;
        initializeInputDialogAndAttachEvents(): void;
        static FlowInputDialogOnLoad(flowInputDialogElem: HTMLElement): void;
        FlowInputDialogEditComplete(successCallBack?: () => void): Promise<void>;
        static ResizeEditFlowInputDialog(resizeObj: $DP.Form.DialogResizeObjectInfo): void;
    }
}
