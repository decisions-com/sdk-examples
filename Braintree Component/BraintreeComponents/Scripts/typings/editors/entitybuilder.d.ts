/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.UI.Controls {
    class EntityBuilder {
        private host;
        private model;
        private editorContainer;
        private pickerContainer;
        private btnPick;
        private btnDefine;
        private btnClear;
        private pickedEntityId;
        private dialogResult;
        private contextEditor;
        private picker;
        onInitialized: () => void;
        onClosed: () => void;
        static Create(editorId: string, pathString: string, typeName: string, onClosed?: () => void, isList?: boolean, index?: number, listItemType?: string): void;
        constructor(host: JQuery, model: EntityBuilderModel);
        intiailize(): void;
        resizeContent(width: number, height: number): void;
        private initializeEditor;
        private initializePicker;
        private close;
        private onClosing;
        private initializeButtons;
        private onBtnPickClick;
        private onBtnDefineClick;
        private onBtnClearClick;
        private clearEditor;
    }
    class EntityBuilderModel {
        private editorId;
        private pathString;
        private typeName;
        private isList;
        private index;
        private listItemType;
        private path;
        private entityPickerId;
        constructor(editorId: string, pathString: string, typeName: string, isList?: boolean, index?: number, listItemType?: string);
        get EntityPickerId(): string;
        get IsList(): boolean;
        get TypeName(): string;
        createContextForProperty(): JQueryPromise<string>;
        removeAddedListItem(): JQueryDeferred<string>;
        createContextForEntityClone(entityId: string): JQueryPromise<string>;
        createContextForType(): JQueryPromise<string>;
        define(contextId: string): JQueryPromise<void>;
        pick(entityId: string): JQueryPromise<void>;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/ 
