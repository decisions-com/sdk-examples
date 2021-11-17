/**
 * Author:ismail.bohri@waveinfotech.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="nodeinfo.d.ts" />
/// <reference path="richtextinput.editor.d.ts" />
/// <reference path="suggestvalue.editor.d.ts" />
/// <reference path="../CheckListEditor/CheckListEditor.d.ts" />
/// <reference path="../ColorEditor/colorpick.editor.d.ts" />
/// <reference path="../ActiveDirectoryPicker/ActiveDirectoryPickerContent.d.ts" />
/// <reference path="../typings/decisions.components/decisions.components.d.ts" />
declare namespace $DP.UI.Controls {
    interface ADOptions {
        instanceId: string;
        contextId: string;
        editingContextId: string;
        pathString: string;
        addButtonId: string;
        removeButtonId: string;
        inputList: string[];
        isOrgUnit: boolean;
        title: string;
    }
    class TextBox {
        static update(updateOptions: NodeInfo): void;
    }
    class CalendarEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class ComboEditor {
        static update(nodeInfo: NodeInfo): void;
    }
    class EditableDropDownEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class NumberFormatEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class ImageInfo {
        static update(updateOptions: NodeInfo): void;
    }
    class ReadOnlyEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class EntityPickerEditor {
        static update(updateOptions: NodeInfo): void;
        static UpdateButtonsVisiblity(settings: any, nodeElement: any, entityId: string): void;
    }
    class ShortcutEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class ShortcutInfo {
        Alt: boolean;
        Control: boolean;
        Shift: boolean;
        KeyName: string;
        static keyCodeForShortcutEditor: {
            8: string;
            13: string;
            19: string;
            20: string;
            27: string;
            32: string;
            33: string;
            34: string;
            35: string;
            36: string;
            37: string;
            38: string;
            39: string;
            40: string;
            45: string;
            46: string;
            112: string;
            113: string;
            114: string;
            115: string;
            116: string;
            117: string;
            118: string;
            119: string;
            120: string;
            121: string;
            122: string;
            123: string;
            96: string;
            97: string;
            98: string;
            99: string;
            100: string;
            101: string;
            102: string;
            103: string;
            104: string;
            105: string;
            106: string;
            107: string;
            109: string;
            110: string;
            111: string;
            65: string;
            66: string;
            67: string;
            68: string;
            69: string;
            70: string;
            71: string;
            72: string;
            73: string;
            74: string;
            75: string;
            76: string;
            77: string;
            78: string;
            79: string;
            80: string;
            81: string;
            82: string;
            83: string;
            84: string;
            85: string;
            86: string;
            87: string;
            88: string;
            89: string;
            90: string;
            48: string;
            49: string;
            50: string;
            51: string;
            52: string;
            53: string;
            54: string;
            55: string;
            56: string;
            57: string;
        };
        static getToString(shortcutInfo: ShortcutInfo): string;
    }
    class CheckListEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class MergeTextEditor {
        static update(updateOptions: NodeInfo): void;
    }
    class ThemeSelector {
        static update(nodeInfo: NodeInfo): void;
    }
    interface GroupsPickerEditorOptions {
        instanceId: string;
        itemList: string[];
        editingContextId: string;
        path: string[];
        entityPickerTreeModel: string;
        showRTEFilter: boolean;
        callbkRTEFilter: string;
    }
    class GroupsPickerEditor {
        private options;
        groupPickerMainDiv: JQuery;
        groupListHolder: JQuery;
        addButton: JQuery;
        static update(updateOptions: NodeInfo): void;
        constructor(options: GroupsPickerEditorOptions);
        initialize(): void;
        attachEvents(): void;
        get listElements(): JQuery;
        getAllListView(): string;
        static getSingleListView(text: string, id: string): string;
        getGroupListArray(): string[];
        onEntityPicked(value: string): void;
        setGroupsPickerValue(value: string[]): void;
    }
    class TimePickerEditor {
        static update(nodeInfo: NodeInfo): void;
    }
    class StringFormatEditor {
        static update(nodeInfo: NodeInfo): void;
    }
    class ActiveDirectoryPickerEditor {
        private options;
        static update(nodeInfo: NodeInfo): void;
        editorContainer: JQuery;
        selectedItem: any;
        allSelectedEntities: any;
        constructor(options: ADOptions);
        initialise(): void;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
