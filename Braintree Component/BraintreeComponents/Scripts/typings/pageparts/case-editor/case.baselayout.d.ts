/**
 * Author: alex@decisions.com
 * Notes: unauthorized, unlicensed use, redistribution, modification is not allowed.
 */
/// <reference path="../../common/cssselectors.d.ts" />
/// <reference path="../../common/svg.icons.d.ts" />
/// <reference path="../../propertygrid/pg.validationEngine.d.ts" />
declare namespace $DP.PageParts.CaseEditor {
    interface BaseCaseOptions<T extends CaseBaseLayout> {
        /**
        * called after editing of state name
        */
        onNameChanged?: (stateName: string, component?: T) => void;
        /**
        * called before editing of state name
        */
        onNameChanging?: (component?: T) => void;
        /**
         * Provides action for context menu
         */
        getActions?: (component: T) => JQueryPromise<any[]>;
        onDispose?: (component?: T) => void;
    }
    interface LayoutOptions {
        root: $DP.Common.ClassNameCssSelector;
        rootCreated: $DP.Common.ClassNameCssSelector;
        rootEditing: $DP.Common.ClassNameCssSelector;
        left: $DP.Common.ClassNameCssSelector;
        body: $DP.Common.ClassNameCssSelector;
        inputName: $DP.Common.ClassNameCssSelector;
        labelName: $DP.Common.ClassNameCssSelector;
        arrowDown: $DP.Common.ClassNameCssSelector;
    }
    abstract class CaseBaseLayout {
        protected latoutOptions: LayoutOptions;
        protected options: BaseCaseOptions<CaseBaseLayout>;
        protected view: JQuery;
        protected abstract get entityId(): any;
        protected abstract get name(): any;
        protected menuPosition: ActionHelper.MenuPosition;
        constructor(latoutOptions: LayoutOptions, options: BaseCaseOptions<CaseBaseLayout>);
        protected render(): JQuery;
        setFocusOnInput(): void;
        /**
         * Shows input box for editing StateName
         * @param text text is showed in input
         */
        beginEditName(): void;
        /**
         * Hides input box
         */
        endEditName(): void;
        private attachInputEvents;
        private validateName;
        protected setCreatedModifier(): void;
        private setEditingModifier;
        private removeModifiers;
        protected attachContextMenu(): void;
        protected showContextMenu(): void;
        /**
        * attach event `remove`, which will be executed after deleting step from DOM
        */
        private attachOnRemove;
    }
}
