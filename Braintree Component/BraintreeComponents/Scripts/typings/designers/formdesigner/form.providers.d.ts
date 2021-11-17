/**
 * Author:dorin@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Forms {
    class FormSelectionProvider {
        private _selectedItems;
        static get EVENT_NAME(): string;
        static get SELECTION_CHANGED_EVENT_NAME(): string;
        constructor();
        get multipleSelection(): boolean;
        get selectedItems(): string[];
        get selectedItem(): string;
        isSelected(item: string): boolean;
        selectItems(items: string[]): void;
        toggleSelection(item: string): void;
        addToSelection(item: string): void;
        removeFromSelection(item: string): void;
        clear(): void;
        private onSelectionChanged;
        selectionChangeCompleted(items: string[]): void;
    }
    class FormEventProvider {
        static get KEY_UP_EVENT_NAME(): string;
        onFormDesignerKeyUp(eventObject: JQueryEventObject): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
