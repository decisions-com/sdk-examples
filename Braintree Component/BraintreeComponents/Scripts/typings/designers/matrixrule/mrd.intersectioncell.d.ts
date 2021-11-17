/// <reference path="../ruledesigner/models/rule.actionmodel.d.ts" />
/// <reference path="../common/ContextEditor.d.ts" />
/// <reference path="mrd.utils.d.ts" />
declare namespace $DP.Designers.MatrixRule {
    interface IntersectionCellOptions {
        host?: JQuery;
        intersection: MatrixIntersection;
        isDebugMode: boolean;
        dataType: string;
        commandHandler: MatrixRuleCommandHandler;
        onEditClick: (event: {
            target: IntersectionCell;
        }) => void;
    }
    class IntersectionCell {
        private options;
        private $view;
        private $validationIcon;
        private _inlineEditor;
        constructor(options: IntersectionCellOptions);
        getView(): JQuery;
        get inlineEditor(): IntersectionEditorBase;
        private render;
        private renderInlineEditor;
        private mountInlineEditor;
        private createActionList;
        private createAction;
        private createAddMenuItems;
    }
}
