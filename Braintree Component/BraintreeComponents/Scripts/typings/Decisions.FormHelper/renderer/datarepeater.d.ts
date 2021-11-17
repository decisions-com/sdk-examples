/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../decisions.formhelper.d.ts" />
/// <reference path="../formRules.d.ts" />
/// <reference path="../../typings/core/generated/userdefinedcontrolservice.d.ts" />
import RuntimeChildrenProviderChildInfo = $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfo;
import RuntimeChildrenProviderChildInfoWrapper = $D.Framework.Design.Form.ComponentData.CompositeControls.RuntimeChildrenProviderChildInfoWrapper;
declare namespace SilverDark.Components {
}
declare namespace $DP.Control {
    export interface DataRepeaterOptionsExtension extends Silverdark.Components.DataRepeaterOptions {
        host: any;
        lineIndicatorBackground?: string;
        datarepeaterView: DataRepeaterView;
    }
    export interface DataRepeaterInfo {
    }
    class DataRepeaterView {
        private controller;
        private layoutRoot;
        lineIndicatorWidth: number;
        private showLineNumber;
        private lineNumberDefaultBackgroundStyle;
        private lineNumberSelectedBackgroundStyle;
        private numberLabelStyle;
        numberLabelVerticalAlign: string;
        numberLabelTextAlign: string;
        static ITEM_SELECTED_EVENT_KEY: string;
        private lineNumberBackground;
        private lineNumberSelectedBackground;
        isLoadingCompleted: boolean;
        constructor(controller: DataRepeater, layoutRoot: JQuery, lineIndicatorWidth: number, showLineNumber: boolean, lineNumberDefaultBackgroundStyle: string, lineNumberSelectedBackgroundStyle: string, numberLabelStyle: string, numberLabelVerticalAlign: string, numberLabelTextAlign: string);
        updateFocusInHandlers(): void;
        addDataRepeaterView(visual: JQuery): void;
        resizeDataRepeaterItems(): void;
        removeDataRepeaterItemView(componentId: string): void;
        highlight(componentId: string): void;
        removeHighlight(componentId: string): void;
        getRowId(componentId: string): any;
        getComponentId(rowId: string): any;
        private getIndexOfItem;
        private updateLineNumbers;
        private setLineNumber;
        getItems(): JQuery;
        getItemView(componentId: string): JQuery;
        private getVisualForComponent;
        private getLineIndicatorForComponent;
        private buildDataRepeaterItemView;
        buildLineIndicator(componentId: string): JQuery;
        private buildLineIndicatorContent;
    }
    export class ChildInfoData {
        controllerElement: JQuery;
        childRootOptions: $DP.Containers.ContainerOptions;
        controlData?: DataPair[];
        events?: DataPair[];
    }
    export interface ChildViewOptions {
        rootContainer: $DP.Containers.ContainerOptions;
        index: number;
        id: string;
        showSeparator: boolean;
    }
    export class DataRepeaterComponents {
        private formSessionId;
        private parentOptions;
        lineIndicatorWidth: number;
        lineIndicatorBackground: string;
        isReadOnly: boolean;
        constructor(formSessionId: string, parentOptions: DataRepeaterOptionsExtension);
        getChildInfosData(childInfos: RuntimeChildrenProviderChildInfo[]): Promise<ChildInfoData[]>;
        getRowData(): Promise<ChildInfoData>;
        buidChildView(options: ChildViewOptions): JQuery;
    }
    export class DataRepeater extends UserDefinedBase implements $DP.FormHost.IAsyncDataConsumer {
        options: DataRepeaterOptionsExtension;
        private _selectedComponentId;
        private _formId;
        private _formInstanceId;
        private _dataName;
        private view;
        private addDataButton;
        private removeDataButton;
        private _componentIds;
        private updateDataRepeaterDefered;
        private _lastSetvalue;
        lastSetValue: FormHost.DecisionsControlData;
        tabUtil: dpComponents.FormTabManagementUtil;
        queue: dpComponents.QueueUtil;
        formValidationSetting: $D.Silverlight.UI.Core.FormDesignerModel.FormValidationSetting;
        constructor($controlLayout: JQuery, options: DataRepeaterOptionsExtension);
        currentRowid: string;
        container: $DP.Containers.DataRepeater;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        generateBackgroundStyle(color: DesignerColor): string;
        initializeContainer(): void;
        triggerResize(options: {
            width: number;
            height: number;
        }): void;
        private isDataRepeaterInitialized;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        setValueAsync(data: $DP.FormHost.DecisionsControlData[]): Promise<boolean>;
        private setFocus;
        setChildSurfaceInfo(roots: $DP.Containers.ContainerOptions[], data: DataPair[][]): Promise<void>;
        addChildSurface(elem: JQuery, data?: DataPair[]): ChildFormSurface;
        updatetabbing(): void;
        removeChildSurface(rowId: string): void;
        initTabbing(): void;
        attachEvents(): void;
        private setFocusToLeastTabIndex;
        setAutoInsertOnLostFocus(): void;
        private attachAutoCreateRowEvent;
        getValueAsync(): Promise<FormHost.DecisionsControlData[]>;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControlsData(): Promise<DataPair[]>;
        getControl(): JQuery;
        get selectedComponentId(): string;
        set selectedComponentId(value: string);
        private setComponentIdAndHighlightRow;
        get formInstanceId(): string;
        private static getFormControlById;
        private onAddDataClicked;
        private onRemoveDataClicked;
        private onDataRemoved;
        getRuleInfo(): Form.Rules.IFormRule[];
        loadComplete(): void;
        renderhtml(formHost: $DP.FormHost.DecisionsFormHost): Promise<JQuery>;
    }
    export {};
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
