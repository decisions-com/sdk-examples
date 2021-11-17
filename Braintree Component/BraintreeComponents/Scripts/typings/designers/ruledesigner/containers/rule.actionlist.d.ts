/// <reference path="../models/rule.actionsmodel.d.ts" />
/// <reference path="../models/rule.actionmodel.d.ts" />
/// <reference path="rule.actionitemfactory.d.ts" />
/// <reference path="rule.actionoutputitem.d.ts" />
declare namespace $DP.Designers.Rules {
    interface ActionListOptions {
        actions?: ActionOutputItem[];
        isInDebugMode?: boolean;
        showAddLink: boolean;
        onDispose?: (event: {
            target: ActionList;
        }) => void;
        onAddActionClick?: (event: {
            target: ActionList;
            addActionLink: JQuery;
        }) => void;
    }
    class ActionList {
        private options;
        private $view;
        private $addLink;
        private _isInitialized;
        constructor(options: ActionListOptions);
        get isInitialized(): boolean;
        getView(): JQuery;
        private getActions;
        private render;
        addItem(item: ActionOutputItem): void;
        deleteItem(id: string): void;
        getItem(id: string): JQuery;
        private onAddActionClick;
        private attachOnRemove;
    }
}
