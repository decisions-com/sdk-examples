/**
 * Author:catface@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../utils.d.ts" />
/// <reference path="../../typings/jqueryui/jqueryui.d.ts" />
/// <reference path="../../typings/core/generated/datatypes._base.d.ts" />
/// <reference path="../../typings/core/generated/FlowEditService.d.ts" />
/// <reference path="../../typings/core/generated/RuleEditService.d.ts" />
/// <reference path="../../typings/core/generated/formservice.d.ts" />
/// <reference path="../../typings/core/generated/MatrixRuleEditService.d.ts" />
/// <reference path="../../common/utils/string.utils.d.ts" />
/// <reference path="../../common/datadeftree.d.ts" />
declare namespace $DP.Common {
    import DataPair = $D.Framework.ServiceLayer.Services.ContextData.DataPair;
    enum MappingContextType {
        Flow = 0,
        Rule = 1,
        Matrix = 2,
        Form = 3
    }
    class MappingContext {
        private sessionId;
        private stepId;
        private contextType?;
        private forCustom;
        private handlerName?;
        private elementId?;
        private useFormSessionInfo?;
        constructor(sessionId: string, stepId: string, contextType?: MappingContextType, forCustom?: boolean, handlerName?: string, elementId?: string, useFormSessionInfo?: boolean);
        static create(server: $D.Framework.Design.Flow.Service.MappingContext): MappingContext;
        getSessionId(): string;
        getStepId(): string;
        getElementId(): string;
        /**
         * this might be used incase the mapping context object needs to be found in some cusotm way
         * i.e. the RuleSet input data are stored in folder extension data
         */
        getHandlerName(): string;
        /**
         * needed for MergeEditor controls as they know about FormSessionInfo
         */
        getUseFormSessionInfo(): boolean;
        getContextType(): MappingContextType;
        get isFlowContext(): boolean;
        get isRuleContext(): boolean;
        getServerContext(): $D.Framework.Design.Flow.Service.MappingContext;
        pickData(isInput: boolean, selectionCallback: (mappingContext: $DP.Common.MappingContext, dataPath: string) => void): void;
        static GetNodesFromDataDescriptions(dataDescriptions: $D.Framework.Design.Flow.Mapping.DataDescription[], dataPath: string): string;
        GetDescriptionsAsync(dataPath: string, isInput?: boolean): JQueryPromise<$D.Framework.Design.Flow.Mapping.DataDescription[]>;
        private getRuleDescriptionsAsync;
        private getFlowDescriptionsAsync;
        private getMatrixDescriptionsAsync;
        private getFormDescriptionsAsync;
        searchDescriptionsAsync(criteria: string, isInput?: boolean): JQueryPromise<DataPair[]>;
        private searchRuleDescriptionsAsync;
        private searchFlowDescriptionsAsync;
        /**
         * finding mapping context in DOM, based on $DP.Common.DomUtils.findProvidedData util
         * @param checkParentDialog - this is to not try to find MappingContext in parent dialog (i.e. when one designer dialog opened from another),
         * probably it should be always set to false
         */
        static findContext(element: JQuery, checkParentDialog?: boolean): MappingContext;
    }
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
