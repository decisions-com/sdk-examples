/**
 * Author:khuzema@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Form.Rules {
    import DecisionsControlEvent = $DP.FormHost.DecisionsControlEvent;
    import RunRuleSessionInfo = $D.Framework.Design.Form.RunRuleSessionInfo;
    class RunRuleObjectClientSide {
        RuleProcessingEventId: string;
        RunAllRule: boolean;
        Events: FormEvents[];
        FormId: string;
        Token: string;
        ControlObject: $DP.Control.DecisionsControl;
        ExtraInfo: ExtraInfoObject;
        getKey(): string;
    }
    class RunRuleObjectServerSide {
        ComponentId: string;
        InstanceId: string;
        RunAllRule: boolean;
        Events: string;
        RuleProcessingEventId: string;
    }
    class FormRules {
        RulesObjectHolder: {};
        IsRulesBatchRunning: boolean;
        FormId: string;
    }
    class FormRuleRunningInstance {
        FormRules: {
            [formId: string]: FormRules;
        };
    }
    class FormRulesHelper {
        static FormRulesHolder: {
            [instanceId: string]: FormRuleRunningInstance;
        };
        static AddToFormRulesHolder(runRuleObjectClientSide: RunRuleObjectClientSide): void;
        static GetFormRulesForInstanceAndForm(instanceId: string, formId: string): FormRules;
        static GetFormRulesForInstance(instanceId: string): FormRuleRunningInstance;
        static RemoveFormRuleForInstance(instanceId: string): void;
        static RemoveFormRuleForInstanceAndForm(instanceId: string, formId: string): void;
        static RunRulesForSurfaces(): void;
    }
    enum FormCustomRuleInputType {
        InputData = 0,
        Form = 1,
        LastPostbackButton = 2,
        PostbackButtonsList = 3
    }
    interface IRuleInput {
        formDataName: string;
        iName: string;
        runOnValueChanged: boolean;
        inputType: FormCustomRuleInputType;
        formInputDataName: string;
    }
    interface IDataFlowOutputInfo {
        formDataName: string;
        outputName: string;
        ignore: boolean;
    }
    interface IBaseRuleInfo {
        id: string;
        triggers: string[];
    }
    interface IFormRule extends IBaseRuleInfo {
        ruleId: string;
        ruleInputs: IRuleInput[];
        ruleType: string;
    }
    interface IRuleFlowData {
        id: string;
        ruleFlowId: string;
        triggers: string[];
    }
    interface IRunAtStartUp {
        runAtStartUp: boolean;
    }
    interface IFormDataFlow extends IFormRule, IRunAtStartUp {
        flowOutputs: IDataFlowOutputInfo[];
        customTriggers: string[];
        autoRun: boolean;
        autoRunTime: string;
        executeOnTimerInterval: () => void;
        executeOnTimerIntervalToken: number;
        showLoadingIndicator: boolean;
    }
    interface IFormCustomRule extends IFormRule, IRunAtStartUp {
        customTriggers: string[];
        processOnFormShow: boolean;
        processOnAllOutcomes: boolean;
        processForOutcomes: string[];
    }
    interface IVisiblityRule extends IFormRule, IRunAtStartUp {
    }
    interface FormFlowData extends IFormRule, IRunAtStartUp {
        selectedFormTriggers: $D.Silverlight.UI.Forms.FormTriggerData[];
    }
    class RuleEngine {
        protected surface: $DP.FormHost.RunTimeFormSurface;
        private rules;
        constructor(surface: $DP.FormHost.RunTimeFormSurface);
        checkRulesToBeRun(events: DecisionsControlEvent[]): $D.Framework.Design.Form.RunRuleSessionInfo;
        getSessionInfo(rules: IBaseRuleInfo[], triggeredByComponentId: string, triggerType?: any): $D.Framework.Design.Form.RunRuleSessionInfo;
        runRules(rules: IBaseRuleInfo[], triggeredBy?: string): Promise<DataPair[]>;
        private shouldShowSpinner;
        showSpinner(sessionInfos: RunRuleSessionInfo[]): void;
        bindDataFlowTimers(): void;
        private executeDataFlowTimer;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
