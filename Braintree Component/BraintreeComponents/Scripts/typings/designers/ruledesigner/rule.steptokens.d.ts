/// <reference path="models/rule.stepmodel.d.ts" />
/// <reference path="rule.tokeneditors.d.ts" />
/// <reference path="../../common/checkbox.d.ts" />
declare namespace $DP.Designers.Rules {
    import Subject = $DP.Common.Subject;
    abstract class RuleStepToken {
        protected onClosed?: () => void;
        Model: RuleStepModel;
        NextToken: RuleStepToken;
        InstanceId: string;
        Update: Subject;
        constructor(ruleStepMod: RuleStepModel, instanceId: string, onClosed?: () => void);
        ShowEditor(ruleSessionId: string, ruleStepId: string, stickTo: JQuery): void;
        protected get editorListensForCommandsChange(): boolean;
        private createPresection;
        abstract createEditor(ruleSessionId: string, ruleStepId: string): {
            getView(): JQuery;
        };
        abstract closeView(): Promise<any>;
    }
    class RuleStepValueToken extends RuleStepToken {
        private editor;
        constructor(ruleStepMod: RuleStepModel, instanceId: string, onClosed?: () => void);
        createEditor(ruleSessionId: string, ruleStepId: string): ValueTokenEditor;
        getView(): JQuery;
        closeView(): Promise<any>;
    }
    class RuleStepVerbToken extends RuleStepToken {
        VerbSelected: Subject;
        constructor(ruleStepMod: RuleStepModel, instanceId: string, onClosed?: () => void);
        createEditor(ruleSessionId: string, ruleStepId: string): VerbTokenEditor;
        closeView(): Promise<void>;
        OnChange(path: any, stepId: any): void;
        protected get editorListensForCommandsChange(): boolean;
    }
    class RuleStepVariableToken extends RuleStepToken {
        DataPathSelected: Subject;
        private editor;
        constructor(ruleStepMod: RuleStepModel, instanceId: string, onClosed?: () => void);
        createEditor(ruleSessionId: string, ruleStepId: string): VariableTokenEditor;
        OnChange(selectedItem: any): void;
        closeView(): Promise<any>;
    }
}
