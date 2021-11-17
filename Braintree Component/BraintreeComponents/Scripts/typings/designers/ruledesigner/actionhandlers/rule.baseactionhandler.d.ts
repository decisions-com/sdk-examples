/// <reference path="../models/rule.actionmodel.d.ts" />
/// <reference path="../../../common/popuplayer.d.ts" />
declare namespace $DP.Designers.Rules {
    import InlineMapping = $D.Framework.Design.Flow.InlineMapping;
    interface RuleActionInlineEditorOptions {
        holder: HTMLElement;
        actionId: string;
        actionName: string;
        sessionId: string;
        inlineMapping: InlineMapping;
    }
    interface RuleActionHandlerService {
        getMappingContext(): $DP.Common.MappingContext;
        GetEditContextForAction(ruleSessionId: string, actionId: string): Promise<string>;
        GetActionDataDescriptions(ruleSessionId: string, actionId: string, path: string): Promise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;
        ChangeActionValue(ruleSessionId: string, actionId: string, value: string): Promise<void>;
        SetActionConstantValue(ruleSessionId: string, actionId: string, value: string): Promise<void>;
        RemoveAction(ruleSessionId: string, actionId: string): Promise<void>;
        RunFlowEditorForAction(ruleSessionId: string, actionId: string): Promise<void>;
        SetDesignerChanged(ruleSessionId: string): Promise<void>;
    }
    interface RuleActionHandlerOptions {
        sessionId: string;
        model: IRuleActionModel;
        service: RuleActionHandlerService;
    }
    class BaseRuleActionHandler {
        protected options: RuleActionHandlerOptions;
        constructor(options: RuleActionHandlerOptions);
        change(stickTo?: HTMLElement): void;
        getInlineEditor(model: RuleActionInlineEditorOptions): HTMLElement;
        edit(stickTo?: HTMLElement): void;
        remove(stickTo?: HTMLElement): void;
        getMenuItems(stickTo?: HTMLElement): any[];
        protected editContext(stickTo: HTMLElement): void;
    }
}
