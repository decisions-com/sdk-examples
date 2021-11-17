/// <reference path="../models/rule.actionmodel.d.ts" />
/// <reference path="../actionhandlers/rule.baseactionhandler.d.ts" />
declare namespace $DP.Designers.Rules {
    import ValidationIssue = $D.Framework.ValidationIssue;
    interface ActionOutputItemOptions {
        actionId: string;
        actionName: string;
        isDebugMode: boolean;
        canEdit: boolean;
        canChange?: boolean;
        validationIssues?: ValidationIssue[];
        onChange: (event: {
            target: ActionOutputItem;
            stickTo: JQuery;
        }) => void;
        onEdit: (event: {
            target: ActionOutputItem;
            stickTo: JQuery;
        }) => void;
        onRemove: (event: {
            target: ActionOutputItem;
            stickTo: JQuery;
        }) => void;
        onShowContextMenu: (event: {
            target: ActionOutputItem;
            stickTo: JQuery;
        }) => void;
        createInlineEditor: (event: {
            target: ActionOutputItem;
        }) => HTMLElement;
    }
    class ActionOutputItem {
        private options;
        private $view;
        private $name;
        private $btnChange;
        private $btnEdit;
        private $btnRemove;
        private $validationIcon;
        constructor(options: ActionOutputItemOptions);
        get id(): string;
        getView(): JQuery;
        private render;
        private attachEditor;
        private showContextMenu;
        updateValidations(validationIssues: ValidationIssue[]): void;
        setName(actionName: string): void;
    }
}
