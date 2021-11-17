/// <reference path="../../common/ContextEditor.d.ts" />
/// <reference path="../../common/mappingcontext.d.ts" />
/// <reference path="../../../common/popuplayer.d.ts" />
/// <reference path="../rule.mappinginline.d.ts" />
declare namespace $DP.Designers.Rules {
    import RuleOutputPath = $D.Framework.Design.Flow.RuleOutputPath;
    import RuleResult = $D.Framework.Design.Flow.Service.RuleOutputDisplayData;
    interface OutputListOptions {
        sessionId: string;
        results: RuleResult[];
        path: RuleOutputPath;
        canChangeOutputData: boolean;
        canRemoveItem: boolean;
        isInDebugMode: boolean;
    }
    class OutputList {
        private sessionId;
        private results;
        private path;
        private canChangeOutputData;
        private canRemoveItem;
        private isInDebugMode;
        private service;
        private $view;
        constructor(options: OutputListOptions);
        getView(): JQuery;
        private render;
        private showEditor;
    }
}
