/// <reference path="../typings/core/generated/propertyeditorservice.d.ts" />
/// <reference path="../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/site/site.d.ts" />
/// <reference path="../typings/jquery/jquerymobile.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />
/**
 * Author:ravi.tiwari@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, redistribution, modification is not allowed.
*/
declare namespace $DP.Editors {
    interface ICheckListEditorOptions {
        instanceId?: string;
        editingContextID?: string;
        showRTEFilter?: boolean;
        callbkRTEFilter?: () => void;
        isMobileRequest?: boolean;
        tabIndex?: number;
        path?: string[];
        dynamicContextId?: string;
    }
    class CheckListEditor {
        private options;
        static create(options: ICheckListEditorOptions): CheckListEditor;
        static get(element: JQuery): CheckListEditor;
        checkListEditorContainer: JQuery;
        static readonly ALL_CHECKED_CLASS: string;
        propertyGrid: JQuery;
        scrollTop: number;
        searchBoxContainer: JQuery;
        searchBox: JQuery;
        searchText: string;
        checkboxs: JQuery;
        selectAllLink: JQuery;
        checkListEditor: JQuery;
        flipSwitch: JQuery;
        constructor(options: ICheckListEditorOptions);
        initializeCheckListEditorAndAttachEvents(): void;
        toggleAllCheckBox(): void;
        onCheckboxClick(checkbox: JQuery): Promise<void>;
        SubmitNotificationModeToggleButtonValues(element: JQuery): Promise<void>;
        SubmitNotificationModeCheckboxValue(element: JQuery): Promise<void>;
        static search(text: string, checkBoxes: JQuery): void;
        toggleCheckBox(checkbox: JQuery, isMarkTrue: boolean): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
