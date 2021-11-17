/**
* Author:oleg@decisions.com
* Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../typings/core/generated/entitypickerservice.d.ts" />
/// <reference path="../typings/pubsub/pubsub.d.ts" />
/// <reference path="epick.dialog.d.ts" />
/// <reference path="epick.model.d.ts" />
/// <reference path="epick.data.d.ts" />
/// <reference path="epick.tree.d.ts" />
/// <reference path="../common/styleprops.d.ts" />
/// <reference path="../common/searchbox.d.ts" />
declare namespace $DP.EntityPicker {
    import ElementType = $D.Framework.ServiceLayer.Services.ConfigurationStorage.ElementType;
    import ValidationIssue = $D.Framework.ValidationIssue;
    enum PickerTypes {
        Entity = 0,
        Folder = 1,
        Types = 2,
        ElementRegistration = 3
    }
    interface EntityPickedInfo {
        id: string;
        name: string;
    }
    type EntityPickedCallback = (info: EntityPickedInfo) => void;
    interface EntityPickerOptions {
        pickerType?: PickerTypes;
        typeName?: string;
        rawModel?: string;
        model?: EntityPickerModel;
        onPicked?: EntityPickedCallback;
        hideSearchControls?: boolean;
        hideCurrentlySelected?: boolean;
        pickedEntityId?: string;
        height?: number;
        /**
        * used to skip setting height explicitly
        */
        skipInternalResize?: boolean;
        treeExtraThemes?: string[];
        treeLoaded?: () => void;
        rootStyle?: $DP.Common.StyleProps;
        canPickMultiple?: boolean;
        validationIssues?: ValidationIssue[];
    }
    interface ElementRegistrationPickerOptions extends EntityPickerOptions {
        elementType: ElementType;
        subElementType?: string;
        includeEmptySubElementType?: boolean;
        behaviorType?: string;
    }
    class EntityPickerMaker {
        static createFolderPicker(options?: EntityPickerOptions): EntityPicker;
        static createTypePicker(options?: EntityPickerOptions): EntityPicker;
        static createElementRegistrationPicker(options?: ElementRegistrationPickerOptions): EntityPicker;
    }
    class EntityPicker {
        private options?;
        private view;
        private navTree;
        private searchTree;
        private searchBox;
        private searchRadioList;
        private lastSearchText;
        private pickedInfo;
        private multiplePickedInfos;
        private pickedElem;
        private model;
        private lastHeight;
        constructor(options?: EntityPickerOptions);
        getView(): JQuery;
        getPickedInfo(): EntityPickedInfo;
        getMultiplePickedInfo(): EntityPickedInfo[];
        resize(height?: number | string): void;
        getPickedNode(): JQuery;
        focusTree(): void;
        focusSearch(): void;
        goToSearch(searchText: string): this;
        showInDialog(options?: EntityPickerDialogOptions): void;
        private getContentHtml;
        private renderValidationIssues;
        private initialize;
        private initializeNavigation;
        private initializeCurrentlySelected;
        private onTreeNodeSelected;
        private onMultipleNodeSelected;
        private goToNavigation;
        private initializeSearch;
        private initSearchControls;
        private registerServerEvents;
    }
    interface IEntityPickerDialogOptions {
        settings: $D.Framework.ServiceLayer.Services.DecisionsTypePickerSettings;
        onSelected: (typeId: string | null) => void;
    }
    function showEntityPickerDialog({ settings, onSelected }: IEntityPickerDialogOptions): void;
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
