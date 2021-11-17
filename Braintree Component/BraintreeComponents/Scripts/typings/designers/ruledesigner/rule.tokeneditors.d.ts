/// <reference path="rule.utils.d.ts" />
/// <reference path="rule.steppickers.d.ts" />
/// <reference path="../common/ContextEditor.d.ts" />
/// <reference path="../common/observer.d.ts" />
/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../common/mappingcontext.d.ts" />
declare namespace $DP.Designers.Rules {
    import SequentialEditSession = $D.Framework.Design.Flow.Service.Edit.Mapping.SequentialEditSession;
    interface VariableTokenEditorOptions {
        readonly getConverterFlowContext: () => Promise<string>;
        readonly completeConverterFlowContext: (editingContextId: string) => Promise<void>;
        readonly startAnchorEditSession: () => Promise<SequentialEditSession>;
        readonly saveAnchorEditSession: (sequenceContextId: string) => Promise<void>;
    }
    class VariableTokenEditor {
        private options;
        private editingContextId;
        private propertyGrid;
        private $view;
        /**
         * Context for editing sequence of SelectInputMapping
         */
        private sequenceContextId;
        private isInitializedSequentialTab;
        private isConverterFlowTab;
        private $selectPathTab;
        private $convertorTab;
        private $selectPathButton;
        private $convertorFlowButton;
        private savingPromise;
        readonly OnNodeSelected: Common.Subject;
        constructor(options: VariableTokenEditorOptions);
        initializeTabs(): void;
        initializeAsync(isConverterFlow: boolean): void;
        getView(): JQuery;
        private initializePathPanel;
        private initializeConvertorPanel;
        save(): Promise<any>;
        private isInConvertorMode;
    }
    class VerbTokenEditor {
        private ruleSessionId;
        private ruleStepId;
        OnNodeSelected: Common.Subject;
        SelectedPath: string[];
        ToolboxStepId: string;
        private $view;
        constructor(ruleSessionId: string, ruleStepId: string);
        initialize(): void;
        getView(): JQuery;
    }
    class ValueTokenEditor {
        private $view;
        private ruleSessionId;
        private ruleStepId;
        private contextEditor;
        constructor(ruleSessionId: string, ruleStepId: string);
        InitializeAsync(): void;
        save(): Promise<boolean>;
        getView(): JQuery;
    }
}
