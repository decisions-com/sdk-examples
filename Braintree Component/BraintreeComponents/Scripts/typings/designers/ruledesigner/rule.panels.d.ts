/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
declare namespace $DP.Designers.Rules {
    class RuleDesignerPropertiesPanel extends $DP.Designers.BasePropertiesPanel {
        private ruleSessionId;
        private nodeChangedCallback;
        constructor(ruleSessionId: string, nodeChangedCallback: () => void);
        initialize(container: JQuery): void;
        protected contextCreated(contextId: string): void;
        cleanup(): void;
        submit(): void;
        protected getRefreshUrl(): string;
        protected getRefreshData(currentContextId: string, newContextId: string): any;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
