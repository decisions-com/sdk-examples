/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/reportviewservice.d.ts" />
declare namespace $DP.Editors {
    import PickerActions = $D.Framework.Design.Properties.Attributes.PickerActions;
    interface EntityPickerEditorOptions {
        host: JQuery;
        editingContextId: string;
        path: string;
        designerType: string;
        rawPickModel?: string;
        pickedEntityId?: string;
        actions?: PickerActions;
    }
    class EntityPickerEditor {
        static clear(editingContext: string, commaSeparatedPath: string): Promise<void>;
        static submit(editingContext: string, commaSeparatedPath: string, elementId?: string): Promise<void>;
        static attachEntityToProject({ mappingContext, elementId }: {
            mappingContext: $DP.Common.MappingContext;
            elementId: string;
        }): Promise<void>;
        static makeReset(host: JQuery, options: EntityPickerEditorOptions): void;
        static makeEdit(host: JQuery, options: EntityPickerEditorOptions): void;
        static hasAction(actions: PickerActions, action: PickerActions): boolean;
        static checkCanEdit(entityId: string): boolean;
        static checkFolderPermission(entityId: string, perm: $D.Framework.ServiceLayer.Services.Folder.FolderPermission): boolean;
    }
    interface TypePickerEditorOptions extends EntityPickerEditorOptions {
        rawSettings?: string;
    }
    class TypePickerEditor {
        static render(options: TypePickerEditorOptions): void;
    }
    interface ChartSourcePickerEditorOptions extends EntityPickerEditorOptions {
        sourceMode?: string | $DP.Controls.Report.ChartDataSourceMode;
        defaultSeries?: string;
        model?: $DP.EntityPicker.DefaultEntityPickerModel;
    }
    class ChartSourcePickerEditor {
        static render(options: ChartSourcePickerEditorOptions): void;
        private static getChartSeries;
        private static loadChartSeries;
        static openPickDialog(options: ChartSourcePickerEditorOptions, onSave?: () => void): void;
        private static submit;
    }
}
declare namespace $DP.PropertyGrid.Editors {
    import PickerActions = $D.Framework.Design.Properties.Attributes.PickerActions;
    interface EntityPickerEditorOptions {
        el?: JQuery;
        value?: $DP.EntityPicker.EntityPickedInfo;
        onChange?: (value: $DP.EntityPicker.EntityPickedInfo) => void;
        actions?: PickerActions;
        pickerOptions?: $DP.EntityPicker.EntityPickerOptions;
        className?: string;
        title?: string;
    }
    class EntityPickerEditor {
        private options;
        static makeLayout(options: EntityPickerEditorOptions): JQuery;
        static hasAction(actions: PickerActions, action: PickerActions): boolean;
        private input;
        private reset;
        constructor(options: EntityPickerEditorOptions);
        render(): JQuery;
        getPickedInfo(): $DP.EntityPicker.EntityPickedInfo;
        private showPickDialog;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
