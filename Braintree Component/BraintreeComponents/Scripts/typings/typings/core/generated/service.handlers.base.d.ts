interface ServicesStatic {
    _services: {};
    _CreateServiceInstanceByName(serviceName: string): any;
    _GetServiceInstanceByName(serviceName: string): any;
    ScriptLoadFunction(serviceName: string): any;
}
interface DecisionsStatic {
    baseURL: string | undefined;
    IsSHMAvailable: boolean | undefined;
    privateSessionId: string | undefined;
    outstandingLogEntries: {
        level: number;
        category?: string | undefined;
        timestamp: number | Date;
        message: string;
        duration?: number | undefined;
        details?: string | undefined;
        exception?: string | undefined;
    }[];
    outstandingProfilingEntries: {
        action: "start" | "end" | "error";
        callId: string;
        category?: string | undefined;
        timestamp: number | Date;
        duration?: number | undefined;
        details?: string | undefined;
        exception?: string | undefined;
    }[];
    GetSessionId(): string;
    CallAuthenticatedMethod(methodurl: string, authParamName: string, parameters: any, successCallback: any, errorCallback: any): any;
    CallMethod(methodurl: string, parameters: any, successCallback: any, errorCallback: any): any;
    JavascriptServiceCallErrorHandler(jqXHR: any, textStatus: any, errorThrown: any): void;
    callAwaitableMethod(methodName: string, methodUrl: string, authParamName: string, parameters: any): any;
    DataTypes: any;
    Services: ServicesStatic;
    getCurrentUserContext(): $D.Framework.ServiceLayer.Utilities.AbstractUserContext;
    setupFrontEndFetcher(): any;
}
declare var Decisions: DecisionsStatic;
