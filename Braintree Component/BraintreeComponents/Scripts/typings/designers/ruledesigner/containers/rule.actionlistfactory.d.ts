/// <reference path="../models/rule.actionsmodel.d.ts" />
/// <reference path="../models/rule.actionmodel.d.ts" />
/// <reference path="rule.actionitemfactory.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleOutputPath = $D.Framework.Design.Flow.RuleOutputPath;
    class ActionListFactory {
        private model;
        private outputPath;
        private options;
        itemRemovedSubj: $DP.Common.Observer;
        itemAddedSubj: $DP.Common.Observer;
        itemChangeSubj: $DP.Common.Observer;
        constructor(model: ActionsModel, outputPath: RuleOutputPath, options: ActionListOptions);
        create(): ActionList;
        private subscribeOnItemRemoved;
        private subscribeOnItemAdded;
        private subscribeOnItemChanged;
    }
}
