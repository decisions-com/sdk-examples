/// <reference path="../../../common/mapping/inlinemapping.d.ts" />
/// <reference path="rule.baseactionhandler.d.ts" />
declare namespace $DP.Designers.Rules {
    class ChangeDataActionHandler extends BaseRuleActionHandler {
        change(): void;
        edit(stickTo?: HTMLElement): void;
        getInlineEditor(options: RuleActionInlineEditorOptions): HTMLElement;
        private pickData;
    }
}
