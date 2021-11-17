/// <reference path="../common/csveditor.d.ts" />
declare function resizeGrid(instanceId: string, newHeight?: number, newWidth?: number, dialogeTitlebar?: any, element?: JQuery): any;
declare namespace $DP.Control {
    class SilverCSVEditor extends DataContentBase {
        options: Silverdark.Components.SilverCSVEditorOptions;
        height: number;
        width: number;
        totalRows: number;
        constructor($controlLayout: JQuery, options: Silverdark.Components.SilverCSVEditorOptions);
        get showDisableControlOverlay(): boolean;
        get renderDefaultViewOnDesignTime(): boolean;
        renderhtml(): JQuery;
        initialize(host: $DP.FormHost.DecisionsFormSurface): void;
        rows: $D.Framework.Data.DataTypes.CSVEditorRow[];
        columnNames: string[];
        editor: $DP.Common.CSVEditor;
        intializeControl(): void;
        onEnablityChange(isEnable: boolean): void;
        updateControlState(isEnable?: boolean): void;
        resize(): void;
        setValue(data: $DP.FormHost.DecisionsControlData[], isFromStartUp: boolean): boolean;
        getValue(): $DP.FormHost.DecisionsControlData[];
        getControl(): JQuery;
    }
}
