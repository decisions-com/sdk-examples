/// <reference path="../typings/core/generated/ContextProviderService.d.ts" />
/// <reference path="../dialog/dialog.propertygrid.d.ts" />
/// <reference path="pickOrDefine.d.ts" />
/// <reference path="../common/scriptloader.d.ts" />
/// <reference path="Editors.d.ts" />
declare namespace $DP.Editors {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    interface SuggestValueEditorOptions {
        path: string[];
        editingContextId: string;
        value: string;
        instanceId: string;
        tabIndex: string;
        configurationValues: DataPair[];
    }
    class SuggestValueEditor {
        private options;
        private focusoutTimer;
        private typefullName;
        private ignoreScripts;
        private propertyName;
        private suggestToAddValue;
        private currentListName;
        private submittimer;
        private lastValue;
        private inputElement;
        private combobox;
        constructor(options: SuggestValueEditorOptions);
        initialize(): void;
        attachEvents(holder: JQuery): void;
        showValueToAddDialog(): void;
        static showShouldAddValueDialog(text: string, listName: string, suggestToAddValue: boolean, onAdd: () => void): void;
        addToNewOrExisingList(): void;
        /**
         * Show dialog to add a suggestion list to a string constant field.
         * @param listName to show
         * @param propertyName to fill
         * @param submitValue callback for list being added.
         */
        static addToNewOrExistingListStatic(listName: string, propertyName: string, submitValue: () => void): void;
        showAddEditdialog(): void;
        /**
         * Show a dialog to Edit suggestion list for a string constant property.
         * @param currentListName name of suggestion list
         * @param propertyName name of constant string property
         * @param submitValue callback for edits complete
         */
        static showAddEditDialogStatic(currentListName: string, propertyName: string, submitValue: () => void): Promise<void>;
        submitTextBoxValue(): void;
        submitValue(): void;
    }
}
