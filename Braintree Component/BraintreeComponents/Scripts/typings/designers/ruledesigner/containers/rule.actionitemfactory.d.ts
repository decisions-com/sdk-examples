/// <reference path="../models/rule.actionmodel.d.ts" />
/// <reference path="rule.actionoutputitem.d.ts" />
declare namespace $DP.Designers.Rules {
    class ActionItemFactory {
        private model;
        constructor(model: ActionModel);
        create(): ActionOutputItem;
        private createActionItem;
        private onActionModelValueChanged;
    }
}
