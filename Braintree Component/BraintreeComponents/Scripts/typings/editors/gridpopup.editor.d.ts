/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../dialog/dialog.propertygrid.d.ts" />
/// <reference path="../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="../typings/core/decisions.d.ts" />
/// <reference path="../propertygrid/pg.validationEngine.d.ts" />
/// <reference path="entitybuilder.d.ts" />
declare namespace $DP.Editors {
    interface GridPopupEditorOptions {
        id?: string;
        label: string;
        value?: string;
        btnPickTabIndex?: number;
        btnClearTabIndex?: number;
        canPick?: boolean;
        onPick?: (e: {
            origin: GridPopupEditor;
            jqueryEvent: JQueryEventObject;
        }) => void;
        onClear?: (e: {
            origin: GridPopupEditor;
            jqueryEvent: JQueryEventObject;
        }) => void;
    }
    class GridPopupEditor {
        private options;
        private $view;
        constructor(options: GridPopupEditorOptions);
        getView(): JQuery;
        clearValue(): void;
        disable(): void;
        enable(): void;
        private render;
        private onPick;
        private onClear;
    }
    function renderGridPopup(options: {
        id: string;
        label: string;
        value: string;
        editingContextId: string;
        path: string;
        selectionOption: 'DefineOrPick' | 'Define' | 'Pick';
        canBePicked: boolean;
        tabIndex: number;
        typeName: string;
    }): void;
}
