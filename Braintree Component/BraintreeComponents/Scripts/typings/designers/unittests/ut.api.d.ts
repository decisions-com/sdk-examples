/**
 * Author:oleg@decisions.com
 * Notes:Unauthorized, unlicensed use, distribution, modification is not allowed.
*/
/// <reference path="../debugger/debugger.d.ts" />
/// <reference path="../../typings/core/generated/RuleDebugService.d.ts" />
/// <reference path="../../typings/core/generated/SampleService.d.ts" />
/// <reference path="../../typings/core/generated/UnitTestService.d.ts" />
/// <reference path="../../typings/core/generated/MatrixRuleDebugService.d.ts" />
declare namespace $DP.Designers.Unittests {
    import UnitTestResult = $D.Framework.Design.Flow.Service.Debugging.UnitTestResult;
    import FlowDebugType = $D.Framework.Design.Flow.Service.Debugging.FlowDebugType;
    import MappingContext = $D.Framework.Design.Flow.Service.MappingContext;
    const UnitTestsApiFactory: (context: MappingContext) => {
        registerContextToAdd: (inputContextId?: string) => Promise<string>;
        registerContextToEdit: (id: string) => Promise<string>;
        registerContextToCopy: (id: string) => Promise<string>;
        addFromContext: (contextId: string) => Promise<string>;
        saveFromContext: (id: string, contextId: string) => Promise<void>;
        evaluate: (id: string) => Promise<UnitTestResult>;
        delete: (id: string) => Promise<void>;
        runDebugger: (id: string, overrideWithContextId?: string, flowDebugType?: FlowDebugType, profileType?: ProfileType) => void;
    };
}
/**
 * Copyright Decisions 2016. For License or Copyright information please contact support@decisions.com
*/
